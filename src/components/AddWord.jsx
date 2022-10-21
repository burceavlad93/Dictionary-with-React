import React, { Component } from 'react';

export default function AddWord(props) {

    function addedWord() {
        let input = document.getElementById('input').value.trim();
        let word = input.toLowerCase();

        for (let i = 0; i < word.length; ++i) {
            if (word[i] < 'a' && word[i] != ' ' || word[i] > 'z' && word[i] != ' ') {
                word = '';
                break;
            }
        }
        props.sendInputToParent(word);
    }

    return (
        <React.Fragment>
            <button onClick={() => { addedWord() }} className="button btn-add"> <b> Add </b> </button>

        </React.Fragment >
    );
}