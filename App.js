import React, {useEffect, useState} from 'react';
import {Button, Text, View, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen({navigation}) {
  useEffect(() => {
    console.log('Home Screen Mounted !!!!');
    return () => {
      console.log('Home Screen Un---Mounted !!!!');
    };
  }, []);
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 24}}>This is a Home Screen</Text>
      <TextInput
        style={{margin: 30, fontSize: 21}}
        placeholder="Please Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate('DetailScreen', {name});
        }}
      />
    </View>
  );
}

function DetailScreen({route, navigation}) {
  useEffect(() => {
    console.log('Detail Screen Mounted !!!!');
    return () => {
      console.log('Detail Screen Un---Mounted !!!!');
    };
  }, []);
  const {name} = route.params;
  return (
    <View>
      <Text style={{fontSize: 24}}>Welcome {name}</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <Button
        title="Open Popup"
        onPress={() => {
          navigation.navigate('MyModal');
        }}
      />
    </View>
  );
}

function ModalScreen(route) {
  useEffect(() => {
    console.log('Modal Screen Mounted !!!!');
    return () => {
      console.log('Modal Screen Un---Mounted !!!!');
    };
  }, []);
  return (
    <View style={{margin: 60}}>
      <Text style={{fontSize: 24}}>Hey am a modal screen</Text>
      <Button
        title="Close this modal"
        onPress={() => {
          route.navigation.goBack();
          // route.navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home Screen',
        }}
      />
      <MainStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: 'Detail Screen',
          headerRight: () => {
            <Button title={'Done'} onPress={() => alert('Am pressed!')} />;
          },
          headerBackTitle: 'Back',
        }}
      />
    </MainStack.Navigator>
  );
}

function RootStackScreen() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        mode="modal"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'tomato',
          },
        }}>
        <RootStack.Screen name="MainStack" component={MainStackScreen} />
        <RootStack.Screen
          name="MyModal"
          component={ModalScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: 'skyblue',
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <RootStackScreen />;
}
