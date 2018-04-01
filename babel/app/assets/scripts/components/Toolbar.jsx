import React from 'react';
import {Link} from 'react-router-dom';

export const Toolbar = (props) => {
    const {changeSearchText, searchText} = props;
    return (
        <div>
            <input type="text" value={searchText} onChange={(e) => {changeSearchText(e.target.value)}} placeholder="Type an author to filter posts"/>
        </div>
    )
}
