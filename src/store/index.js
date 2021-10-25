import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import jobReducer from "../reducers/job"
import favoriteReducer from "../reducers/favorite"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"
import storageSession from 'redux-persist/lib/storage/session'
import { encryptTransform } from "redux-persist-transform-encrypt"


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
    transforms: [
        encryptTransform({
            secretKey:process.env.REACT_APP_SECRET_KEY,
            onError: (error) => {
                console.log(error)
            }
        })
    ]
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