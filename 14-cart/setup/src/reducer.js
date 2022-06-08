const reducer=(state,action)=>{

    if(action.type==='CLEAR_CART'){
        return {...state, cart:[]}
    }
    if(action.type==='REMOVE'){
        const id=action.payload;
        const newCart=state.cart.filter((item)=>item.id !==id)
        return {...state,cart:newCart}
    }
    if(action.type==='INCREASE'){  
      let tempCart=state.cart.map((item)=>{
          if(item.id===action.payload){
              return {...item,amount:item.amount+1}
          }
          return item;
      });

        return {...state,cart:tempCart}
    }
    if(action.type==='DECREASE'){  
      let tempCart=state.cart.map((item)=>{
          if(item.id===action.payload){
              return {...item,amount:item.amount-1}
          }
          return item;
      }).filter((item)=>item.amount !==0 );//here we did method chaining ..imp part

        return {...state,cart:tempCart}
    }
 
    return state;
}

export default reducer;