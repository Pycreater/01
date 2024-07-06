import React, { useReducer } from "react";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  //   console.log(state, action);
  switch (action.type) {
    case "FETCH_DATA_START":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return { loading: false, error: null, data: action.payload };
    case "FETCH_DATA_FAILURE":
      return { ...state, error: action.payload, loading: false };
    case "DELETE_DATA":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

const UseReducerEx2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "FETCH_DATA_START" });

    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      dispatch({
        type: "FETCH_DATA_SUCCESS",
        payload: data,
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: "FETCH_DATA_FAILURE",
        payload: error.message,
      });
    }
  };

  const deleteData = (id) => {
    dispatch({
      type: "DELETE_DATA",
      payload: id,
    });
  };

  const addData = (newData) => {
    dispatch({
      type: "ADD_DATA",
      payload: newData,
    });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {state.loading === true && <p>Loading....</p>}
      {state.error && <p>Error: {state.error}</p>}
      <ul>
        {state.data.map((i) => (
          <li key={i.id}>
            {i.login} <button onClick={() => deleteData(i.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addData({
            id: Date.now(),
            title: e.target.title.value,
          });
        }}
      >
        <input type="text" name="title" placeholder="Add new login..." />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default UseReducerEx2;
