import { SAVE_BUTTON_CLICK, SET_SIDEBAR_TAB, DELETE_BUTTON_CLICK, HANDLE_EDITOR_CHANGE, SET_REQUEST_ERROR, SEND_SAVE_CONFIRMATION, SEND_DELETE_CONFIRMATION } from './types'
import { Note, NoteState } from '../entities'

export const setRequestError = (error: string) => ({ type: SET_REQUEST_ERROR, payload: error })
export const setSidebarTab = (note: Note) => ({ type: SET_SIDEBAR_TAB, payload: note })
export const saveButtonClick = () => ({ type: SAVE_BUTTON_CLICK })
export const deleteButtonClick = () => ({ type: DELETE_BUTTON_CLICK })
export const sendSaveConfirmation = (confirmation: boolean) => ({ type: SEND_SAVE_CONFIRMATION, payload: confirmation })
export const sendDeleteConfirmation = (confirmation: boolean) => ({ type: SEND_DELETE_CONFIRMATION, payload: confirmation })
export const handleEditorChange = (noteState: NoteState) => ( { type: HANDLE_EDITOR_CHANGE, payload: noteState })