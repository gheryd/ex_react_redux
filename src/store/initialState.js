import VIEWS from "./views";

const initialState = {
    products: {
        editProduct: null,
        list: [
            {id:'1', name:'matita', description: 'matina nera', 'price': 0.7, created:new Date().getTime(), catId: '1' },
            {id:'2', name:'penna', description: 'penna blu', 'price': 1.4, created: new Date().getTime(), catId: '1' }
        ],
        categories: [
            { id: '1', label: 'cancelleria' },
            { id: '2', label: 'giochi'}
        ] 
    }
};


export default initialState;