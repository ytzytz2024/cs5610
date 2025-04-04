import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    function loginHandler() {
        console.log("loginHandler");
        loginWithRedirect();

    } 
    return (
        <button onClick={loginHandler} className="login-button">
            Login
        </button>
    );
}
