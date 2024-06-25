import {  createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import LandingPage from "./page/LandingPage"
import Dashboard from "./page/Dashboard"
import Auth from "./page/Auth"
import Link from "./page/Link"
import RedirectLink from "./page/RedirectLink"

function App() {
  
  const route = createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<LandingPage/>
        },
        {
          path:'/auth',
          element:<Auth/>
        },
        {
          path:'/dashboard',
          element:<Dashboard/>
        },{
          path:'/link/:id',
          element:<Link/>
        },{
          path:'/:id',
          element:<RedirectLink/>
        },
      ]
    }
  ])
  
  return (
    <div>
     <RouterProvider router={route}/>
    </div>
  )
}

export default App
