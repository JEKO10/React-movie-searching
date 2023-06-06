import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FormContainer,
  ProfileForm,
  ProfileName,
  ProfileWrapper,
  WrongInfo,
} from "../assets/style/Profile.styled";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const [logName, setLogName] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false); // New state variable

  const addUser = () => {
    axios
      .post("http://localhost:3001/register", {
        name,
        username,
        lastName,
        email,
        password,
        bio,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const login = () => {
    axios
      .post("http://localhost:3001/login", {
        username: logName,
        email: logName,
        password: logPassword,
      })
      .then((response) => {
        if (response.data.message === "No user found") {
          setInvalidCredentials(true);
          setTimeout(() => {
            setInvalidCredentials(false);
          }, 2000);
          console.log(response);
        } else {
          navigate("/profile");
          console.log(response);
        }
      });
  };

  return (
    <ProfileWrapper>
      <FormContainer>
        <ProfileForm>
          <h2>Create an account</h2>
          <label>
            Username
            <input
              type="text"
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <ProfileName>
            <label>
              Name
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label>
              Last name
              <input
                type="text"
                onChange={(event) => setLastName(event.target.value)}
              />
            </label>
          </ProfileName>
          <label>
            Email address
            <input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Password
            <input
              // type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label>
            Bio
            <textarea
              cols={30}
              rows={10}
              onChange={(event) => setBio(event.target.value)}
            ></textarea>
          </label>
          <button type="submit" onClick={addUser}>
            Create account
          </button>
        </ProfileForm>
        <p>or</p>
        <ProfileForm>
          <h2>Log in</h2>
          <label>
            Email or username
            <input
              type="text"
              onChange={(event) => setLogName(event.target.value)}
            />
          </label>
          <label>
            Password
            <input
              // type="password"
              onChange={(event) => setLogPassword(event.target.value)}
            />
          </label>
          <button
            type="submit"
            onClick={() => {
              login();
            }}
          >
            Log in
          </button>
          <WrongInfo invalidCredentials={invalidCredentials}>
            Your credentials don`t match.
          </WrongInfo>
        </ProfileForm>
      </FormContainer>
    </ProfileWrapper>
  );
};

export default Profile;
