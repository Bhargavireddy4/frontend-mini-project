

// Product.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './product.css';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        const productData = response.data;
        
        setProduct(productData);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setIsLoading(false);
      });
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
    <div class="head"><p>ShopMore</p> </div>
    <div className="product-container bg-custom-bg min-h-screen flex justify-center items-center">
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
       
        
        <div className="ribbon-container">
          
          <div className="individual-product-card-container">
            <div className="individual-product-card max-w-3xl bg-gray-100 rounded-lg overflow-hidden shadow-md flex transition duration-300 hover:shadow-lg">
              <div className="individual-product-image-container bg-gray-200 p-4 flex justify-center items-center" style={{ borderRadius: '10px' }}>
                <div className="individual-product-image-wrapper" style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden', borderRadius: '10px' }}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="individual-product-image w-full h-full object-cover rounded-md transition duration-300 transform hover:scale-105"
                    style={{ borderRadius: '10px' }}
                  />
                </div>
              </div>
              <div className="individual-product-content-container w-1/2 p-6 rounded-r-lg" style={{ backgroundColor: '#fff' }}>
                <h2 className="individual-product-title mb-2">{product.title}</h2>
                <p className="individual-product-price text-gray-800 text-lg mb-2">Price: ${product.price}</p>
                <p className="individual-product-description text-gray-600 mb-4">{product.description}</p>
                
                <button className="individual-product-button bg-gray-400 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300" onClick={handleGoBack}>Go Back</button>
              </div>
            </div>
          </div>
        </div>
        
      )}
    </div>
    </div>
  );

}

export default Product;
