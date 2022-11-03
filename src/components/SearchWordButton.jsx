import React, { Component } from 'react';


export default function SearchWord(props) {

    let found = false;

    for (let i = 0; i < props.list.length; ++i) {
        console.log(`${props.list[i]} vs ${props.search}`);
        console.log(found);

        if (props.list[i] === props.search) {
            props.checkIfDuplicate(true);
            found = true;
            break;
        } else {
            props.checkIfDuplicate(false);
        }
    }

    function searchForInput(result) {
        result = found;
        return props.sendSearchResultToParent(result);
    }


    return (
        <React.Fragment>
            <button onClick={searchForInput} className="button btn-search"> <b> Search </b> </button>
        </React.Fragment>
    )

}