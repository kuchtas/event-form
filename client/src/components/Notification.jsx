import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Notification = () => {
  const { notification } = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notification.show === true) {
      setTimeout(() => {
        dispatch({ type: "notification/hide" });
      }, 2000);
    }
  }, [notification]);

  return (
    <div
      style={{
        position: "absolute",
        display: notification.show ? "block" : "none",
        top: "95vh",
        left: "1vw",
        backgroundColor:
          notification.type === "success"
            ? "#9ACD32"
            : notification.type === "error"
            ? "red"
            : "black",
        padding: "10px 20px 10px 20px",
        borderRadius: "5px",
        color: "white",
      }}
    >
      {notification.message}
    </div>
  );
};

export default Notification;
