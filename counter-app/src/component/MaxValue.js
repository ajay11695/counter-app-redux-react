import { connect } from "react-redux"
import { changeMax } from "../store/action"

function MaxValue(props) {
    return (
        <div className="flex-40">
            <p className="textalign">Max</p>
            <div className="flex">
                {[15, 100, 200].map((step) =>
                <button key={step} onClick={() => props.dispatch(changeMax(step))} className={props.max === step ? 'active' : ''}>
                    {step}</button>
            )}
            </div>
        </div>
    )
}

function mapMaxtoProps(state){
    return {
        max:state.max
    }
}

export default connect(mapMaxtoProps)(MaxValue)