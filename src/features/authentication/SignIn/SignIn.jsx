import React, { useState } from "react";
import { Input } from "../../shared/Input";
import { Auth } from "aws-amplify";
import { localStorageService } from "@/services/local-storage.service";
async function signIn({ username, password }) {
  try {
    const user = await Auth.signIn({ username, password }, password);
    console.log(user);
    const { accessToken, idToken, refreshToken } = user.signInUserSession;

    localStorageService.setToken(accessToken.jwtToken);
    console.log("ACCESS TOKEN: ", accessToken);
    console.log("ID TOKEN: ", idToken);
    console.log("REFRESH TOKEN: ", refreshToken);
    console.log("TOKEN STORED IN LOCAL STORAGE");
    return accessToken.jwtToken;
  } catch (error) {
    console.log("error signing in", error);
  }
}

export const SingIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJWT] = useState("");
  return (
    <div>
      <Input name={"Username"} value={username} setValue={setUsername} />
      <Input name={"Password"} value={password} setValue={setPassword} />
      <span>JWT: </span>
      <div>{jwt}</div>
      <button
        onClick={async () => setJWT(await signIn({ username, password }))}
      >
        SignIn
      </button>
    </div>
  );
};
