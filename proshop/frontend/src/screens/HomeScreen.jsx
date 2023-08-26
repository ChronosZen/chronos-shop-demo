import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios';
import Product from '../components/Product'
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fecthProducts = async () =>{
      const { data } = await axios.get('/api/products');
      setProducts(data)
    };
    fecthProducts();
  }, []);
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}></Product>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen