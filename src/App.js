
import './App.css';
import Axios from 'axios'
import { YOUR_APP_ID, YOUR_APP_KEY  } from './constants';
import Card from './Card';
import { useState, useEffect } from 'react';
import './App.css'


function App() {
 
  const [apiData, setApiData] =useState([]);
  const [searchValue, setSearchValue] = useState("")
  const [ mealType, setMealType] = useState('')
  const [ dietType, setDietType] = useState('')

  const url = `https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&mealType=${mealType}&diet=${dietType}`
  // function sample(){
  //   console.log("hellooo")
  // }

  // function sample(){
  //   setMealType('breakfast')
  //   console.log(mealType)
  // }

  useEffect(()=>{
   getReceipeInfo();
  },[])

  const getReceipeInfo = async() =>{
    var result = await Axios.get(url);
    setApiData(result.data.hits)
  }

  // function sample(){
  //   getReceipeInfo();
  //   setMealType('breakfast')
  // }
  return (
    <div className='container'>
      <h1>Food recepi</h1>
      <form className='form-container' >
        <select  className="select-box" onChange={(e) => setMealType(e.target.value)}>
          <option>Select meal type</option>
          <option>breakfast</option>
          <option>lunch</option>
          <option>snacks</option>
          <option>dinner</option>
        </select>

        <select className="select-box"  onChange={(e) => setDietType(e.target.value)}>
          <option>Select Diet type</option>
          <option>balanced</option>
          <option>high-protein</option>
          <option>high-fiber</option>
          <option>low-fat</option>
        </select>

       <input type="button" value="Search" className='submit_btn' onClick={getReceipeInfo}/>
       {/* <input type="text" placeholder='enter food' className='search_field' onChange={(e) => {setSearchValue(e.target.value)}}/> */}
      </form>
  
      <div className='card-container'>
      {apiData.map(val => {
        return <Card image ={val.recipe.image} label={val.recipe.label}/> }
      )}
      </div>
    </div>
  );
}

export default App;
