
import React, { useEffect, useState, Component } from "react";

import { Accordion, Button, Container, Image, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import tiny_logo_white from 'src/assets/about/tiny_logo_white.png'
import brillo from 'src/assets/buy_a_tiny/brillo.png'
import properties1 from 'src/assets/gallery/properties1.png'
import jeffrey_epstein_nft_listing_l from 'src/assets/gallery/jeffrey_epstein_nft_listing_l.gif'
import icono_logo_1 from 'src/assets/team_icons/icono_logo_1.png'
import icono_logo_2 from 'src/assets/team_icons/icono_logo_2.png'
import icono_logo_3 from 'src/assets/team_icons/icono_logo_3.png'
import icono_logo_4 from 'src/assets/team_icons/icono_logo_4.png'
import tiny_samples_1 from 'src/assets/gallery/tiny_samples_1.png'
import horrible_people from 'src/assets/gallery/horrible_people.png'
import Swal from "sweetalert2";

import { ethers } from "ethers";
import Web3 from 'web3';
declare let window: any;

const modalCSWalletNotConnected=()=>{
	Swal.fire(
    'Connect your wallet!',
    'Metamask preferred',
    'info'
  )
};
const HomeScreen = () => {

    const [currentAccount, setCurrentAccount] = useState("");

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

    const addToWhitelist = async () => {
        await checkIfWalletIsConnected();
        console.log("add to whitelist");
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        console.log(`current account on homescreen: ${currentAccount}`);
    }, []);

    // render() {
    return (
        <>
        <Container>
            <div className="pt-5"  >
                <Image className="pt-5 img-fluid mx-auto d-block" src={tiny_logo_white} width="780" height="404" />
                    <div className="pt-4 col-lg-8 mx-auto">
                        <p className="text-center mb-1 lead colour-gray"><small>Tiny Penises are a collection of NFTs that
                        dickshame the Men who have ruined the world. Rapists, Political Figures, Celebrities and more are at your
                        disposal to own and mock without mercy. As terrible people continue to do terrible things, the value of
                        their tiny penis will appreciate in value. During the project's evolution, we will continue to cook up
                        ways for everyone to join the first global protest on the Ethereum blockchain. Finally, we shall turn the
                        tables on the 1% and turn protest into profit. Let's hit them where it really hurts-- right in the wallet (and the dick). </small></p>                           
                </div>
            </div>
        </Container>
        <div className="pt-5"  >
            <Navbar collapseOnSelect expand="lg" className="bg-pink p-1  p-2  p-3  p-4  p-5">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={brillo}
                        width="45"
                        height="45"
                        className="d-inline-block align-middle"
                        />{' '}
                    <span className="h5 black-p font-titi-bold"> <em>GET A TINY PENIS</em></span>
                    </Navbar.Brand>
                    <div className="">
                    {/* <Link to="/buy"> */}
                    {currentAccount=="" ? (
                        <Button onClick={modalCSWalletNotConnected} variant="light btn-mint font-titi-semi">JOIN WHITELIST</Button>
                    ) : (
                        <Button onClick={addToWhitelist} variant="light btn-mint font-titi-semi">JOIN WHITELIST</Button>
                    )}
                    {/* </Link> */}
                    </div>
                </Container>
            </Navbar>
        </div>
        <Container>
                <div id="roadmap" className="pt-5"  >
                    <h2  className="mt-5 font-titi-bold">ROADMAP</h2>
                    <div className="col-lg-8">
                    <p className="mb-1 lead colour-gray"><small>We've set up some goalposts for ourselves. Once we hit a target
                            through percentage, we will begin to work on realizing the stated goal.</small></p>
                    </div>
                </div>
                <div className="mb-3 mb-md-0 col-lg-12 col-12 goal-b">
                    <div className="row align-items-center">
                        <div className="m-auto col-lg-1 col-2 ">
                            <h2 className="goal-pink">10%</h2>
                        </div>
                        <div className="m-auto col-lg-10 col-9">
                            <div className="goal-gray lead">
                                PenisWorld Minecraft Server
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="mb-3 mb-md-0 col-lg-12 col-12 goal-b">
                    <div className="row align-items-center">
                        <div className="m-auto col-lg-1 col-2 ">
                            <h2 className="goal-pink">20%</h2>
                        </div>
                        <div className="m-auto col-lg-10 col-9">
                            <div className="goal-gray lead">
                                We release the Dicktators. 5 of the worst people in the world (tokens held back from the sale) are airdropped to fellow Shrimpers
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="mb-3 mb-md-0 col-lg-12 col-12 goal-b">
                    <div className="row align-items-center">
                        <div className="m-auto col-lg-1 col-2 ">
                            <h2 className="goal-pink">30%</h2>
                        </div>
                        <div className="m-auto col-lg-10 col-9">
                            <div className="goal-gray lead">
                                PENI$COIN drops, turning the Penis Economy into a true dick measuring contest
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="mb-3 mb-md-0 col-lg-12 col-12 goal-b">
                    <div className="row align-items-center">
                        <div className="m-auto col-lg-1 col-2 ">
                            <h2 className="goal-pink">40%</h2>
                        </div>
                        <div className="m-auto col-lg-10 col-9">
                            <div className="goal-gray lead">
                                Penis Music, an Electronic Dance album to swing your thang to
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="mb-3 mb-md-0 col-lg-12 col-12 goal-b">
                    <div className="row align-items-center">
                        <div className="m-auto col-lg-1 col-2 ">
                            <h2 className="goal-pink">50%</h2>
                        </div>
                        <div className="m-auto col-lg-10 col-9">
                            <div className="goal-gray lead">
                                Tiny Penis Micro Game, a HMTL5 experience like no other. The first person to win the game gets to mint a tiny penis of their choice
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="mb-3 mb-md-0 col-lg-12 col-12 goal-b">
                    <div className="row align-items-center">
                        <div className="m-auto col-lg-1 col-2 ">
                            <h2 className="goal-pink">60%</h2>
                        </div>
                        <div className="m-auto col-lg-10 col-9">
                            <div className="goal-gray lead">
                                Tiny Penis Merch Store. Hats, Shirts, and Pants to cover your member
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="mb-3 mb-md-0 col-lg-12 col-12 goal-b">
                    <div className="row align-items-center">
                        <div className="m-auto col-lg-1 col-2 ">
                            <h2 className="goal-pink">70%</h2>
                        </div>
                        <div className="m-auto col-lg-10 col-9">
                            <div className="goal-gray lead">
                                Tiny Penis Condoms small, compact, safe packages available as limited physical collections
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="mb-3 mb-md-0 col-lg-12 col-12 goal-b">
                    <div className="row align-items-center">
                        <div className="m-auto col-lg-1 col-2 ">
                            <h2 className="goal-pink">80%</h2>
                        </div>
                        <div className="m-auto col-lg-10 col-9">
                            <div className="goal-gray lead">
                                We pay a Venezuelan porn actress to ball-bust Nicholas Maduro with a sledgehammer
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="mb-3 mb-md-0 col-lg-12 col-12 goal-b">
                    <div className="row align-items-center">
                        <div className="m-auto col-lg-1 col-2 ">
                            <h2 className="goal-pink">90%</h2>
                        </div>
                        <div className="m-auto col-lg-10 col-9">
                            <div className="goal-gray lead">
                                Ten of the top raiders will be invited to play Secret Hitler. The winner shall receive a special Tiny Penis
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="mb-3 mb-md-0 col-lg-12 col-12 goal-b">
                    <div className="row align-items-center">
                        <div className="m-auto col-lg-1 col-2 ">
                            <h2 className="goal-pink">100%</h2>
                        </div>
                        <div className="m-auto col-lg-10 col-9">
                            <div className="goal-gray lead">
                                Unique Tiny Penis Anime OVA in the style of Aggretsuko. You help write the script. And we keep the party going
                            </div>
                        </div>
                    </div>      
                </div>
                <div className="pt-5"  >
                    <div className="col-lg-8">
                        <p className="mb-1 lead colour-gray"><small>We will take 30% out of the initial treasury to pay the project creators</small></p>
                    </div>
                </div>
                <div  id="gallery" className="pt-4"  >
                    <hr></hr>
                </div>
                <div className="pt-5" >
                    <div className="mb-5 row">
                        <div className="col">
                            <div className="mb-4 row">
                                <div  className="mb-4 col-lg-6 col-12">
                                    <br></br>
                                    <h2 className="d-flex mb-3 font-titi-bold">
                                        GALLERY
                                    </h2>
                                    <div className="col-lg-9">
                                        <p className="mb-1 lead colour-gray text-justify"><small>Powerful Men With Tiny Penises That Ruined the World is a collection
                                        for the posterity of the digital future. We do not know if we are just at the beginning or that this is the end of civilization.
                                            We do know, however, that these men with tiny penises have forced our world into the shape we are in. </small></p>
                                        <br></br>
                                        <p className="mb-1 lead colour-gray text-justify"><small>What drives men to ruinous greed and unhappiness?
                                        Small penises?  Perhaps, but one thing is for certain: as they ascend they are loved, and as they crest they are hated.
                                        Loved or hated, their tiny penises can now be collected as markers of events changed. Tiny penises will only be minted 1:1
                                        meaning only one tiny penis will ever exist for the subject. Tiny penises will include accompanying 3D files that can be used
                                        in any three-dimensional application. Animated .gif file in sizes compatible with social media size limitations, hi-res mp4 and
                                            detailed manifest of rarity properties. Compatible with METAVERSE.</small></p>
                                    </div>
                                </div>
                                <div className="my-lg-auto col-lg-6 col-12">
                                    <Image className="pt-5 mb-3 img-fluid mx-auto d-block" src={tiny_samples_1} />
                                    <Image className="mb-3 img-fluid mx-auto d-block" src={properties1} />
                                    <Image className="mb-3 img-fluid mx-auto d-block" width="128" src={jeffrey_epstein_nft_listing_l} />
                                </div>
                            </div>
                            <div className="mb-4 row">
                                <div  className="mb-4 col-lg-12 col-12">
                                    <br></br>
                                    <h1 className="text-center  team-title-pink font-titi-bold">WHO WILL BE NEXT?</h1>   
                                    <Image className="pt-5 mb-3 img-fluid mx-auto d-block" src={horrible_people} />                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="pt-5" >
                    <div className="mb-5 row">
                        <div className="col">
                            <div id="team" className="row">
                                <div className="mb-3 col-lg-12 col-12">
                                    <h1 className="text-center  team-title-pink font-titi-bold">WHO'S THAT TINY PENIS?</h1>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="mb-3 col-lg-9 col-12">
                                    <h2 className="font-titi-bold">THE TEAM</h2>
                                    <p className="mb-1 lead colour-gray" ><small>Tiny Penis was created during a fever dream frenzy
                                    let on by COVID complications. When we sobered up, we all quickly realized that we had found something
                                        truly lifechanging and so we decided to fucking do it.</small></p>
                                </div>
                            </div>
                            <div className="row pt-5">
                                <div className="mx-auto col-md-3 col-12">
                                    <div className="mb-4 mb-md-0 row">
                                        <div className="d-flex m-auto align-items-md-center icon-container col-lg-4 col-lg-6 col-12">
                                        <img
                                            className="img-fluid m-auto"
                                            alt=""
                                            src={icono_logo_1}
                                            width="180px"
                                        />
                                        </div>
                                        <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                            <p className="pt-2 mb-1 common-sub-p text-xl-center team-name-pink lead font-titi-bold text-center">THE DEVELEPOOR</p>
                                            <p className="mb-1 common-sub-p text-md-center team-name-pink lead text-center">@needledick</p>
                                            <p className="mb-1 common-sub-p text-md-center colour-gray text-center">Computer Science & Finance degree from UPenn (not Penn State).
                                            4 years developer experience. Our inside man masquerading as a Product Manager at top tech company for his day job when he isn't
                                                screaming "fuck the system" online.</p>
                                            <p className="mb-0 common-sub-p text-md-center lead colour-gray text-center">100% not gonna rug you</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto col-md-3 col-12">
                                    <div className="mb-4 mb-md-0 row">
                                        <div className="d-flex m-auto align-items-md-center icon-container col-lg-4 col-lg-6 col-12">
                                        <img
                                            className="img-fluid m-auto"
                                            alt=""
                                            src={icono_logo_2}
                                            width="180px"
                                        />
                                        </div>
                                        <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                            <p className="pt-2 mb-1 common-sub-p text-xl-center team-name-pink lead font-titi-bold text-center">RESIDENT DAD-FIGURE</p>
                                            <p className="mb-1 common-sub-p text-md-center team-name-pink lead text-center">@Lil Jimmy</p>
                                            <p className="mb-1 common-sub-p text-md-center colour-gray text-center">Cal arts Grad, Former Artistic Director of Cartoon Network,
                                                Creative Director at Turner in a past life. Has met a few of the powerful men on our list and can confirm that they have tiny dicks.</p>
                                            <p className="mb-0 common-sub-p text-md-center lead colour-gray text-center">75% not gonna rug you</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="mx-auto col-md-3 col-12">
                                    <div className="mb-4 mb-md-0 row">
                                        <div className="d-flex m-auto align-items-md-center icon-container col-lg-4 col-lg-6 col-12">
                                        <img
                                            className="img-fluid m-auto"
                                            alt=""
                                            src={icono_logo_3}
                                            width="180px"
                                        />
                                        </div>
                                        <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                            <p className="pt-2 mb-1 common-sub-p text-xl-center team-name-pink lead font-titi-bold text-center">THE GRATE ARTISTE</p>
                                            <p className="mb-1 common-sub-p text-md-center team-name-pink lead text-center">@Mr. Johnson</p>
                                            <p className="mb-1 common-sub-p text-md-center text-center">CalArts Graduate, elbowed John Lassiter in the
                                                ribs after seeing him getting too handsy with an intern.</p>
                                            <p className="mb-0 common-sub-p text-md-center lead text-center">50% not gonna rug you</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto col-md-3 col-12">
                                    <div className="mb-4 mb-md-0 row">
                                        <div className="d-flex m-auto align-items-md-center icon-container col-lg-4 col-lg-6 col-12">
                                        <img
                                            className="img-fluid m-auto"
                                            alt=""
                                            src={icono_logo_4}
                                            width="180px"
                                        />
                                        </div>
                                        <div className="m-auto col-md-12 col-8 offset-md-0 offset-1">
                                            <p className="pt-2 mb-1 common-sub-p text-xl-center team-name-pink lead font-titi-bold text-center">THE INFLUENCEOOR</p>
                                            <p className="mb-1 common-sub-p text-md-center team-name-pink lead text-center">@Dickly</p>
                                            <p className="mb-1 common-sub-p text-md-center colour-gray text-center">Memelord highschooler. Is responsible for the best Kevin Spacey
                                                memes on the internet. Got banned from the Michael Chicklis Twitter page once (we love you Michael you're not on our shit list).</p>
                                            <p className="mb-0 common-sub-p text-md-center lead colour-gray text-center">25% not gonna rug you</p>
                                        </div>
                                    </div>
                                </div>                               
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div id="faq" className="mb-3 col-lg-12 col-12">
                        <h2>FAQ</h2>
                        <p className="mb-1 lead colour-gray" ><small>Step by step of how to mint a NFT, aimed at dummies and people with small penises(..including wallet How To)</small></p>
                    </div>
                    <div className="mb-5">
                        <Accordion  flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> How is it determined who is a man who ruined the world?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="mb-1 lead" >
                                        <small>We got a focus group together of women, refugees, and fathers with daughters from all around the world to ask them who they hate the most. Those names made it on the list and determined the rarity of the tiny penises.
                                        </small>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> Do you intend to do good with all the evil that you're leveraging for financial gain?</Accordion.Header>
                                <Accordion.Body>
                                    <p className="mb-1 lead" >
                                        <small>We'll put it to a community poll, let the people decide if they want a fucked up future or liberation.
                                        </small>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> What inspired you to do this?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="mb-1 lead" >
                                        <small>After seeing a new rapist on television every 24 hours, we felt that we had to do something to redeem the male population. So we decided to take a swing at the sick fucks and take a stand like a real man (while empowering women and everyone else. Equal opportunity here).
                                        </small>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> Can women have penises?
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="mb-1 lead" >
                                        <small>Idk, did you just assume my gender?
                                        </small>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>  I don't like someone's name on this list. I want to redeem them/it's hurting my boss's political campaign
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="mb-1 lead" >
                                        <small>Not to fear! All you have to do is buy the token and BURN ALL THE MONEY that it's worth for you to scrub your boss's name off the list.
                                        </small>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>  I wanna add my roommate cause he's a total dick and he likes lolis so he deserves to be on the shitlist at the right hand of Jeffery Epstein
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p className="mb-1 lead" >
                                        <small>Understandable! Stay tuned, that is coming for NFT holders! Don't you worry 'bout a thing!
                                        </small>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
        </Container>
        </>
    )
    // }
}

export default HomeScreen
