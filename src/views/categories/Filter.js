import React from "react";
import cx from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../store/actions/categoryActions";
import {VISIBILITY_FILTERS} from "../../helpers/constants";

const VisibilityFilters = () => {
    const activeFilter = useSelector(state => state.visibilityFilter)
    const dispatch = useDispatch();

    const handleFilterChange = (currentFilter) => {
        dispatch(setFilter(currentFilter))
    }
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            currentFilter === activeFilter && "filter--active"
                        )}
                        onClick={() => {
                            handleFilterChange(currentFilter);
                        }}
                    >
                     {currentFilter}
                    </span>
                );
            })}
        </div>
    );
};


export default VisibilityFilters;
