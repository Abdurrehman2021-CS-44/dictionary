import React, { useEffect, useState } from "react";
import Response from "./Response";

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
    const [change, setChange] = useState(false);

    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word;

    const getData = async () => {
        const response = await fetch(url, options)
        const data = await response.json();
        setObtainedWord(data)
    }

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setWord(inputValue);
    }

    const handleClick = () => {
        getData(word);
        word === "" ? setChange(false) : setChange(true);
    }

    useEffect(()=>{
        getData();
    }, [])

    return <>
        <div className="container my-5">
            <div className="row justify-content-md-center">
                <div className="col-lg-5 col-md-7">
                    <div className="input-group input-group-lg">
                        <input type="text" class="form-control" value={word} onChange={handleChange} placeholder="Enter a word" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-primary btn-lg" onClick={handleClick} type="button" id="button-addon2"> <i class="bi bi-search bi-2xlg"></i> </button>
                    </div>
                </div>
            </div>
        </div>

        {
            obtainedWord.valid ?
            <>
                <Response
                    word={obtainedWord.word}
                    definition_1={obtainedWord.definition.substring(0, obtainedWord.definition.indexOf("2."))}
                    definition_2={obtainedWord.definition.substring(obtainedWord.definition.indexOf("2."),obtainedWord.definition.indexOf("3."))}
                    isValid={obtainedWord.valid}
                />
            </>
            :
            change ?
            <>
                <Response
                    word="Not found!"
                    definition_1="This is not a valid word"
                    definition_2=""
                    isValid={obtainedWord.valid}
                />
            </>
            :
            null
        }
    </>
}

export default App;