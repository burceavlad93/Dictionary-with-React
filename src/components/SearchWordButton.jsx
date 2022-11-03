import React, { Component } from 'react';
import { useEffect } from 'react';


export default function SearchWord(props) {

    let found = false;
    useEffect(() => {
        for (let i = 0; i < props.list.length; ++i) {

            if (props.list[i] === props.search) {
                props.checkIfDuplicate(true);
                found = true;
                break;
            } else {
                props.checkIfDuplicate(false);
            }
        }
    })

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