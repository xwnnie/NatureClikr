import "./SplashPage.css";
import StartFreeModal from "./StartFreeModal";

const SplashPage = () => {
    return (
        <div className="center-text">
            <h1>Find your inner peace.</h1>
            <p>
            Join the NatureClikr community, home to nature lovers.
            </p>
            <StartFreeModal />          
        </div>

    );
}

export default SplashPage;