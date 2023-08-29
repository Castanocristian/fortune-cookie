import { useState } from 'react'
import './App.css'
import BtnQuote from './Components/BtnQuote'
import Quote from './Components/Quote'
import Phrases from './Utils/Phrases.json'
import getRandomElemArray from './Utils/getRandomElemArray'

function App() {
  console.log(Phrases)
const phareRandom = getRandomElemArray(Phrases)
const numberRandom = getRandomElemArray([1,2,3,4])

const [Quote, setQuote] = useState(phareRandom)
const [numberBg, setNumberBg] = useState(numberRandom)

  const bgStyle={
    backgroundImage:`url(/fortuna-1/fondo1.jpg)`
  }

  return (
      <div className='container'>
        <h1 className='container_title'>Galleta de la fortuna</h1>
        <Quote Phrase={Quote}/>
        <BtnQuote 
        setQuote={setQuote}
        Phrases={Phrases}/>
        setNumberBg={setNumberBg}
      </div>
  )
}

export default App
