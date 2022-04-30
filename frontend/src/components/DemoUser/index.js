import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

import "./DemoUser.css";

const DemoUser = () => {
  const dispatch = useDispatch();

  const loginDemo = (e) => {
    e.preventDefault();
    // const credential = "D";
    // const password = "123456";
    return dispatch(sessionActions.login({ credential: "Demo-lition", password: "password"})).catch(
      async (res) => {
        await res.json();
      }
    );
  };

  return (
    <button className="" onClick={loginDemo}>
      Demo User
    </button>
  );
}

export default DemoUser;
