import React, {useState} from "react";
import "./App.css";
import Axios from 'axios'
function App()
{
const[id,setRollnumber]= useState("");
const[sname,setStudentName]= useState("");
const[dept,setDeptName]= useState("");
const[email,setEmail]= useState("");
const[placement,setPlacementstatus]= useState("");
const submitReview=()=>
{
Axios.post('http://localhost:9000/requireddata',
{Id:id,
name:sname,
Dept:dept,
email:email,
placement:placement
}).then(()=>
{
alert("success");
});
};
return (
<div className="App">
<h1>CRUD Application Demo</h1>
<div className="information">
<label><b>Rollnumber</b></label>
<input
type="Number"
name="id"
onChange={(e)=>{
setRollnumber(e.target.value);
}}
required/>
<label><b>StudentName</b></label>
<input
type="String"
name="sname"
onChange={(e)=>{
setStudentName(e.target.value);
}}
required/>
<label><b>DeptName</b></label>
<input
type="String"
name="dept"
onChange={(e)=>{
setDeptName(e.target.value);
}}
required/>
<label><b>Email</b></label>
<input
type="String"
name="email"
onChange={(e)=>{
setEmail(e.target.value);
}}
required/>
<label><b>Placementstatus</b></label>
<input
type="String"
name="placement"
onChange={(e)=>{
setPlacementstatus(e.target.value);
}}
required/>
<button onClick={submitReview}><b>Submit</b></button>
</div>
</div>);
}
export default App;
