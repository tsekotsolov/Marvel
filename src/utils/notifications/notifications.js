import { NotificationManager } from "react-notifications";

const createNotification = (type, message) => {
  return () => {
    switch (type) {
      case "logout":
        NotificationManager.success("Logged out", " ", 1500);
        break;

      case "success":
        NotificationManager.success("Login success", " ", 1500);
        break;
      case "error":
        NotificationManager.error("Invalid credentials", " ", 200000);
        break;

      case "signInerror":
        NotificationManager.error(message, " ", 200000);
        break;

      case "signInSuccess":
        NotificationManager.success("User created", " ", 1500);
        break;
      default:
        break;
    }
  };
};

export default createNotification;
