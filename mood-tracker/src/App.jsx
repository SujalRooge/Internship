import React, { useState } from 'react';

const App = () => {

  const [mood, setMood] = useState("natural");

  return (
    <div>
      <h1>Welcome to Mood Tracker</h1>

      <p>Your current mood is: {mood}</p>

      <button onClick={() => setMood("happy😁")}>
        happy
      </button>
      <hr />


      <button onClick={() => setMood("sad😢")}>
        sad
      </button>
      <hr />

      <button onClick={() => setMood("angry😠")}>
        angry
      </button>
    </div>
  )
}

export default App;