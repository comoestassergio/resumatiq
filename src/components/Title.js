import React, { useState } from "react";

const Title = ({ userData, setUserData, setTitleDone, setInterestsDone }) => {

    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleFinish = (e) => {
        e.preventDefault()
        setUserData({
            ...userData,
            title: input,
        })

        changePage()
    }

    const changePage = () => {
        setInterestsDone(false)
        setTitleDone(true)
    }

    return (
        <div className="flex flex-col items-center justify-center gap-5 min-h-screen bg-base-200">
            <form onSubmit={handleFinish} className="flex gap-2">
                <input
                    onChange={handleInput} 
                    type="text" 
                    placeholder="Position you're going for" 
                    className="input input-bordered w-80 max-w-xs" 
                    name="title"
                    value={input}
                    maxLength={45}
                    required
                />
            </form>
            {input.length > 0 &&
                <button type="submit" className="btn btn-primary">Finish</button>
            }
        </div>
    )
}

export default Title