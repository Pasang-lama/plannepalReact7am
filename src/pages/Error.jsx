import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Error() {
    return (
        <div>
            <Header />
            <div className="contaner my-5 py-5">
                <h1 className="text-center text-danger">404 Page Not Found</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Error
