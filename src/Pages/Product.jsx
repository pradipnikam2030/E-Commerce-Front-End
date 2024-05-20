import React, { useContext } from 'react'
import ShopContext from '../Context/ShopContext.js';
import {useParams} from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
import DescreptionBox from '../components/DescreptioBox/DescreptionBox.jsx';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts.jsx';


const Product = () => {

  const{all_product} =useContext(ShopContext);
  const{productId} =useParams();
  const product =  all_product.find((e)=> e.id=== Number(productId))
  return (
    <div>
        <Breadcrums product={product}/> 
        <ProductDisplay product={product}/>
        <DescreptionBox/>
        <RelatedProducts product={product}/>
    </div>
  )
}

export default Product
