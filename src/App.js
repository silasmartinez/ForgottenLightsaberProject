import React, { useState } from 'react';
import './App.css';

import Character from './components/Character';

let getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

const App = props => {

  const [selectedCharacter, setSelectedCharacter] = useState(getRandomInt(87));
  const [lightsaberColor, setLightsaberColor] = useState('light');

  const colorHandler = color => {
    setLightsaberColor(color);
  };

  const charSelectHandler = event => {
    setSelectedCharacter(getRandomInt(87));
  };

  const content = (
    <React.Fragment>
      <div className="App" >
        <header className="App-header">

          <button onClick={charSelectHandler.bind(this)}>Get New Character</button>
          <Character selectedChar={selectedCharacter} />
          <p>What color lightsaber did they create?</p>

          <button onClick={colorHandler.bind(this, 'none')}>No Lightsaber</button>
          <button onClick={colorHandler.bind(this, 'red')}>Red Lightsaber</button>
          <button onClick={colorHandler.bind(this, 'blue')}>Blue Lightsaber</button>
          <button onClick={colorHandler.bind(this, 'gold')}>Gold Lightsaber</button>
          <button onClick={colorHandler.bind(this, 'green')}>Green Lightsaber</button>
        </header>
      </div >
    </React.Fragment>
  );
  return content
}

export default App;
