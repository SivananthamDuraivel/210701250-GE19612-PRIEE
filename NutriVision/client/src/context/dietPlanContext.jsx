import { createContext, useReducer } from "react";

export const dietPlanContext=createContext();

export const dietPlanReduce=(state,action)=>{
    switch(action.type)
    {
        case 'SET_PLAN':
            return{
                dietPlans:action.payload
            }
        case 'CREATE_PLAN':
            return{
                dietPlans:[action.payload,...state.dietPlans]
            }
    }
}

export const dietPlanContextProvider=({children})=>{

    const[state,dispatch]=useReducer(dietPlanReducer,{
        dietPlans:null
    })

    return (
        <dietPlanContext.Provider>
            {children}
        </dietPlanContext.Provider>
    )
}