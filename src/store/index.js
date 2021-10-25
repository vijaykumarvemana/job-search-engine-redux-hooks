import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import jobReducer from "../reducers/job"
import favoriteReducer from "../reducers/favorite"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {

    favorite:{
        companies: [],
    },
    job:{
        jobs:[],
        // isError: false,
        // isLoading: false,
    }
    
}

const mainReducer = combineReducers({
    favorite: favoriteReducer,
    job: jobReducer,
})


const configureStore = createStore(
    mainReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default configureStore