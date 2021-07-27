import { useReducer } from "react";
import AlertsContext from "./alertsContext";
import AlertsReducer from "./alertsReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

// const AlertsState = (props) => {
//   const initialState = null;

//   const [] = useReducer(AlertsReducer, initialState);

//   const setAlert = (message, type) => {};
//   return (
//     <AlertsContext.Provider value={{}}>{props.childen}</AlertsContext.Provider>
//   );
