import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import ProductApi from '../../api/products';

const initialState = {
    loading: false,
    products: []
}

const ProductList = () => {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        setState({...initialState, loading: true})
        ProductApi.getProducts()
            .then(response => {
                setState({loading: false, products: response.data})
            })
            .catch(error => console.log(error))
    }, [setState])

    return (
        <div>
            <h3>Manage Products</h3>
            {
                !state.loading ?
                    <Table striped bordered hover responsive size="sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th style={{width: '150px'}}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            state.products.length ?
                                state.products.map((product, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{product.id}</td>
                                            <td>
                                                <img src={product.image}
                                                     height={50} alt=""
                                                     style={
                                                         {
                                                             borderRadius: '5px',
                                                             paddingRight: '10px'
                                                         }
                                                     }
                                                />
                                                {product.title}
                                            </td>
                                            <td>${product.price}</td>
                                            <td>{product.category}</td>
                                            <td className={'button-wrapper'}>
                                                <Button variant={'primary'} size={'sm'}>Edit</Button>
                                                <Button variant={'danger'} size={'sm'}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={6}>No Product Found</td>
                                </tr>
                        }

                        </tbody>
                    </Table>
                    :
                    'Loading Results...'
            }
        </div>
    );

}

export default ProductList;

