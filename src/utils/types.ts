/**
 * * Data Storage
 */
// Used for storing tag id so it can be referenced if the label is later changed
export type RawNoteData = {
	title: string
	markdown: string
	tagIds: string[]
}

// info gathered from user for storing notes
export type NoteData = {
	title: string
	markdown: string
	tags: Tag[]
}

export type Tag = {
	id: string
	label: string
}

export type SimplifiedNote = {
  tags: Tag[]
  title: string
  id: string
}

// used for storing raw data for later use
export type Note = NoteData & {
	id: string
}

export type RawNote = RawNoteData & {
	id: string
}

export type NoteLayoutProps = {
  notes: Note[];
}

/**
 * * With Functions
 */

export type NoteProps = {
  onDelete: (id: string) => void
}

export type NewNoteProps = {
	onSubmit: (data: NoteData) => void
	onAddTag: (tag: Tag) => void
	availableTags: Tag[]
}

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
} & Partial<NoteData>;

export type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

export type NoteListProps = {
  availableTags: Tag[]
  notes: SimplifiedNote[]
  onDeleteTag: (id: string) => void
  onUpdateTag: (id: string, label: string) => void
}

export type EditTagsModalProps = {
  show: boolean
  availableTags: Tag[]
  handleClose: () => void
  onDeleteTag: (id: string) => void
  onUpdateTag: (id: string, label: string) => void
}
