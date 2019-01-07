import stateList from "./stateList";


export function products(state={}, action){
    let list;
    switch(action.type){
        case stateList.ADD_PRODUCT:
            let {product} = action;
            list = [...state.list, {
                ...product,
                id: new Date().getTime(),
                created:new Date().getTime()
            }];
            return Object.assign({}, state, {list} );
        case stateList.UPDATE_PRODUCT:
            list = state.list.map((product)=> {
                return product.id===action.product.id ? Object.assign({}, product, action.product) : product
            });
            return Object.assign({}, state, {list} );
        default:
    }
    return state;
}