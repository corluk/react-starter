export const DEFAULT_ACTION = "app/default/action" 
export const DEFAULT_ERROR = "app/default/error"
export const DEFAULT_ACTION_REQUESTED = "app/default/action_requested"

const initialState ={
    
}
export default (state= initialState, action = {})=>{

    switch(action.type) {

        case DEFAULT_ACTION : 
            return {...state , ...action.payload}

        case DEFAULT_ERROR : 
            return {...state  , ...{error : action.payload}}
        default : 
            return state
        }
}

export const triggerDefaultAction=( value)=>{

        return {
            type : DEFAULT_ACTION, 
            payload :value
        }
}
