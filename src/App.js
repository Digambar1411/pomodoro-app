import "./App.css";
import { Routes, Route} from "react-router-dom";
import { Home, Pomodoro, Task, Login, Signup, Profile} from "./frontend/pages/index";
import {Navbar, Footer, Aside} from "./frontend/components/index";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="main-body-container">
          <Aside />
          <div className="main-page">
              <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/signup" element={ <Signup />} />
                <Route path="/task" element={ <Task />} />
                <Route path="/pomodoro" element={ <Pomodoro />} />
                <Route path="/user-profile" element={ <Profile/>} />
              </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
    
  )
}

export default App;
