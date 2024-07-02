import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';

const FilterSort = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    minPrice: '',
    maxPrice: '',
    availability: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Category" name="category" value={filters.category} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Company" name="company" value={filters.company} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Rating" name="rating" value={filters.rating} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Min Price" name="minPrice" value={filters.minPrice} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Max Price" name="maxPrice" value={filters.maxPrice} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField label="Availability" name="availability" value={filters.availability} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>Apply Filters</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FilterSort;
