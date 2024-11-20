// import { useAuth0 } from "@auth0/auth0-react";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  //   const navigate = useNavigate();
  // const { getIdTokenClaims } = useAuth0();
  // const [isVerifying, setIsVerfying] = useState(false);
  // //eslint-disable-next-line
  // const [isLoadinging, setIsLoading] = useState(false);
  // //eslint-disable-next-line
  // const [verificationStatus, setVerificationStatus] = useState(null);

  // //to go login if there is no pending sign up data
  // useEffect(() => {
  //   const pendingSignUp = localStorage.getItem("pendingSignuUp");
  //   if (!pendingSignUp) {
  //     setVerificationStatus("No pending signup found");
  //   }
  // }, []);

  // //handle verify
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
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-lg w-full ">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Verify Your Email
        </h1>
        <div className="my-6 text-2xl">
          <p className="mb-3">
            We&apos;ve sent a verification link to your email address. Please,
            Check your email inbox.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
