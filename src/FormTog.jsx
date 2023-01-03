import React, { Component } from 'react'

class FormTog extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: 0,
            graduat: false
        }
        this.chanceName = this.chanceName.bind(this)
        this.chanceAge = this.chanceAge.bind(this)
        this.chanceGraduat = this.chanceGraduat.bind(this)
    }
    chanceName = (e) => {
    this.setState(({name: e.target.value}))
    }
    chanceAge = (e) => {
    this.setState(({age: e.target.value}))
    }
    chanceGraduat = (e) => {
    this.setState(({graduat: e.target.checked}))
}

    render() {
        return(
            <form>
                <label> name:
                <input
                    onChange={this.chanceName}
                    type="text"
                    name="firstName"
                    placeholder="Введите имя студента"/>
            </label>   
            <label> age:  
                    <input
                    onChange={this.chanceAge}
                    type="number"
                    name='age' min={0} max={120}
                    placeholder='enter your age' style={{margin: "40px"}}/>
            </label>
            <label>real?
                    <input
                    onChange={this.chanceGraduat} 
                    type="checkbox"
                    name='checkb'/>
            </label>
            <div className="profile">
                <div>Имя: {this.state.name}</div>
                <div>Возраст: {this.state.age}</div>
                <div>Закончил(а) курсы: {this.state.graduat ? 'да' : 'нет'}</div>
            </div>
            </form>
        )
    }
}        

export default FormTog