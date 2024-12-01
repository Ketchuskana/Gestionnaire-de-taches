// src/components/NotificationSystem.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class NotificationSystem {
  static notify(message) {
    toast(message);
  }
}

export default NotificationSystem;
