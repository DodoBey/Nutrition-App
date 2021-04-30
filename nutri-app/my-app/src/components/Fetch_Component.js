import React, {useState} from 'react';
import BasalRate from './BasalRate_Component';
import DailyComponent from './Daily_Component';
import { Dropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'
import 'bootstrap/dist/css/bootstrap.min.css';


const FetchComponent = () => {

    // Variables
    const [calorie, setCalorie] = useState("");
    const [fat, setFat] = useState("");
    const [carbs, setCarbs] = useState("");
    const [protein, setProtein] = useState("");
    const [fiber, setFiber] = useState("");
    const [ingr, setIngr] = useState("");
    const [dropdownValue, setDropdownValue] = useState("Select Meal");
    const [allData, setAlldata] = useState("");
    const [bmr, setBmr] = useState("");
    const [name, setName] = useState("");
    const [show, setShow] = useState(true)


// API URl and KEY
const api = {
    mainUrl : "https://api.edamam.com/api/food-database/v2/parser?ingr=",
    id: "7b389745",
    key: "9ce7819e554a95d61e2b57cb2f9b8014"
}

// Fetch API
const FetchData = (ingr) => {
    fetch(`${api.mainUrl}${ingr}&app_id=${api.id}&app_key=${api.key}`).then(response => {
        if(response.status !== 200){
            console.log(`Houston! We have a problem ${response.status}`)
        }
        response.json().then(data => {
            setAlldata(data.parsed[0].food.nutrients);
            setCalorie(data.parsed[0].food.nutrients.ENERC_KCAL);
            setFat(data.parsed[0].food.nutrients.FAT);
            setCarbs(data.parsed[0].food.nutrients.CHOCDF);
            setProtein(data.parsed[0].food.nutrients.PROCNT);
            setFiber(data.parsed[0].food.nutrients.FIBTG);
            setIngr(data.text);

        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    })
}

// Enter to Submit
const keyEnter = (e) => {
    if (e.key === 'Enter') {
    let value = document.getElementById("foodName").value;
    FetchData(value);
    return document.getElementById("foodName").value; 
    }
}

// Get Dropdown Value
const GetName = (e) => {
    setDropdownValue(e)
}

//Callback function
const handleCallback = (bmrFromChild) => {
    setBmr(bmrFromChild);
    setShow(preventShow => {
        return !preventShow
    })
}

const nameCallback = (nameFromChild) => {
    setName(nameFromChild)
}

// Collect Data for Daily Component
const mealData = [];
mealData.push({'meal': dropdownValue,'food': ingr,'cal': calorie,
'unit': "1", 'fat': fat, 'carbs': carbs, 'fiber':fiber, 'protein': protein});

    return (
        <>
        {show ?
        <div id="basalRate"><BasalRate getBmr={handleCallback} getName={nameCallback}/></div> :
        <div id="mainBody">
        <DropdownButton id="dropdown-basic-button" className="mealButtons" title={dropdownValue} onSelect={GetName}>
        <Dropdown.Item eventKey="Breakfast" >Breakfast</Dropdown.Item>
        <Dropdown.Item eventKey="Lunch">Lunch</Dropdown.Item>
        <Dropdown.Item eventKey="Dinner">Dinner</Dropdown.Item>
        <Dropdown.Item eventKey="Snack">Snack</Dropdown.Item>
        </DropdownButton>
        <input type="text" placeholder="Search Food" id="foodName" className="foodSearch" onKeyPress={keyEnter}/>
        <button id="addButton">Add</button>
        <DailyComponent
        mealData = {mealData}
        ingr={ingr}
        calorie={calorie}
        fat={fat}
        carbs={carbs}
        protein={protein}
        fiber={fiber}
        bmr={bmr}
        name={name}
        />
        </div>
        }
        </>
        
    )
}

export default FetchComponent;