import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import sessionStorage from "redux-persist/es/storage/session";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn, "sgs");
  if (isLoggedIn) {
    if (JSON.parse(sessionStorage.getItem("persist:root")).user) {
      console.log(JSON.parse(sessionStorage.getItem("persist:root")).user);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn ? <Profile /> : <Navigate to="/signin" />}
        />
        <Route
          path="signin"
          element={!isLoggedIn ? <SignIn /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
