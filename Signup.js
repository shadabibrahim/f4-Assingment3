import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {setUser} from '../actions/counterActionCreator';
import { useNavigate } from "react-router-dom";

export default function Signup() {
     const navigate = useNavigate();


    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCPassword] = useState("");
    const [show1,setShow1] = useState(false);
    const [show2,setShow2] = useState(false);


    const dispatch = useDispatch();

    

    function saveData() {
        if(name == "" || email == "" || password == "" || cpassword == ""){
            setShow1(true);
            // console.log("first")
            return;
        }
        if(password != cpassword){
            setShow2(true);
            return;
        }
        let characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        function generateString(length) {
          let result = " ";
          let charactersLength = characters.length;
          for (let i = 0; i < length; i++) {
            result += characters.charAt(
              Math.floor(Math.random() * charactersLength)
            );
          }

          return result;
        }

        let obj = {
          name: name,
          email: email,
          password: password,
          token : generateString(16)
        };
        localStorage.setItem("user", JSON.stringify(obj));
        dispatch(setUser(obj));
        navigate("/F4-may-assignment-3/profile");
        // console.log(obj);
    }
  return (
    <>
      <div className="smain">
        <h1>Signup</h1>
        <div className="signup">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onInput={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={cpassword}
            onInput={(e) => setCPassword(e.target.value)}
          />
        </div>
        {show1 && show1 ? (
          <p style={{ color: "red", paddingTop: "10px" }}>
            Error: All the fields are mandatory
          </p>
        ) : (
          ""
        )}
        {show2 && show2 ? (
          <p style={{ color: "red", paddingTop: "10px" }}>
            password is not matching with confirm password
          </p>
        ) : (
          ""
        )}
        <button onClick={saveData}>Sign Up</button>
      </div>
    </>
  );
}
