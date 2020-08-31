import remove from "lodash.remove";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";

const initialState = { notes: [], nextID: -1 };

export function addNote(note) {
  return {
    type: ADD_NOTE,
    id: 0,
    note,
  };
}

export function editNote(note, id) {
  return {
    type: EDIT_NOTE,
    id,
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
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: state.nextID,
            note: action.note,
          },
        ],
      };
    case EDIT_NOTE:
      // const objToSwap = state.notes.find((note) => note.id === action.id);
      // objToSwap.body = action.note.body;
      // objToSwap.text = action.note.text;
      const id = action.id;
      console.log(id);
      return {
        ...state,
        notes: state.notes.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              note: action.note,
            };
          }
          return item;
        }),
      };
    case DELETE_NOTE:
      const deleteNewArray = remove(state.notes, (obj) => {
        return obj.id != action.payload;
      });
      return { ...state, notes: deleteNewArray };

    default:
      return state;
  }
}

export default NoteReducer;
