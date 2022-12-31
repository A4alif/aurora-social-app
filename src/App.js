import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <div className="blur" style={{ top: "-18%", right: "0" }}></div>
          <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
          {/* <Home /> */}
          <Profile />
        </div>
      </div>
    </>
  );
}

export default App;
