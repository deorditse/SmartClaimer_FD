
import './App.css';
import Rectangle from "./components/Header/Background/background";
import Title from "./components/Header/Title/Name/name";
import Logo from "./components/Header/Title/Logo/logo";
import ButtomRegistration from "./components/Header/Title/Buttom_registration/buttom_registration";

const App = (props) => {
   return (
      <div>
         <Rectangle/>
          <Title/>
          <Logo/>
          <ButtomRegistration/>
      </div>
   );
}

export default App;
