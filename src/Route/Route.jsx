import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Editor from "../component/Editor/Editor";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Editor></Editor>
            }
        ]
    }
])

export default router;