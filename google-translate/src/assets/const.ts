import { State } from "./type";
export const SUPPORT_LANGUAGES = {
    en:'English',
    es:'Spanish',
    de:'Deutsch'

}

export const AUTO_LANGUAGE = 'auto'

export const INTERCHANGE_LANGUAGE = 'INTERCHANGE_LANGUAGE'
export const SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE'
export const SET_TO_LANGUAGE = 'SET_TO_LANGUAGE'
export const SET_FROM_TEXT = 'SET_FROM_TEXT'
export const SET_RESULT = 'SET_FROM_RESULT'



export const INITIAL_STATE : State = {
    fromLanguage:'auto',
    toLanguage:'en',
    fromText:'',
    result:'',
    loading:false
} 