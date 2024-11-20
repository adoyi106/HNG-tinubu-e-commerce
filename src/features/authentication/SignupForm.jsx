import { useNavigate } from "react-router-dom";
import Logo from "../../ui/Logo";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { useSignup } from "./useSignup";
// import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../../ui/Spinner";
// import { useSignup } from "../../context/SignupContext";

function SignupForm() {
  const navigate = useNavigate();
  // const { UpdateUserDetails } = useSignup();
  // const { loginWithRedirect } = useAuth0();
  // const { signup, isLoading: mutationLoading } = useSignup();
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  //eslint-disable-next-line
  const [userDetails, setUsersDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

  function toggleShowPassword(field) {
    setShowPassword((pass) => ({
      ...pass,
      [field]: !pass[field],
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUsersDetails({ ...userDetails, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // try {
    //   const token = await getAccessTokenSilently();
    //   const response = axios.get("http://localhost:4000/signup", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error.message);
    // }
    // setIsAuthLoading(true);
    try {
      if (userDetails.password !== userDetails.confirmPassword) {
        throw new Error("Paawords doesn't match");
      }

      //Signup with Auth0
      const response = await fetch(`https://${domain}/dbconnections/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: clientId,
          email: userDetails.email,
          password: userDetails.password,
          connection: "Username-Password-Authentication", //  Auth0 database connection name
          user_metadata: {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
          },
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error_description || data.message || "Signup failed"
        );
      }
      //   //csave details to context
      //   UpdateUserDetails(userDetails);
      //   //save sign up on local storage
      //   localStorage.setItem(
      //     "pendingSignUp",
      //     JSON.stringify({
      //       firstName: userDetails.firstName,
      //       lastName: userDetails.lastName,
      //       email: userDetails.email,
      //       password: userDetails.password,
      //       created_at: new Date().toISOString(),
      //     })
      //   );

      toast.success(
        "Successfully signed up! Please check your email to verify your account."
      );
      navigate("/verifyemail");
      // signup({
      //   auth0Id: userDetails.auth0Id,
      //   firstName: userDetails.firstName,
      //   lastName: userDetails.lastName,
      //   email: userDetails.email,
      //   created_at: new Date().toISOString(),
      // });
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.message || "Failed to sign up. Please try again.");
      setIsAuthLoading(false);
    }
    // } else {
    //   toast.success("Successfully signed up!");
    //   console.log(userDetails);
    // }
  }
  // console.log(user);
  if (isAuthLoading) return <Spinner />;
  return (
    <div className="min-h-screen  bg-gray-100 flex flex-col items-center py-8">
      <div className="text-center">
        <Logo />
      </div>
      {/* call to create account/login */}
      <div>
        <h2 className="text-5xl mb-5">Create an account</h2>
        <div className=" text-2xl flex flex-row gap-2">
          <span>Already have an account?</span>
          {/* <span> */}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-900 inline-block"
            role="button"
          >
            login
          </span>
        </div>
      </div>
      {/* form */}
      <div className="max-w-lg w-full my-12">
        <form className=" flex flex-col gap-4 " onSubmit={handleSubmit}>
          <div className="flex flex-row gap-3">
            <input
              name="firstName"
              value={userDetails.firstName}
              placeholder="First Name"
              className="text-2xl w-full p-3 focus:outline-none"
              onChange={handleChange}
            />
            <input
              name="lastName"
              value={userDetails.lastName}
              placeholder="Last Name"
              className="text-2xl w-full p-3 focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="email"
              type="email"
              value={userDetails.email}
              placeholder="Enter your Email "
              className="text-2xl w-full p-3 focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row gap-2 justify-center items-center bg-white pr-7">
            <input
              id="password"
              name="password"
              type={showPassword.password ? "text" : "password"}
              value={userDetails.password}
              placeholder="Enter your password"
              className="text-2xl w-full p-3 focus:outline-none"
              onChange={handleChange}
            />
            <span onClick={() => toggleShowPassword("password")}>
              {!showPassword.password ? (
                <FaRegEyeSlash size={20} fill="#7D7D7D" />
              ) : (
                <FaRegEye size={20} fill="#7D7D7D" />
              )}
            </span>
          </div>
          {/* <div className="grid grid-cols-[90fr_1fr] gap-2 justify-center items-center bg-white pr-7"> */}
          <div className="flex flex-row gap-2 justify-center items-center bg-white pr-7">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword.confirmPassword ? "text" : "password"}
              value={userDetails.confirmPassword}
              placeholder="Confirm password "
              className="text-2xl w-full p-3 focus:outline-none"
              onChange={handleChange}
            />
            <span onClick={() => toggleShowPassword("confirmPassword")}>
              {!showPassword.confirmPassword ? (
                <FaRegEyeSlash size={20} fill="#7D7D7D" />
              ) : (
                <FaRegEye size={20} fill="#7D7D7D" />
              )}
            </span>
          </div>
          {userDetails.password !== userDetails.confirmPassword &&
            userDetails.confirmPassword && (
              <p className="text-xl  text-red-400">Passwords doesnt match</p>
            )}
          <button
            type="submit"
            className="text-2xl w-full bg-orange-500 hover:bg-orange-300 text-black p-3 mt-3"
          >
            Submit
          </button>
        </form>
      </div>

      <div>
        <div className="max-w-lg w-full">
          <div className="flex items-center relative">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className=" text-2xl text-gray-500 px-4">
              Or register with
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="mt-3 flex items-center justify-center">
            <button
              className="flex items-center justify-center gap-3 border text-xl md:text-2xl border-gray-300 px-[4rem] py-3 rounded bg-inherit hover:bg-gray-200"
              onClick={() => {
                window.location.href = `https://${domain}/authorize?response_type=code&client_id=${clientId}&connection=google-oauth2&redirect_uri=${window.location.origin}/callback`;
              }}
            >
              <img
                src="https://authjs.dev/img/providers/google.svg"
                alt="Google logo"
                height="24"
                width="24"
              />
              <span>Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
