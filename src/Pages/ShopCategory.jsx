import React from 'react'
import './CSS/ShopCategory.css' 
import { useContext } from 'react'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Items/Item.jsx'
import ShopContext from '../Context/ShopContext'

const ShopCategory = (props) => {
  console.log("in shop category")
    const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p><span>Showing 1-12</span> out of {all_product.length} products</p>
        <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
      </div>
      
      <div className="shopcategory-products">
        {all_product.map((item, i)=>{
           if(item.category===props.category)
           {
            return <Item Key={i} id={item.id} name={item.name} image={item.image} 
          new_price={item.new_price} old_price={item.old_price} />
           }
           else{
            return null
           }
           
        })}
      </div>
       <div className="shopcategory-loadmore">
         Explore More
       </div>

    </div>
  )
}

export default ShopCategory
