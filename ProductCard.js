import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardMedia, Button } from '@material-ui/core';

const ProductCard = ({ product }) => {
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
        <Button size="small" color="primary" component={Link} to={`/product/${product.productName}`}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
