import React from "react";
import {connect} from "react-redux";
import Details from "./details";
import {getCategoriesByVisibilityFilter} from "../../store/selectors/categorySelectors";
import {Col, Row} from "react-bootstrap";
import Filter from "./filter";

const CategoryList = ({categories}) => {
    return (
        <div>
            <div className="filterArea">
                <Filter/>
            </div>

            <Row>
                {categories && categories.length ?
                    categories.map((category) => {
                        return (
                            <Col md={4} key={`category-${category.id}`} className="category-card">
                                <Details key={`category-${category.id}`} category={category} className="category"/>
                            </Col>
                        );
                    })
                    : "No Categories found"
                }
            </Row>
        </div>
    )
};

const mapStateToProps = state => {
    const {visibilityFilter} = state;
    const categories = getCategoriesByVisibilityFilter(state, visibilityFilter);
    return {categories};
};
// export default TodoList;
export default connect(mapStateToProps)(CategoryList);
