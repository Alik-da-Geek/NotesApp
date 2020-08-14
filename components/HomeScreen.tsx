import * as React from 'react';
import {NotesList} from './NotesList'; 
import { Button, Text, View, NavigatorIOS, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function HomeScreen() {
    return (
        <View>
            <NotesList />
        </View>
    );
}