import React, { useEffect, useState } from "react";

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
  }
};


const App = ()=>{
    const [word, setWord] = useState("");
    const [obtainedWord, setObtainedWord] = useState("");

    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word;

    const getData = async () => {
        const response = await fetch(url, options)
        const data = await response.json();
        setObtainedWord(data)
    }

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setWord(inputValue)
    }

    const handleClick = () => {
        getData(word)
    }

    useEffect(()=>{
        getData();
    }, [])

    return <>
        <h1>Dictionary</h1>
        <input type="text" placeholder="Enter a word" value={word} onChange={handleChange}/>
        <button onClick={handleClick}>Find</button>
        {
            obtainedWord.valid ?
            <>
                <h2>{obtainedWord.word}</h2>
                <p>{obtainedWord.definition.substring(0, obtainedWord.definition.indexOf("2."))}</p>
                <p>{obtainedWord.definition.substring(obtainedWord.definition.indexOf("2."), obtainedWord.definition.indexOf("3."))}</p>
            </>
            :
            <h2>Not found</h2>
        }
    </>
}

export default App;