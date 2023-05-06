import { connect } from "react-redux"
import { changeStep } from "../store/action"

function Steps(props) {
    return (
        <div className="flex-40">
            <p className="textalign">Steps</p>
            <div className="flex">
                {[5, 10, 15].map((step) =>
                <button key={step} onClick={() => props.dispatch(changeStep(step))} className={props.step === step ? 'active' : ''}>
                    {step}</button>
            )}
            </div>
        </div>
    )
}

function mapSteptoProps(state){
    return {
        step:state.step
    }
}

export default connect(mapSteptoProps)(Steps)