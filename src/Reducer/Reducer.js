let initialState = {users:[
		{username: "Eric", contactNumber:" 0544545254", location: "Accra"},
        {username: "John", contactNumber: "0204352344", location: "Wa"}
	]}


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEWUSER":
            return {...state, users: [...state.users, action.payload]}
            break;
    
        default:
            return state;
    }

    
}
export default Reducer