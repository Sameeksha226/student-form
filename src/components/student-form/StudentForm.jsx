import React,{useState} from 'react';
import axios from "axios";

function StudentForm() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhn]=useState("");
    const [sem,setSem]=useState("");
    const [branch,setBranch]=useState("");
    const [id,setId]=useState("");
    const handleSubmit=async(e) =>{
      e.preventDefault();
      const data={
         id:id,
         name:name,
         email:email,
         phone:phone,
         branch:branch,
         sem:sem
      }
      try{
        const response= await axios.post("http://localhost:5000/student",data);
        alert("Student created");
      }catch(error){
         console.log(error);
      }
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Student Registration form </h1>
            <input type="text" placeholder="Enter ID" value={id} onChange={(e) => setId(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/><br></br>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhn(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter Semester" value={sem} onChange={(e) => setSem(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter Branch" value={branch} onChange={(e) => setBranch(e.target.value)}/><br></br>
            <button>Submit</button>
           {/* <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{sem}</p>
  <p>{branch}</p>*/}
        </form>
    </div>
  );
}

export default StudentForm