import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from './../context/ShopContext';



const Login = () => {
  const {setLoggedIn} = useContext(ShopContext);

  const [nameInp, setNameInp] = useState('');
  const [nameErr, setNameErr] = useState(null);
  const nameBlur = () => {
    if(nameInp === '') {
      setNameErr("Username is required");
    }else if(!nameInp.match(/(\w{4,})(\s{1})(\w{4,})/)) {
      setNameErr("Write A Fullname");
    } else {
      setNameErr(null);
    }
  }

  const [emailInp, setEmailInp] = useState('');
  const [emailErr, setEmailErr] = useState(null);
  const emailBlur = () => {
    if(emailInp === '') {
      setEmailErr("Email Account is required");
    }else if(!emailInp.match(/\w+@\w+.\w+/)) {
      setEmailErr("Write An Invalid Email Account");
    } else {
      setEmailErr(null);
    }
  }

  const [passInp, setPassInp] = useState('');
  const [passErr, setPassErr] = useState(null);
  const passBlur = () => {
    if(passInp === '') {
      setPassErr("Password is required");
    }else if(!passInp.match(/(\d{8,})/)) {
      setPassErr("Write A Strong Password");
    } else {
      setPassErr(null);
    }
  }

  const [acceptInp, setAcceptInp] = useState(false);
  const [acceptErr, setAcceptErr] = useState(null);
  const acceptBlur = () => {
    if(acceptInp === false) {
      setAcceptErr("you Have To Accept the terms of use & privacy policy");
    } else {
      setAcceptErr(null);
    }
  }
  const handleSubmit = (e) => {
      if(nameInp === '' || passInp === '' || emailInp === '' || acceptInp === false) {
    e.preventDefault();
    nameBlur();
    emailBlur();
    passBlur();
    acceptBlur();
  } else {
    setLoggedIn(true);
    const setdataup = {
      name: nameInp,
      emailKey: emailInp,
      pass: passInp
    };
    localStorage.setItem("sign-up-data", JSON.stringify(setdataup));
    console.log("Data saved to localStorage:", JSON.stringify(setdataup));
  }
  }


  return (
    <div className="sign-up p-10 bg-gradient-to-b from-yellow-300">
      <div className="contain p-4 rounded-xl shadow-md bg-white">
        <h1 className="font-bold lg:text-4xl text-2xl text-center my-8">Sign Up</h1>
        <form onSubmit={handleSubmit}>
        <div className="fields flex flex-col gap-7 justify-start items-center">
          <div className="flex items-center gap-7">
          <label htmlFor="name">First Name</label>
          <input type="text" placeholder="Your Name" id="name" className="p-2 border border-gray-700 rounded-lg" onChange={(e)=> {setNameInp(e.target.value)}} onBlur={nameBlur} />
          {nameErr ? <div className="text-red-600 font-medium px-2">{nameErr}</div> : null }
          </div>
          <div className="flex items-center gap-1">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Email Address" id="email" className="p-2 border border-gray-700 rounded-lg" onChange={(e)=> {setEmailInp(e.target.value)}} onBlur={emailBlur} />
          {emailErr ? <div className="text-red-600 font-medium px-2">{emailErr}</div> : null }
          </div>
          <div className="flex items-center gap-4 md:gap-9">
          <label htmlFor="pass">Password</label>
          <input type="password" placeholder="Password" id="pass" className="p-2 border border-gray-700 rounded-lg" onChange={(e)=> {setPassInp(e.target.value)}} onBlur={passBlur}/>
          {passErr ? <div className="text-red-600 font-medium px-2">{passErr}</div> : null }
          </div>
        </div>
        <div className="agree flex justify-center items-center gap-4 p-6">
          <input type="checkbox" id="agree" className="w-5 h-5 accent-red-500" onChange={(e)=> {setAcceptInp(e.target.checked)}} onBlur={acceptBlur} />
          <label htmlFor="agree">By Continuing, I agree to the terms of use & privacy policy.</label>
          {acceptErr ? <div className="text-red-600 font-medium">{acceptErr}</div> : null }
        </div>
        <div className="flex justify-center items-center">
          <button className="p-3 text-white rounded-lg bg-red-500 font-semibold" type="submit">Continue</button>
        </div>
        </form>
        <div className="justify-center items-center p-4 flex gap-4">Already Have An Account?<Link to='/login'><button className="font-semibold text-red-500">Login Now</button></Link></div>
      </div>
    </div>
  )
}

export default Login;