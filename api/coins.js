import bitcoin from '../assets/coins/bitcoin.png'
import binance from '../assets/coins/binance.png'
import doge from '../assets/coins/doge.png'
import ethereum from '../assets/coins/ethereum.png'
import xrp from '../assets/coins/xrp.png'
export const coins = [
    {
        id:1,
        currency:'Bitcoin',
        symbol:'BTC',
        image: bitcoin,
        amount :'61,470',
        changes :'+3.42%',
        type :'I', //I = increase , D = Decrease
        wallet:{
            value:'4273.10',
            crypto:'0.023'
        }
    },
    {
        id:2,
        currency:'Ethereum',
        symbol:'ETH',
        image: ethereum,
        amount :'4130',
        changes :'-2.14%',
        type :'D', //I = increase , D = Decrease
        wallet:{
            value:'8200.10',
            crypto:'2'
        }
    },
    {
        id:3,
        currency:'Binance',
        symbol:'BNB',
        image: binance,
        amount :'501',
        changes :'+10.22%',
        type :'I', //I = increase , D = Decrease
        wallet:{
            value:'3256',
            crypto:'6.3'
        }
    },
    {
        id:4,
        currency:'Doge',
        symbol:'Doge',
        image: doge,
        amount :'2421',
        changes :'+23.29%',
        type :'I', //I = increase , D = Decrease
        wallet:{
            value:'4273.10',
            crypto:'1203'
        }
    },
    {
        id:5,
        currency:'Ripple',
        symbol:'XRP',
        image: xrp,
        amount :'1.23',
        changes :'-5.29%',
        type :'D', //I = increase , D = Decrease
        wallet:{
            value:'3219',
            crypto:'2800'
        }
    },
    
]
    