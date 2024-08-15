import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [listcoin, setlistCoin] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false`
  // const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${1}&sparkline=false`

  const handleGetBitCoin = async () => {
    await axios.get(url)
      .then((_r) => {
        setlistCoin(_r.data)
      });
  }

  useEffect(() => {
    handleGetBitCoin()
  }, [])
  return (
    <div className='p-4' >
      <div className="text-xl font-bold">Crypto Checker</div>
      <input type="text" placeholder='Search Coin Name...' onChange={(e) => setSearchTerm(e.target.value)} className="my-4" />
      <div>
        {listcoin.filter((val) => {
          if (searchterm == "") {
            return val
          } else if (val.name.toLowerCase().includes(searchterm.toLowerCase())) {
            return val
          }
        }).map((coin) => {
          return (
            <div className='flex gap-8'>
              <h3>{coin.name}</h3>
              {coin.ath_change_percentage >= 1 ? (
                <h5 style={{
                  color: "green"
                }}>{coin.ath_change_percentage}</h5>

              ) : (

                <h5 style={{
                  color: "red"
                }}>{coin.ath_change_percentage}</h5>
              )
              }
            </div>

          )
          // return <Coin name={coin.name} icon={coin.image} price={coin.current_price} percentage={coin.price_change_percentage_24h} symbol={coin.symbol} />
        })}
      </div>

    </div >
  );
}

export default App;
