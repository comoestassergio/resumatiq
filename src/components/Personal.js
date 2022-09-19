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
                    pattern={'[a-zA-Z]+'} 
                    title={'First name must be no longer than 30 characters and contain letters of the latin alphabet only'}
                    maxLength={30}
                    required
                />
                <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Last Name" 
                    name="lastName"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1" 
                    value={formValues.lastName}
                    pattern={'[a-zA-Z]+'} 
                    title={'Last name must be no longer than 30 characters and contain letters of the latin alphabet only'}
                    maxLength={30}
                    required
                />
                <input 
                    onChange={handleChange} 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1" 
                    value={formValues.email}
                    pattern={'[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+'}
                    title={'Email must be of format: example@mail.com'}
                    maxLength={50}
                    required
                />
                <input 
                    onChange={handleChange} 
                    type="tel" 
                    placeholder="Phone Number" 
                    name="number"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1" 
                    value={formValues.number}
                    minLength={10}
                    maxLength={16}
                    title={'Phone number must not be shorter than 10 digits or longer than 16'}
                    required
                />
                <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Website (opt.)" 
                    name="website"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1"
                    value={formValues.website} 
                    pattern={'(https:\/\/){0,1}(www\.){0,1}([a-z]+)(\.[a-z]+)(\.[a-z]+){0,3}'}
                    title={'Website must be of format: example.com (https:// and www. are optional)'}
                    maxLength={30}
                />
                <input 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="City, Country" 
                    name="address"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1"
                    value={formValues.address} 
                    pattern={'[a-zA-Z]+,( ){0,1}[a-zA-Z]+'}
                    title={'City and country should be separated with a comma and 0 or 1 space and amount to no more than 50 characters'}
                    maxLength={50}
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