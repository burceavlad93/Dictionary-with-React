import React from 'react'
import { useState } from 'react';
import AddWordButton from './AddWordButton';
import CheckListButton from './CheckListButton';
import CloseListButton from './CloseListButton';
import SearchWordButton from './SearchWordButton';

export default function App() {

    const [defaultUserText, setDefaultUserText] = useState('No word have been added');
    const [entryUpdate, setEntryUpdate] = useState('');
    const [userInput, setUserInput] = useState('');
    const [wordList, setWordList] = useState([]);

    function addWordInput(addInput) {

        if (addInput != '') {
            setEntryUpdate('The following word:');
            setUserInput(addInput);
            setDefaultUserText('was added tot he dictionary');
            setWordList([...wordList, addInput]);
        } else {
            setEntryUpdate('');
            setUserInput('');
            setDefaultUserText('No word have been added');
        }
    }

    function searchResult(isPresent, searchInput) {

        if (isPresent) {
            setEntryUpdate('');
            setUserInput(searchInput);
            setDefaultUserText('Is present in the dictionary')
        }
    }


    return (
        <React.Fragment>
            <div>
                <h1 id="title">Dictionary</h1>
                <div className="box">
                    <h2> Add words to the dictionary. </h2>
                    <div id='form'>
                        <input type="text" id="input-add" placeholder="  Type the word you want to add" />
                        <AddWordButton sendAddInputToParent={addWordInput} />
                        <input type="text" id="input-search" placeholder="  Type the word you want to search for" />
                        <SearchWordButton sendSearchResultToParent={searchResult} wordArray={wordList} />
                    </div>
                    <hr></hr>
                    <div className="info">
                        <span id='info-text'> {entryUpdate} <b>{userInput}</b> {defaultUserText} </span>
                        <div>
                            <CheckListButton />
                        </div>
                    </div>
                </div>
                <CloseListButton wordArray={wordList} />

            </div>
        </React.Fragment>
    );
}


