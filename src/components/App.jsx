import React from 'react'
import { useState } from 'react';
import AddWordButton from './AddWordButton';
import CheckListButton from './CheckListButton';
import CloseListButton from './CloseListButton';
import SearchWordButton from './SearchWordButton';


let wordList = [];
let index = 0;

export default function App() {

    const [defaultUserText, setDefaultUserText] = useState('No word have been added');
    const [entryUpdate, setEntryUpdate] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isDuplicate, setIsDuplicate] = useState(false);

    const [input, setInput] = useState('');
    let word = input.trim().toLocaleLowerCase();

    function addInput(input) {

        if (!isDuplicate) {
            if (input == '') {
                setUserInput(input);
                setEntryUpdate('');
                setDefaultUserText('The word(s) must contain only letters');
            } else {
                setUserInput(input);
                setEntryUpdate('The following word: ');
                setDefaultUserText('has been added to the list');
                wordList[index++] = input;
            }
        } else {
            setUserInput(input);
            setEntryUpdate('');
            setDefaultUserText('was already added');
        }

        return document.getElementById('input').value = '';

    }

    function duplicate(result) {
        setIsDuplicate(result);
    }

    function searchForInput(result) {

        if (result) {
            setUserInput(input);
            setEntryUpdate('');
            setDefaultUserText('is present in the dictionary');
        } else {
            setUserInput(input);
            setEntryUpdate('');
            setDefaultUserText('was not added to the dictionary');
        }
        return document.getElementById('input').value = '';
    }

    return (
        <React.Fragment>
            <div>
                <h1 id="title">Dictionary</h1>
                <div className="box">
                    <h2> Add words to the dictionary. </h2>
                    <input type="text" id="input" placeholder="  Type..." onChange={(e) => setInput(e.target.value)} />
                    <AddWordButton sendInputToParent={addInput} added={word} />
                    <SearchWordButton checkIfDuplicate={duplicate} sendSearchResultToParent={searchForInput} list={wordList} search={word} />
                    <hr></hr>
                    <div className="info">
                        <span> {entryUpdate} <b>{userInput}</b> {defaultUserText} </span>
                        <div>
                            <CheckListButton />
                        </div>
                    </div>
                </div>
                <CloseListButton renderList={wordList} />

            </div>
        </React.Fragment>
    );
}


