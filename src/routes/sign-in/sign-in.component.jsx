import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sign-up.component";

// Import Redirect features
/*
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
*/

const SignIn = () => {
  //Google REdirect solution
  /*useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getRedirectResult(auth);

      // ...
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    fetchData();
  }, []);/*/

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
      {/*
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
  </button>*/}
    </div>
  );
};

export default SignIn;
