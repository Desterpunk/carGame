import * as actions from '../actions/playerActions'

export const initialState = {
  loading: true,
  hasErrors: false,
  currentPlayer: null,
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
    case actions.SET_CURRENTPLAYER:
    return {...state, currentPlayer: action.payload}  
    case actions.DELETE_ITEMP:
        return {...state, players: state.players.filter((player) => player.player.game - 1 !== action.payload.index)} 
    case actions.UPDATE_ITEMP:
        return {...state, players: state.players.map((player) => player.player.id === action.payload.data.id ? {player:{id:action.payload.data.id, name:action.payload.data.name,game:player.player.game }} : player)}

    default:    
      return state
  }
}