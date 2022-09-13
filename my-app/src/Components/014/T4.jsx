import { useState } from "react";

function T4() {


    const [show, setShow] = useState(false);
    
    return (
        <>
            {
                show ?   <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg" alt="Girl in a jacket" width="500"></img> : null
                   
                 
}  
                <button onClick={() => setShow(rodyk=>!rodyk)}>show/hide</button>
         
            
        </>
    );

}

export default T4;
//Padaryti komponentą su mygtuku, kurį paspaudus atsiranda koks nors paveiksliukas, paspaudus dar kartą mygtuką, paveiksliuks dingsta ir vėl paspaudus atsiranda.