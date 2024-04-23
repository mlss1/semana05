import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";
import { Button } from "bootstrap";


const root = createRoot(document.getElementById("root"));
root.render(<>
    <Button className='btn btn-primary'>Texto</Button>
    <StrictMode>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <Main></Main>
                </div>
                <div className="col-md-3">
                    <Aside></Aside>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode></>
);