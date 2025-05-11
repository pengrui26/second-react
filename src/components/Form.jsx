"use client";
import { useState } from "react";

const Form = ({
  name,
  email,
  setName,
  setEmail,
  //   error,
  //   setError,
  handleSubmit,
}) => {
  return (
    <form className="grid gap-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email:</label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default function FormPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email) {
      setError("You must enter a name and email");
    } else {
      alert(`Name: ${name} Email: ${email}`);
    }
  };

  return (
    <div>
      <Form
        {...{ name, email, setName, setEmail, error, setError, handleSubmit }}
      />
      <div className="text-red-500">{error && error.length > 1 && error}</div>
    </div>
  );
}
