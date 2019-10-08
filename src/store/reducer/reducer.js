import actionTypes from '../constatnt/constant';
const INITIAL_STATE = {
    userName : 'Hitesh Patel'
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.CHANGEUSERNAME:
        	return({
        		...state,
        		userName: action.payload
        	})
        default:
            return state
    }

}