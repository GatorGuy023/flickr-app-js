import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "./Components/Header";
import SearchForm from "./Components/SearchForm";
import SearchResults from "./Components/SearchResults";
import { formatTags } from "./util/utility";
import agent from "./api/agent";
import { toast, ToastContainer } from "react-toastify";
import { StickyContainer, Sticky } from "react-sticky";

const App = () => {
    const [tags, setTags] = useState("");
    const [images, setImages] = useState([]);

    const handleTagsChange = (e) => {
        setTags(e.target.value);
    };

    const generateSearchOptions = () => {
        return {
            tags: formatTags(tags),
            sort: "relevance",
            safeSearch: 1,
            contentType: 1,
            media: "photos",
            perPage: 25,
            page: 1,
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (tags.trim()) {
            setImages([]);
            try {
                const results = await agent.search(generateSearchOptions());
                if (results.stat === "ok") {
                    setImages(results.photos.photo);
                } else {
                    toast.error("There was an error retrieving your results.");
                }
            } catch (error) {
                console.log(error);
                toast.error("There was an error retrieving your results.");
            }
        }
    };

    return (
        <Container fluid>
            <StickyContainer>
                <Row>
                    <Col xs={12} className="clearfix">
                        <Header />
                    </Col>
                </Row>
                <Sticky topOffset={100} className="row">
                    {({ style }) => (
                        <div style={style} className="box-around-form">
                            <SearchForm
                                tags={tags}
                                onTagsChange={handleTagsChange}
                                onSubmit={handleSubmit}
                            />
                        </div>
                    )}
                </Sticky>
                <Row>
                    <Col xs={12} className="box-around-results">
                        <SearchResults images={images} />
                    </Col>
                </Row>
            </StickyContainer>
            <ToastContainer position="bottom-right" />
        </Container>
    );
};

export default App;
