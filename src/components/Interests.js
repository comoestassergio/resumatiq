import React, {useState} from "react";
import uniqid from 'uniqid'
import InterestCard from "./InterestCard";

const Interests = ({ userData, setUserData, setInterestsDone, setWorkDone }) => {

    const interests = []

    const [interestEntry, setInterestEntry] = useState(interests)
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInterestEntry(interestEntry.concat({
            interest: input,
            id: uniqid()
        }))
        setInput('')
    }

    const handleContinue = () => {
        setUserData({
            ...userData,
            interests: interestEntry,
        })

        changePage()
    }

    const changePage = () => {
        setWorkDone(false)
        setInterestsDone(true)
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-base-200 gap-5">
            <ul className="flex flex-row gap-3 max-w-xs md:max-w-lg lg:max-w-xl flex-wrap">
                {interestEntry.map(el => (
                    <InterestCard key={el.id} text={el.interest} setInterestEntry={setInterestEntry} interestEntry={interestEntry} card={el} />
                ))}
            </ul>
            <form className="flex gap-2 relative">
                <input
                    onChange={handleInput} 
                    type="text" 
                    placeholder="Your interest here" 
                    className="input input-bordered w-80 max-w-xs" 
                    name="interest"
                    value={input}
                    maxLength={30}
                    required
                />
                {input.length > 0 &&
                    <button 
                    onClick={handleSubmit} 
                    className="btn btn-accent absolute right-0 rounded-l-none"
                    >
                        Add
                    </button>
                }
            </form>
            {interestEntry.length > 0 &&
                <button onClick={handleContinue} className="btn btn-ghost">Continue</button>
            }
            {interestEntry.length < 1 &&
                <button onClick={handleContinue} className="btn btn-ghost">Skip</button>
            } 
        </div>
    )
}

export default Interests