import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import MainRoot from "../Pages/MainRoot";
import Skills from "../Pages/Skills";

const Route=[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"skills",
                element:<Skills/>
            },
           
        ]
    }
]

export default Route