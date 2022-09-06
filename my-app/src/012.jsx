import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Color from './Components/012/Color';
import Plus from './Components/012/Plus';

const defaultCount = { one: 0, two: 0 };

function App() {

  const [kv, setKv] = useState(null);

  useEffect(() => { //sitas vyksta kai uzsiloadina komponentas
    let data = localStorage.getItem('kv');
    //tikrinam ar localStorage yra uzpildytas
    if (null === data) {
      setKv(defaultCount); //cia data yra stringas
    } else {
      setKv(JSON.parse(data));
    }
  }, []);


  useEffect(() => { //sitas vyksta kai kazkas vyksta, sitas irgi pasileis ir nuo komponento pradzio
    console.log(counts);
    localStorage.setItem('kv', JSON.stringify(kv));
  }, [kv]);
  //----------------------------------------------------------------
  const [counts, setCounts] = useState(null);

  useEffect(() => { //sitas vyksta kai uzsiloadina komponentas
    let data = localStorage.getItem('counts_key');
    //tikrinam ar localStorage yra uzpildytas
    if (null === data) {
      setCounts(defaultCount); //cia data yra stringas
    } else {
      setCounts(JSON.parse(data));
    }
  }, []);


  useEffect(() => { //sitas vyksta kai kazkas vyksta, sitas irgi pasileis ir nuo komponento pradzio
    console.log(counts);
    localStorage.setItem('kv', JSON.stringify(counts));
  }, [counts]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Local Storage</h1>
        <h2>One: {counts?.one}</h2>
        <h2>Two: {counts?.two}</h2>
        <button onClick={() => setCounts(c => ({ ...c, one: c.one + 1 }))}>One +</button>
        <button onClick={() => setCounts(c => ({ ...c, two: c.two + 1 }))}>Two +</button>
        <button onClick={() => setCounts(c => ({ ...c, one: c.one - 1 }))}>One -</button>
        <button onClick={() => setCounts(c => ({ ...c, two: c.two - 1 }))}>Two -</button>
        <button onClick={() => setCounts(defaultCount)}>Reset</button>
        {/* <Kv /> */}
        <Plus />
        <Color></Color>
      </header>
    </div>
  );
}

export default App;
