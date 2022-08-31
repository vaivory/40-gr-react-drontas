import { useState } from 'react';

function Text() {

    const [text, setText] = useState('');
    const [color, setColor] = useState('#7caa0c');
    const [range, setRange] = useState('0'); //kadangi naudojam padStart tai jis veikia tik su stringais, todel pradine reiksme paduodam stringa '0'

    const control = e => {
        // Number(e.target.value) && setText(e.target.value);
        setText(e.target.value);
    }

    const colorControl = e => {
        setColor(e.target.value);
    }

    const rangeControl = e => {
        setRange(e.target.value);
    }

    const [textNow, setTextNow] = useState('');


    return (

        <>
            <div className="form-container">
                <h2>TEXT: {textNow}</h2>
                <input type="text" onChange={control} value={text} ></input>
                <button style={{ marginTop: '10px' }} onClick={() => setTextNow(text)}>Text Now</button>
            </div>
            <div className="form-container">
                <h2 style={{ color }}>COLOR</h2>
                <input type="color" onChange={colorControl} value={color}></input>
                <button style={{ margin: '10px' }} onClick={() => setColor('#ff0000')} >Raudona</button>
            </div>
            <div className="form-container">
                <h2>Range: {range.padStart(2, 0)}</h2>
                <input type="range" onChange={rangeControl} value={range} min="0" max="11"></input>
            </div>
        </>
    )
}

export default Text;