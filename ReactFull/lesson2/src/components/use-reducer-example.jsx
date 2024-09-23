import { useReducer } from "react";
const initialState = {
    showTextFlag :false,
    changeTextStyleFlag:false
}

function reducer(state,action){
    switch(action.type){
        case value:
            break;
        
        default:
            return state
    }
}

export default function useReducerExample(){
        const [state,dispatch] = useReducer(reducer,initialState)
        console.log(state);
        return (
            <div>
                <h1>Use Reducer Example</h1>
                <button>Hide  Text</button>
                <button>Show Text</button>
                <button>Chnage Style</button>
            </div>
        )
}