import { ScreenContainer } from ".";
import { useAuth } from "../aws/auth";
import { Text } from "../components";

export const HomeScreen = () => {
  const { userData } = useAuth();

  console.log(userData);

  return (
    <ScreenContainer>
      <Text fontSize="32">Home Screen</Text>
    </ScreenContainer>
  );
};
