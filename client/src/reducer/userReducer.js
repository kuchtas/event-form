const user = {};

const initialState = {
  user,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/update_name":
      console.log(state);
      return {
        ...state,
        user: { ...state.user, name: action.payload },
      };
    case "user/update_surname":
      console.log(state);
      return {
        ...state,
        user: { ...state.user, surname: action.payload },
      };
    case "user/update_email":
      console.log(state);
      return {
        ...state,
        user: { ...state.user, email: action.payload },
      };
    case "user/update_date":
      console.log(state);
      return {
        ...state,
        user: { ...state.user, date: action.payload },
      };
    default:
      return state;
  }
}
