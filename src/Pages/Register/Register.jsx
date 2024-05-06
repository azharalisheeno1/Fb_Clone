import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
  };

  const RegisterForm = (values) => {
    localStorage.setItem("userData", JSON.stringify(values));
    // setSavedData(values)

    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center  items-center h-screen bg-gray-300">
        <div className="bg-white p-8 m-5 md:w-[500px] rounded-lg shadow-lg w-full sm:w-96">
          <h1 className="text-2xl font-semibold mb-6">Sign Up to Facebook</h1>
          <Formik initialValues={InitialValues} onSubmit={RegisterForm}>
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-medium"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your First Name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-medium"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your Last Name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-medium"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-medium"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dob"
                  className="block text-gray-700 font-medium"
                >
                  Date of Birth
                </label>
                <Field
                  type="date"
                  id="dob"
                  name="dob"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              {/* <Link to="/login">  */}
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
              >
                Sign Up
              </button>
              {/* </Link>  */}

              <div className="flex justify-center items-center gap-5">
                <p className="mt-5">Already create an accout ?</p>
                <Link to="/">
                  <button className=" bg-blue-500 mt-8 mb-4 text-white px-3 py-2 w-[160px] rounded-lg font-semibold text-lg">
                    Login
                  </button>
                </Link>
              </div>
            </Form>
          </Formik>
          <p className="mt-4 text-gray-600 text-sm">
            By signing up, you agree to our Terms, Data Policy and Cookies
            Policy.
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
