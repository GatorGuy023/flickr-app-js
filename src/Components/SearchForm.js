import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const SearchForm = ({ tags, onTagsChange, onSubmit }) => {
    return (
        <Form onSubmit={onSubmit}>
            <Form.Row className="align-items-center justify-content-center">
                <Col xs={12} sm={5}>
                    <Form.Label htmlFor="search-box" srOnly>
                        Search Box
                    </Form.Label>
                    <Form.Control
                        id="search-box"
                        type="text"
                        name="search-box"
                        placeholder="Search Terms"
                        onChange={onTagsChange}
                        value={tags}
                    />
                </Col>
                <Col xs={12} sm="auto" className="pt-10">
                    <Button
                        type="submit"
                        variant="success"
                        style={{ width: "100%" }}
                    >
                        Search
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    );
};

export default SearchForm;
