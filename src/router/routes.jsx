import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Experience from "../Pages/Experience";
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
                path:"education",
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
            {
                path:"experience",
                element:<Experience/>
            },
           
        ]
    }
]

export default Route