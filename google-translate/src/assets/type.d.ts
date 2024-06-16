import { AUTO_LANGUAGE, INTERCHANGE_LANGUAGE, SET_FROM_LANGUAGE, SET_FROM_RESULT, SET_FROM_TEXT, SET_TO_LANGUAGE, SUPPORT_LANGUAGES } from "./const"

export type Language = keyof typeof SUPPORT_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
    fromLanguage:FromLanguage,
    toLanguage:Language,
    fromText:string,
    result:string,
    loading:boolean
}

export type Action = 
    | {type:typeof SET_FROM_LANGUAGE ,payload: FromLanguage}
    | {type:typeof INTERCHANGE_LANGUAGE}
    | {type:typeof SET_TO_LANGUAGE,payload: Language}
    | {type:typeof SET_FROM_TEXT,payload: string|void}
    | {type:typeof SET_FROM_RESULT,payload: string|void}

export enum SectionType {
    From ='from',
    To='to'
}