import React from "react";
import FormAuth from "./components/FormAuth";
import { useDispatch } from "react-redux";
import { Authorization } from "../../store/Actions";
import { useHistory } from "react-router-dom";
function Main() {
  const dispatch = useDispatch();
  let history = useHistory();

  const DataRecordingStore = (login) => {
    dispatch(Authorization(login));
    history.push("/profile");
  };

  return (
    <main className="main">
      <div className="container">
        <FormAuth Сompletion={DataRecordingStore} />
      </div>
    </main>
  );
}

export default Main;
