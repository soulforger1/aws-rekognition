import { useState } from "react";
import { ScreenContainer } from ".";
import { useAuth } from "../aws/auth";
import { Button, Input, Text } from "../components";

export const SignIn = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    try {
      await signIn({ email, password });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScreenContainer className="flex-col">
      <Text fontSize="32">Sign in</Text>
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
