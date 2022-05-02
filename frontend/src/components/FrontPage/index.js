import { useSelector } from "react-redux";

import Explore from "../Explore";
import SplashPage from "../SplashPage";

const FrontPage = ({ isLoaded }) => {
    const sessionUser = useSelector((state) => state.session.user);
    let mainPage;
    if (sessionUser) {
        mainPage = (
            <Explore />
        )
    } else {
        mainPage = (
           <SplashPage />
        )
    }

    return (
        <div>
            {isLoaded && mainPage}
        </div>
    );
};

export default FrontPage;
