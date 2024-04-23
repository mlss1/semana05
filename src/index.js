import 'bootstrap/dist/css/bootstrap.min.css';
import React, { StrictMode } from "react";
import './style.css';
import { createRoot } from "react-dom/client";
import Message from "./message";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";
import Button from "react-bootstrap/Button";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const domNode = document.getElementById('app');
const root = createRoot(document.getElementById("root"));
root.render(<>
   
    <StrictMode>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                <Button className='btn btn-primary'>
                    <i data-feather="user"> </i>Usuario</Button>
                <Button className='btn btn-primary'>
                    <i data-feather="upload"> </i>Cargar</Button>
                <Button className='btn btn-primary'>
                    <i data-feather="save"> </i>Guardar</Button>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                    <Main></Main>
                </div>
                <div className="col-md-3">
                    <Aside></Aside>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode>
    
    </>
);