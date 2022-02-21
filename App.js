import "react-native-gesture-handler";
import { Button, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>This is a Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate("DetailScreen");
        }}
      />
    </View>
  );
}

function DetailScreen({ navigation }) {
  return (
    <View>
      <Text>This is a Detail Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
