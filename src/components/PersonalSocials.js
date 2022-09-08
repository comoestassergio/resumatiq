import React from "react";
import telegram from '../images/telegram.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import twitter from '../images/twitter.png'

const Socials = ({ formValues, setFormValues }) => {

    const handleInput = (e) => {
        const {name, value} = e.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }


    return (
        <ul className="flex flex-col items-center gap-3 col-span-2 my-3">
            <li className="flex items-center justify-center gap-3">
                <img src={telegram} alt="Telegram" width={30}/>
                <input 
                    onChange={handleInput}
                    type="url" 
                    placeholder="Telegram (opt.)" 
                    name="telegram"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1"
                    value={formValues.telegram} 
                />
            </li>
            <li className="flex items-center justify-center gap-3">
                <img src={linkedin} alt="LinkedIn" width={30}/>
                <input 
                    onChange={handleInput}
                    type="url" 
                    placeholder="LinkedIn (opt.)" 
                    name="linkedin"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1" 
                    value={formValues.linkedin}
                />
            </li>
            <li className="flex items-center justify-center gap-3">
                <img src={github} alt="GitHub" width={30}/>
                <input
                    onChange={handleInput} 
                    type="url" 
                    placeholder="GitHub (opt.)" 
                    name="github"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1"
                    value={formValues.github}
                    />
            </li>
            <li className="flex items-center justify-center gap-3">
                <img src={twitter} alt="Twitter" width={30}/>
                <input 
                    onChange={handleInput}
                    type="url" 
                    placeholder="Twitter (opt.)" 
                    name="twitter"
                    className="input input-bordered w-full max-w-xs col-span-2 m-auto sm:col-span-1"
                    value={formValues.twitter} 
                />
            </li>
        </ul>
    )
}

export default Socials