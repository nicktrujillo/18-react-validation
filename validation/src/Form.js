import React, { useState } from "react";
import validator from "validator";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [website, setWebsite] = useState("");

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [websiteValid, setWebsiteValid] = useState(true);

  const [nameLabel, setNameLabel] = useState("Name");
  const [emailLabel, setEmailLabel] = useState("Email");
  const [usernameLabel, setUsernameLabel] = useState("Username");
  const [passwordLabel, setPasswordLabel] = useState("Password");
  const [confirmPasswordLabel, setConfirmPasswordLabel] = useState(
    "Confirm Password"
  );
  const [websiteLabel, setWebsiteLabel] = useState("Website");

  const [profile, setProfile] = useState("Profile Form - All fields required");

  const [errors, setErrors] = useState(true);

  let filled = 0;

  function handleClick(e) {
    e.preventDefault();
    // check name
    if (validator.isEmpty(name)) {
      setNameLabel("Name is required");
      setNameValid(false);
    } else {
      setName(name);
      setNameLabel("Name");
      setNameValid(true);
      filled += 1;
      isFilled();
    }

    //check email
    if (!validator.isEmail(email)) {
      setEmailLabel("Invalid email");
      setEmailValid(false);
      setEmail("");
    } else {
      setEmail(email);
      setEmailLabel("Email");
      setEmailValid(true);
      filled += 1;
      isFilled();
    }

    //check username
    if (validator.isEmpty(username)) {
      setUsernameLabel("Username is required");
      setUsernameValid(false);
    } else {
      setUsername(username);
      setUsernameLabel("Username");
      setUsernameValid(true);
      filled += 1;
      isFilled();
    }

    //check password
    if (validator.isEmpty(password)) {
      setPasswordLabel("Password is required");
      setPasswordValid(false);
    } else {
      setPassword(password);
      setPasswordLabel("Password");
      setPasswordValid(true);
      filled += 1;
      isFilled();
    }

    //check if confirm password matches password
    if (confirmPassword === password) {
      setConfirmPassword(confirmPassword);
      setConfirmPasswordValid(true);
      filled += 1;
      isFilled();
    } else {
      setConfirmPasswordLabel("Password does not match");
      setConfirmPasswordValid(false);
      setConfirmPassword("");
    }

    // check website
    if (!validator.isURL(website)) {
      setWebsiteLabel("invalid website");
      setWebsiteValid(false);
      setWebsite("");
    } else {
      setWebsite(website);
      setWebsiteLabel("Website");
      setWebsiteValid(true);
      filled += 1;
      isFilled();
    }

    function isFilled() {
      if (filled === 6) {
        setErrors(false);
        setProfile("Thank you");
      }
    }
  }

  return (
    <form>
      <h1>{profile}</h1>
      <div className={errors ? "" : "displayNone"}>
        <label htmlFor="name" className={nameValid ? "" : "textRed"}>
          {nameLabel}
        </label>
        <input
          type="name"
          id="name"
          placeholder={nameLabel}
          className={nameValid ? "" : "borderRed"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className={emailValid ? "" : "textRed"}>
          {emailLabel}
        </label>
        <input
          type="email"
          id="email"
          placeholder={emailLabel}
          className={emailValid ? "" : "borderRed"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="username" className={usernameValid ? "" : "textRed"}>
          {usernameLabel}
        </label>
        <input
          type="username"
          id="username"
          placeholder={usernameLabel}
          className={usernameValid ? "" : "borderRed"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className={passwordValid ? "" : "textRed"}>
          {passwordLabel}
        </label>
        <input
          type="password"
          id="password"
          placeholder={passwordLabel}
          className={passwordValid ? "" : "borderRed"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          htmlFor="confirmPassword"
          className={confirmPasswordValid ? "" : "textRed"}
        >
          {confirmPasswordLabel}
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder={confirmPasswordLabel}
          className={confirmPasswordValid ? "" : "borderRed"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label htmlFor="website" className={websiteValid ? "" : "textRed"}>
          {websiteLabel}
        </label>
        <input
          type="website"
          id="website"
          placeholder={websiteLabel}
          className={websiteValid ? "" : "borderRed"}
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div id="button" className={errors ? "" : "displayNone"}>
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
