import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
import { useEffect, useState } from "react";

const poolData = {
  UserPoolId: "us-east-1_KS2lF8b8a",
  ClientId: "7na44b7gd5q0q5fg65k37bm6hc",
};
const userPool: any = new CognitoUserPool(poolData);

export const useAuth = () => {
  const [cognitoUser, setCognitoUser] = useState<any>({ Pool: userPool });
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(userPool.getCurrentUser());
  }, []);

  const signUp = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    userPool.signUp(email, password, null, null, (err: any, result: any) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }

      setCognitoUser(result.user);
    });
  };

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    var authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    const userInfo = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    userInfo.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const accessToken = result.getAccessToken().getJwtToken();
        console.log(accessToken);
      },

      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
      },
    });
  };

  const verify = ({ code }: { code: string }) => {
    cognitoUser.confirmRegistration(code, true, (err: any, result: any) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log("call result: " + result);
    });
  };

  const logout = async () => {
    try {
      const cognitoUser = userPool.getCurrentUser();
      if (cognitoUser !== null) {
        await cognitoUser.signOut();
      }
      return;
    } catch (err) {
      console.error(err);
    }
  };

  return { signUp, signIn, userData, verify, logout };
};
