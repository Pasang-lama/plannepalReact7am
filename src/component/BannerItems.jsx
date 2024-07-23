import React from 'react'

function BannerItems(props) {
    return (
        <div className="carousel-item active">
            <img src={props.data.imgpath} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>{props.data.bannerHeading}</h5>
                <p>{props.data.bannerDes}</p>
            </div>
        </div>
    )
}


function BannerData() {
    var bannerdata = [
        {
            id: 1,
            imgpath: "https://www.plannepal.com/uploads/2022/12/standard/ba71d2935e48626811eaa7f7c84f389c.jpg?ver=1672155708",
            bannerHeading: "First slide label",
            bannerDes: "Some representative placeholder content for the third slide."
        },
        {
            id: 2,
            imgpath: "https://www.plannepal.com/uploads/2016/12/standard/d922009ec7e1d3d3755ac007ee963e56.jpg?ver=1482387074",
            bannerHeading: "Second slide label",
            bannerDes: "Some representative placeholder content for the third slide."
        },
        {
            id: 3,
            imgpath: "https://www.plannepal.com/uploads/2016/12/standard/d922009ec7e1d3d3755ac007ee963e56.jpg?ver=1482387074",
            bannerHeading: "third slide label",
            bannerDes: "Some representative placeholder content for the third slide."
        },
        {
            id: 4,
            imgpath: "https://www.plannepal.com/uploads/2016/12/standard/39ef6e51859b4ddc54f8a8bd5621882f.jpg?ver=1481983050",
            bannerHeading: "third slide label",
            bannerDes: "Some representative placeholder content for the third slide."
        }
    ]

    return (
        <section className="banner-section">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    {
                        bannerdata.map((items) => (
                            <BannerItems  data={items}/>
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>

    )
}


export default BannerData
