import { useState } from "react";
import rand from "../../Functions/rand.js";
import randC from "../../Functions/randC.js";


function Squares() {


    const [sq, setSq] = useState([]);

    const add = () => {

        setSq(s => [...s, {
            number: rand(100, 999),
            color: randC(),
            row: s.length,
            show: true
        }]); //papildomai pazymim savybe kuri rodo defaultini numeri el-to,t.y. row
        //tas row leidzia sugristi prie defaultinio rusiavimo

    }



    const sort = () => {
        setSq(s => [...s].sort((a, b) => b.number - a.number));
    }

    const sort1 = () => {
        setSq(s => [...s].sort((a, b) => a.number - b.number));
    }

    const sortDefault = () => {
        setSq(s => [...s].sort((a, b) => a.row - b.row));
    }

    const sortBlack = () => {
        setSq(s => s.map(square => square.number < 300 ? { ...square, show: true } : { ...square, show: false }));
    }

    const sortColored = () => {
        setSq(s => s.map(square => square.number < 300 ? { ...square, show: false } : { ...square, show: true }));
    }

    return (
        <>
            <h1>STATE {sq.filter(s => s.number < 300).length}</h1>
            <div className="container">
                {
                    sq.map((n, i) => n.show ? <div style={
                        {
                            backgroundColor: (n.number < 300) ? 'black' : n.color,
                            borderRadius: (n.number % 2) ? null : '50px'
                        }
                    } key={i}>{n.number}</div> : null)
                }
            </div>
            <div className="container">
                <button onClick={add}>add []</button>
                <button onClick={sort}>Sort des</button>
                <button onClick={sort1}>Sort asc</button>
                <button onClick={sortDefault}>Sort default</button>
                <button onClick={sortBlack}>Show only Black</button>
                <button onClick={sortColored}>Show Colored</button>

            </div>
        </>
    )

}

export default Squares;