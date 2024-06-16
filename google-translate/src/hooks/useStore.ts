import { INITIAL_STATE, INTERCHANGE_LANGUAGE, SET_FROM_LANGUAGE, SET_RESULT, SET_FROM_TEXT, SET_TO_LANGUAGE, AUTO_LANGUAGE } from '../assets/const';
import { useReducer } from 'react';
import { Action, FromLanguage, Language, State } from '../assets/type';

const reduce = (state: State,action:Action) => {
  const {type} = action

  if(type === INTERCHANGE_LANGUAGE ){
    // 
    if(state.fromLanguage === AUTO_LANGUAGE) return state
    return{
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }
  if(type === SET_FROM_LANGUAGE){
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if(type=== SET_TO_LANGUAGE){
    return {
      ...state,
      toLanguage:action.payload
    }
  }

  if(type === SET_FROM_TEXT){
    return{
      ...state,
      text:action.payload,
      loading:true,
      result:''
    }
  }
  if(type === SET_RESULT){
    return{
      ...state,
      result:action.payload,
      loading:false
    }
  }

  return  state
}

export function useStore(){
  const [state,dispatch] = useReducer(reduce, INITIAL_STATE)

  const interchangeLanguage =   () => {
    dispatch({type: INTERCHANGE_LANGUAGE})
  }

  const setFromLanguage =   (payload:FromLanguage) => {
    dispatch({type: SET_FROM_LANGUAGE, payload})
  }

  const setToLanguage =   (payload:Language) => {
    dispatch({type: SET_TO_LANGUAGE, payload})
  }
  const setFromText = (payload:string) =>{
    dispatch({type: SET_FROM_TEXT, payload})
  }

  const setResult = (payload:string)=>{
    dispatch({type: SET_RESULT, payload})
  }

  
  return {
    state,
    interchangeLanguage,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}