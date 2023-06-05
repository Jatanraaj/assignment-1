import React, { useState } from 'react';
import Product from './Product';
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';

const products = [{    id: 1,    image: './images/pro1.webp',    name: 'Product 1',    price: 10.99,    description: 'This is the description for Product 1',    category: 'electronics',  },  {    id: 2,    image: './images/pro2.webp',    name: 'Product 2',    price: 15.99,    description: 'This is the description for Product 2',    category: 'clothing',  },  {    id: 3,    image: './images/pro3.webp',    name: 'Product 3',    price: 21.99,    description: 'This is the description for Product 3',    category: 'books',  },  {    id: 4,    image: './images/pro4.webp',    name: 'Product 4',    price: 19.99,    description: 'This is the description for Product 4',    category: 'electronics',  },  {    id: 5,    image: './images/pro5.webp',    name: 'Product 5',    price: 24.99,    description: 'This is the description for Product 5',    category: 'clothing',  },  {    id: 6,    image: './images/pro6.webp',    name: 'Product 6',    price: 32.99,    description: 'This is the description for Product 6',    category: 'books',  }];

const Products = () => {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const handleSortChange = (sort) => {
    setSort(sort);
  };
  
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const sortedProducts = sort
    ? filteredProducts.sort((a, b) =>
        sort === 'low-to-high' ? a.price - b.price : b.price - a.price
      )
    : filteredProducts;

  return (
    <div>
      <h1 id='prodhead' class='headprod'>Products</h1>
      <div className="container products11">
        <div className="row">
          <div className="col-md-12">
            <div className="filter-bar">
              <ButtonGroup>
                <Button
                  variant={category === '' ? 'primary' : 'secondary'}
                  onClick={() => handleCategoryChange('')}
                >
                  All Products
                </Button>
                <Button
                  variant={category === 'electronics' ? 'primary' : 'secondary'}
                  onClick={() => handleCategoryChange('electronics')}
                >
                  Dog Food
                </Button>
                <Button
                  variant={category === 'clothing' ? 'primary' : 'secondary'}
                  onClick={() => handleCategoryChange('clothing')}
                >
                  Cat Food
                </Button>
                <Button
                  variant={category === 'books' ? 'primary' : 'secondary'}
                  onClick={() => handleCategoryChange('books')}
                >
                  Common Food
                </Button>
              </ButtonGroup>
              <DropdownButton id="dropdown-basic-button" title="Sort By Price">
                <Dropdown.Item onClick={() => handleSortChange('low-to-high')}>
                  Low to High
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange('high-to-low')}>
                  High to Low
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
        <div className="row">
          {sortedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
