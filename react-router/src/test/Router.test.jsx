import { cleanup, fireEvent, render,screen} from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Link, Route, Router } from '../router/router'

import{getCurrentPath} from '../utils/utils.js'

vi.mock('../utils/utils.js',()=>({
    getCurrentPath:vi.fn()
}))

describe('Router', ()=>{
    
    beforeEach(()=>{
        cleanup()
        vi.clearAllMocks()
    })

    it("should Worker", ()=>{
        /* expect(1).toBe(1) */
        render(<Router routes={[]}/>)
        expect(true).toBeTruthy()
    })

    it("should render 404 of not route match",()=>{
        render(<Router routes={[]}/>)
        expect(screen.getByText('Not Fount Component')).toBeTruthy()

    })

    it('should render the component of the first route that maches', ()=>{
        getCurrentPath.mockReturnValue('/about')
        const routes = [
            {path:'/',Component: ()=> <h1>Home</h1>},
            {path:'/About',Component:()=> <h1>About</h1>}
        ]

        render(<Router routes={routes}></Router>)
        expect(screen.getByText('About')).toBeTruthy()
    })

    it('should render the component click event',async()=>{
        getCurrentPath.mockReturnValueOnce('/')
        render(
        <Router routes={[]}>
            <Route path={'/'} Component={()=> <Link to={'/about'}>Go to About</Link>}></Route>
            <Route path={'/about'} Component={()=> <h1>About</h1>}></Route>
        </Router>
        )

        const link = await screen.findByText('Go to About')
        fireEvent.click(link)
        const title = (await screen.findByText('About')).textContent
        console.log(title)
        expect(title).equal("About")
    })
})