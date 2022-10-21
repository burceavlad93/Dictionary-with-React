import React, { Component } from 'react';

export default function SearchWord(props) {

    function searchForWord() {
        let input = document.getElementById('input').value.trim();
        let word = input.toLowerCase();

        if (props.wordList.includes(word)) {
            console.log(props.wordList.includes(word));
            props.sendSearchResultToParent(true, word);
        } else {
            console.log(props.wordList.includes(word));
            props.sendSearchResultToParent(false, word)
        }
    }

    return (
        <React.Fragment>
            <button onClick={searchForWord} className="button btn-search"> <b> Search </b> </button>
        </React.Fragment>
    )

}