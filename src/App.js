import './App.css';
import React, {useState} from 'react';
import Hero from './components/Hero';
import Personal from './components/Personal';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Interests from './components/Interests';

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
    socials: [],
  }

  const [userData, setUserData] = useState(initialData)
  const [start, setStart] = useState(false)
  const [personalDone, setPersonalDone] = useState(false)
  const [educationDone, setEducationDone] = useState(false)
  const [workDone, setWorkDone] = useState(false)
  const [skillsDone, setSkillsDone] = useState(false)

  if (skillsDone) {
    return (
      <Interests userData={userData} setUserData={setUserData} />
    )
  }

  if (workDone){
    return (
      <Skills 
        userData={userData} 
        setUserData={setUserData} 
        setSkillsDone={setSkillsDone}
        setWorkDone={setWorkDone}
      />
    )
  }

  if (educationDone){
    return (
      <Work 
        userData={userData} 
        setUserData={setUserData}
        setWorkDone={setWorkDone}
        setEducationDone={setEducationDone}
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
    </>
  )
}
