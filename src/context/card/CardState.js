import React, { useReducer } from "react";
import axios from "axios";

import CardContext from "./cardContext";
import CardReducer from "./cardReducer";
import { GET_DATA, GET_TIMEFRAME, SET_TIMEFRAME, SET_LOADING } from "../types";

const CardState = (props) => {
  const initialState = {
    title: {},
    timeframes: [],
    daily: [],
    weekly: [],
    monthly: [],
    current: {},
    previous: {},
    loading: false,
  };

  const [state, dispach] = useReducer(CardReducer, initialState);

  // Get Data
  const getData = (text) => {
    setLoading();

    const res = axios.get("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    dispach({
      type: GET_DATA,
      payload: res.data.items,
    });
  };

  // Get timeframe

  // Set timeframe

  // set loading
  const setLoading = () => dispach({ type: SET_LOADING });

  return (
    <CardContext.Provider
      value={{
        title: state.title,
        timeframes: state.timeframes,
        loading: state.loading,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
