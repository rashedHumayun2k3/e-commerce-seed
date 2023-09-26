import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useGetBrandForSearchingProductQuery } from '@/redux/api/productAPI'
import { pushCheckedBrandName, getSelectedBrandIdList  } from '@/redux/slices/brandSlice'
import { useGetAllAuthorQuery } from '@/redux/api/authorAPI'
import { useGetAllColorQuery } from "@/redux/api/colorAPI";
import { pushCheckListForColorName, getAllCheckedColorList } from "@/redux/slices/colorSlice"
import { pushCheckedAuthorName, getAllAuthorCheckList  } from '@/redux/slices/authorSlice'

import FilterCommonCheckBox from '@/app/components/search/FilterCommonCheckBox'
import CategoryAttributes from '@/app/components/search/CategoryAttributes'
import AddingQueryInRouter from '@/app/components/url-processing/AddingQueryInRouter'
import { useState } from 'react';

function FilterCheckBoxGateway() {

//
// Get and prepare brand data for generating checkbox
//
const { data: brandListForFilter } = useGetBrandForSearchingProductQuery()
const dataSelectedBrandIdList = useSelector(getSelectedBrandIdList);

//
// Get and prepare brand data for generating checkbox
//
const { data: authorListForFilter } = useGetAllAuthorQuery()
const dataSelectedAuthorIdList = useSelector(getAllAuthorCheckList);

//
// Get and prepare color data for generating checkbox
//
const { data: colorListForFilter } = useGetAllColorQuery()
const dataSelectedColorIdList = useSelector(getAllCheckedColorList);


  return (
  <>
   <FilterCommonCheckBox 
   checkedAttribute={brandListForFilter} 
   attributeHeaderName={"Brand Name"}
   pushCheckedValueInReducer={pushCheckedBrandName}
   selectedCheckListFromReducer={dataSelectedBrandIdList} />

<FilterCommonCheckBox 
   checkedAttribute={authorListForFilter} 
   attributeHeaderName={"Author Name"}
   pushCheckedValueInReducer={pushCheckedAuthorName}
   selectedCheckListFromReducer={dataSelectedAuthorIdList} />

<FilterCommonCheckBox 
   checkedAttribute={colorListForFilter} 
   attributeHeaderName={"Color Name"}
   pushCheckedValueInReducer={pushCheckListForColorName}
   selectedCheckListFromReducer={dataSelectedColorIdList} />

<CategoryAttributes/>
<AddingQueryInRouter/>
  </>
  )
}

export default FilterCheckBoxGateway