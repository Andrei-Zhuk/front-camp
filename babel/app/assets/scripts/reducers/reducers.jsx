const initState = {
    posts: [
        {
            title: 'first',
            content: 'first',
            author: 'first',
            id: 'first'
        }
    ],
    searchText: ""
}

let postReducers = (state = initState, action) => {
    switch (action.type) {
        case 'SAVE_POST':
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
            break;
        case 'REMOVE_POST':
        console.log('REMOVE_POST');
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.id)
            }
            break;
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.text
            }
            break;
        default:
            return state
    }
}

export default postReducers
