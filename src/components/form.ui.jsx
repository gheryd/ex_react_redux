import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class FormUI extends Component {
    
    render() {
        const {products,categories, onSubmit, history, match} = this.props;

        let product = match.params.id ? products.find( (p) => (p.id===match.params.id)) : {};
        product = product || {};
        console.log("products", products);
        const getData = () =>  Object.keys(this.refs).reduce( (p, name)=> {
            p[name]=this.refs[name].value;
            return p;
        }, {});

        return (
            <form key={product.id || -1}>
                <input ref="id" type="hidden"  defaultValue={product.id} />
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input ref="name" id="name" name="name" defaultValue={product.name} className='form-control' />                      
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input ref="description" id="description" name="description" 
                        defaultValue={product.description} 
                        className = 'form-control'
                    />                      
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input ref="price" id="price" name="price" 
                        defaultValue={product.price} 
                        className = 'form-control'
                    />                      
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select ref="catId" id="category" className="form-control" defaultValue={product.catId}>
                        <option value="">select</option>
                        {categories.map( ({label, id})=>
                        <option key={id} value={id}>{label}</option>
                        )}
                    </select>
                </div>
                <button type="button" onClick={()=>onSubmit(getData(), history)} >{product.id? 'update': 'add'}</button>
            </form> 
        );
    }
}

export default withRouter(FormUI);