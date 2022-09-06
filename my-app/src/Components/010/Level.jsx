//import { useState } from 'react';


function Level({ setText, text }) {



    const control = e => {
        setText(e.target.value);
    }



    return (

        <>
            <div className="form-container">
                {/* <h2 style={{ textTransform: 'uppercase' }}>{text}</h2> */}
                <input type="text" onChange={control} value={text} ></input>

            </div>

        </>
    )
}

export default Level;