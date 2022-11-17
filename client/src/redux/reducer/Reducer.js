const initialState = {
    list: []
}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GETDATA":

            return {
                list: action.payload
            }


        default:
            return state
    }
}