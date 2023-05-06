import { connect } from "react-redux"

function MaxValue(props) {
    return (
        <div className="flex-40">
            <p className="textalign">Max</p>
            <div className="flex">
                {[15, 100, 200].map((step) =>
                <button key={step} onClick={() => props.dispatch({type:'changeMax',payload:step})} className={props.max === step ? 'active' : ''}>
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