import Accordion from 'react-bootstrap/Accordion';

const DailyComponent = (props) => {
    
    let breakfast = [];
    let lunch = [];
    let dinner = [];
    let snacks = [];


    let time = props.mealData[0].meal;
        switch (time) {
            case "Breakfast":
                breakfast.push(...props.mealData);
            break;
            case "Lunch":
                lunch.push(...props.mealData);
            break;  
            case "Dinner":
                dinner.push(...props.mealData);
            break;   
            case "Snack":
                snacks.push(...props.mealData);
    }

   const arrBreakfast = breakfast.map(item => {
        return <div className="dailyData"><div><div>{item.food.toUpperCase()}</div></div><div><span>{item.cal}kkcal</span><span>{item.unit}gr</span></div></div>
   })

    const arrLunch = lunch.map(item => {
        return <div className="dailyData"><div><div>{item.food.toUpperCase()}</div></div><div><span>{item.cal}kkcal</span><span>{item.unit}</span></div></div>
    })

    const arrDinner = dinner.map(item => {
        return <div className="dailyData"><div><div>{item.food.toUpperCase()}</div></div><div><span>{item.cal}kkcal</span><span>{item.unit}</span></div></div>
    })

    const arrSnacks = snacks.map(item => {
        return <div className="dailyData"><div><div>{item.food.toUpperCase()}</div></div><div><span>{item.cal}kkcal</span><span>{item.unit}</span></div></div>
    })
    
    return(
        <div>
        <div id="dailyDataArea">
                <div id="breakfast">
                    <div className="mealsTitle">
                        <div>
                            <h5>Breakfast</h5>
                        </div>
                        <div>
                            <span>Calorie</span>
                            <span>Unit</span>
                        </div>
                    </div>
                    {arrBreakfast}
                </div>
                <div id="lunch">
                    <div className="mealsTitle">
                        <div>
                            <h5>Lunch</h5>
                        </div>
                        <div>
                            <span>Calorie</span>
                            <span>Unit</span>
                        </div>
                    </div>
                    {arrLunch}
                </div> 
                <div id="dinner">
                    <div className="mealsTitle">
                        <div>
                            <h5>Dinner</h5>
                        </div>
                        <div>
                            <span>Calorie</span>
                            <span>Unit</span>
                        </div>
                    </div>
                    {arrDinner}
                </div>
                <div id="snacks">
                    <div className="mealsTitle">
                        <div>
                            <h5>Snacks</h5>
                        </div>
                        <div>
                            <span>Calorie</span>
                            <span>Unit</span>
                        </div>
                    </div>
                    {arrSnacks}
                </div>
        </div>
        <div id="totalDaily">
                <h5>Daily Intakes</h5>
                <div id="totalValueArea">
                    <div className="firstLine">
                        <div>
                            <span>Calories</span>
                            <span>2000kkcal</span>
                        </div>
                        <div>
                            <span>Carbs</span>
                            <span>30gr</span>
                        </div>
                        <div>
                            <span>Protein</span>
                            <span>40gr</span>
                        </div>
                    </div>
                    <div className="secondline">
                        <div>
                            <span>Fat</span>
                            <span>50gr</span>
                        </div>
                        <div>
                            <span>Fibre</span>
                            <span>32gr</span>
                        </div>
                    </div>
                </div>
                <div id="infoArea">
                {/* {(props.name).toUpperCase()} */}
                    <span>DODO! Based on your basal metabolic rate, you need 352kkcal more.</span>
                    <span>(Your Approximate Basal Metabolic Rate is 1986Cal/Day)</span>
                    {/* {props.bmr} */}
                </div>
        </div>
        </div>
    )
}

export default DailyComponent