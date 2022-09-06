import './App.sass';
import {Card, ColorContext, colors} from "./Components";

function App() {
  return (
    <div className="App">
      <ColorContext.Provider value={colors.firstCard}>
          <Card />
      </ColorContext.Provider>
      <ColorContext.Provider value={colors.secondCard}>
          <Card />
      </ColorContext.Provider>
    </div>
  );
}

export default App;
