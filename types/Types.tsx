export type Note = {
    id: number;
    title: string;
    text: string;
}

export type NotesListState = {
    notes: Note[];
}

export type NoteItemProps = {
    note: Note;
} & NoteNavigationProps;

export type NotesListProps = NoteNavigationProps

type NoteNavigationProps = {
    onOpenNote: OpenNoteFunction;
}

export type OpenNoteFunction = (n: Note) => void;