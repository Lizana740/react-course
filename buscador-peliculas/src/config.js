
export const configure = ()=>{
    const oldFetch = window.fetch
    window.fetch = (input,init) => {
        const token = localStorage.getItem('token')
        if(!token)return oldFetch(input,init)
        return oldFetch(input,init)
            .then(res => {
               console.log('OK .... ') 
                return res
            })
            .catch(err => {
                console.log("error ...")
                return err
            })
            .finally(()=>{
                
            })
    }
}