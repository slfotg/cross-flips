import React, { createContext } from "react";
import _ from "lodash";

enum Mode {
  PLAY = "play",
  EDIT = "edit",
};

enum Action {
  RESET,
  FLIP,
  CROSS_FLIP,
  SET_MODE,
  SET_SIZE,
  INIT_DATA,
  CHANGE_MODE,
  INVERT,
};

interface State {
  size: number,
  mode: Mode,
  flipped: boolean[][],
};

interface Index {
  row: number,
  col: number,
};

function initFlipped(size: number): boolean[][] {
  return Array.from({ length: size }, (e) => Array(size).fill(false));
}

function reset(state: State): State {
  return { ...state, flipped: initFlipped(state.size) };
}

function flip(array: boolean[][], { row, col }: Index): boolean[][] {
  array[row][col] = !array[row][col];
  return array;
}

function crossFlip(array: boolean[][], { row, col }: Index): boolean[][] {
  flip(array, { row, col });
  for (var i = 0; i < array.length; i += 1) {
    flip(array, { row: i, col: col });
    flip(array, { row: row, col: i });
  }
  return array;
}

function setSize(state: State, size: number): State {
  return { ...state, size: size, flipped: initFlipped(size) };
}

function setMode(state: State, mode: Mode): State {
  return { ...state, mode };
}

function initEulerData(state: State): State {
  let size = state.size;
  let eulerData = initFlipped(size);
  var col = 0;
  for (var row = size - 1; row >= 0; row -= 1) {
    var sqrt = Math.sqrt(row * row + col * col);
    while (sqrt < size) {
      if (size - 1 <= sqrt) {
        eulerData[row][col] = true;
      }
      col += 1;
      sqrt = Math.sqrt(row * row + col * col);
    }
    col -= 1;
  }
  return { ...state, flipped: eulerData };
}

function invert(state: State): State {
  var inverted = initFlipped(state.size);
  for (var row = 0; row < state.size; row += 1) {
    for (var col = 0; col < state.size; col += 1) {
      if (state.flipped[row][col]) {
        inverted = crossFlip(inverted, { row, col });
      }
    }
  }
  return { ...state, flipped: inverted };
};

function reducer(state: State, action: any): State {
  switch (action.type) {
    case Action.RESET:
      return reset(state);
    case Action.FLIP:
      var flipped = _.cloneDeep(state.flipped);
      return { ...state, flipped: flip(flipped, action.payload) };
    case Action.CROSS_FLIP:
      var flipped = _.cloneDeep(state.flipped);
      return { ...state, flipped: crossFlip(flipped, action.payload) };
    case Action.SET_SIZE:
      return setSize(state, action.payload);
    case Action.SET_MODE:
      return setMode(state, action.payload);
    case Action.INIT_DATA:
      return initEulerData(state);
    case Action.INVERT:
      return invert(state);
    default:
      return state;
  }
}

function initialState(): State {
  var size = 5;
  var flipped = initFlipped(size);
  var mode = Mode.PLAY;
  return {
    size,
    flipped,
    mode,
  };
}

interface ContextProps {
  state: State,
  dispatch: ({ type, payload }: { type: Action, payload: any }) => void,
}

const CrossFlipContext = createContext<{ state: State, dispatch: React.Dispatch<any> }>(null);

export { reducer, initialState, Action, CrossFlipContext, Mode };
