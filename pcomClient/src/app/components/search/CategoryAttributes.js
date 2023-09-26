import React, { useEffect, useState } from 'react'
import { useGetProductAttributeForSearchQuery } from '@/redux/api/categoryAttributesAPI'
import { pushCheckedProductAttributeName,getProductAttributeCheckList } from '@/redux/slices/productAttributesSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function CategoryAttributes() {  
    const [attributeValueListReducerVal, setAttributeValueListReducerVal]= useState([]);
    const [attrbuteCheckBoxes, setAttributeCheckBoxes] = useState([]);
    const { data: attributeListForSearch } = useGetProductAttributeForSearchQuery()
    const categorySelectorValue = useSelector(getProductAttributeCheckList);

    useEffect(()=>{
        if (categorySelectorValue) {
            setAttributeValueListReducerVal(categorySelectorValue);
        }
    },[categorySelectorValue])

    useEffect(()=>{
        setAttributeCheckBoxes(attributeListForSearch);
    },[attributeListForSearch]);
    

    const dispatch= useDispatch()
  
    function attributeCheckedChange(e, item){
        const checked = e.target.checked;
        const checkBoxText = e.target.name;
        const selectedAttributeValueId = e.target.id;
        const attributeName = item.attributeName;
        const attributeId=item.attributeId;
        const checkedIdWithParentVal= attributeId + "_" + selectedAttributeValueId;
        
        const checkArray=[];
        if (checked) {
            const attribute={ 
                attributeParentName: attributeName, 
                attributeParentId: attributeId,
                checkBoxName:checkBoxText, 
                checkedValue: selectedAttributeValueId, 
                checkedIdWIthParent: checkedIdWithParentVal 
            };
            const isExist = attributeValueListReducerVal.some(attr => attr.checkedIdWIthParent === checkedIdWithParentVal);
            if(!isExist){
                checkArray.push([ ...attributeValueListReducerVal, attribute]);
                setAttributeValueListReducerVal(attributeValueListReducerVal => [ ...attributeValueListReducerVal,attribute]);
            }
        }
        else {
            checkArray.push(attributeValueListReducerVal.filter((attr) => attr.checkedIdWIthParent !== checkedIdWithParentVal));
            setAttributeValueListReducerVal(
                attributeValueListReducerVal.filter((attr) => attr.checkedIdWIthParent !== checkedIdWithParentVal)
            );
        }
  
       dispatch(pushCheckedProductAttributeName(checkArray[0]));
    }

    const getCheckedStatus = (attributeId) => attributeValueListReducerVal.some(element => {
        if (element == attributeId) {
            return true;
        }
        return false;
    });

   
    return (
        <>
      <div className="filter-sub-area">
       
            {
                attrbuteCheckBoxes && attrbuteCheckBoxes.map((item, index) => (
                    <div key={`div-${item.id}`}>
                        <div className="sidebar-title">
                            <h2>{item.attributeName}</h2></div>
                        <div className="categori-checkbox">
                            <ul key={`ul-${index}`}>
                            {
                                item.attributeValue && JSON.parse(item.attributeValue).map((attribute, indexAtt) => (
                                <li key={`li-${index}-${indexAtt}`}>
                                    <input name={attribute.text} id={attribute.value} type="checkbox"
                                    defaultChecked={getCheckedStatus} 
                                    onChange={event => attributeCheckedChange(event, item)}
                                    />
                                    <a href="#">{attribute.text}</a>
                                </li>
                                ))
                            }
                            </ul>
                       
                        </div>
                    </div>
                    
            ))}
          
        </div>
    </>
   
  )
}

