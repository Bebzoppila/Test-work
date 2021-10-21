import React from "react";
import { useSelector } from "react-redux";
function Profile() {
    const {userName} = useSelector((store) => store.user)
    return(
        <h1>Добрый день {userName} !!!!</h1>
    )
}

export default Profile