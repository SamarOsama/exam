import logo from './logo.svg';
import './App.css';
import Login from './form/Login';
import { Provider } from 'react-redux';
import { questionStore } from './Redux/Store';
import Routes from './Navigation/Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">

      <Provider store={questionStore}  >
 <BrowserRouter baseurl={process.env.PUBLIC_URL}>
 <Routes/>
 </BrowserRouter>
    

      </Provider>
    </div>
  );
}

export default App;
