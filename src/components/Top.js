import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UsersProvider";

const Top = () => {
  const { setUser } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const user = { name, email };
    setUser(user);
    navigate("/quiz-selection");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Top;
