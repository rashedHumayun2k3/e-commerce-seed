import React from 'react'
import Link from 'next/link';

export default function ActionOnProduct() {
  return (
    <>
      <ul className="add-actions-link">
          <li className="add-cart"><a href="#">Add to cart</a></li>
          <li className="wishlist">
            <Link href="/wishlist" as="/wishlist">
              <i className="fa fa-heart-o"></i>
            </Link>
          </li>
          <li><a className="quick-view" data-toggle="modal" data-target="#exampleModalCenter" href="#"><i className="fa fa-eye"></i></a></li>
      </ul>
    </>
  )
}
