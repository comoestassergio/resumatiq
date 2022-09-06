import React from "react"

const Hero = ({ setStart }) => {

    const handleClick = () => {
        setStart(true)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">Résumé Creator</h1>
                <p className="py-6">Creating résumés made as easy as never before</p>
                <button onClick={handleClick} className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Hero