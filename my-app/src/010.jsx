import './App.scss';
//import Text from './Components/010/Text';
import { useState } from 'react';
//import Two from './Components/010/Two';
import Level from './Components/010/Level';
import Show from './Components/010/Show';

function App() {

    //const [textNow, setTextNow] = useState('');

    // const [f1, setF1] = useState(false);
    // const [f2, setF2] = useState(false);

    const [text, setText] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <h1>State Uplifting</h1>
                {/* <h2>TEXT: {textNow}</h2>
                <Text setTextNow={setTextNow} /> */}
                {/* <div className="container">
                    {f1 ? <div className="kv"></div> : null}
                    {f2 ? <div className="ap"></div> : null}
                </div>
                <Two setF1={setF1} setF2={setF2} /> */}
                <Show text={text}></Show>
                <Level setText={setText} text={text}></Level>




            </header>
        </div>
    );
}

export default App;