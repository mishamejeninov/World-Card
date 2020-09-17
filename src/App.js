import React, { Component } from "react";
import "./styles.css";
import ShowFlag from "./ShowFlag";

class App extends Component {
  state = {
    Contry: [
      {
        name: "Russia",
        capital: "Moscow",
        flag: "https://disease.sh/assets/img/flags/ru.png",
        capitalPic:
          "https://realrussia.co.uk/portals/0/images/Moscow%20St%20Basils%20Cathedral.jpg"
      },
      {
        name: "Israel",
        capital: "Jerusalem",
        flag: "https://disease.sh/assets/img/flags/il.png",
        capitalPic:
          "https://apex.aero/wp-content/uploads/2019/05/social-images-israel-e1558103470822-1024x680.jpg"
      },
      {
        name: "Gremany",
        capital: "Berlin",
        flag: "https://disease.sh/assets/img/flags/de.png",
        capitalPic:
          "https://assets.kpmg/content/dam/kpmg/xx/images/2019/04/berlin-skyline-with-spree-river-at-sunset-germany.jpg/jcr:content/renditions/cq5dam.web.512.341.jpg"
      },
      {
        name: "italy",
        capital: "Rome",
        flag: "https://disease.sh/assets/img/flags/it.png",
        capitalPic:
          "https://www.irishtimes.com/polopoly_fs/1.4215821.1585575956!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"
      }
    ],

    title: "world",
    showContry: false
  };

  changeName = (newName) => {
    this.setState({
      title: newName
    });
  };

  changeFlag = (newFlag) => {
    this.setState({
      flag: newFlag
    });
  };

  toggleContry = () => {
    this.setState({
      showContry: !this.state.showContry
    });
  };

  render() {
    // const cont = this.state.Contry;

    return (
      <section>
        <div className="container">
          <h1 className="heading"> {this.state.title} </h1>
          <div style={{ textAlign: "center" }}>
            <a href onClick={this.toggleContry} className="btn1">
              Country toggle
            </a>
          </div>
          <div className="card-wrapper">
            {this.state.showContry
              ? this.state.Contry.map((world, index) => {
                  return (
                    <ShowFlag
                      key={index}
                      name={world.name}
                      capital={world.capital}
                      flag={world.flag}
                      OnChangeName={() => this.changeName(world.name)}
                      OnChangeFlag={() => this.changeFlag(world.capitalPic)}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </section>
    );
  }
}

export default App;
