const CAT_FACT ='https://catfact.ninja/fact' 

export const getRandomFact = async()=> {
    const res = await fetch(CAT_FACT)
    const data = await res.json()
    const {fact} = data
    return fact

}

export const getImageCatByFact = async(firtsPhrase)=> {
    const res = await fetch(`https://cataas.com/cat/says/${firtsPhrase}?size=50&color=red&json=true`)
    const data = await res.json()
    const { _id } = data
    return _id

}