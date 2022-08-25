import './App.css';
import Cat from './Components/004/Cat';
import randC from './Functions/randC';

const cats = [
    { id: 1, weight: 5, name: 'Murka' },
    { id: 2, weight: 8, name: 'Pilkis' },
    { id: 3, weight: 2, name: 'Pūkis' },
    { id: 4, weight: 3, name: 'Rainis' },
    { id: 5, weight: 5, name: 'Brisius' }
];

//kaip atvaizduoti turima objektu masyva. Reactas gerai atvaizuoja masyva kurio viduje yra ideta html.
//mes promapinsim taip:

function App() {
    return (
        <div className="App">
            <header className="App-header">


                <h1>Lists</h1>
                <h2>
                    {
                        //Žodį dinozauras užrašyti skirtingų random spalvų raidėm DONE! // zodzio i masyvo vertimas
                        [...'Dinosauras'].map((raide, i) => <span key={i} style={{ color: randC() }}>{raide}</span>)
                    }
                </h2>
                {/* <ul>
                    {
                        // cats.map(cat => <li>{cat.name}</li>)
                        //  cats.map((cat, i) => <li key={i}>{cat.name}</li>) // reikia irasyti key kitaip console mes klaida, reactas yra jautrus
                        //Pridėti katinuko svorį ir padaryti sąrašą nuo sunkiausio iki lengviausio katinuko. DONE!
                        //  [...cats].sort((a, b) => b.weight - a.weight).map((cat, i) => <li key={i}>{cat.name} <i>{cat.weight}</i></li>) // reikia irasyti key kitaip console mes klaida, reactas yra jautrus
                        // Išrūšiuot pagal abėcėlę DONE!
                       // [...cats].sort((a, b) => a.name.localeCompare(b.name)).map((cat, i) => <li key={i}>{cat.name} <i>{cat.weight} kg</i></li>)
                    }
                </ul> */}

                <div className="container">
                    {
                        // [...cats].sort((a, b) => a.name.localeCompare(b.name)).map((cat) => <Cat key={cat.id} cat={cat} />)  //Cat komponentas, key ura is musu objektu masyvo kazkas tarkim ID arba name kur value nesukartoja,
                        //pvz weight negali buti nes jis kartojasi 5 kg ir 5 kg,  poto katina perduodu i cat komponenta ir ten su juo veikiu ka noriu.

                        //katinų, kurių svoris mažesnis nei 4 nerodyti. DONE!
                        [...cats].sort((a, b) => a.name.localeCompare(b.name)).map((cat) => cat.weight < 4 ? null : <Cat key={cat.id} cat={cat} />)
                    }
                </div>

                {/* <div className="container">
                <Cat catName="Pilkis" weight="20 kg"></Cat> 
                <Cat catName="Juodis" weight="5 kg"></Cat>
                <Cat catName="Murkis" weight="1 kg"></Cat>
                </div> */}

                {/* <div>
                <Cat catName="Pilkis" weight="20 kg"></Cat> 
                <Cat catName="Juodis" weight="5 kg"></Cat>
                <Cat catName="Murkis" weight="1 kg"></Cat>
                </div> */}
            </header>
        </div>
    )
}

export default App;
