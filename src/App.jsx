import './App.css';
import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  function handleChange (e) {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  function handleSubmit (e) {

  }

  return (
    <div className="App p-2">
    <p className="text-4xl">Mighty Authin' Power Rangers</p>
    <form onChange={handleChange} onSubmit={handleSubmit} className="flex flex-col p-2 gap-2">
      <label htmlFor="username">Username</label>
      <input name="username" type="textbox" className="border w-44" value={formData.username}/>
      <label htmlFor="password">Password</label>
      <input name="password" type="password" className="border w-44" value={formData.password}/>
      <button className="w-44 h-8 bg-slate-300 rounded-md mt-2">Submit</button>
    </form>
    </div>
  );
}
 