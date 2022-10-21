import React, { Component } from 'react';

export default function SearchWord(props) {

    function searchForWord() {
        let input = document.getElementById('input').value.trim();
        let word = input.toLowerCase();

        for (let i = 0; i < props.wordList.length; ++i) {
            if (props.wordList[i] === word) {
                props.sendSearchResultToParent(true, word);
                return;
            }
        }
        props.sendSearchResultToParent(false, word)
    }

    return (
        <React.Fragment>
            <button onClick={searchForWord} className="button btn-search"> <b> Search </b> </button>
        </React.Fragment>
    )

}
