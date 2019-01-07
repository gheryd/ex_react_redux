import { connect } from 'react-redux';
import ProductsUI from './products.ui';

const Products = connect(
    state => ({
        list: state.products.list,
        categories: state.products.categories,
    }),
    dispatch => ({
        onUpdate: (product, history) => {
            history.push(`/product/edit/${product.id}`);
        }
    })
)(ProductsUI);


export default Products;