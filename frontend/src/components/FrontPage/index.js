import { useSelector } from "react-redux";

import Explore from "../Explore";
import Welcome from "../Welcome";

const FrontPage = ({ isLoaded }) => {
    const sessionUser = useSelector((state) => state.session.user);
    let mainPage;
    if (sessionUser) {
        mainPage = (
            <Explore />
        )
    } else {
        mainPage = (
           <Welcome />
        )
    }

    return (
        <div>
            {isLoaded && mainPage}
        </div>
    );
};

export default FrontPage;
