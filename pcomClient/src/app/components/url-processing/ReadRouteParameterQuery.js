import React, { useEffect, useState } from 'react'
import { getDetailsFromRoutingParameter } from '@/redux/api/routingAPI';
import { usePathname, useRouter,useSearchParams  } from "next/navigation";
import {usePostRoutingParameterMutation} from '@/redux/api/routingAPI';

function ReadRouteParameterQuery() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams()
    const [postRoutingParameter , { isLoading, isError, data }] = usePostRoutingParameterMutation();
    const [routeParameters, setRouteParameters] = useState();
 

   useEffect(() => {
    const pathnameParts = pathname.trim()?.split('/');

    const routeParams={
        brandOrCategory: pathnameParts,
        searchAttribute: searchParams.get('ppath')? searchParams.get('ppath'):"",
        formType: searchParams.get('from')?searchParams.get('from'):"",
        aerviceName:  searchParams.get('service')? searchParams.get('service'):"",
        rating: searchParams.get('rating')?searchParams.get('rating'):"",
        location: searchParams.get('location')?searchParams.get('location'):"",
        price: searchParams.get('price')?searchParams.get('price'):"",
        author:searchParams.get('author')?searchParams.get('author'):""
      }
      console.log(routeParams);
    postRoutingParameter(routeParams);
    },[pathname]);




  return (
   <></>
  )
}

export default ReadRouteParameterQuery