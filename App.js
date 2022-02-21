import "react-native-gesture-handler";
import { Button, Text, View, TextInput } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [name, setName] = React.useState("");
  return (
    <View>
      <Text style={{ fontSize: 24 }}>This is a Home Screen</Text>
      <TextInput
        style={{ margin: 30, fontSize: 21 }}
        placeholder="Please Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate("DetailScreen", { name });
        }}
      />
    </View>
  );
}

function DetailScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Welcome {name}</Text>
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
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "tomatao",
          },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "tomato",
            },
          }}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
