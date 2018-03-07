import React from 'react';

export const Toolbar = (props) => {
    const {handleAddPost, handleChangeSearchText, searchText} = props;
    return (
        <div>
            <input type="text" value={searchText} onChange={handleChangeSearchText} placeholder="Type an author to filter posts"/>
            <button onClick={handleAddPost} >Add</button>
        </div>
    )
}
