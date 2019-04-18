import Data from "../data"


const InitialState = {
    data:Data
}


const initialState={
};



const reducer = (state = initialState ,action) => {

    switch (action.type) {
        case "DATA_ADD":
            return{
                data: action.added
            }
        default: return state;
    }

    return state;


};


export default reducer;
