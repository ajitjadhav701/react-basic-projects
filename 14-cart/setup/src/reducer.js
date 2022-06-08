const reducer=(state,action)=>{

    if(action.type==='CLEAR_CART'){
        return {...state, cart:[]}
    }
    if(action.type==='REMOVE'){
        const id=action.payload;
        const newCart=state.cart.filter((item)=>item.id !==id)
        return {...state,cart:newCart}
    }
    return state;
}

export default reducer;