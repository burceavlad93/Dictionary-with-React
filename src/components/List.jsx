import React, { Component } from 'react';

export default function List({ wordList }) {

    let index = 1;
    let element = ')'

    function hideList() {
        document.getElementById('title').classList.remove('hidden');
        document.querySelector('.box').classList.remove('hidden');
        document.querySelector('.list').classList.add('hidden');
    }

    return (
        <div className="list hidden">
            <button onClick={hideList} className="close-modal">&times;</button>
            <h1>Dictionary word list</h1>
            <div id='list'>
                {wordList.map(number =>
                    <div key={number}>
                        <b>{index++}{element} {number}</b>
                    </div>
                )}
            </div>

        </div>
    );
}