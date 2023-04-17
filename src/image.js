import React, { Component } from "react";

import Blank from "./images/blank.jpg";

class myImg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img_path: Blank,

      alt: "blank",
    };

    this.getNew = this.getNew.bind(this);
  }

  getNew() {
    const items = [
      { ItemName: "test1", ItemImg: "./images/test1.jpg" },
      { ItemName: "test2", ItemImg: "./images/test2.jpg" },
    ];

    const item = items[Math.floor(Math.random() * items.length)];
    this.setState({ img_path: item.ItemImg, alt: item.ItemName });
  }

  render() {
    return (
      <div>
        <img
          src={this.state.img_path}
          onClick={this.getNew}
          alt={this.state.alt}
          width={150}
        />
      </div>
    );
  }
}

export default myImg;
