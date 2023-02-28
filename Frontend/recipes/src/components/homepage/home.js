import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../recipiedetails/recipieCard";
import { FaSearch } from "react-icons/fa";
import "./home.css";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let fetchRecipes = async () => {
      const response = await fetch("http://localhost:8081/all");
      const data = await response.json();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title &&
      recipe.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <header>
        <div>
          <Link to="/">
            <img
              id="logo"
              onClick={handleLogout}
              src={require("../../images/logomain.png")}
              alt="Recipie App logo"
            ></img>
          </Link>
        </div>
        <div>
          <span id="searchic">
            <FaSearch />
          </span>
          <input
            id="search"
            type="text"
            placeholder="                 Search recipes..."
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </header>
      <main>
        <div>
          <Link to="/addrecipe">
            <img
              id="new"
              src={require("../../images/add_newrecipe.png")}
              alt="Recipie App logo"
            ></img>
          </Link>
        </div>
        <h1>All Recipes</h1>
        <div>
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;



// import React, { useState, useEffect, } from "react";
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// import RecipeCard from '../recipiedetails/recipieCard';
// import { FaSearch } from "react-icons/fa";
// // import { getRecipies } from '../api/recipe'
// import './home.css';


// const HomePage = () => {
//     const [recipes, setRecipes] = useState([]);
//     const [searchValue, setSearchValue] = useState('');
//     const navigate = useNavigate();

//     // const AllRecipes = async () => {

//     //     const showRec = await fetch('http://localhost:8080/all');

//     //     setRecipes(await)
//     // }

//     useEffect(() => {
//         let fetchRecipies = async () => {
//             const getRecipies = await fetch('http://localhost:8081/all');

//             //     setRecipes(await)
//             let data = await getRecipies();
//             setRecipes(data);
//         };
//         fetchRecipies();
//     }, []);

//     const handleSearch = (event) => {
//         setSearchValue(event.target.value);
//     }

//     const handleLogout = () => {
//         navigate('/SignIn');
//     }

//     const filteredREcipies = recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchValue.toLowerCase()));
//     return (

//         <div>
//             <header>
//                 <div >
//                     <Link to='/SignIn'>
//                         <img id="logo" onClick={handleLogout} src={require('../../images/logomain.png')} alt="Recipie App logo" ></img>
//                     </Link>
//                 </div>
//                 <div>
//                     <span id='searchic'><FaSearch /></span>
//                     <input id='search' type="text" placeholder="                Search recipies.." value={searchValue} onChange={handleSearch} />
//                     {/* <Link>
//                     <button onClick={handleLogout}>Logout</button>
//                 </Link> */}
//                 </div>
//             </header>
//             <main>
//                 <div>
//                     <Link to='/addrecipe'>
//                         <img id="new" src={require('../../images/add_newrecipe.png')} alt="Recipie App logo" ></img>
//                     </Link>
//                 </div>
//                 <h1>All Recipies</h1>
//                 <div>
//                     {filteredREcipies.map((recipe) => (
//                         <RecipeCard key={recipe.id} recipe={recipe} />
//                     ))}

//                 </div>
//             </main>
//         </div>
//     );

// };

// export default HomePage;