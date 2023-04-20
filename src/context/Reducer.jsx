export const reducer =(state,action)=>{
    switch(action.type){
        // case "GET_POPULAR_MOVIE":
        //     return {...state,movie:action.payload};

        case "GET_FAV":
            const isExisted = state.fav.find(fav=> fav.id == action.payload.id)
            if(isExisted){
                return state
            }else{
                return {...state,fav:[...state.fav,action.payload]};
            }

        case "REMOVE_FAV":
            return {...state,fav:state.fav.filter(fav=> fav.id != action.payload.id)}

    }
}