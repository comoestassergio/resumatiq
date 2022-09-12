import './App.css';
import React, {useState} from 'react';
import Hero from './components/Hero';
import Personal from './components/Personal';
import Education from './components/Education';
import Work from './components/Work';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Title from './components/Title';
import CV from './components/CV';

export default function App() {
  const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    website: '',
    address: '',
    telegram: '',
    linkedin: '',
    github: '',
    twitter: '',
    workExperience: [],
    education: [],
    interests: [],
    skills: [],
    title: '',
  }

  const [userData, setUserData] = useState(initialData)
  const [start, setStart] = useState(false)
  const [personalDone, setPersonalDone] = useState(false)
  const [educationDone, setEducationDone] = useState(false)
  const [workDone, setWorkDone] = useState(false)
  const [skillsDone, setSkillsDone] = useState(false)
  const [interestsDone, setInterestsDone] = useState(false)
  const [titleDone, setTitleDone] = useState(false)

  if (titleDone) {
    return (
      <CV userData={userData}/>
    )
  }

  if (interestsDone){
    return (
      <Title 
        userData={userData} 
        setUserData={setUserData}
        setTitleDone={setTitleDone}
        setInterestsDone={setInterestsDone}
      />
    )
  }

  if (skillsDone) {
    return (
      <Interests 
        userData={userData} 
        setUserData={setUserData}
        setInterestsDone={setInterestsDone}
        setWorkDone={setWorkDone} 
      />
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
