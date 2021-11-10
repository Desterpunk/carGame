const URL_BASE = 'https://nameless-escarpment-77078.herokuapp.com';

export const LOADING = 'LOADING'
export const LOADED_SUCCESS = 'LOADED_SUCCESS'
export const LOADED_FAILURE = 'LOADED_FAILURE'

export const loading = () => ({ type: LOADING })

export const success = payload => ({
    type: LOADED_SUCCESS,
    payload
});

export const failure = () => ({ type: LOADED_FAILURE })

export function createGame(gameConfig) {
    return async dispatch => {
        dispatch(loading())
        try {
            dispatch(success({game: gameConfig}));
        } catch (error) {
            dispatch(failure())
        }
    }
}
