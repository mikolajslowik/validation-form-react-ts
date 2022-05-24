import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const axios = require("axios").default;

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [res, setRes] = useState<Data>();
  const [isValid, setIsValid] = useState(false);

  interface Data {
    status: number;
    status_message: string;
    validation_status: boolean;
    email: string;
  }

  interface Response {
    data: Data;
  }

  useEffect(() => {
    if (email === res?.email) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email]);

  useEffect(() => {
    axios
      .get("https://extensi.io/api/email-validator.php?email=myemail@wp.pl")
      .then((response: Response) => response.data)
      .then((data: Data) => setRes(data));
  }, []);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value);
  };

  const handleBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!name || !surname || !birth || !email || !gender || !isValid) {
      alert("Fill all the forms");
    } else {
      alert(`{
        "name": ${name},
        "surname": ${surname},
        "email": ${email},
        "birth": ${birth},
        "gender": ${gender},
      }`);
    }
  };

  return (
    <>
      <div className="App">
        <form className="demoForm">
          <h2>Sign up</h2>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              onChange={handleName}
              type="text"
              className="form-control"
              name="name"
            />
            <p style={{ color: "red" }}>
              {name.length <= 3 && name ? "name > 3" : null}
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="surname">surname</label>
            <input
              onChange={handleSurname}
              type="text"
              className="form-control"
              name="surname"
            />
            <p style={{ color: "red" }}>
              {surname.length <= 3 && surname ? "name > 3" : null}
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              onChange={handleEmail}
              type="email"
              className="form-control"
              name="email"
            />
            <p>{isValid ? "valid" : "not"}</p>
          </div>
          <div className="form-group">
            <label htmlFor="birth">birth</label>
            <input
              onChange={handleBirth}
              type="date"
              className="form-control"
              name="birth"
            />
          </div>
          <div className="form-group">
            <label htmlFor="male">male</label>
            <input
              onChange={handleGender}
              type="checkbox"
              className="form-control"
              name="male"
              value="male"
              checked={gender === "male"}
            />
            <label htmlFor="female">female</label>
            <input
              onChange={handleGender}
              type="checkbox"
              className="form-control"
              name="female"
              value="female"
              checked={gender === "female"}
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
