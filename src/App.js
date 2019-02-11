import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Images from './components/Images';
import Footer from './components/Footer';
import puppies from "./puppies.json";
  
class App extends Component {
    // Setting this.state.puppies to the puppies json array
  state = {
    puppies
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          result={"Click an image to begin!"}
          score={"Score: | Top Score:"}
        />
        <Header />
        <Main>
        {this.state.puppies.map(puppy=> (
                  <Images
                    image={puppy.image}
                    name={puppy.name}
                  />
                ))}
        </Main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
