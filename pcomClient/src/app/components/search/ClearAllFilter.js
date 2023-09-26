import React from 'react'
import { useEffect } from 'react'
import { pushCheckedAuthorName  } from '@/redux/slices/authorSlice'
import { pushCheckedBrandName  } from '@/redux/slices/brandSlice'
import { pushCheckListForColorName  } from '@/redux/slices/colorSlice'
import { pushCheckedProductAttributeName  } from '@/redux/slices/productAttributesSlice'
import { useDispatch } from 'react-redux'

function ClearAllFilter() {
    const dispatch=useDispatch();
    const clearAllFilter =()=>{
        dispatch(pushCheckedAuthorName([]));
        dispatch(pushCheckedBrandName([]));
        dispatch(pushCheckListForColorName([]));
        dispatch(pushCheckedProductAttributeName([]));
    }
  return (
    <>
     <button className="btn-clear-all mb-sm-30 mb-xs-30" onClick={()=>clearAllFilter()}>Clear all</button>
    </>
  )
}

export default ClearAllFilter