import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";

import "./authentication.styles.scss";

// Import Redirect features
/*
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
*/

const Authentication = () => {
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

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/*
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
  </button>*/}
    </div>
  );
};

export default Authentication;
