import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../PictureCard/Card';
import './landingPage.css';

function LandingPage() {
    return(
        <>
            <div className='landing-page'>
                <Banner />

                <div className="picture-card-display">
                    <Card
                        src="https://a0.muscache.com/im/pictures/05ce6b49-b38a-4943-a7d1-bf807d1ecf3e.jpg?im_w=960"
                        title="Outdoor getaways"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/0b3535d4-c307-4798-a781-835bf4a08802.jpg?im_w=960"
                        title="Unique stays"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/c3bcec06-9c23-4af6-9770-3ad7c17f91d6.jpg?im_w=960"
                        title="Entire homes"
                    />
                </div>
                <div className="picture-card-display">
                    <Card
                        src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480"
                        title="Pets allowed"
                    />
                    <Card
                        src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                        title="Experiences"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/3c2676df-0874-45a3-a82f-bbf57ccde1cc.jpg?im_w=720"
                        title="Outdoor collection"
                    />
                </div>

        </div>

        </>
    )
}

export default LandingPage;
