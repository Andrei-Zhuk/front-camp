import React from 'react';

export const Toolbar = (props) => {
    const {handleAddPost} = props;
    return (
        <div>
            <input type="text"/>
            <button onClick={handleAddPost} >Add</button>
        </div>
    )
}
