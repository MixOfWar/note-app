export type RawNoteData = {
	title: string
	markdown: string
	tagIds: string[]
}

export type NoteData = {
	title: string
	markdown: string
	tags: Tag[]
}

export type Tag = {
	id: string
	label: string
}

export type Note = NoteData & {
	id: string
}

export type RawNote = RawNoteData & {
	id: string
}

export type SimplifiedNote = {
	tags: Tag[]
	title: string
	id: string
}

export type NoteListProps = {
	availableTags: Tag[]
	notes: SimplifiedNote[]
}

// With Functions

export type NewNoteProps = {
	onSubmit: (data: NoteData) => void
	onAddTag: (tag: Tag) => void
	availableTags: Tag[]
}

export type NoteFormProps = {
	onSubmit: (data: NoteData) => void
	onAddTag: (tag: Tag) => void
	availableTags: Tag[]
}
