import "./App.css";
import { Routes, Route} from "react-router-dom";
import { Home, Pomodoro, Task, Login, Signup, Profile} from "./frontend/pages/index";
import {Navbar, Footer, Aside, PrivateRoutes} from "./frontend/components/index";

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
          </div>
        </div>
        <Footer />
      </div>
    </>
    
  )
}

export default App;
