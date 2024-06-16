import { Form } from "react-bootstrap"
import { SectionType } from "../assets/type.d"

interface Props {
    loading: boolean,
    value:string,
    onChange: (value:string) => void,
    type:SectionType
}

const commonStyles = {
    height:'200px',
    border:0,
    resize:'none'
}

const getPlaceholder = ({type, loading}:{type:SectionType,loading:boolean })=>{
    if(type == SectionType.From)return 'Introducir texto'
    if(loading== true) return 'Cargando...'
    return "Traducción"
}

export const TextArea = ({loading,value,type,onChange}:Props)=>{
    
    const style = (type === SectionType.From)?commonStyles:
    {...commonStyles, backgroundColor:'#f5f5f5'}

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        onChange(event.target.value)
    }

    return(
        <Form.Control
        as='textarea'
        placeholder={getPlaceholder({type,loading})}
        autoFocus={ type == SectionType.From}
        style={style}
        onChange={handleChange} 
        disabled={type == SectionType.To}
      >
      </Form.Control>
    )
}