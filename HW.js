import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("John Doe");
  const [title, setTitle] = useState("Frontend Developer");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [skills, setSkills] = useState("React, JavaScript, CSS");

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>My Resume</h1>

      <div style={{ marginBottom: "20px" }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" /><br /><br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job Title" /><br /><br />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br /><br />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" /><br /><br />
        <input value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Skills" /><br /><br />
      </div>

      <div style={{ border: "1px solid #ccc", padding: "20px" }}>
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p><b>Skills:</b> {skills}</p>
      </div>
    </div>
  );
}
