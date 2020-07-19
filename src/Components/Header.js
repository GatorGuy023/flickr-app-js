import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Header = () => {
    return (
        <Row className="justify-content-center">
            <Col xs="auto">
                <h1>
                    <Image src="images/flickr-icon.png" width={100} />
                    <span className="blue-text">Simple</span>{" "}
                    <span className="red-text">Search</span>
                </h1>
            </Col>
        </Row>
    );
};

export default Header;
