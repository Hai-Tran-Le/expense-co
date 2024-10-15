import './App.css'
import {RouterProvider, createHashRouter} from "react-router-dom";
import HomeComponent from "./component/HomeComponent/HomeComponent.jsx";
import ProjectDetail from "./component/ProjectComponents/ProjectDetail.jsx";
import HomeContent from "./component/HomeComponent/HomeContent.jsx";

const router = createHashRouter([
    {
        path: '/',
        element: <HomeComponent/>,
        children: [
            {
                path: '/',
                element: <HomeContent/>,
            },
            {
                path: '/project/:projectId',
                element: <ProjectDetail/>
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router}/>
}

export default App
