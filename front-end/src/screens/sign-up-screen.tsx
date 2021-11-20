import { useState } from "react";
import { ScreenContainer } from ".";
import { useAuth } from "../aws/auth";
import { Button, Input, Text } from "../components";

export const SignUp = () => {
  const [checkCode, setCheckCode] = useState(false);
  return checkCode ? (
    <CheckVerificationCode />
  ) : (
    <GetEmailAndPassword setCheckCode={setCheckCode} />
  );
};

const GetEmailAndPassword = ({ setCheckCode }: { setCheckCode: any }) => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    try {
      await signUp({ email, password });
      setCheckCode(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScreenContainer className="flex-col">
      <Text fontSize="32">Sign up</Text>
      <Input
        placeholder="Email"
        fontSize="24"
        className="pv-14 ph-30 mb-20 mt-20"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        fontSize="24"
        className="pv-14 ph-30 mb-20"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
      />
      <Button className="pv-14 ph-30" onClick={submit}>
        <Text fontSize="24">Submit</Text>
      </Button>
    </ScreenContainer>
  );
};

const CheckVerificationCode = () => {
  const { verify } = useAuth();
  const [code, setCode] = useState("");

  const check = async () => {
    try {
      await verify({ code });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScreenContainer className="flex-col">
      <Text fontSize="32">Verify email</Text>
      <Input
        placeholder="Code"
        fontSize="24"
        className="pv-14 ph-30 mb-20 mt-20"
        value={code}
        onChange={(e: any) => setCode(e.target.value)}
        type="text"
        maxLength={6}
        size={6}
      />
      <Button className="pv-14 ph-30" onClick={check}>
        <Text fontSize="24">Check</Text>
      </Button>
    </ScreenContainer>
  );
};
