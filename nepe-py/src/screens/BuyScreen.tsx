import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const BuyScreen = () => {
    return (
        <div>
            <Container>
            <div id="buy"  className="pt-5 vh-100">
                <div className="row pt-5">
                    <div className="mb-3 col-lg-12 col-12">
                        <h1 className="text-center  team-title-pink font-monospace font-titi-bold">1K VARIATIONS</h1>
                        <div className="col-lg-4 mx-auto">
                            <p className="mb-1 colour-gray"><small>You can one random Tiny Penis from 1k variations, if you want you can look at our Tiny Penis Gallery to discover the
                            cool baddass options.</small>  </p>
                        </div>
                    </div>
                    <div  className="pt-4 mb-5 justify-content-center">
                        <h4  className="text-center mb-5 font-titi-bold">How many tiny penis like?</h4>
                        <Form.Select size="lg" className="select-buy mb-5 mx-auto font-titi-bold">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>50</option>
                            <option>70</option>
                            <option>100</option>
                        </Form.Select>
                        <h4  className="text-center mb-5 font-titi-bold">TOTAL:&nbsp;&nbsp;&nbsp;0.05 ETH</h4>
                        <div  className="text-center">
                            <Button variant="light btn-pink  TitilliumWeb-SemiBold">MINT</Button>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default BuyScreen
