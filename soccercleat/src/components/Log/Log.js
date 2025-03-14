import React, { useState } from "react";
import "./Log.css";


function AuthForm() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const toggleForm = function() {
    setIsSignUpActive(!isSignUpActive);
  };

  return React.createElement(
    "div",
    { className: `container ${isSignUpActive ? "right-panel-active" : ""}`, id: "container" },
    // Formulaire d'inscription
    React.createElement(
      "div",
      { className: "form-container sign-up-container" },
      React.createElement(
        "form",
        { action: "#" },
        React.createElement("h1", null, "Creer un compte"),
        React.createElement("span", null, "Crée un compte pour profiter des avantages !"),
        React.createElement("input", { type: "text", placeholder: "Nom" }),
        React.createElement("input", { type: "text", placeholder: "Prénom" }),
        React.createElement("input", { type: "email", placeholder: "Email" }),
        React.createElement("input", { type: "password", placeholder: "Mot de passe" }),
        React.createElement("button", null, "Creer le compte")
      )
    ),
    // Formulaire de connexion
    React.createElement(
      "div",
      { className: "form-container login-container" },
      React.createElement(
        "form",
        { action: "#" },
        React.createElement("h1", null, "Se connecter"),
        React.createElement("span", null, "Conecte-toi pour profiter des avantages !"),
        React.createElement("input", { type: "email", placeholder: "Email" }),
        React.createElement("input", { type: "password", placeholder: "Mot de passe" }),
        React.createElement("button", null, "Se connecter")
      )
    ),
    // Overlay
    React.createElement(
      "div",
      { className: "overlay-container" },
      React.createElement(
        "div",
        { className: "overlay" },
        React.createElement(
          "div",
          { className: "overlay-panel overlay-left" },
          React.createElement("h1", null, "Connectez-vous sur notre site"),
          React.createElement(
            "button",
            { className: "ghost", onClick: toggleForm, id: "login" },
            "Se connecter"
          )
        ),
        React.createElement(
          "div",
          { className: "overlay-panel overlay-right" },
          React.createElement("h1", null, "Inscrivez-vous sur notre site"),
          React.createElement(
            "button",
            { className: "ghost", onClick: toggleForm, id: "signUp" },
            "Creer un compte"
          )
        )
      )
    )
  );
}


export default AuthForm;
