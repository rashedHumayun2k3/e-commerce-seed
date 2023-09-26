import { Carousel } from "./lib";

function ProductSlide() {
  const data = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: `<div>
        San Francisco<br/><span>Next line</span>
      </div>`,
    },
    {
      image:
        "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "<div>San Francisco</div>",
    },
    {
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "<div>San Francisco</div>",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
    <div style={{ textAlign: "center" }}>
    <div className="product-details-left">
        <div className="product-details-images slider-navigation-1">
        <Carousel
            data={data}
            time={2000}
            width="850px"
         
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
        </div>
    </div>
      </div>
    </div>
  );
}

export default ProductSlide;

// import React from 'react'

// export default function ProductSlide() {
//   return (
//                 <div className="product-details-left">
//                     <div className="product-details-images slider-navigation-1">
//                         <div className="lg-image">
//                             <a className="popup-img venobox vbox-item" href="images/product/large-size/1.jpg" data-gall="myGallery">
//                                 <img src="/asset/images/product/large-size/1.jpg" alt="product image"/>
//                             </a>
//                         </div>
//                         <div className="lg-image">
//                             <a className="popup-img venobox vbox-item" href="images/product/large-size/2.jpg" data-gall="myGallery">
//                                 <img src="/asset/images/product/large-size/2.jpg" alt="product image"/>
//                             </a>
//                         </div>
//                         <div className="lg-image">
//                             <a className="popup-img venobox vbox-item" href="images/product/large-size/3.jpg" data-gall="myGallery">
//                                 <img src="/asset/images/product/large-size/3.jpg" alt="product image"/>
//                             </a>
//                         </div>
//                         <div className="lg-image">
//                             <a className="popup-img venobox vbox-item" href="images/product/large-size/4.jpg" data-gall="myGallery">
//                                 <img src="/asset/images/product/large-size/4.jpg" alt="product image"/>
//                             </a>
//                         </div>
//                         <div className="lg-image">
//                             <a className="popup-img venobox vbox-item" href="images/product/large-size/5.jpg" data-gall="myGallery">
//                                 <img src="/asset/images/product/large-size/5.jpg" alt="product image"/>
//                             </a>
//                         </div>
//                         <div className="lg-image">
//                             <a className="popup-img venobox vbox-item" href="images/product/large-size/6.jpg" data-gall="myGallery">
//                                 <img src="/asset/images/product/large-size/6.jpg" alt="product image"/>
//                             </a>
//                         </div>
//                     </div>
//                     <div className="product-details-thumbs slider-thumbs-1">                                        
//                         <div className="sm-image"><img src="/asset/images/product/small-size/1.jpg" alt="product image thumb"/></div>
//                         <div className="sm-image"><img src="/asset/images/product/small-size/2.jpg" alt="product image thumb"/></div>
//                         <div className="sm-image"><img src="/asset/images/product/small-size/3.jpg" alt="product image thumb"/></div>
//                         <div className="sm-image"><img src="/asset/images/product/small-size/4.jpg" alt="product image thumb"/></div>
//                         <div className="sm-image"><img src="/asset/images/product/small-size/5.jpg" alt="product image thumb"/></div>
//                         <div className="sm-image"><img src="/asset/images/product/small-size/6.jpg" alt="product image thumb"/></div>
//                     </div>
//                 </div>
//   )
// }
