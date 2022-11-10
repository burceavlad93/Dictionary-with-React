import React, { Component } from 'react';

export default function AddWord(props) {

    function addWord() {
        let userInput = document.getElementById('input-add').value.trim();
        document.getElementById('input-add').value = '';

        if (userInput != '') {
            return props.sendAddInputToParent(true, false, 'The following word:', userInput, 'was added tot he dictionary');
        } else {
            return props.sendAddInputToParent(true, false, '', '', 'No word have been added');
        }
    }

    return (
        <React.Fragment>
            <button onClick={addWord} className="button btn-add"> <b> Add </b> </button>
        </React.Fragment >
    );
}