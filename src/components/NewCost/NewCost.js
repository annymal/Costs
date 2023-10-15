import './NewCost.css'
import CostForm from "./CostForm";

const NewCost = (props) => {
    const saveCostDateHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
       props.onAddCost(costData)
    }
    return (
        <div className='new-cost'>
        <CostForm onSaveCostData={saveCostDateHandler}/>
    </div>
    )
}
export default NewCost