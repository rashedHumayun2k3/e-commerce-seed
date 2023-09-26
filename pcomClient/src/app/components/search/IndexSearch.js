"use client"
import React from 'react'
import SearchLandingLeft from './SearchLandingLeft'
import SearchLandingRight from './SearchLandingRight'

export default function IndexSearch() {
  return (
   <>
    <div className="content-wraper">
                <div className="container">
                    <div className="row flex-direction">
                    <SearchLandingLeft/>
                        <SearchLandingRight/>
                      
                    </div>
                </div>
            </div>
            </>
  )
}

