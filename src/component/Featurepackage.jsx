
import React from 'react'

function FeaturePackageitem(props) {
    return (
        <li><a href={props.data.url}><i class="bi bi-arrow-right"></i> {props.data.text}</a></li>
    )
}

function Featurepackage() {

    const featurepackagedata = [
        {
            id: 1,
            url : "https://www.plannepal.com/nepal/tour/nepal-family-tour",
            text : " Nepal Family Holiday"
        },
        {
            id: 2,
            url : "https://www.plannepal.com/nepal/tour/nepal-family-tour",
            text : " Nepal Vacation Tour"
        },
        {
            id: 3,
            url : "https://www.plannepal.com/nepal/tour/nepal-family-tour",
            text : " Nepal kljldj Tour"
        },
        {
            id: 1,
            url : "https://www.plannepal.com/nepal/tour/nepal-family-tour",
            text : " Nepal Family Holiday"
        },
        {
            id: 2,
            url : "https://www.plannepal.com/nepal/tour/nepal-family-tour",
            text : " Nepal Vacation Tour"
        },
        {
            id: 3,
            url : "https://www.plannepal.com/nepal/tour/nepal-family-tour",
            text : " Nepal kljldj Tour"
        }
    ]
    return (
        <div>
            <ul className="featurepackage-list">
                {
                    featurepackagedata.map((items)=>(
                        <FeaturePackageitem data = {items}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default Featurepackage

