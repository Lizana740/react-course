import * as deepl from 'deepl-node';
import { FromLanguage, Language } from '../assets/type';

const authKey = "f63c02c5-f056-..."; // Replace with your key
const translator = new deepl.Translator(authKey);

export async function translate(
    fromLanguage:FromLanguage, 
    toLanguage:Language,
    text:string){
    const al = (fromLanguage=='auto')? null:fromLanguage 
    const tl = (toLanguage=='en')?'en-US':toLanguage
    const result = await translator.translateText(text,al,tl);
    return result.text
}