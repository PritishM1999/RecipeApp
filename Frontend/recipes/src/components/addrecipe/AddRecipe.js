import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRecipe.css';

const NewRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [useFileInput, setUseFileInput] = useState(false);
    const [imageInput, setImageInput] = useState('');

    const navigate = useNavigate(); 
    
    const handleImageInputChange = (event) => {
        setImageInput(event.target.value);
        setUseFileInput(false);
    }

    const handleImageFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result);
                setUseFileInput(true);
            }
        }
    };

    const uploadRecipe = (event) => {
        event.preventDefault();

        const recipeData = {
            title,
            author,
            image: useFileInput ? image : imageInput,
            ingredients,
            instructions,
        };

        // addRecipe(recipeData)
        //   .then(response => {
        //     // Handle success
        //   })
        //   .catch(error => {
        //     // Handle error
        //   });

        fetch("http://localhost:8081/api/postrecipe",{
            method: 'POST',
            body: recipeData
        })
        navigate('/homepage');
    };

    return (
        <div className='Add'>
            <h1>Create a recipe</h1>
            <p>Share the recipe with the club by completing the form below</p>
            <br/>
            <form onSubmit={uploadRecipe}>
                <div id="title">
                    <label htmlFor="title">Recipe Title</label>
                    <br/>
                    <input id='titleinp' type="text"  value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                  <br/>
                  <br/>
                <div id="author">
                    <label htmlFor="author">Author</label>
                    <br/>
                    <input id='authinp' type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
                </div>
                  <br/>
                  <br/>
                <div id='upImage'>
                    <label htmlFor="image">Please upload your image or paste url link:</label>
                    <br/>
                    {useFileInput ? (
                        <>
                            <input id='urlinp' type="file" onChange={handleImageFileChange} />
                            <button type="button" onClick={() => setUseFileInput(false)}>Enter URL</button>
                        </>
                    ) : (
                        <>
                            <input id='imginp2' type="text" value={imageInput} onChange={handleImageInputChange} />
                            <button type="button" onClick={() => setUseFileInput(true)}>Upload Image</button>
                        </>
                    )}
                </div>
                  <br/>
                  <br/>
                <div id="ingredients">
                    <label htmlFor="ingredients">Ingredients</label>
                    <br/>
                    <textarea id='indinp' value={ingredients} onChange={(event) => setIngredients(event.target.value)} />
                </div>
                  <br/>
                  <br/>
                <div id="instructions">
                    <label htmlFor="instructions">Recipe directions</label>
                    <br/>
                    <textarea id='insinp' value={instructions} onChange={(event) => setInstructions(event.target.value)} />
                </div>
                  <br/>
                  <br/>
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default NewRecipeForm;
