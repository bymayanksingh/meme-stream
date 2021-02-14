import React from "react";

class SubmitForm extends React.Component {
  state = { name: "", caption: "", url: "" };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.state.name === "" ||
      this.state.caption === "" ||
      this.state.url === ""
    )
      return;
    this.props.onFormSubmit(this.state);
    this.setState({
      name: "",
      caption: "",
      url: ""
    });
  };
  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { name, caption, url } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Meme Owner</label>
          <input
            type="text"
            className="input-text"
            placeholder="Enter your full Name"
            name="name"
            id="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="caption">Caption</label>
          <input
            type="text"
            className="input-text"
            placeholder="Be creative with the caption"
            name="caption"
            id="caption"
            value={caption}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="url">Meme URL</label>
          <input
            type="text"
            className="input-text"
            placeholder="Enter URL of the meme here"
            name="url"
            id="url"
            value={url}
            onChange={this.handleInputChange}
          />
        </div>
        <div style={{ margin: "25px 0px 0px" }}>
          <button className="primary-button">Submit Meme</button>
        </div>
      </form>
    );
  }
}
export default SubmitForm;
