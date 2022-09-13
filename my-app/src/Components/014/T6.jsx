import { useEffect } from "react";
import { useState } from "react";
import randC from '../../Functions/randC';

function T6() {


    const [balls, setBalls] = useState([]);

    useEffect(() => {
        setBalls([...Array(10)].map(() => randC()));
    }, []);

    const boo = color => {
        setBalls(b => b.filter(bo => bo !== color));
    } 

    return (
        <div className="container">
            {
                balls.map((b, i) => <div onClick={() => boo(b)} style={{backgroundColor: b}} className="ap" key={i}></div>)
            }
        </div>
    )

}

export default T6;

//Padaryti komponentą su 10 random spalvos apskritimų (burbulaų) Paspaudus ant burbulo, jis "sprogsta" ir dingsta 