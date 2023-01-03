import React, { Component } from "react";

export default class Toggless extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: "yes",
      boolion: true,
    };
    // this.choose = this.select.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={(e) => this.setState({boolion:!this.state.boolion})}>
            Скрыть текст
          </button>
          {this.state.boolion ? (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              minima ipsam magnam consequatur! Dolorum quas laboriosam,
              inventore optio voluptas eos.
            </p>
          ) : null}
        </div>
        <div>
          <div >
            <span>Вы уверены что хотите закончить курсы?</span>
            <input
              type="radio"
              id="yes"
              name="choose"
              value="yes"
              onChange={(e)=>this.setState({select:e.target.value})}
              checked={this.state.select}
            />
            <label htmlFor="yes">Yes</label>
            <input
              type="radio"
              id="no"
              name="choose"
              value="no"
              onChange={(e)=>this.setState({select:e.target.value})}
              checked={this.state.select}
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
      </div>
    );
  }
}
