import {connect} from "react-redux";
import FormUI from "./form.ui";
import {saveProduct, updateProduct} from "../store/actions";

const Form = connect(
    state => ({
        categories: state.products.categories,
        products: state.products.list
    }),
    dispatch => ({
        onSubmit: (product, history) => {
            if(!product.id){
                delete product['id'];
                dispatch( saveProduct(product)  )
            }else{
                dispatch( updateProduct(product));
            }
            history.push('/');
        }
    })
)(FormUI);

export default Form;