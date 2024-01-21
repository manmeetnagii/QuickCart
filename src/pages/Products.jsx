import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

const Products = () => {
  const {all_product}= useContext(ShopContext);
  const {productId}= useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  return (
    <div className=''>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Products