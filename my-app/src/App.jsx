import './App.scss';
import { useState } from 'react';

function App() {

    const [color, setColor] = useState('crimson');
    const clicked = () => {
        setColor('skyblue');

    }

    /*
    const color <-- state /props/, t.y. kazkokia musu reiksme
    const setColor <-- cia funkcija state keitimui
    Mes tiesiogiai negalime prilyginti tiesiogines reikems, mes galim perduoti f-jag argumenta ir setColor pakeis ta reiksme. Ka mes liepsim f-jai pakeisti ta ji pakeis kintamajame color
    
    */

    // const clicked = function () {
    //     console.log('labas');
    //     doJob();
    // }

    // const doJob = () => {
    //     console.log('Hello');

    // }

    const [size, setSize] = useState(25);
    const doSize = () => {
        setSize(s => s === 25 ? 40 : 25);
    }

    const [count, setCount] = useState(1);

    /*skliausteliuose useState yra pradine reiksme*/

    const doCount = () => {
        setCount(c => c + 1); //cia kintamojo var da paimam toki koki norim, ir jam paduodam reiksme
    }

    const [spalva, setCl] = useState('red');
    const melyna = () => {
        setCl(c => c === 'red' ? 'blue' : 'red');

    }

    const [ls, setLs] = useState(5);


    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{
                    color: color,
                    fontSize: size + 'px',
                    letterSpacing: ls + 'px'
                }}>STATE {count}</h1>
                <button onClick={() => clicked()}>cia reikia pararyti callback kad butent paleisti f-ja kai paskpaudziam and mygtuko.</button>
                {/* cia tuo atveju jei mes norim paduoti kazka i f-ja nes kitaip jei parasysim skliaustus tuomet f-ja pasileis tuomet kai kode prieis prie jos  o na tada kai paspausim mygtuka */}
                <button onClick={clicked}>cia clicked yra nuoroda i f-ja!</button>
                <button onClick={doSize}>Padidina Font size</button>
                <button onClick={doCount}>+1</button>
                <button style={{ color: spalva }} onClick={melyna}>+1</button>
                <button onClick={() => setLs(5)}>Letter-spacing 5</button>
                <button onClick={() => setLs(10)}>Letter-spacing 10</button>

            </header>
        </div>
    );
}

export default App;
