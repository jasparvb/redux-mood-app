const INITIAL_STATE = { mood: (⊙ᗜ⊙) };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOVE":
      return { ...state, mood: "✿♥‿♥✿" };

    case "SLEEP":
      return { ...state, mood: "( ⓥωⓥ)" };

    case "GRIN":
      return { ...state, mood: "(￣ー￣)" };

    case "RUN":
      return { ...state, mood: "┗(＾0＾)┓" };

    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);