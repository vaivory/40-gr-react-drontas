import { useState } from 'react';

function Text({setTextNow}) {

    const [text, setText] = useState('');
    

    const control = e => {
        setText(e.target.value);
    }

    
    

    return ( 
        <>
        <div className="form-container">
            
            <input type="text" onChange={control} value={text}></input>
            <button onClick={() => setTextNow(text)}>Text Now</button>
        </div>


        <div className="form-container">
                <div className="kv" style={{visibility: cb1 && cb2 ? 'visible' : 'hidden' }}></div>
                <div className="ap" style={{visibility: cb1 && cb2 ? 'visible' : 'hidden'  }}></div>

                <div>
                    <input type="checkbox" id="_2" onChange={() => setCb1(c => !c)} checked={cb1}></input>
                    <label htmlFor="_2" style={{ color: cb1 ? 'crimson' : null }}>ONE</label>
                </div>
                
                <div>
                    <input type="checkbox" id="_3" onChange={() => setCb2(c => !c)} checked={cb2}></input>
                    <label htmlFor="_3" style={{ color: cb2 ? 'crimson' : null }}>TWO</label>
                </div>
            </div>


        </>
    )
}

export default Text;