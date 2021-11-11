import * as actions from '../actions/playerActions'

export const initialState = {
  loading: true,
  hasErrors: false,
  currentGame: null,
  players: [],
  redirect: null
}

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOADINGP:
      return { ...state, loading: true }
    case actions.LOADEDP_SUCCESS:
      return { ...state, players: [...state.players, action.payload], loading: false, hasErrors: false }
    case actions.LOADEDP_FAILURE:
      return { ...state, loading: false, hasErrors: true } 
    default:
      return state
  }
}