import React, { useState } from "react";
import uniqid from 'uniqid'
import SkillCard from "./SkillCard";

const Skills = () => {

    const skills = []

    const [skillEntry, setSkillEntry] = useState(skills)
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSkillEntry(skillEntry.concat({
            skill: input,
            id: uniqid()
        }))
        setInput('')
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-base-200 gap-5">
            <ul className="flex flex-row gap-3 max-w-sm flex-wrap">
                {skillEntry.map(el => (
                    <SkillCard key={el.id} text={el.skill} setSkillEntry={setSkillEntry} skillEntry={skillEntry} card={el} />
                ))}
            </ul>
            <form className="flex gap-2 relative">
                <input
                    onChange={handleInput} 
                    type="text" 
                    placeholder="Enter skill" 
                    className="input input-bordered w-80 max-w-xs" 
                    name="skill"
                    value={input}
                    maxLength={30}
                    required
                />
                {input.length > 0 &&
                    <button 
                    onClick={handleSubmit} 
                    className="btn btn-primary absolute right-0 rounded-l-none"
                    >
                        Add
                    </button>
                }
            </form>
        </div>
    )
}

export default Skills