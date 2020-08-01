const INITIAL_STATE = { mood: "(⊙ᗜ⊙)" };

function moodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOVE":
      return { ...state, mood: action.payload };

    case "SLEEP":
      return { ...state, mood: action.payload };

    case "GRIN":
      return { ...state, mood: action.payload };

    case "RUN":
      return { ...state, mood: action.payload };

    default:
      return state;
  }
}

const store = Redux.createStore(moodReducer);