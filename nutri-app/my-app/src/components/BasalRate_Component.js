import { useState, useEffect } from "react";



const BasalRate = (props) => {

    const [bmr, setBmr] = useState("");
    const [name, setName] = useState("");

    const sendBmr = () => {
        props.getBmr(bmr);  
    }

    const sendName = () => {
        props.getName(name)
    }
    
    
    const calc = () => {
        const gender = document.querySelector('.gender:checked').value;
        const age = document.getElementById("age").value;
        const height = document.getElementById("height").value;
        const weight = document.getElementById("weight").value;
        const userName = document.getElementById("userName").value;
        if (gender === "male") {
           setBmr(Math.round(66.5 + (13.75 * weight) + (5.03 * height) - (6.75 * age)));
        } else {
           setBmr(Math.round(655.1 + (9.56 * weight) + (1.85 * height) - (4.68 * age)));   
        }
        setName(userName);
        sendBmr(bmr);
        sendName(name);
    }

    
    // useEffect(() => {
    //     sendBmr(bmr);
    //     sendName(name);
    // },[bmr,name]);

    

    return (
        <>
        <div>
            <h5>Please Fill in All Fields</h5>
            <form action="">
                <div>
                    <input id="userName" type="text" placeholder="Your Name"/>
                </div>
                <div id="genderPick">
                    <input type="radio" className="gender" name="gender" value="male"/>Male
                    <input type="radio" className="gender" name="gender" value="female"/>Female
                </div>
                <div id="userVariables">
                    <input type="number" id="age" placeholder="Age"/>
                    <input type="number" id="height" placeholder="Height (cm)"/>
                    <input type="number" id="weight" placeholder="Weight (kg)"/>
                </div>
            </form>
            <button type="button" onClick={()=>{
                calc();
            }}>Submit</button>
        </div>
        </>
    )
}

export default BasalRate