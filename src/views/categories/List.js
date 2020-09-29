import React from "react";
import {connect} from "react-redux";
import {getCategoriesByVisibilityFilter} from "../../store/selectors/categorySelectors";
import {Col, Row} from "react-bootstrap";
import Details from "./Details";
import Filter from "./Filter";

let render = 1;
const CategoryList = ({categories}) => {
    render++
    return (
        <div>
            <div className="filterArea">
                <Filter/>
            </div>

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

const mapStateToProps = state => {
    const {visibilityFilter} = state;
    const categories = getCategoriesByVisibilityFilter(state, visibilityFilter);
    return {categories};
};
// export default TodoList;
export default connect(mapStateToProps)(CategoryList);
