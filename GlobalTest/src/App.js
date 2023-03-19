import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import Context from "./store/2_context";
import AllContext from "./store/3_context";
//
function App() {
    return (
        <>
            <AllContext>
                <Context>
                    <RouterProvider router={router} />
                </Context>
            </AllContext>
        </>
    );
}

//
export default App;
