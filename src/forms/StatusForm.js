import React, {Component} from "react"
import Status from "./Status";
import axios from "axios"
import "./StatusForm.css"
import config from "../Config"

class StatusForm extends Component {
  constructor() {
    super();
    this.state = {status: Status.filling};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="status-form">
        <div className={this.state.status === Status.filling ? null : "hidden"}>
          {React.cloneElement(this.form, {onSubmit: this.handleSubmit})}
        </div>
        {this.service()}
      </div>
    )
  }

  service() {
    switch (this.state.status) {
      case Status.pending:
        return (
          <div className="status">
            Идет обработка запроса...
          </div>
        );
      case Status.success:
        return (
          <div className="status">
            Успешно
            <button onClick={() => this.setState({status: Status.filling})}>
              Отправить еще раз
            </button>
          </div>
        );
      case Status.failed:
        return (
          <div className="status">
            Ошибка сервера
            <button onClick={() => this.setState({status: Status.filling})}>
              Попробовать еще раз
            </button>
          </div>
        );
      default:
        return null;
    }
  }

  handleSubmit(event) {
    this.setState({status: Status.pending});
    axios.post(config.serverURI + this.path).then(
      response =>
        this.setState({status: Math.floor(response.status / 100) === 2 ? Status.success : Status.failed}),
      () => {
        this.setState({status: Status.failed});
      }
    );
    event.preventDefault();
  }
}

export default StatusForm