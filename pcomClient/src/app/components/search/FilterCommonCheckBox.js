import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

function FilterCommonCheckBox({checkedAttribute, attributeHeaderName, pushCheckedValueInReducer, selectedCheckListFromReducer}) {
    const [selectedCheckedIdList,setSelectedCheckedIdList]= useState([]);
    const dispatch= useDispatch();
    useEffect(()=>{
        console.log('selected checked:',selectedCheckListFromReducer)
        if(selectedCheckListFromReducer){
            setSelectedCheckedIdList(selectedCheckListFromReducer);
        }
    },[selectedCheckListFromReducer]);

    function attributeCheckedChange(e){
        const checked = e.target.checked;
        const checkedName = e.target.name;
        const selectedCheckedValueId = e.target.id;
        const checkArray=[];
      
        if (checked) {
            const checkedItem = {
                checkedText: checkedName,
                checkedId: selectedCheckedValueId
            }
            const isExist = selectedCheckedIdList.some(att => att.checkedId === selectedCheckedValueId);
            if(!isExist){
                checkArray.push([ ...selectedCheckedIdList,checkedItem]);
                setSelectedCheckedIdList(selectedCheckedIdList => [ ...selectedCheckedIdList,checkedItem]);
            }
        }
        else {
            checkArray.push(selectedCheckedIdList.filter((att) => att.checkedId !== selectedCheckedValueId));
            setSelectedCheckedIdList(
                selectedCheckedIdList.filter((att) => att.checkedId !== selectedCheckedValueId)
            );
        }

       dispatch(pushCheckedValueInReducer(checkArray[0]));
    }
   
 
    const getCheckedStatus = (attributeId) => selectedCheckedIdList && selectedCheckedIdList.some(att => {
        console.log(selectedCheckedIdList,att.checkedId, '==', attributeId);
        if (att.checkedId == attributeId) {
            return true;
        }
        return false;
    });


  return (
  <>
    <div className="filter-sub-area">
    <div className="sidebar-title">
                            <h2>{attributeHeaderName}</h2></div>
      
        <div className="categori-checkbox">
            {
                checkedAttribute && checkedAttribute.map((item, index) => (
                <ul key={`ul-${item.code}_${item.id}`}>
                    {
                        <>
                            <li key={`li-${item.code}_${item.id}`}>
                                <input name={item.code} id={`${item.code}_${item.id}`} type="checkbox"
                                checked={getCheckedStatus(`${item.code}_${item.id}`)} onChange={attributeCheckedChange}/>
                                <a href="#">{item.nameEnglish}</a>
                            </li>
                        </>
                    }
                </ul>
            ))}
        </div>
    </div>
  </>
  )
}

export default FilterCommonCheckBox