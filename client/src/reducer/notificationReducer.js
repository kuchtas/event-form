const notification = {
  show: false,
  message: "",
};

const initialState = {
  notification,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "notification/show_success":
      return {
        ...state,
        notification: {
          ...state.notification,
          show: true,
          type: "success",
          message: action.message,
        },
      };
    case "notification/show_error":
      return {
        ...state,
        notification: {
          ...state.notification,
          show: true,
          type: "error",
          message: action.message,
        },
      };
    case "notification/hide":
      return {
        ...state,
        notification: {
          ...state.notification,
          show: false,
          message: "",
        },
      };
    default:
      return state;
  }
}
