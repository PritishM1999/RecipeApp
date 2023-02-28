// import logo from './logo.svg';
import './App.css';

import SignUp from './components/signup/Signup';
import SignIn from './components/signin/Signin';
import HomePage from './components/homepage/home';
import NewRecipeForm from './components/addrecipe/AddRecipe'

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/" element={<SignIn/>}></Route>
          <Route path="/homepage" element={<HomePage/>}></Route>
          <Route path="/addrecipe" element={<NewRecipeForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
