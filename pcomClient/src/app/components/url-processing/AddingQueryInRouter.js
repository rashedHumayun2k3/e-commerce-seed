import React, { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {getSelectedBrandIdList } from "@/redux/slices/brandSlice";
import { getProductAttributeCheckList } from "@/redux/slices/productAttributesSlice";
import { getAllAuthorCheckList } from "@/redux/slices/authorSlice";
import { getAllCheckedColorList } from "@/redux/slices/colorSlice";
import { useDispatch, useSelector } from 'react-redux';

export default function AddingQueryInRouter() {
    const router = useRouter();
    const pathname = usePathname();
    const dataSelectedBrandIdList = useSelector(getSelectedBrandIdList);
    const dataSelectedAuthorIdList = useSelector(getAllAuthorCheckList);
    const dataSelectedColorIdList = useSelector(getAllCheckedColorList);

    const [attributeDynamicQueryString, setAttributeDynamicQueryString]= useState();
    const [brandDynamicQueryString, setBrandDynamicQueryString]= useState();
    const [authorDynamicQueryString, setAuthorDynamicQueryString]= useState();
    const [colorDynamicQueryString, setColorDynamicQueryString]= useState();

    const [urlValue, setUrlValue] = useState("");

    useEffect(()=>{
        setUrlValue(pathname);
    },[])

    useEffect(()=>{
        window.history.pushState({ path: urlValue }, '', urlValue);
    },[urlValue])

    function generateQueryString(dataList, setDynamicQueryString) {
        let queryString = "";
        if (dataList) {
          queryString = dataList
            .map((item) => item.checkedText.trim())
            .filter((text) => text)
            .join(",");
        }
        setDynamicQueryString(queryString);
      }
      
      // Brand query
      useEffect(() => {
        generateQueryString(dataSelectedBrandIdList, setBrandDynamicQueryString);
      }, [dataSelectedBrandIdList]);
      
      // Author query
      useEffect(() => {
        generateQueryString(dataSelectedAuthorIdList, setAuthorDynamicQueryString);
      }, [dataSelectedAuthorIdList]);
      
      // Color query
      useEffect(() => {
        generateQueryString(dataSelectedColorIdList, setColorDynamicQueryString);
      }, [dataSelectedColorIdList]);

    //
    //Attribute query start
    //
    const categorySelectorValue = useSelector(getProductAttributeCheckList);
   
    useEffect(() => {
        if (categorySelectorValue && categorySelectorValue.length > 0) {
          const dynamicQueryAttribute = categorySelectorValue
            .map((attribute) => `${attribute.attributeParentId}:${attribute.checkedValue}`)
            .join(',');
      
          setAttributeDynamicQueryString(dynamicQueryAttribute);
        } else {
          setAttributeDynamicQueryString('');
        }
      }, [categorySelectorValue]);

    // Attribute query end

    //
    //Combine All The Query String And Generate New URL
    //
    useEffect(() => {
        const queryParams = [];
        console.log(brandDynamicQueryString, authorDynamicQueryString, colorDynamicQueryString, attributeDynamicQueryString);
        if (brandDynamicQueryString) {
          queryParams.push(`brand=${brandDynamicQueryString}`);
        }
      
        if (authorDynamicQueryString) {
          queryParams.push(`author=${authorDynamicQueryString}`);
        }
        if (colorDynamicQueryString) {
            queryParams.push(`color=${colorDynamicQueryString}`);
          }
      
        if (attributeDynamicQueryString) {
          queryParams.push(`ppath=${attributeDynamicQueryString}`);
        }
      
        const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
        const url = `${pathname}${queryString}&from=filter`;
      
        setUrlValue(url);
      }, [attributeDynamicQueryString, brandDynamicQueryString, authorDynamicQueryString, colorDynamicQueryString]);
 
    
  return (
   <>
   </>
  )
}