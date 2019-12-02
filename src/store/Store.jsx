import React, { Component } from 'react';
import tiptoe from '../image/tiptoe.png';
import MainImage from '../image/MainImage.jpeg';
import Footer from '../footer/footer';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';
import Typing from 'react-typing-animation';
import './Store.css';

{/*const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}*/}

class Store extends Component {
  constructor() {
    super();

    this.state = {
      showAbout: false,
    }

    this.showAbout = this.showAbout.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
  }

  showAbout(event) {
    event.preventDefault();

    this.setState({ showAbout: true }, () => {
      document.addEventListener('click', this.closeAbout);
    });
  }

  closeAbout(event) {
    if (!this.dropdownAbout.contains(event.target)) {
      this.setState({ showAbout: false }, () => {
        document.removeEventListener('click', this.closeAbout);
      });
    }
  }

  state = {
    name: 'STORE',
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <NavbarDesktop />
        < div class="imageText">
          <img src={MainImage} class="mainImage" alt="" />
        </div>


        <div class="tiptoeName1">
          <img src={tiptoe} class="nameLogo1" alt="" />
          <Typing loop={true} speed={110}>
            <span class="yourName1">GREEN TREE YOUTH</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
          </Typing>
          <hr class="line1"></hr>
        </div>

        {/*<img src={Timeline} class="timelineImg" alt="" />
        <img src={threeimages} class="image3" alt="" />
    <img src={threesteps} class="stepsImg" alt="" />*/}

        <Footer />
      </div >

    );
  }
}

export default Store;