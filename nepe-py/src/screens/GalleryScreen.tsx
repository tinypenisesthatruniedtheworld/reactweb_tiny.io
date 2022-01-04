import React, { Component } from 'react'
import { Accordion, Container, ListGroup } from 'react-bootstrap'
import tiny from 'src/assets/gallery/tiny.png'

export class GalleryScreen extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div id="gallery" className="pt-5">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="mb-3 font-titi-bold">GALLERY</h4>
                            </div>
                            <div className="col-lg-3 col-12">
                            <Accordion  flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="font-titi-bold"><em>Category</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className="font-titi-bold"><em>Rank</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header className="font-titi-bold"><em>Props</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header className="font-titi-bold"><em>Wikipedia</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header className="font-titi-bold"><em>Pencil Dick</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header className="font-titi-bold"><em>Agressiveness</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header className="font-titi-bold"><em>Power</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header className="font-titi-bold"><em>Shame</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header className="font-titi-bold"><em>View of Future</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9">
                                    <Accordion.Header className="font-titi-bold"><em>Deviance</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10">
                                    <Accordion.Header className="font-titi-bold"><em>Semitic Variance</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="11">
                                    <Accordion.Header className="font-titi-bold"><em>Life Line</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="12">
                                    <Accordion.Header className="font-titi-bold"><em>Inteligence</em></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Link 1</ListGroup.Item>
                                            <ListGroup.Item>Link 2</ListGroup.Item>
                                            <ListGroup.Item>Link 3</ListGroup.Item>
                                            <ListGroup.Item>Link 4</ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            </div>
                            <div className="col-lg-9 col-12">
                                        <div className="infinite-scroll-component">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div> 
                                                        <img 
                                                            alt=""
                                                            src={tiny}
                                                            className="img-fluid rounded-3"
                                                        />                                                   
                                                        <p>NAME #1</p>                                                     
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div> 
                                                        <img
                                                            alt=""
                                                            src={tiny}
                                                            className="img-fluid rounded-3"
                                                        />                                                   
                                                        <p>NAME #1</p>                                                     
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div> 
                                                        <img
                                                            alt=""
                                                            src={tiny}
                                                            className="img-fluid rounded-3"
                                                        />                                                   
                                                        <p>NAME #1</p>                                                     
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div> 
                                                        <img
                                                            alt=""
                                                            src={tiny}
                                                            className="img-fluid rounded-3"
                                                        />                                                   
                                                        <p>NAME #1</p>                                                     
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div> 
                                                        <img
                                                            alt=""
                                                            src={tiny}
                                                            className="img-fluid rounded-3"
                                                        />                                                   
                                                        <p>NAME #1</p>                                                     
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div> 
                                                        <img
                                                            alt=""
                                                            src={tiny}
                                                            className="img-fluid rounded-3"
                                                        />                                                   
                                                        <p>NAME #1</p>                                                     
                                                    </div>
                                                </div>  
                                            </div>                                            
                                        </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default GalleryScreen
