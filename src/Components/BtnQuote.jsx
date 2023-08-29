import getRandomElemArray from "../Utils/getRandomElemArray"

const BtnQuote = ({setQuote,Phrases,setNumberBg}) => {

const handleRandomPhrase=() =>{
setQuote(getRandomElemArray(Phrases))
setNumberBg(getRandomElemArray([1, 2 ,3 ,4]))
}

  return (
    <button className="container_btn"  onClick={handleRandomPhrase}>Refrescar</button>
  )
}

export default BtnQuote