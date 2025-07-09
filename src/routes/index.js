// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Home from "../pages/Home";
// import ExplorePage from "../pages/ExplorePage";
// import DetailsPage from "../pages/DetailsPage";
// import SearchPage from "../pages/SearchPage";
// import NotFound from '../pages/NotFound';

// const router = createBrowserRouter([
//     {
//         path : "/",
//         element : <App/>,
//         children : [
//             {
//                 path : "",
//                 element : <Home/>
//             },
//             {
//                 path : ":explore",
//                 element : <ExplorePage/>
//             },
//             {
//                 path : ":explore/:id",
//                 element : <DetailsPage/>
//             },
//             {
//                 path : "search",
//                 element : <SearchPage/>
//             }
//         ]
//     }
// ])

// export default router



import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage";
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: ":explore",
        element: <ExplorePage />
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />
      },
      {
        path: "search",
        element: <SearchPage />
      },
      {
        path: "*",  // 👈 catch-all route for 404 inside the App layout
        element: <NotFound />
      }
    ]
  },
  {
    path: "*", // 👈 catch-all route for unmatched base paths (like /random)
    element: <NotFound />
  }
]);

export default router;
