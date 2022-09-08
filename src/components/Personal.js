import React, { useState } from "react"
import Socials from "./PersonalSocials"

const Personal = ({userData, setUserData, setPersonalDone, setStart}) => {

    const [formValues, setFormValues] = useState(userData)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserData(formValues)
        changePage()
    }

    const changePage = () => {
        setStart(false)
        setPersonalDone(true)
    }

    const [addSocials, setAddSocials] = useState(false)

    const handleAddSocials = () => {
        setAddSocials(!addSocials)
    }

    return (
        <div className="flex flex-col items-center min-h-screen">
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 m-auto py-8">
                <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="First Name"
                    name="firstName" 
                    className='input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1' 
                    value={formValues.firstName} 
                    required
                />
                <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Last Name" 
                    name="lastName"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1" 
                    value={formValues.lastName}
                    required
                />
                <input 
                    onChange={handleChange} 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1" 
                    value={formValues.email}
                    required
                />
                <input 
                    onChange={handleChange} 
                    type="tel" 
                    placeholder="Phone Number" 
                    name="number"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1" 
                    value={formValues.number}
                    required
                />
                <input 
                    onChange={handleChange} 
                    type="url" 
                    placeholder="Website (opt.)" 
                    name="website"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1"
                    value={formValues.website} 
                />
                <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Address" 
                    name="address"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1"
                    value={formValues.address} 
                    required
                />
                {addSocials? <Socials setFormValues={setFormValues} formValues={formValues}/> : <></>}
                <button onClick={handleAddSocials} type="button" className="btn btn-ghost col-span-2">
                    {addSocials? 'Close Socials' : 'Add Socials'}
                </button>
                <button type="submit" className="btn btn-outline col-span-2">
                    Continue
                </button>
            </form>
        </div>
    )
}

export default Personal