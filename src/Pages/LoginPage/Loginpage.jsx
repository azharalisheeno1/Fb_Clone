import { Formik ,Form, Field} from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Loginpage() {
  const navigate=useNavigate()
const InitialValues={
  email:"",
  password:""
}
const LogIn=(values)=>{
  const { email, password } = values;

  const loggeduser=JSON.parse(localStorage.getItem("userData"));
  if(email===loggeduser.email && password===loggeduser.password){
      navigate("/home")
  }else{
    alert("Enter E-mail & Password");
  }
}

  return (
    <>
    <div className='p-20 h-screen w-screen flex flex-col-reverse md:flex-row  items-center justify-center bg-gray-200'>
      <div className='content text-3xl md:ml-40 text-center md:text-left '>
        <h1 className='md:text-6xl text-5xl  font-semibold text-blue-500'>Facebook</h1>
        <h3 className=''>Facebook helps you connect and share with the people in your life.</h3>
      </div>
      <div className="container mx-auto flex flex-col items-center">
    <Formik initialValues={InitialValues} onSubmit={LogIn}>
    <Form className="shadow-lg w-80 md:w-[350px]  p-4 flex flex-col bg-white my-10 rounded-lg">
      <Field type="email" name="email" placeholder="Email or Phone Number" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <Field type="password" name="password" placeholder="Pasword" className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
      <button type='submit' className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold text-lg">Login</button>
      <a className="text-blue-400 text-center my-2">Forgot Pasword?</a>
      <hr />
      <Link to="/register">
      <button className="w-full bg-green-600 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Create New Account</button>
      </Link>
    </Form>
    </Formik>
    <p className="text-center text-sm my-4">
      <span className="font-semibold text-center w-full">Create a Page</span> for a celebrity, band or business
    </p>
  </div>

    </div>
    
    </>
  )
}

export default Loginpage