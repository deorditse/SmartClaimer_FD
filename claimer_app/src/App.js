import './App.css';
import styles from './header.module.css'
import Logo from "./components/Header/Title/Logo/logo";
import ButtomRegistration from "./components/Header/Title/Buttom_registration/button_registration";
import Name from './components/Header/Title/Name/name'
import ButtonLogin from "./components/Header/Title/Button_login/button_login";
import NameMiddle from "./components/Header/Midle/NameMiddle/NameMiddle";
import TextMiddle from "./components/Header/Midle/TextMiddle/TextMiddle";
import ButtonTryFree from "./components/Header/Midle/ButtonTryFree/ButtonTryFree";
import ImageMagician from "./components/Header/Midle/ImageMagician/ImageMagician";
// import {Logo,ButtomRegistration,Name,ButtonLogin,NameMiddle,TextMiddle,ButtonTryFree,ImageMagician} from "./components"
const App = (props) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.content}>
                    <div className={styles.titleBlock}>
                        <Name/>
                        <Logo/>
                    </div>
                    <div className={styles.buttonBlock}>
                        <ButtomRegistration/>
                        <ButtonLogin/>
                    </div>
                </div>
            </header>

            <div className={styles.middle}>
                <div className={styles.content}>
                    <div className={styles.midleBlock}>
                        <NameMiddle/>
                        <TextMiddle/>
                        <ButtonTryFree/>
                    </div>
                    <div className={styles.imageContainer}>
                        <ImageMagician/>
                    </div>
                </div>
            </div>

            {/*<div className={styles.opportunities}>*/}
            {/*    <div className={styles.content}>*/}
            {/*        <div className={styles.titleBlock}>*/}
            {/*            <Name/>*/}
            {/*            <Logo/>*/}
            {/*        </div>*/}
            {/*        <div className={styles.buttonBlock}>*/}
            {/*            <ButtomRegistration/>*/}
            {/*            <ButtonLogin/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>
    );
}

export default App;
