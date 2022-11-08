import React, { Component } from 'react';

export default function AddWord(props) {

    function add() {
        let addInput = document.getElementById('input-add').value.trim();
        document.getElementById('input-add').value = '';
        return props.sendAddInputToParent(addInput)
    }

    return (
        <React.Fragment>
            <button onClick={add} className="button btn-add"> <b> Add </b> </button>
        </React.Fragment >
    );
}