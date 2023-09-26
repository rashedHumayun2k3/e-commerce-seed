import React, { useEffect, useState } from 'react'
import ActionOnProduct from '@/app/components/action-on-product/ActionOnProduct'
import {useGetAllProductQuery} from '@/redux/api/productAPI'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getSelectedCategory } from '@/redux/slices/categorySlice'
import DynamicCheckboxes from '../search/DynamicCheckboxes'


export default function ProductList() {
    const { data } = useGetAllProductQuery()
    const categorySelectorValue = useSelector(getSelectedCategory);
    const [selectedCat, useSelectedCat]=useState([]);
    const[productList, useProductList] = useState([]);
    const [baseWidthOfProductDiv, setBaseWidthOfProductDiv]=useState(200);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Function to update screenWidth when the window is resized
    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    // Add an event listener to update screenWidth on window resize
    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);

        // Remove the event listener when the component unmounts
        return () => {
        window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);

    useEffect(()=>{
        const productBody=screenWidth-220;
        const numberOfParts = Math.max(Math.ceil(productBody / 200), 1);
        const actualPartWidth =Math.round(productBody / numberOfParts);
        setBaseWidthOfProductDiv(actualPartWidth)
    },[screenWidth])
    
    useEffect(()=>{
        useSelectedCat(selectedCat);
    },[categorySelectorValue])

    useEffect(()=>{
        if(data){
            console.log(data);
            const filteredProductList = data.filter((node) =>
            categorySelectorValue.length > 0 ? 
            categorySelectorValue.every((filterTag) =>
              node.AttributeValueList.map((attribute) => attribute.AttibuteValueId).includes(parseInt(filterTag))
            ) : data)
            useProductList(filteredProductList)
        }
       
    },[data, categorySelectorValue])

    useEffect(()=>{
        useProductList(data);
    },[data])

    return (
    <>
    

   {productList?.map((item, index) => (
         <div key={index} className='gridItem-produt' style={{width: baseWidthOfProductDiv}}>
            <div className="single-product-wrap box-product">
                <div className="product-image">
                <Link href="/products/single-product-details-show">  
                    <img src={item.thumbnail} alt="Li's Product Image"/>
                </Link>
                <span className="sticker">New</span>
                </div>
                <div className="product_desc">
                    <div className="product_desc_info">
                        <div className="product-review">
                            <h5 className="manufacturer">
                                <a href="shop-left-sidebar.html">{item.CategoryTitle}</a>
                            </h5>
                            <div className="rating-box">
                                <ul className="rating">
                                    <li><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                    <li><i className="fa fa-star-o"></i></li>
                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                    <li className="no-star"><i className="fa fa-star-o"></i></li>
                                </ul>
                            </div>
                        </div>
                        <span class="a-size-base a-color-base">
                            {item.productName}
                        </span>
                        <h4>
                           
                            </h4>
                        <div className="price-box">
                            <span className="new-price">{item.Price}</span>
                        </div>
                    </div>
                    <div className="add-actions">
                        <ActionOnProduct/>
                    </div>
                </div>
            </div>
        </div>
   ))}
  
   </>
  )
}
