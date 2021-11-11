export const LOADINGP = 'LOADINGP'
export const LOADEDP_SUCCESS = 'LOADEDP_SUCCESS'
export const LOADEDP_FAILURE = 'LOADEDP_FAILURE'


export const loading = () => ({ type: LOADINGP })

export const success = payload => ({
    type: LOADEDP_SUCCESS,
    payload
});

export const failure = () => ({ type: LOADEDP_FAILURE })


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