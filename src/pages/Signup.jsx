import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Join the millions learning to code from studyNotion for free"
    desc1="Build skills for today,tommorrow and beyond"
    desc2="Educate to future proof of your career"
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}

    />
  )
}

export default Signup