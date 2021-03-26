const initialState ={
    department:["Design","Development","QA"],
    employee:[{name:"Ram",dept:"Design"},{name:"Sam",dept:"Development"},{name:"Nisha",dept:"QA"}]
}

export const reducer = (state=initialState, action)=>{
    
    switch(action.type) {
        case "ALL_DEPT" :{
            let dept=[...state.department]
            if(dept.indexOf(action.payload.data)==-1){
                dept.push(action.payload.data)
            }
            state = {...state,department:[...dept]}
            break;
        };

        case "DELETE_DEPT" :{
            let dept=[...state.department]
            dept.splice(action.payload.index,1)
            state = {...state,department:[...dept]}
            break;
        };

        case "ALL_EMPLOYEE" :{
            let emp=[...state.employee]
            emp.push(action.payload.data)
            state = {...state,employee:[...emp]}
            break;
        };

        case "DELETE_EMPLOYEE" :{
            let emp=[...state.employee]
            emp.splice(action.payload.index,1)
            state = {...state,employee:[...emp]}
            break;
        };

        
    }
    return state
}