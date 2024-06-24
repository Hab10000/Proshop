import { useEffect, useState } from 'react';
import { usePatams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = () => {
    const [product, setProducts] = useState({});

    const { id: productId } = usePatams();

    useEffect (() =>{
        const fetchProducts = async () => {
         const { data } = await axios.get ('/api/products/${productId}');
         setProducts(data);
        }
     
       }, [productId]);
    
    console.log(product);
    return <>
        <Link className='btn btn-light my-3' to="/">Go Back</Link>
        <Row>
            <col md={5}>
                <image src={product.image} alt={product.name} fluid />
            </col>
            <col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={'$ {product.numReviews} reviews'} />
                    </ListGroup.Item>
                    <ListGroup.Item>Price :${product.price}</ListGroup.Item>
                    <ListGroupItem>Description: {product.description}</ListGroupItem>
                </ListGroup>
            </col>
            <col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>status:</Col>
                                <Col>
                                    <strong>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button
                            className='btn-block'
                            type='button'
                            disabled={product.countInStock === 0}
                            >
                                Add to cart
                                </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </col>

        </Row>
    </>;

};
export default ProductScreen
