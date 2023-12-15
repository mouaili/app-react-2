import React, { Fragment, useReducer } from 'react';

const initialState = {
  countOne: 0,
  countTwo: 0,
};

const reducer = (state, action) => {
  console.log(state, action.type);

  switch (action.type) {
    case 'increment':
      return { ...state, countOne: state.countOne + action.value };
    case 'decrement':
      return { ...state, countOne: state.countOne - action.value };
    case 'increment2':
      return { ...state, countTwo: state.countTwo + action.value };
    case 'decrement2':
      return { ...state, countTwo: state.countTwo - action.value };
    case 'init':
      return initialState;
    default:
      return initialState;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <div className="col-md-6">
        <h2>Le nouveau compteur : {count.countOne}</h2>
        <button
          className="btn btn-info m-1"
          onClick={() => dispatch({ type: 'increment', value: 1 })}
        >
          {' '}
          +{' '}
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={() => dispatch({ type: 'decrement', value: 1 })}
        >
          {' '}
          -{' '}
        </button>
      </div>
      <div className="col-md-6">
        <h2>Le nouveau compteur : {count.countTwo}</h2>
        <button
          className="btn btn-info m-1"
          onClick={() => dispatch({ type: 'increment2', value: 10 })}
        >
          {' '}
          +{' '}
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={() => dispatch({ type: 'decrement2', value: 10 })}
        >
          {' '}
          -{' '}
        </button>
      </div>
      <div className="col-md-12 m-5">
        <p>Réinitialiser à zéro</p>
        <button
          className="btn btn-primary m-1"
          onClick={() => dispatch({ type: 'init' })}
        >
          {' '}
          0{' '}
        </button>
      </div>
    </Fragment>
  );
}

export default Counter;
