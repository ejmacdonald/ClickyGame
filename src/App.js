import React, { Component } from "react";

import Title from "./components/Title";
import ImageTile from "./components/ImageTile";
// import Modal from "./components/Modal";
import dogs from "./image.json";
import encouragement from "./encouragement.json";

class App extends Component {
  state = {
    dogs: dogs,
    clickedDogArray: [],
    score: 0,
    message: "Let's play!"
  };

  //check to see if the clicked dog has already been selected
  imageClick = (event) => {
    const clickedDog = event.target.alt;
    console.log ("id: " + clickedDog);
    console.log ("clickedDogArray#1: " + this.state.clickedDogArray);
    let inClickedArray = this.state.clickedDogArray.indexOf(clickedDog);
    console.log ("inClickedArray: " + inClickedArray);

    if (inClickedArray === -1) {
      //Not previously clicked.  Now:  reorder dogs, add id to clickedDogArray and increment score.

      const newOrder = this.state.dogs.sort(function(a, b) {
        return 0.5 - Math.random();
      })

      const randomMessageIndex = Math.floor(Math.random() * (encouragement.length + 1)); 

      this.setState(
        {
          dogs: newOrder,
          clickeDogArray: this.state.clickedDogArray.push(clickedDog),
          score: this.state.score + 1,
          message: encouragement[randomMessageIndex]
        }
      )
      
    } else {
      //already clicked the dog, player fails
      this.setState(
        {
          dogs,
          clickedDogArray: [],
          score: 0,
          message: "Sorry Buddy, you LOSE!"
        }
      )
    }
  }


  render() {
    return (
      <div className="wrapper">
        <Title 
          score={this.state.score}
          message={this.state.message}
        />
          {this.state.dogs.map((dog) => (
            <ImageTile
              id={dog.id}
              src={dog.image}
              imageClick={this.imageClick}
            />
          ))}
      </div>
      // <Modal 
      //   id={lose}
      //   action={toggle}
      // />
    );
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}


export default App;
