import React, { Component } from 'react';

export default function CheckList() {

    function showList() {
        document.getElementById('title').classList.add('hidden');
        document.querySelector('.box').classList.add('hidden');
        document.querySelector('.list').classList.remove('hidden');
    }

    return (
        <React.Fragment>
            <button onClick={showList} className="button btn-check"> <b> Check list </b> </button>
        </React.Fragment>
    );
}