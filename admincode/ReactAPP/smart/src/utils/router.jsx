import {
    createBrowserRouter,
} from "react-router-dom";
import Admin from "../pages/admin";


const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Admin/>,
        },
    ],
)
export { router}