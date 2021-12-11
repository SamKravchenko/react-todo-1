import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from '../types'

const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [ADD_NOTE]: (state, action) => ({
    ...state,
    notes: [...state.notes, action.payload],
  }),
  [FETCH_NOTES]: (state, action) => ({
    ...state,
    notes: action.payload,
    loading: false,
  }),
  [REMOVE_NOTE]: (state, action) => ({
    ...state,
    notes: state.notes.filter((note) => note.id !== action.payload),
  }),
  DEFAULT: (state) => state,
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
