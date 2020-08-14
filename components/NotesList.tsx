import * as React from 'react';
import { Button, Text, View, NavigatorIOS, StyleSheet, SafeAreaView, FlatList, ListRenderItemInfo, ListRenderItem, Dimensions} from 'react-native';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export class NotesList extends React.Component<any, NotesListState>{
    constructor(props: any) {
        super(props);
        // TO DO --- get the state from local storage, and also make sure to save it there
        var note1 = this.createNote(1, "Groceries", "lettuce, tomatoes, cucumbers, olive oil, salt")
        var note2 = this.createNote(2, "Roommates", "David, Jordan, Reed, Jason, Alik")
        var note3 = this.createNote(3, "Dorm Stuff", "bedding, toiletries, food, TV");
        this.state = { notes: [note1, note2, note3] };
    }

    private createNote(id: number, title: string, text: string): Note {
        return {
            id,
            title,
            text
        };
    }

    renderNote: ListRenderItem<Note> = (item: ListRenderItemInfo<Note>) => (
        <NoteItem title={item.item.title} id={item.item.id} />
        //TO DO --- add onPress function here
    );

    render() {
        return (
            <View>
                <FlatList
                    style={styles.noteContainer}
                    data={this.state.notes}
                    renderItem={this.renderNote}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}

const NoteItem = (props: NoteItemProps) => (
    <View style={styles.noteItem}>
        <Text style={styles.noteItemTitle}>{props.title}</Text>
    </View>
);

type Note = {
    id: number;
    title: string;
    text: string;
}

type NoteItemProps = {
    title: string;
    id: number;
}

type NotesListState = {
    notes: Note[];
}

const styles = StyleSheet.create({
    noteItem: {
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: "#9c9c9c",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    noteItemTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    noteContainer: {
        height: Dimensions.get("window").height,
    }
});