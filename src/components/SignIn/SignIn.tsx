import React, { useState ,  FormEvent, ChangeEvent } from "react";
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const SignIn= ({onLogin}) => {
  const navigate=useNavigate();
  const [fromData, setFromdata] = useState({
       email:"",password:""
  });

const HandleChange=(e:ChangeEvent<HTMLInputElement>)=>{
  setFromdata({ ...fromData , [e.target.name]:e.target.value});
}
  const Signin = async(e: FormEvent)=>{
    e.preventDefault();
    const {email,password}=fromData;
    try {
      const response = await fetch('http://localhost:5000/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         
          email,
          password,
        })
      });
      console.log("respose", response);
      
      
        if (response.ok) {
       
          const data = await response.json();
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem("isAdmin", data.isAdmin ? 'true' : 'false'); 
          localStorage.setItem('username', data.username);

          toast.success("user signup successfully");
          onLogin();
          navigate('/home');
        }
        else{
        throw new Error('Network response was not ok');
        }
      
  

    } catch (error) {
      alert("invalid email or password")
      toast.error("error while fetch the data");
    }
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-lg m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
           
            <div className="mt-2 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
              <div className="w-full flex-1 mt-1">
                <div className="flex flex-col items-center">
                </div>

                <div className="my-3 border-b text-center">
                 
                </div>
<form onSubmit={Signin}>
                <div className="mx-auto max-w-xs">
               
                  <input name="email" onChange={HandleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <input name="password" onChange={HandleChange}
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                  />
                  <button type="submit"
                   className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign In</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree the 
                     <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                       Terms of Service
                    </a>
                     and its
                     <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                  <p className=" text-sm text-center mt-2">Dont have an account? <Link to="/Signup" className=" text-blue-600 underline">Create Here</Link> </p>
                </div>
                </form>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;