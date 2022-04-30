import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { configure } from '@testing-library/react';
import Coin from './Components/Coin/Coin';

function App() {
  const [listcoin,setlistCoin]=useState([]);
  const [searchterm,setSearchTerm]=useState("");
  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false")
    .then((response) => {
      console.log(response.data);
      setlistCoin(response.data)
    });
  },[])
  return (
    <div className="App">
      <div className="App-header">Crypto Checker</div>
      <input type="text" placeholder='enter your coin name...' onChange={(e)=>setSearchTerm(e.target.value)} className="Appinput" />
      <div className="display">
        {listcoin.filter((val)=>{
          if(searchterm==""){
            return val
          }else if(val.name.toLowerCase().includes(searchterm.toLowerCase())){
            return val
          }
        }).map((coin)=>{
          return <Coin name={coin.name} icon={coin.image} price={coin.current_price} percentage={coin.price_change_percentage_24h} symbol={coin.symbol} />
        })}
      </div>

    </div>
  );
}

export default App;
