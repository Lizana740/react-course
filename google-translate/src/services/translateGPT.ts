import OpenAI from 'openai'
import { FromLanguage, Language } from '../assets/type'
import { SUPPORT_LANGUAGES } from '../assets/const'

const apiKey = import.meta.env.VITE_OPENAI_KEY

const openai = new OpenAI({apiKey,dangerouslyAllowBrowser: true})

export async function translate(
    fromLanguage:FromLanguage, 
    toLanguage:Language,
    text:string){

        const fromCode = fromLanguage==='auto'?'auto':SUPPORT_LANGUAGES[fromLanguage]
        const toCode = SUPPORT_LANGUAGES[toLanguage]

        const completions:OpenAI.Chat.ChatCompletion = await openai.chat.completions.create({
            model:'gpt-3.5-turbo',
            messages:[
                {
                    role:'system',
                    content:`Eres un AI para traducir texto, 
                    Recibes un texto del usuario. Sin respuestas, solo traduces el texto, EL texto original viene enserrado entre '{{' y '}}',
                    cuando recibas un {{auto}} debes detectar el idioma automaticamente. Tu debes trasducir al idioma que se encuentra entre '[[' y ']]'.`
                },
                {
                    role:'user', 
                    content:`Hola mundo! {{Spanish}} [[English]]`
                },
                {
                    role:'assistant',
                    content:`Hello world!`
                },
                {
                    role:'user',
                    content:`How are you? {{English}} [[Spanish]]`
                },
                {
                    role:'assistant',
                    content:`Como estas?`
                },
                {
                    role:'user',
                    content:`${text} {{${fromCode}}} [[${toCode}]]`
                }
            ]
        })

    return completions.choices[0]?.message?.content
}