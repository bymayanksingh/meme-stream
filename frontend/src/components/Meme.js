import React, { Component } from "react";
import { Card } from "react-bootstrap";
import AspectRatio from "./AspectRatio";

class Meme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      name: "",
      caption: "",
      url: "",
      mode: "view",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSave(event) {
    event.preventDefault();
    if (
      this.state.name === "" ||
      this.state.caption === "" ||
      this.state.url === ""
    )
      return;
    this.props.onUpdate(this.state);
    this.setState({
      name: this.state.name,
      caption: this.state.caption,
      url: this.state.url,
      mode: "view",
    });
  }

  handleEdit() {
    this.setState({ mode: "edit" });
  }

  renderInputField() {
    if (this.state.mode === "view") {
      return <div></div>;
    } else {
      return (
        <p>
          <form style={{ display: "block" }} onSubmit={this.handleSave}>
            <div className="input-container">
              <input
                name="caption"
                className="input-text"
                onChange={this.handleInputChange}
                value={this.state.caption}
              />
            </div>
            <div className="input-container">
              <input
                name="url"
                className="input-text"
                onChange={this.handleInputChange}
                value={this.state.url}
              />
            </div>
          </form>
        </p>
      );
    }
  }

  renderButton() {
    if (this.state.mode === "view") {
      return (
        <button className="tertiary-button" onClick={this.handleEdit}>
          Edit
        </button>
      );
    } else {
      return (
        <button className="tertiary-button" onClick={this.handleSave}>
          Save
        </button>
      );
    }
  }

  componentDidMount() {
    this.setState({
      _id: this.props.content._id,
      name: this.props.content.name,
      caption: this.props.content.caption,
      url: this.props.content.url,
      updatedAt: this.props.content.updatedAt,
    });
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  render() {
    const { name, caption, url, updatedAt } = this.state;
    let updatedTime = new Date(updatedAt);
    return (
      <div  className="py-3" >
        {this.state.mode === "view" && (
            <Card className="text-decoration-none" text="dark">
              <Card.Body>
                <div>
                  <strong>{name}&nbsp;</strong>
                  <span className="text-muted">{this.formatAMPM(updatedTime)}</span>
                </div>
                <Card.Text>
                  {caption}
                </Card.Text>
              </Card.Body>
              <AspectRatio ratio={1/0.75} >
                <Card.Img src={url} alt={name} variant="top" style={{"objectFit": "scale-down"}}/>
              </AspectRatio>
            </Card>
        )}

        <div>{this.renderInputField()}</div>

        <div style={{ display: "inline-flex" }}>
          <div>{this.renderButton()}</div>
          <div>
            <button
              className="tertiary-button"
              onClick={() => {
                this.props.onDelete(this.props.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Meme;
