import React, { useState } from "react";
import { connect } from "react-redux";
import { addmovie } from "./store/actions/index";

const initialState = {
  movieName: ""
};

const App = (props) => {
  const [movieName, setMovieName] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addmovie(movieName);
    setMovieName(initialState);
  };

  console.log(props.movieList);

  return (
    <>
      <h1>form</h1>
      <form>
        <input
          type="text"
          placeholder="Enter movie Name"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
      {props.movieList.map((data, i) => {
        return (
          <div key={i}>
            <h1>{data}</h1>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addmovie: (memData) => dispatch(addmovie(memData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
