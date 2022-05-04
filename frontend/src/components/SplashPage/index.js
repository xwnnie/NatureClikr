import "./SplashPage.css";
import StartFreeModal from "./StartFreeModal";

const SplashPage = () => {
    return (
        <div className="splash-container">
            <div className="center-text">
                <h1>Find your inner peace.</h1>
                <h3>
                Join the NatureClikr community, home to nature lovers like you.
                </h3>
                <StartFreeModal />          
            </div>            
        </div>


    );
}

export default SplashPage;