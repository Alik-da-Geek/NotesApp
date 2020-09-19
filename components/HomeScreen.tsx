import * as React from 'react';
import { NotesList } from './NotesList';
import { Button, Text, View, NavigatorIOS, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { NavigationContainer, useLinkProps, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { NavParams } from '../App';
import { Note, OpenNoteFunction } from '../types/Types';

type HomeScreenRouteProp = RouteProp<NavParams, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<NavParams, 'Home'>;
type HomeScreenProps = {
    route: HomeScreenRouteProp;
    navigation: HomeScreenNavigationProp;
}

export function HomeScreen(props: HomeScreenProps) {
    /*
    isn't this repetitive?
    const onOpenNote = (n: Note) => {} means a Note n is passed in and nothing is returned
    */
    const onOpenNote: OpenNoteFunction = (note: Note) => {
        props.navigation.push('Note', {note});
    }
    return (
        <View>
            <NotesList onOpenNote={onOpenNote} />
        </View>
    );
}