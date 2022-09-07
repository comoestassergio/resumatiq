import './App.css';
import React, {useState} from 'react';
import Hero from './components/Hero';
import Personal from './components/Personal';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';

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
    skills: [],
  }

  const [userData, setUserData] = useState(initialData)
  const [start, setStart] = useState(false)
  const [personalDone, setPersonalDone] = useState(false)
  const [educationDone, setEducationDone] = useState(false)

  if (educationDone){
    return (
      <Work 
        userData={userData} 
        setUserData={setUserData}
      />
    )
  }

  if (personalDone) {
    return (
      <Education 
        userData={userData} 
        setUserData={setUserData} 
        setEducationDone={setEducationDone} 
        setPersonalDone={setPersonalDone} 
      />
    )
  }

  if (start) {
    return (
      <Personal 
        userData={userData} 
        setUserData={setUserData} 
        setStart={setStart} 
        setPersonalDone={setPersonalDone}
      />
    )
  }

  
  return (
    <>
      <Hero setStart={setStart} /> 
      <Skills />
    </>
  )
}
