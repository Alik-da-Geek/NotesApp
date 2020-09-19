import 'react-native-gesture-handler';
import * as React from 'react';
import {HomeScreen} from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NoteScreen } from './components/NoteScreen';
import { Note } from './types/Types';

export type NavParams = {
  Home: undefined,
  Note: { note: Note },
}

const Stack = createStackNavigator<NavParams>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Note" component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
