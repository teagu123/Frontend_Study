import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import siteLogo from "../../assets/images/logo.png";
import { modalContext } from "../../context/ModalContext";

import { useContext } from "react";

function Header() {
    const { modalview, setModalView } = useContext(modalContext);

    return (
        <Head>
            <FontAwesomeIcon icon={faBars} />
            <Site>
                <div>
                    <img src={siteLogo} alt="siteLogo.png" />
                </div>
                <span>Instagoraeng</span>
            </Site>
            <FontAwesomeIcon
                icon={faPlus}
                color="#f1404b"
                onClick={() => setModalView(true)}
            />
        </Head>
    );
}

export default Header;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #a3daff;
    height: 60px;
    font-size: 30px;
    padding: 0 19px;
`;

const Site = styled.div`
    display: flex;

    & > div > img {
        width: 40px;
        height: 40px;
    }

    & span {
        margin-left: 5px;
        font-size: 30px;
        font-family: "googleKalam";
    }
`;
