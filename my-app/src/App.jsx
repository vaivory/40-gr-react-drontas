import './App.css';
import Cat from './Components/003/Cat';
import Dog from './Components/003/Dog'; //kiekviena karta kai naudojam kiekviena komponentui reikia nurodyti kelia iki to komponento
import Racoon from './Components/003/Racoon';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dog></Dog>
        <Racoon></Racoon>
        <h1>Start</h1>
        <Dog></Dog>
        <Cat></Cat>
      </header>
    </div>
  );
}

export default App;
