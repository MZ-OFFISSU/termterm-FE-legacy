import { useState, useEffect } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@interfaces/RootStackParamList";
import { Home } from "@screens/Index";

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const getFonts = async () => {
    await Font.loadAsync({
      SUIT: require("../assets/fonts/SUIT-Variable.ttf"),
    });
  };

  useEffect(() => {
    getFonts();
  }, []);

  return isReady ? (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  ) : (
    <></>
  );
}
