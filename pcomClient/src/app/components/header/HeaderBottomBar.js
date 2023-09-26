import React from 'react'
import Link from 'next/link'
import { useGetAllCategoryQuery } from '@/redux/api/categoryAPI'
import { useEffect } from 'react'
import { useState } from 'react'
import { pushSelectedCategoryCode, getSelectedCategoryCode } from "@/redux/slices/categorySlice";
import { pushCheckedAuthorName  } from '@/redux/slices/authorSlice'
import { pushCheckedBrandName  } from '@/redux/slices/brandSlice'
import { pushCheckListForColorName  } from '@/redux/slices/colorSlice'
import { pushCheckedProductAttributeName  } from '@/redux/slices/productAttributesSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function HeaderBottomBar() {
   
    const { data: categoriesFromAPI, isLoading: loading, error,} = useGetAllCategoryQuery();
    const selectedCatCode = useSelector(getSelectedCategoryCode);
    const [categoriesNavigation, setCategoriesNavigation] = useState([]);

    useEffect(()=>{
        if(categoriesFromAPI){
            setCategoriesNavigation(categoriesFromAPI);
        }
    },[categoriesFromAPI]);

    useEffect(()=>{
       console.log(selectedCatCode);
    },[selectedCatCode]);
    const dispatch= useDispatch();

    const clearAllFilter =()=>{
        dispatch(pushCheckedAuthorName([]));
        dispatch(pushCheckedBrandName([]));
        dispatch(pushCheckListForColorName([]));
        dispatch(pushCheckedProductAttributeName([]));
    }

    function handleClick(selectedCatCode) {
        clearAllFilter();
        dispatch(pushSelectedCategoryCode(selectedCatCode));
    }

    const CategoryMenu = ({categories, isChildContent}) => (
       
            <ul className={`hb-dropdown ${isChildContent == true ? 'cat-mega-menu' : ''}`}>
            {
               categories && categories.map(category => (
                <li key={category.id}>
                   <Link className='custom-li-anchor' href={`/${category.code}`}>
                        <div
                            className='custom-li-anchor'
                            onClick={() => handleClick(category.code)}
                       >
                            {category.name}
                        </div>
                        </Link>
                  
                    {
                        category.children && category.children.length>0 &&
                        (<CategoryMenu categories={category.children} isChildContent={true} />)
                    }
                </li>
            ))
          }
        </ul>
      );

  return (
    <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
               
                <div className="hb-menu">
                    <nav>
                     
                         <ul>
                            <li><a href="index.html">Categories</a> 
                            <CategoryMenu categories={categoriesNavigation}  isChildContent={false}/>
                              
                           

                            </li>
                          
                           <li className="megamenu-holder"><a href="shop-left-sidebar.html">Shop</a>
                                <ul className="megamenu hb-megamenu">
                                    <li><a href="shop-left-sidebar.html">Shop Page Layout</a>
                                        <ul>
                                            <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                                               </ul>
                                    </li>
                                   
                                </ul>
                            </li> 
                            <li><a href="blog-left-sidebar.html">Blog</a>
                            </li>
                           
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="shop-left-sidebar.html">Special Day</a></li>
                          
                        </ul> 
                    </nav>
                </div>
            
            </div>
        </div>
    </div>
</div>

  )
}
