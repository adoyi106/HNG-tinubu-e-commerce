import { Link, useNavigate } from "react-router-dom";
import Logo from "../../ui/Logo";
import { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useSignup } from "../../context/SignupContext";
import axios from "axios";
import toast from "react-hot-toast";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
  // const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  // const { userDetails } = useSignup;

  //eslint-disable-next-line
  // const [isVerifying, setIsVerfying] = useState(false);
  //eslint-disable-next-line
  // const [isLoadinging, setIsLoading] = useState(false);
  //eslint-disable-next-line
  // const [verificationStatus, setVerificationStatus] = useState(null);
  // const [user, setUser] = useState(null);

  //to go login if there is no pending sign up data
  // useEffect(() => {
  //   async function verify() {
  //     const pendingSignUp = localStorage.getItem("pendingSignuUp");
  //     console.log(pendingSignUp);
  //     console.log(userDetails);
  //     // if (!pendingSignUp) {
  //     //   setVerificationStatus("No pending signup found");
  //     // }
  //     try {
  //       const accessToken = await getAccessTokenSilently();
  //       // const claims = await getIdTokenClaims();
  //       const response = await fetch(`https://${domain}/userinfo`, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //       // console.log("Token :", claims);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }
  //       const data = await response.json();
  //       console.log("auth0_id:", data.sub);
  //       return;
  //       // if (!claims) {
  //       //   setVerificationStatus("unable to fetch verification status");
  //       // } else {
  //       //   setVerificationStatus("pending");
  //       //   setUser(claims);
  //       //   console.log(user);
  //       // }
  //     } catch (err) {
  //       console.error(err.message);
  //       throw err;
  //       // setIsLoading(false);
  //       // setIsVerfying(false);
  //       // setVerificationStatus("error");
  //     }
  //   }
  //   verify();
  //   //eslint-disable-next-line
  // }, [domain, getAccessTokenSilently]);

  //handle verify
  // async function handleVerify() {
  //   setIsVerfying(true);
  //   setIsLoading(true);

  //   try {
  //     const claims = await getIdTokenClaims();
  //     console.log("Token :", claims);

  //     if (!claims) {
  //       setVerificationStatus("unable to fetch verification status");
  //     } else {
  //       setVerificationStatus("pending");
  //     }
  //   } catch (err) {
  //     console.error(err.message);
  //     setIsLoading(false);
  //     setIsVerfying(false);
  //     setVerificationStatus("error");
  //   }
  // }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });

      const data = await response.json();

      if (data.error) {
        toast.error(data.details);
        return;
      }

      //success
      toast.success("Successfully Login");
      //navigate to products for now
      navigate("/products");
    } catch (error) {
      console.error("The login error:", error);
      toast.error("Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  function handleGoLogin(e) {
    e.preventDefault();
    navigate("/signup");
  }

  return (
    <div className=" min-h-[100vh] bg-gray-100 flex flex-col items-center">
      <div className="text-center">
        <Logo />
      </div>
      {/* <div className=" flex flex-col justify-center items-center "> */}
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-5 bg-white  max-w-md w-full p-8  h-full space-y-3 rounded-md"
      >
        <h2 className="text-2xl mb-8 tracking-wide font-semibold text-center">
          Log in to your account
        </h2>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-2xl py-2 pb-2 bg-gray-100 px-3 focus:outline-none focus:ring-2"
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            className="w-full text-2xl py-2 pb-3 border bg-gray-100 px-3 focus:outline-none focus:ring-2"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-300 transition p-5 text-2xl text-black font-semibold tracking-wider"
        >
          {isLoading ? "..login" : "Submit"}
        </button>
      </form>
      <div className="mt-5 text-2xl">
        <p>
          New to Fresh Harvest?{" "}
          <Link className="text-black" onClick={handleGoLogin}>
            Sign up
          </Link>
        </p>
      </div>
      {/* <div>{isAuthenticated && user}</div> */}
      {/* </div> */}
    </div>
  );
}

export default LoginForm;
