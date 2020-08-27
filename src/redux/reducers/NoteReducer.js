import remove from "lodash.remove";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

const initialState = {notes: [], nextID: -1};

export function addNote(note) {
  return {
    type: ADD_NOTE,
    id: 0,
    note,
  };
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}


function NoteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      state.nextID += 1;
      return {...state, notes: [
        ...state.notes,
        {
          id: state.nextID,
          note: action.note,
        },
      ]};
    case DELETE_NOTE:
      const deleteNewArray = remove(state.notes, obj => {
        return obj.id != action.payload;
      });
      return {...state, notes: deleteNewArray};
    default:
      return state;
  }
}

export default NoteReducer;
