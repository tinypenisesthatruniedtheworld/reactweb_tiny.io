import React from 'react'
import { Container, Row, Col,Nav, Navbar, Image} from 'react-bootstrap'
import con_penis_51 from 'src/assets/about/con_penis_51.png'
import icon_discord from 'src/assets/socials_store_icons/icon_discord.png'
import icon_twitter from 'src/assets/socials_store_icons/icon_twitter.png'
import icon_opensea from 'src/assets/socials_store_icons/icon_opensea.png'
import icon_instagram from 'src/assets/socials_store_icons/icon_instagram.png'
import icon_youtube from 'src/assets/socials_store_icons/icon_youtube.png'
export const Footer = () => {
    return (
        <div>
            <footer >
                <Container>
                    <Row className="pt-5 mb-5">                       
                        <Col>
                            <Nav className="justify-content-center">
                                <Navbar.Brand href="https://www.instagram.com/tinyp_nft/">
                                    <img
                                            src={icon_instagram}
                                            width="30"
                                            className="d-inline-block align-middle"
                                            alt="Instagram"
                                        />
                                </Navbar.Brand>
                                <Navbar.Brand href="https://discord.com/invite/HjTc8brH">
                                    <img
                                            src={icon_discord}
                                            width="30"
                                            className="d-inline-block align-middle"
                                            alt="Discord"
                                        />
                                </Navbar.Brand>
                                <Navbar.Brand href="https://twitter.com/tinypenisnft">
                                    <img
                                            src={icon_twitter}
                                            width="30"
                                            className="d-inline-block align-middle"
                                            alt="Twitter"
                                        />
                                </Navbar.Brand>
                                <Navbar.Brand href="#home">
                                    <img
                                            src={icon_opensea}
                                            width="30"
                                            className="d-inline-block align-middle"
                                            alt="Opensea"
                                        />
                                </Navbar.Brand> 
                                <Navbar.Brand href="https://www.youtube.com/channel/UCfx4pRB3ZkGvXHEyid7iKGw/featured">
                                    <img
                                            src={icon_youtube}
                                            width="30"
                                            className="d-inline-block align-middle"
                                            alt="Youtube"
                                        />
                                </Navbar.Brand> 
                            </Nav>
                            <p className="pt-2 text-center mb-1 lead colour-gray" style={{ fontSize: 12 }} ><small>
                            Powerful Men With Tiny Penises That Ruined The World
                            </small></p> 
                            <p className="text-center mb-4 lead colour-gray" style={{ fontSize: 12 }} ><small>
                            ALL RIGHTS RESERVED
                            </small></p> 
                            <Image className="mb-3 img-fluid mx-auto d-block" width="100" src={con_penis_51} />
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}
