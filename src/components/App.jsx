import React from 'react'
import { useState } from 'react';
import AddWord from './AddWord';
import CheckList from './CheckList';
import List from './List';
import SearchWord from './SearchWord';

let wordList = [];
let index = 0;

export default function App() {

    const [defaultText, setDefaultText] = useState('No word have been added');
    const [validInput, setValidInput] = useState('');
    const [word, setWord] = useState('');

    function addWordButton(input) {
        if (input == '') {
            setDefaultText('The word(s) must contain only letters');
            setValidInput('');
            setWord('');
            return;
        }

        if (wordList.includes(input)) {
            setDefaultText('has been added to the list');
            setValidInput('');
            return;
        } else {
            setWord(input);
            setValidInput('The following word: ');
            setDefaultText('has been added to the list');
        }

        document.getElementById('input').value = '';
        wordList[index++] = input;
        console.log(wordList);

    };

    function searchWordButton(result, input) {

        if (input == '') {
            setDefaultText('The word(s) must contain only letters');
            setValidInput('');
            setWord('');
            return;
        }

        if (result) {
            console.log(`result: ${result}, input: ${input}`);
            setWord(input);
            setDefaultText('is present in the list');
            setValidInput('');
        } else {
            console.log(`result: ${result}, input: ${input}`);
            setWord(input);
            setDefaultText('is NOT present in the list');
            setValidInput('');
        }
        document.getElementById('input').value = '';
    }

    return (
        <React.Fragment>
            <div>
                <h1 id="title">Dictionary</h1>
                <div className="box">
                    <h2> Add words to the dictionary. </h2>
                    <input type="text" id="input" placeholder="  Type..."></input>
                    <AddWord sendInputToParent={addWordButton} />
                    <SearchWord sendSearchResultToParent={searchWordButton} wordList={wordList} />
                    <hr></hr>
                    <div className="info">
                        <span> {validInput} <b>{word}</b> {defaultText} </span>
                        <div>
                            <CheckList wordList={wordList} />
                        </div>
                    </div>
                </div>
                <List wordList={wordList} />

            </div>
        </React.Fragment>
    );
}