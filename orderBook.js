  function reconcileOrder(existingBook, incomingOrder){
      let updatedBook=[] 
      
      if(existingBook==undefined || existingBook.length==0){ 
        updatedBook= updatedBook.concat(incomingOrder)
        return updatedBook
    }
      
    for (var i = 0; i< existingBook.length; i++ ) {
        if (existingBook[i].price==incomingOrder.price && existingBook[i].quantity == incomingOrder.quantity) { 
          if(existingBook[i].type !=incomingOrder.type){}
          else { 
            incomingOrder.quantity = existingBook[i].quantity + incomingOrder.quantity 
            updatedBook = updatedBook.concat(incomingOrder)
            continue
        }
    }
    else if (existingBook[i].price==incomingOrder.price && existingBook[i].quantity < incomingOrder.quantity) { 
        if(existingBook[i].type !=incomingOrder.type){
            incomingOrder.quantity = existingBook[i].quantity - incomingOrder.quantity 
            updatedBook = updatedBook.concat(incomingOrder)
        }
    }
    else if (existingBook[i].price==incomingOrder.price && existingBook[i].quantity > incomingOrder.quantity) { 
        if(existingBook[i].type !=incomingOrder.type){}
           incomingOrder.quantity = existingBook[i].quantity - incomingOrder.quantity 
           updatedBook = updatedBook.concat(incomingOrder)
        }
    }
    if (existingBook[i].price==incomingOrder.price && existingBook[i].quantity==incomingOrder.quantity) { 
        if(existingBook[i].type !=incomingOrder.type){}
        else { 
          incomingOrder.quantity = existingBook[i].quantity + incomingOrder.quantity 
          updatedBook = updatedBook.concat(incomingOrder)
          continue
    return updatedBook
 
}
   module.exports = reconcileOrder
