import './App.css';
import Costs from "./components/Costs/Costs";
import React,{useState} from 'react'
import NewCost from "./components/NewCost/NewCost";
import CostForm from "./components/NewCost/CostForm";

const INITIAL__COSTS = [
    {
        id: 'c1',
        date: new Date(2021,2,12),
        description : 'Холодильник',
        amount : 999.99
    },

    {
        id: 'c2',
        date: new Date(2021,11,25),
        description : 'MacBook',
        amount : 1254.99
    },
    {
        id: 'c3',
        date: new Date(2021,4,12),
        description : 'Джинсы',
        amount : 49.99
    }
];
function App() {
    const [costs, setCosts] = useState(INITIAL__COSTS);

    // return React.createElement('div', {}, React.createElement('h1',{},'Начнем изучение рект'),
    //     React.createElement(Costs, {costs: costs} ));

    const addCostHandler = (cost) => {
        setCosts(prevCost => {
            return [cost, ...prevCost]
        });
    };


    return (
    <div className="App">
        <NewCost onAddCost={addCostHandler}/>
            <Costs costs={costs}/>
        </div>
  );
}

export default App;
