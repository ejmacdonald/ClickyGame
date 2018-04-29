import React, { Component } from "react";

import Title from "./components/Title";
import ImageTile from "./components/ImageTile";
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

    let inClickedArray = this.state.clickedDogArray.indexOf(clickedDog);

    if (inClickedArray === -1) {
      // Not previously clicked.

      if (this.state.score == "11") {
        this.setState(
          {
            dogs,
            clickedDogArray: [],
            score: 0,
            message: "Congratulations, you win!"
          }
        )
      } else {
        // Reorder the dogs
        const newOrder = this.state.dogs.sort(function(a, b) {
          return 0.5 - Math.random();
        });

        // Next:  Get a random index for the encouragement array
        const randomMessageIndex = Math.floor(Math.random() * (encouragement.length)); 

        // Set the new state
        this.setState(
          {
            dogs: newOrder,
            clickeDogArray: this.state.clickedDogArray.push(clickedDog),
            score: this.state.score + 1,
            message: encouragement[randomMessageIndex]
          }
        );
      }
      
    } else {
      // already clicked the dog, player fails
      // Reset the State to the beginning of the game
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

// Render the content out to the page
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
    );
  }
}


export default App;
