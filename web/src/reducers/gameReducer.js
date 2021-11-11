import * as actions from '../actions/gameActions'

export const initialState = {
  loading: true,
  hasErrors: false,
  currentGame: null,
  games: [],
  game: {},
  redirect: null
}

export default function gameReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, loading: true }
    case actions.LOADED_SUCCESS:
      return { ...state, games: [...state.games, action.payload], loading: false, hasErrors: false }
    case actions.LOADED_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case actions.DELETE_ITEM:
      return {...state, games: state.games.filter((game,index) => index !== action.payload.index)} 
    case actions.SET_CURRENTGAME:
      return {...state, currentGame: action.payload}  
    default:
      return state
  }
}