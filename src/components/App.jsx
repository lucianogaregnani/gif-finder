import { useState } from "react"
import Inicio from "./Inicio"
import Gifs from "./gif/Gifs"

function App() {
  const [keyword, setKeyword] = useState('')
  const [keywordComplete, setKeywordComplete] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setKeyword(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setKeywordComplete(keyword)
  }

  return(
    <> 
      {
        keywordComplete ? <Gifs change={handleChange} submit={handleSubmit} keyword={keywordComplete} /> :
                          <Inicio change={handleChange} submit={handleSubmit}/>
      }
    </>
  )
}

export default App
