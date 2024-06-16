import { Form } from "react-bootstrap"
import { AUTO_LANGUAGE, SUPPORT_LANGUAGES } from "../assets/const"
import { FromLanguage, Language, SectionType } from "../assets/type.d"

/* interface Propss{
    onChange :(language:Language)=>void 
}  */
type Props = 
    | {type:SectionType.From, value:FromLanguage, onChange:(language: FromLanguage)=> void}
    | {type:SectionType.To, value: Language, onChange:(language: Language)=> void}


export const  LanguageSelector =({onChange, type, value}:Props)=>{
    const handleCHange = (ev : React.ChangeEvent<HTMLSelectElement>)=>{
        onChange(ev.target.value as Language)
    }

    return(
        <Form.Select onChange={handleCHange} value={value}>
            {type== SectionType.From &&(
                <option value={AUTO_LANGUAGE}>Detectar Idioma </option>
            )}
            {Object.entries(SUPPORT_LANGUAGES).map(([key, value])=>(
                <option key={key} value={key}>
                    {value}
                </option>
            ))}
        </Form.Select>
    )
} 