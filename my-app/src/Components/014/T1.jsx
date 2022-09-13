import { useState } from 'react';

import randC from '../../Functions/randC';

function T1() {

    const [colors, setColors] = useState({
        ba: randC(),
        bo: randC()
    });

    const co = () => {
        setColors({
            ba: randC(),
            bo: randC()
        });
    }

    return (
        <>
            <div className="kv" style={{
                backgroundColor: colors.ba,
                border: '8px solid ' + colors.bo
            }}></div>
            <button onClick={co}>DO</button>
        </>
    )

}

export default T1;