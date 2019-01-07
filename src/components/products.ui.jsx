import React from 'react';
import { withRouter } from 'react-router-dom';


const ProductsUI = ({list, categories, onUpdate, getCatLabel, history}) => {
    getCatLabel = (id) => {
        const cat = categories.find( (cat) => cat.id===id);
        return cat && cat['label'];
    }
    return (  
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {list.map( (product) =>(
                <tr key={product.id}>
                    <td>{product['name']}</td>
                    <td>{product['description']}</td>
                    <td>{product['price']}</td>
                    <td>{ getCatLabel(product['catId']) }</td>
                    <td><button onClick={()=>onUpdate(product, history)}>update</button></td>
                </tr>

                ) )}
                
            </tbody>
        </table>
    );
}
    
export default withRouter(ProductsUI);