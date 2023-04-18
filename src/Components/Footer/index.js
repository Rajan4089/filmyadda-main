import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsMailbox2 , BsGoogle, BsGithub, BsTelegram, BsInstagram } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                                <li>
                                    <a rel="noreferrer" href="https://instagram.com/rajan3376?igshid=ZDdkNTZiNTM=" target="_blank">
                                        <BsInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://web.telegram.org/z/" target="_blank">
                                        <BsTelegram/>
                                    </a>
                                </li>
                                                             
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>2023. Developed and Designed  by Rajan, Anurag Pal.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;
