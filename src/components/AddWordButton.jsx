import React, { Component } from 'react';

export default function AddWord(props) {

    function addedWord() {

        if (props.added == '') {
            return props.sendInputToParent('');
        }

        for (let i = 0; i < props.added.length; ++i) {
            if (props.added[i] < 'a' && props.added[i] != ' ' || props.added[i] > 'z' && props.added[i] != ' ') {
                return props.sendInputToParent('');
            }
        }

        return props.sendInputToParent(props.added);

    }

    return (
        <React.Fragment>
            <button onClick={() => { addedWord() }} className="button btn-add"> <b> Add </b> </button>
        </React.Fragment >
    );
}