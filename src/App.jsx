import Dashboard from "./components/Dashboard";
import FooterInfo from "./components/Footer/FooterInfo";
import MainHeader from "./components/Header/MainHeader";
import "./styles/components.css";
import "./App.css"
function App() {
  return (
    <div className="app" style={{display:"flex",flexDirection:"column",gap:10,backgroundColor:"#000"}}>
      <div>
       <MainHeader />
      </div>
      <div >
        <Dashboard />
      </div>
      <div>
        <FooterInfo />
      </div>
    </div>
  );
}

export default App;
