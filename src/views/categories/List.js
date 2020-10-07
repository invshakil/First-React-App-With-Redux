import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesByVisibilityFilter} from "../../store/selectors/categorySelectors";
import {Col, Row} from "react-bootstrap";
import Details from "./Details";
import {setNotificationInfo} from "../../store/actions/notificationAction";
import {toggleCategory} from "../../store/actions/categoryActions";

const CategoryList = () => {
    const dispatch = useDispatch()

    const categories = useSelector((state) => {
        const {visibilityFilter} = state;
        return getCategoriesByVisibilityFilter(state, visibilityFilter)
    })

    const onDelete = async () => {
        await dispatch(setNotificationInfo({
            title: 'Delete Confirmation',
            message: 'Category Delete Successfully!',
            autoHide: true,
            delay: 3500
        }))
        await dispatch(toggleCategory(true))
    }
    return (
        <div>
            <Row>
                {categories && categories.length ?
                    categories.map((category, index) => {
                        const key = `${index}`
                        return (
                            <Col md={4} key={`category-${key}`} className="category-card">
                                <Details key={`category-${key}`}
                                         category={category}
                                         className="category"
                                         onDelete={onDelete}
                                />
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
