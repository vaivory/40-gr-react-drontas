import { useState, useEffect } from 'react';
import randC from '../../Functions/randC';

function Color() {

    const [kv, setKv] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('kv');
        if (null === data) {
            setKv(randC());
        } else {
            setKv(JSON.parse(data));
        } 
    }, []);

    useEffect(() => {
        if (null === kv) {
            return;
        }
        localStorage.setItem('kv', JSON.stringify(kv));
    }, [kv]);

    return (
        <>
        <div className="container">
            <div style={{background: kv}}></div>
        </div>
        <button onClick={() => setKv(randC())}>color</button>
        </>
    )
}

export default Color;