import React from 'react'

function Specialities(pops) {
    return (
        <div className="our-specialities-card">
            <a href="{pops.data.url}">
                <img src={pops.data.imgpath} alt="" />
                <div className="card-details">
                    <h3 className="name">{pops.data.title}</h3>
                </div>
            </a>
        </div>
    )
}


function SpecialitiesSection() {
    const Specialitiesdata = [
        {
            id: 1,
            imgpath: "https://www.plannepal.com/assets/img/our-specialities/tour-banner-special.jpg?ver=1465419636",
            title: "Tour in Nepal",
            url: "https://www.plannepal.com/nepal/tour",
        },
        {
            id: 2,
            imgpath: "https://www.plannepal.com/assets/img/our-specialities/tour-banner-special.jpg?ver=1465419636",
            title: "Flight Booking",
            url: "https://www.plannepal.com/nepal/tour"
        }
        ,
        {
            id: 2,
            imgpath: "https://www.plannepal.com/assets/img/our-specialities/tour-banner-special.jpg?ver=1465419636",
            title: "International fight",
            url: "https://www.plannepal.com/nepal/tour"
        }
    ]
    return (
        <section className="container mt-5">
            <h2 className="text-success text-center mb-4">Our Specialities</h2>
            <div className="row gy-4">
                {
                    Specialitiesdata.map((itesm) => (
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <Specialities  data = {itesm}/>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default SpecialitiesSection
