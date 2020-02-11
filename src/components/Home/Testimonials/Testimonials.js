import React from 'react';
import "./Testimonials.css"
import SecondHappyCustomer from "../../../assets/happy-customer-2.jpg"
import FirstHappyCustomer from "../../../assets/happy-customer-1.jpg"

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="common-header">
                <h1 className="common-heading">Our Customers</h1>
                <div className="underline">
                    <div className="small-underline"></div>
                    <div className="big-underline"></div>
                </div>
            </div>
            <div className="text-testimonials">
                <p>Our customers are more than happy. Not just is our food great, but we provide
                    the best service, if anything did not go as you wished, we will make sure to fix
                    that!</p>
            </div>
            <div className="customers">
                <div className="customer-figure">
                <div className="customer-image-wrapper">
                                    <img src={FirstHappyCustomer} alt="customer" className="customer-image" />
                </div>

                    <div className="customer-text-part">
                    <h1 className="customer-name">John Fragile</h1>
                    <h3 className="customer-sub-heading">Happy Customer</h3>
                    <p className="customer-text">The service was amazing. I personally could not believe it, but not just that, the food itself, so fresh and probably the best food I have ever eaten. They also do provide you all the macros and as a developer I try to stay in shape.</p>
                    </div>
                </div>
                <div className="customer-figure">
                <div className="customer-image-wrapper">
                                    <img src={SecondHappyCustomer} alt="customer" className="customer-image" />
                </div>
                    <div className="customer-text-part">
                    <h1 className="customer-name">Monica Thay</h1>
                    <h3 className="customer-sub-heading">Happy Customer</h3>
                    <p className="customer-text">The food was incredible. All I can say is go there and see it for yourself. The service is totally more than on point, and also something which is incredible, is that the food has quality, but at the same time it did not take long for me to get it after ordering.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
