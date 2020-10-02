import React from "react";
import {useSelector} from "react-redux";
import {getCategoriesByVisibilityFilter} from "../../store/selectors/categorySelectors";
import {Col, Row} from "react-bootstrap";
import Details from "./Details";

let render = 1;
const CategoryList = () => {
    render++
    const categories = useSelector((state) => {
        const {visibilityFilter} = state;
        return getCategoriesByVisibilityFilter(state, visibilityFilter)
    })
    return (
        <div>
            <Row>
                {categories && categories.length ?
                    categories.map((category, index) => {
                        const key = `${render}${index}`
                        return (
                            <Col md={4} key={`category-${key}`} className="category-card">
                                <Details key={`category-${key}`} category={category}
                                         className="category"/>
                            </Col>
                        );
                    })
                    :
                    <Col>No Categories found</Col>
                }
            </Row>
        </div>
    )
};

export default CategoryList;
