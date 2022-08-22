import "./App.css";
import { Routes, Route} from "react-router-dom";
import { Home, Pomodoro, Task, Login, Signup} from "./frontend/pages/index"

function App() {
  return (

    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/signup" element={ <Signup />} />
      <Route path="/task" element={ <Task />} />
      <Route path="/pomodoro" element={ <Pomodoro />} />
    </Routes>

    )
}

export default App;
