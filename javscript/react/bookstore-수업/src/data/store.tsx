import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"


const user = createSlice({
    name: 'user',
    initialState : {id: 1, name: 'kim', job: 'developer' },
    reducers: {
        changeName(state){
            state.name = 'park';
        },
        increase (state, action) {
            state.id += action.payload;
        }
    }
})

export const { changeName, increase }  = user.actions;

const stock = createSlice({
    name: 'stock',
    initialState: [500, 600, 700],
    reducers : {}
})

export interface CartItem {
    id : number;
    name : string;
    quantity: number;
    price: number;    
}

export interface CartArray {
    cart: CartItem[]
}

const cart = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    } as CartArray,
    reducers: {
        PlusCount(state, action) {
            const item = state.cart.find((item) => item.id == action.payload)
            if(item) item.quantity++;
        },
        MinusCount(state, action) {
            const item = state.cart.find((item) => item.id == action.payload)
            if(item)
                item.quantity--;
        },
        addItem(state, action) {
            const exixtingItem = state.cart.find((item) => item.id == action.payload.id)
            if(exixtingItem) {
                exixtingItem.quantity++;            
            } else {
                state.cart.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    quantity: 1,
                    price: action.payload.price})
            }
        },
        resetCart(state) {
            state.cart = []
        }
    }
})

export const { PlusCount, MinusCount, addItem, resetCart }  = cart.actions;

const rootReducer = combineReducers ({
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer,
});


const persistConfig = {
    key : "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);
export default store;

// export default configureStore ({
//     reducer: {
//         user : user.reducer,
//         stock: stock.reducer,
//         cart: cart.reducer
//     }
// })