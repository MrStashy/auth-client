import './App.css';
import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  return (
    <div className="App p-2">
    <p className="text-4xl">Mighty Authin' Power Rangers</p>
    <form className="flex flex-col border-2 p-2 gap-2">
      <label htmlFor="username">Username</label>
      <input name="username" type="textbox" className="border w-44"/>
      <label htmlFor="password">Password</label>
      <input name="password" type="textbox" className="border w-44"/>
      <button className="w-44 h-8 bg-slate-300 rounded-md mt-2">Submit</button>
    </form>
    </div>
  );
}
