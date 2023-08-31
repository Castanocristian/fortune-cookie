import { useState } from 'react'
import './App.css'
import BtnQuote from './Components/BtnQuote'
import Quote from './Components/Quote'
import phrases from './Utils/Phrases.json'
import getRandomElemArray from './Utils/getRandomElemArray'

function App() {
   
const phraseRandom = getRandomElemArray(phrases)
const numberRandom = getRandomElemArray([1,2,3,4])

const [quote, setQuote] = useState(phraseRandom)
const [numberBg, setNumberBg] = useState(numberRandom)

  const bgStyle={
    backgroundImage:`url(/fondo${numberBg}.jpg)`
  }

  return (
      <div className='container' style={bgStyle}>
        <h1 className='container_title'>Galleta de la fortuna</h1>
        <Quote phrase={quote}/> 
        <BtnQuote 
        setQuote={setQuote}
        phrases={phrases}
        setNumberBg={setNumberBg}/>
      </div>
  )
}

export default App
