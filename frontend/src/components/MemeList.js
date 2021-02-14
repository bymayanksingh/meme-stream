import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import Meme from "./Meme";
class MemeList extends Component {
  render() {
    const memes = this.props.memeobjects.map((meme, index) => {
      return (
        <Row xs={1} md={1} lg={1} key={index} className="justify-content-center"> 
          <Meme
            content={meme}
            key={meme._id}
            id={meme._id}
            onUpdate={this.props.onUpdate}
            onDelete={this.props.onDelete}
          />
        </Row>
      );
    });

    return (
      <Col className="justify-content-center">
        {memes}
      </Col>
    );
  }
}
export default MemeList;
