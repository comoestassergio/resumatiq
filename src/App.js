import './App.css';
import React, {useState} from 'react';
import Hero from './components/Hero';
import Personal from './components/Personal';
import Education from './components/Education';

export default function App() {
  const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    website: '',
    address: '',
    workExperience: [],
    education: [],
    interests: [],
  }

  const [userData, setUserData] = useState(initialData)
  const [start, setStart] = useState(false)
  const [personalDone, setPersonalDone] = useState(false)

  if (start) {
    return (
      <Personal userData={userData} setUserData={setUserData} setStart={setStart} setPersonalDone={setPersonalDone}/>
    )
  }

  if (personalDone) {
    return (
      <Education userData={userData} setUserData={setUserData} />
    )
  }
  
  return (
    <Hero setStart={setStart} /> 
  )
}
