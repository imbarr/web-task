import React, {Component} from "react"
import "./Info.css"

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.text = props.text;
    this.switch = this.switch.bind(this)
  }

  switch() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div id="info">
        {this.state.open ? this.text : this.text.props.children[0]}
        <button className="display" onClick={this.switch}>
          {this.state.open ? "Скрыть" : "Показать всё"}
        </button>
      </div>
    )
  }
}

export default Info;