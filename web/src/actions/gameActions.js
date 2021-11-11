export const LOADING = 'LOADING'
export const LOADED_SUCCESS = 'LOADED_SUCCESS'
export const LOADED_FAILURE = 'LOADED_FAILURE'
export const DELETE_ITEM = 'DELETE_ITEM'
export const SET_CURRENTGAME = 'SET_CURRENTGAME'
export const ADD_PLAYER = 'ADD_PLAYER'

export const loading = () => ({ type: LOADING })

export const success = payload => ({
    type: LOADED_SUCCESS,
    payload
});

export const deleteItem = payload => ({
    type: DELETE_ITEM,
    payload
});

export const failure = () => ({ type: LOADED_FAILURE })

export const setCurrentGame = payload => ({
    type: SET_CURRENTGAME,
    payload
})

export function createGame(data) {
    return async dispatch => {
        dispatch(loading())
        try {
            dispatch(success({game: data}));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deleteGame(index) {
    return async dispatch => {dispatch(deleteItem({index}))}
}

export function setGame(index) {
    return async dispatch => {dispatch(setCurrentGame({index}))}
}