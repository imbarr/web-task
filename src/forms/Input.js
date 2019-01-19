import React, {Component} from "react"
let omit = require('lodash.omit');

class Input extends Component {
  constructor(props) {
    super(props);
    this.check = props.check;
    this.display = props.display;
    this.isValid = props.isValid;
    this.props = omit(props, ['check', 'isValid', 'display']);
    this.state = {value: "", display: ""};

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(event) {
    if(this.check(event.target.value)) {
      this.setState({
        value: event.target.value,
        display: event.target.value
      })
    }
  }

  onFocus(event) {
    this.setState({
      display: this.state.value
    })
  }

  onBlur(event) {
    this.setState({
      display: this.display(this.state.value)
    })
  }

  render() {
    return <input required value={this.state.display} onChange={this.onChange}
                  onFocus={this.display === undefined ? null : this.onFocus}
                  onBlur={this.display === undefined ? null : this.onBlur}
                  pattern={this.isValid(this.state.value) ? null : "$^"}
                  {...this.props} type="text"/>
  }
}

export default Input