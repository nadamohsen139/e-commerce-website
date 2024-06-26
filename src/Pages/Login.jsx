import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";




const Login = () => {
  const navigate = useNavigate();
  const {setLoggedIn} = useContext(ShopContext);
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
  const handleClick = (e) => {
    if( passInp === '' || emailInp === '') {
  e.preventDefault();
  emailBlur();
  passBlur();
} else {
  setLoggedIn(true);
  navigate('/');
}
}
  return (
    <div className="login p-10 bg-gradient-to-b from-yellow-300">
      <div className="contain p-4 rounded-xl shadow-md bg-white">
        <h1 className="font-bold lg:text-4xl text-2xl text-center my-8">Login</h1>
        <form onSubmit={handleClick}>
        <div className="fields flex flex-col gap-7 justify-start items-center">
        <div className="flex items-center gap-1">
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder="Email Address" id="email" className="p-2 border border-gray-700 rounded-lg" onChange={(e)=> {setEmailInp(e.target.value)}} onBlur={emailBlur} />
          {emailErr ? <div className="text-red-600 font-medium px-2">{emailErr}</div> : null }
        </div>
        <div className="flex items-center gap-9">
          <label htmlFor="pass">Password</label>
          <input type="password" placeholder="Password" id="pass" className="p-2 border border-gray-700 rounded-lg" onChange={(e)=> {setPassInp(e.target.value)}} onBlur={passBlur}/>
          {passErr ? <div className="text-red-600 font-medium px-2">{passErr}</div> : null }
        </div>
        <div className="flex justify-center items-center">
          <button className="p-3 text-white rounded-lg bg-red-500 font-semibold" type="submit">Continue</button>
        </div>
        </div>
        </form>
        </div>
    </div>
  )
}

export default Login;