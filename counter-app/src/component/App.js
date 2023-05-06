import React from "react"
import { connect } from "react-redux"
import Steps from "./steps"
import MaxValue from "./MaxValue"

function App(props) {
    return (
        <>
            <h1 className="textalign">Counter App</h1>
            <div className="container">
                <h2 className="textalign">{props.count}</h2>
                <div className="flex">
                    <Steps/>
                   <MaxValue/>
                </div>
                <div className="flex">
                    <button className="btn" onClick={()=>props.dispatch({type:'increment'})}>Increment</button>
                    <button className="btn" onClick={()=>props.dispatch({type:'decrement'})}>Decrement</button>
                    <button className="btn" onClick={()=>props.dispatch({type:'reset'})}>Reset</button>
                </div>
            </div>
        </>
    )
}

function mapStatetoProps(state){
    return {
        count:state.value
    }
}

export default connect(mapStatetoProps)(App)