import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import jobReducer from "../reducers/job"
import favoriteReducer from "../reducers/favorite"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"
import storageSession from 'redux-persist/lib/storage/session'


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

const persistConfig = {
    key: 'root',
    storage: storageSession,
}

const mainReducer = combineReducers({
    favorite: favoriteReducer,
    job: jobReducer,
})
const persistedReducer = persistReducer(persistConfig, mainReducer)



const configureStore = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)
const persistor = persistStore(configureStore)

export { configureStore, persistor} 