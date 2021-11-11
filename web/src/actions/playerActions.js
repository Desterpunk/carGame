export const LOADINGP = 'LOADINGP'
export const LOADEDP_SUCCESS = 'LOADEDP_SUCCESS'
export const LOADEDP_FAILURE = 'LOADEDP_FAILURE'
export const SET_CURRENTPLAYER = 'SET_CURRENTPLAYER'
export const DELETE_ITEMP = 'DELETE_ITEMP'
export const UPDATE_ITEMP = 'UPDATE_ITEMP'

export const loading = () => ({ type: LOADINGP })

export const success = payload => ({
    type: LOADEDP_SUCCESS,
    payload
});

export const failure = () => ({ type: LOADEDP_FAILURE })

export const setCurrentPlayer= payload => ({
    type: SET_CURRENTPLAYER,
    payload
})

export const deleteItemPlayer = payload => ({
    type: DELETE_ITEMP,
    payload
});

export const updateItemPlayer = payload => ({
    type: UPDATE_ITEMP,
    payload
});


export function createPlayer(data) {
    return async dispatch => {
        dispatch(loading())
        try {
            dispatch(success({player: data}));
        } catch (error) {
            dispatch(failure())
        }
    }
}

export function deletePlayer(index) {
    return async dispatch => {dispatch(deleteItemPlayer({index}))}
}

export function updatePlayer(data) {
    return async dispatch => {dispatch(updateItemPlayer({data}))}
}

export function setPlayer(index) {
    return async dispatch => {dispatch(setCurrentPlayer({index}))}
}