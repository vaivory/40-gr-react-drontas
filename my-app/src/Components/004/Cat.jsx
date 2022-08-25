
// function Cat({ catName, weight }) {
//     //propsai - juos paduodam i funkcija per {} o html tiesiog parasom ka ten padavem
//     return (
//         // <div>{catName} {weight}</div>
//         <>
//             <ul>
//                 <li>{catName} {weight}</li>
//             </ul>
//         </>
//     )
// }

// export default Cat;

//propsa galima perduoti tik is tevo i vaika

// function Cat({ cat }) {
//     //propsai - juos paduodam i funkcija per {} o html tiesiog parasom ka ten padavem
//     return (
//         // <div>{catName} {weight}</div>

//         <div>{cat.name} {cat.weight}</div>

//     )
// }

function Cat({ cat }) {
    //propsai - juos paduodam i funkcija per {} o html tiesiog parasom ka ten padavem
    return (
        // <div>{catName} {weight}</div>

        //<div>{cat.name} {cat.weight}</div>
        //poriniai id rauddonuose kvadratuose, o neporiniai melynuose DONE!
        //<div style={{ backgroundColor: i % 2 ? 'crimson' : 'skyblue' }}>{cat.name} {cat.weight}</div>


        //Katinai sunkesni nei 4 kg būtų atvaizduoti apskritime. DONE!
        <div style={{ borderRadius: (cat.weight > 4) ? '50px' : '0px' }}>{cat.name} {cat.weight} kg</div>




    )
}

export default Cat;