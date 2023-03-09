import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import logo from '../imgs/logo.png'

const NavBar = ({ search }) => {
    const onSearch = (word) => {
        search(word)
    }
    return (
        <div className="nav-style w-100">
            <Container>
                <Row className="pt-2">
                    <Col xs="2" lg="1">
                        <img className="logo" src={logo} alt="kkk" />
                    </Col>
                    <Col xs="10" lg="11" className="dflex algin-items-center">
                        <div>
                            <input onChange={(e) => {
                                onSearch(e.target.value)
                                console.log(e.target.value);
                            }} type="text" className="form-control mt-4 mx-1" placeholder="ابحث" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default NavBar;