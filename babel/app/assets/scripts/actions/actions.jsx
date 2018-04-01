export const savePost = post => ({
    type: 'SAVE_POST',
    post
});

export const removePost = id => ({
    type: 'REMOVE_POST',
    id
});

export const changeSearchText = text => ({
    type: 'CHANGE_SEARCH_TEXT',
    text
});
