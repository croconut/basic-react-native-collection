import { createStore } from "redux";
import NoteReducer from "./reducers/NoteReducer";

const Store = createStore(NoteReducer);

export default Store;
