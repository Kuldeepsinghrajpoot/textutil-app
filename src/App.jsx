import { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import About from "./component/About";
import Navigation from "./component/Navigation";
import TextFrom from "./component/TextFrom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// this is funciton of app and also this is main function
function App() {
  // this is a state which is doing two work 1 set the conetent the temporty into the mode and send is setMode is store the parmanent when it will not change then it will worked

  // also first mode is send to the first function to the second and second method is setMethod is use to set the parameter and value which we want to store and execute.

  const [mode, setMode] = useState("light");

  const toogle = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      messageArgument("success", "Light mode is enabled");
      console.log(mode);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      messageArgument("success", "Dark mode is enabled");
    }
  };
  const [alert, setAlert] = useState(null);
  const messageArgument = (typeMsg, Msg) => {
    setAlert({
      Msg: Msg,
      type: typeMsg,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // where darkmode is enabled or not
  return (
    <>
      {/* <Navigation/> */}
      {/* not sending the title and about then it will default from the Navigation file */}
      <Router>
        <Navigation
          title={"TextUtils"}
          about="About us"
          mode={mode}
          toggle={toogle}
        />
        <Alert alert={alert} mode={mode} />
        <div className="container">
          <Routes>
            <Route
              path="/" element={ <TextFrom heading="Enter the text" mode={mode }messageArgument={messageArgument}/>}
            />
            <Route  path="/About" element={ <About mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
