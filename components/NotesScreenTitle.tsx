import { View, Text, StyleSheet } from "react-native";
 
type NoteScreenTitleProps = {
    title: string;
}
export function NotesScreenTitle(props: { title: string }) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 5,

    },
    titleContainer: {
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 10,
    },
});