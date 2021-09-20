import { Link, useHistory } from "react-router-dom";
import './Banner.css';

function Banner() {
    const history = useHistory()
    return(
        <div className="banner-container">
            <div className="banner_info">
                <div  className="text1-container" >
                <span className="text1">
                    Not sure where to go?Perfect
                </span>
                </div>
                <div className="redirect-button-container">
                    <button
                    onClick={() => history.push('/spots')}
                    className="redirect-button"
                    >
                        I'm flexible
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner;
