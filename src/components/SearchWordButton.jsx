import React from 'react';

export default function SearchWord(props) {

    function searchWord() {

        let searchInput = document.getElementById('input-search').value.trim();
        document.getElementById('input-search').value = '';

        for (let i = 0; i < props.wordArray.length; ++i) {
            if (props.wordArray[i] === searchInput) {
                return props.sendSearchResultToParent(false, true, '', searchInput, 'Is present in the dictionary');
            }
        }
        return props.sendSearchResultToParent(false, true, '', searchInput, 'Is NOT present in the dictionary');
    }

    return (
        <React.Fragment>
            <button onClick={searchWord} className="button btn-search"> <b> Search </b> </button>
        </React.Fragment >
    )

}