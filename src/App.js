import "./App.css";
import { Routes, Route} from "react-router-dom";
import { Home, Pomodoro, Task, Login, Signup, Profile} from "./frontend/pages/index";
import {Navbar, Myfooter, Aside, PrivateRoutes} from "./frontend/components/index";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="main-body-container">
            <Aside />
          <div className="main-page center">
              <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/signup" element={ <Signup />} />
                <Route path="/task" element={ 
                  < PrivateRoutes>
                    <Task /> 
                  </PrivateRoutes>} 
                />
                
                <Route path="/pomodoro/:id" element={   
                  < PrivateRoutes>
                    <Pomodoro />
                  </PrivateRoutes>} 
                />

                <Route path="/user-profile" element= {
                  < PrivateRoutes>
                    <Profile />
                  </PrivateRoutes>} 
                />
              </Routes>
             <Myfooter />
          </div>
        </div>
      </div>
    </>
    
  )
}

export default App;
