import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

const ProductDetails = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000`);
        const productDetails = response.data.find(p => p.productName === productName);
        setProduct(productDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductDetails();
  }, [productName]);

  if (!product) return <div>Loading...</div>;

  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.productName}
        height="140"
        image={`https://source.unsplash.com/random?sig=${Math.random()}`}
        title={product.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Company: {product.company}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Category: {product.category}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Availability: {product.availability}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
