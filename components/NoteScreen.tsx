import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavParams } from '../App';
import { NotesScreenTitle } from './NotesScreenTitle'

type NotesScreenRouteProp = RouteProp<NavParams, 'Note'>;
type NotesScreenNavigationProp = StackNavigationProp<NavParams, 'Note'>;
type NotesScreenProps = {
    route: NotesScreenRouteProp;
    navigation: NotesScreenNavigationProp;
}

export function NoteScreen(props: NotesScreenProps) {
    return (
        <View style={styles.container}>
            <NotesScreenTitle title= {props.route.params.note.title} />
            <Text style={styles.text}>{props.route.params.note.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    text: {

    },
});