import React, { useEffect, useState } from "react";
import axios from "axios";

function AllStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/student/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);

  return (
    <div>
      <h1>All Students</h1>
    </div>
  );
}

export default AllStudent;
