import Header from './component/header.js';
import Time from './component/main-contents';
import "./css/main-banner.css";
function App() {
  return (
    <div className="App">
        <div className="background-color-container">
            <Header/>
            <Time/>
        </div>
    </div>
  );
}

export default App;
