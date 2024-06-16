import {useEffect, useState } from 'react'
import {getImageCatByFact} from '../services/cat-services'

export function useGetImage({fact}){
    const[image, setImage] = useState(null)
    const[stateButton, setstateButton] = useState(false)
    useEffect(()=>{
        setstateButton(false)
        if(!fact){
            return
        }
        const firtsPhrase = fact.split(' ',3).join(' ')
        getImageCatByFact(firtsPhrase).then((_id)=>{
          setImage(_id)
          setstateButton(true)
    
        });
    },[fact])

    return { image, stateButton}
}