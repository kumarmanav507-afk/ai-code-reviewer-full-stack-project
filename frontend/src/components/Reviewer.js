import React, { useState } from "react";
import axios from "axios";

function Reviewer() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

  const handleReview = async () => {
    const res = await axios.post("http://localhost:5000/api/review", { code });
    setReview(res.data.review);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Code Reviewer</h1>

      <textarea
        rows="10"
        cols="60"
        placeholder="Paste your code..."
        onChange={(e) => setCode(e.target.value)}
      />

      <br /><br />
      <button onClick={handleReview}>Review Code</button>

      <pre>{review}</pre>
    </div>
  );
}

export default Reviewer;
