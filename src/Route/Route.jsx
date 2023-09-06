import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Editor from "../component/Editor/Editor";
import {v4 as uuid} from 'uuid'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/doc/:id',
                element:<Editor></Editor>
            },
            {
                path:'/',
                element:<Navigate replace to={`/doc/${uuid()}`} />
            }
        ]
    }
])

export default router;