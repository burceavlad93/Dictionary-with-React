import React, { Component } from 'react';

export default function CloseList(props) {

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
                {props.wordArray.map((word, index) =>
                (
                    <p key={index}><strong>{index + 1}{element} {word} </strong></p>
                )
                )}
            </div>

        </div>
    );
}