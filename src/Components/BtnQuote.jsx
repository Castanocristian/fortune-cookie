import getRandomElemArray from "../Utils/getRandomElemArray"

const BtnQuote = ({setQuote,phrases,setNumberBg}) => {

const handleRandomPhrase=() =>{
setQuote(getRandomElemArray(phrases))
setNumberBg(getRandomElemArray([1, 2 ,3 ,4]))
}


  return (
    <button className="container_btn" onClick={handleRandomPhrase}>Otra galleta</button>
  )
}

export default BtnQuote