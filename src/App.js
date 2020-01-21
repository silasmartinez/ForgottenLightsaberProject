import React, { useState } from 'react';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Character from './components/Character';
import { colorCreated } from './utils/colorCheck'
let getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

toast.configure()

const App = props => {

  const [selectedCharacter, setSelectedCharacter] = useState(getRandomInt(88));

  const colorHandler = color => {
    colorCreated(selectedCharacter, color) ?
      toast.success('Correct!') && setSelectedCharacter(getRandomInt(88)) :
      toast.error('Sorry, try again.')
  };

  const charSelectHandler = event => {
    setSelectedCharacter(getRandomInt(88));
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
          <button onClick={colorHandler.bind(this, 'purple')}>Purple Lightsaber</button>
        </header>
      </div >
    </React.Fragment>
  );
  return content
}

export default App;
