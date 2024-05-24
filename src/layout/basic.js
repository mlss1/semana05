import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import '../style.css';

const Basic = () => {
    return (
        <StrictMode>
            <Header />
            <div className="container">
                <div className="row py-5">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </StrictMode>
    );
}

export default Basic;
