import { Children, useEffect, useState } from "react"
import { match } from 'path-to-regexp'
import { getCurrentPath } from "../utils/utils"

const EVENT ={
    NAVIGATION:'pushstate'
  }

const navegar = (href) => {
  window.history.pushState({},'',href)
  const ev = new Event(EVENT.NAVIGATION)
  window.dispatchEvent(ev)
}


export function Router({children,routes = [], Component:DefaultComponent = ()=> <a>Not Fount Component</a>}){
  const [currentPath, setCurrentPath] = useState(getCurrentPath())
  
  let routeParams = {}

  const routeFromChildren = Children.map(children, ({type,props})=>{
    const {name }= type
    const isRoute = name == 'Route'
   return isRoute? props:null
  })
  const routeToUse = routes.concat(routeFromChildren).filter(Boolean)
  
  
  useEffect(()=>{
    const onLocationChange = ()=>{
      setCurrentPath(getCurrentPath())
    } 

    window.addEventListener(EVENT.NAVIGATION, onLocationChange)
    return ()=>{
      window.removeEventListener(EVENT.NAVIGATION,onLocationChange)
    }

  },[])

  const Page = routeToUse.find(({path})=>{
    if(path === currentPath) return true 
    
    const mactherUrl = match(path, {decode: decodeURIComponent})
    const macthUrl = mactherUrl(currentPath)
    
    if(!macthUrl) return false
    
    routeParams = macthUrl.params
    return true 

    })?.Component
    
  return Page? <Page routeParams={routeParams} />: <DefaultComponent/>
}


// eslint-disable-next-line no-unused-vars
export function Route({path,Component}){
  return null
}

export function Link({target,to, ...props}){

  const handleClick = (event)=>{
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.crtlKey || event.shielKey 
    const isManagableEvent = target === undefined || target=== '_self'
    if(isMainEvent && isManagableEvent && !isModifiedEvent){
      event.preventDefault()
      navegar(to)
    }
  }

  return (
    <a  onClick={handleClick} href={to} target={target} {...props} ></a>
  )
}