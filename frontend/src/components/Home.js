import React from "react";

import { withRouter } from "react-router-dom";
import axios from "axios";
import SubmitForm from "./SubmitForm";
import MemeList from "./MemeList";
import { config } from "../index";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Footer from "./Footer";
import { Container, Navbar } from "react-bootstrap";

class Home extends React.Component {
  state = {
    memeobjects: [],
  };

  handleSubmit = (memeobject) => {
    axios.post(`${config.endpoint}/memes`, memeobject).then((res) => {
      console.log("Recieved data ", res.data);
      this.setState({ memeobjects: [...this.state.memeobjects, res.data] });
    });
    window.location.reload();
  };

  handleDelete = (index) => {
    const newArr = [...this.state.memeobjects];
    let pos = -1;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i]._id === index) {
        pos = i;
        break;
      }
    }
    if (pos === -1) return;
    let memeobject = newArr[pos];
    console.log(memeobject);
    axios.delete(`${config.endpoint}/memes/${memeobject._id}`).then((res) => {
      console.log("In Frontend", res.data);
    });
    newArr.splice(pos, 1);
    this.setState({ memeobjects: newArr });
    window.location.reload();
  };

  handleUpdate = async (memeobject) => {
    const newArr = [...this.state.memeobjects];

    let pos = -1;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i]._id === memeobject._id) {
        pos = i;
        break;
      }
    }

    if (pos === -1) return;
    newArr[pos].name = memeobject.name;
    newArr[pos].caption = memeobject.caption;
    newArr[pos].url = memeobject.url;
    let updateMemeObject = newArr[pos];
    console.log(updateMemeObject);

    await axios
      .patch(`${config.endpoint}/memes`, updateMemeObject)
      .then((res) => {
        console.log("Updating In Frontend", res.data);
      });
    this.setState({ memeobjects: newArr });
    window.location.reload();
  };

  performAPICall = async () => {
    let memeData = [];
    await axios
      .get(`${config.endpoint}/memes`)
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          memeData.push(res.data[i]);
        }
      })
      .then(() => {
        for (let i = 0; i < memeData.length; i++) {
          this.setState({
            memeobjects: [...this.state.memeobjects, memeData[i]],
          });
        }
      });
  };

  async componentDidMount() {
    await this.performAPICall();
  }

  render() {
    return (
      <>
        <Navbar className="header">
          <div className="header-content">
            <div>
              <p className="header-text">Meme Stream</p>
            </div>
          </div>
        </Navbar>

        <Section bg="white" textColor="dark" size="md">
          <Container style={{ position: "relative" }}>
            <SectionHeader
              title="Add Memes"
              subtitle="Don't forget to be creative 😄"
            />
            <SubmitForm onFormSubmit={this.handleSubmit} />
          </Container>
        </Section>

        <Section bg="white" textColor="dark" size="md">
          <Container style={{ position: "relative" }}>
            <SectionHeader
              title="Meme List"
              subtitle="All user submitted memes are listed here 😄"
            />
            <MemeList
              memeobjects={this.state.memeobjects}
              onDelete={this.handleDelete}
              onUpdate={this.handleUpdate}
            />
          </Container>
        </Section>
        <Footer
          bg={"white"}
          textColor={"dark"}
          size={"sm"}
          description={"those who control the memes, controls the universe"}
          copyright={"Mayank Singh © 2021"}
          logo={
            "https://user-images.githubusercontent.com/19390263/107851684-cc00f600-6e31-11eb-9562-9ebef58dbaaa.png"
          }
        />
      </>
    );
  }
}

export default withRouter(Home);
