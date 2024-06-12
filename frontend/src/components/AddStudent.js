import React, { useState } from "react";

function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
    };
    console.log(newStudent);
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="form-group">
          <label for="name" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter student name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="age" className="form-label">
            Student Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter student age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="gender" className="form-label">
            Student Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            placeholder="Enter student gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
