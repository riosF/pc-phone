import logo from "./logo.svg";
import "./App.css";
import PhoneApp from "./pages/phone";
import PCApp from "./pages/pc";

function App() {
  const isMobile = () => {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      return true;
    }
    return false;
  };

  return <div className="App">{isMobile() ? <PhoneApp /> : <PCApp />}</div>;
}

export default App;
