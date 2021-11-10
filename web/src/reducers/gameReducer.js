import * as actions from '../actions/gameActions'

export const initialState = {
  loading: true,
  hasErrors: false,
  games: [],
  game: {},
  redirect: null
}

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, loading: true }
    case actions.LOADED_SUCCESS:
      return { ...state, ...action.payload, loading: false, hasErrors: false }
    case actions.LOADED_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}