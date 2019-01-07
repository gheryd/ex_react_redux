import stateList from "./stateList";

export const saveProduct = (product) => ({
    type: stateList.ADD_PRODUCT,
    product: product
});

export const updateProduct = (product) => ({
    type: stateList.UPDATE_PRODUCT,
    product: product
});