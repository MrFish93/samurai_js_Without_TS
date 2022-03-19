import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className='app_wrapper_content'>
                    <Routes>
                        <Route
                            path='/messages'
                            element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}
                            />}
                        />
                        <Route
                            path='/profile'
                            element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

