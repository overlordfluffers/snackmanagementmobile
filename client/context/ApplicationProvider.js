import React from 'react'

//set up enum for actions
export const ApplicationActions={
    SET_PAGE: 'SET_PAGE'
}

//create initial state
const initialState = {
    page: 'snacks'
}

//set up what the actions will do
const reducer = (state, action) => {
   switch (action.type) {
       case ApplicationActions.SET_PAGE:
           return {...state, page: action.payload.page}

       default:
           return state
   }
}

//create the initial Context
export const ApplicationContext = React.createContext({})

const ApplicationProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <ApplicationContext.Provider value={{state,dispatch}}>
            {props.children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationProvider

