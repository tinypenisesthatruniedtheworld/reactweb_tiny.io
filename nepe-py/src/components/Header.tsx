import React, {useEffect, useState} from 'react'
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap'
import con_penis_41 from 'src/assets/about/con_penis_41.png'
import icon_discord from 'src/assets/socials_store_icons/icon_discord.png'
import icon_twitter from 'src/assets/socials_store_icons/icon_twitter.png'
import icon_opensea from 'src/assets/socials_store_icons/icon_opensea.png'
import Swal from "sweetalert2";

declare let window: any;
type currentAccountForParentType = (account: string) => void;


const modalCS=()=>{
	Swal.fire(
    'Coming Soon',
    'Working on it!',
    'info'
  )
};
export const Header = () => {

  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
      try {
          const { ethereum } = window;
          if (!ethereum) {
          console.log("no metamask detected");
          } else {
          const accounts = await ethereum.request({ method: "eth_requestAccounts"});

          if (accounts.length !== 0) {
              const account = accounts[0];
              setCurrentAccount(account);
              console.log(`add account: ${account}`);
              console.log("have account", account);
          } else {
              console.log("no accounts!");
          }
          }
      } catch (error) {
          console.log("error", error);
      }
    }

    const checkIfWalletIsConnected = async () => {
      const { ethereum } = window;

      if (!ethereum) {
          console.log("Make sure you have metamask!");
          return;
      } else {
          console.log("We have the ethereum object");
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
          const account = accounts[0];
          setCurrentAccount(account)
          console.log("have an account on homescreen");
      } else {
          console.log("no account");
      }

    }

    useEffect(() => {
        checkIfWalletIsConnected();
        console.log(`current account on navbar: ${currentAccount}`);
    }, []);

    return (
        <div id="about" >
           <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
            <Container>
              <Navbar.Brand href="/">
              <img
                    src={con_penis_41}
                    width="35"
                    className="d-inline-block align-middle"
                    alt="Logo"
                  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-center flex-row flex-wrap" style={{ flex: 1 }}>
                            <Nav.Link id="nav-link" className="col-6 col-md-auto small font-titi-bold" style={{ fontSize: 14 }} href="/#about">ABOUT</Nav.Link>
                            <Nav.Link id="nav-link" className="col-6 col-md-auto small font-titi-bold" style={{ fontSize: 14 }} href="/#roadmap">ROADMAP</Nav.Link>
                            <Nav.Link id="nav-link" className="col-6 col-md-auto small font-titi-bold" style={{ fontSize: 14 }} href="/#gallery">GALLERY</Nav.Link>
                            <Nav.Link id="nav-link" className="col-6 col-md-auto small font-titi-bold" style={{ fontSize: 14 }} href="/#team">TEAM</Nav.Link>
                            <Nav.Link id="nav-link" className="col-6 col-md-auto small font-titi-bold" style={{ fontSize: 14 }} href="/#faq">FAQ</Nav.Link>
                </Nav>
                <hr className="d-md-none text-white-50"></hr>
                <Nav className="pt-2 flex-row flex-wrap">
                  
                    <Nav.Link  className="col-2 col-md-auto" href="https://discord.com/invite/HjTc8brH">
                    <img
                          src={icon_discord}
                          width="22"
                          className="d-inline-block align-middle"
                          alt="Discord"
                        />                       
                    </Nav.Link>
                    <Nav.Link className="col-2 col-md-auto" href="https://twitter.com/tinypenisnft">
                    <img
                          src={icon_twitter}
                          width="22"
                          className="d-inline-block align-middle"
                          alt="Twitter"
                        />
                    </Nav.Link>
                    <Nav.Link className="col-2 col-md-auto" href="#home" onClick={()=>modalCS()}>
                    <img
                          src={icon_opensea}
                          width="22"
                          className="d-inline-block align-middle"
                          alt="Opensea"
                        />
                    </Nav.Link>  
                    
                </Nav>
                <hr className="d-md-none text-white-50"></hr>
                <Form className="pt-2 d-flex my-2 my-md-0">
                  <Button variant="outline-success font-titi-bold" style={{ marginLeft: "1rem", width: 130, fontSize: 12 }} size="sm" onClick={connectWallet}>
                    {currentAccount=="" ? "CONNECT" : `${currentAccount.substring(0,8)}...`}
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
}
