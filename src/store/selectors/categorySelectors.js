import {VISIBILITY_FILTERS} from "../../helpers/constants";

export const getCategoriesState = store => store.categories;

export const getCategoryList = store =>
    getCategoriesState(store) ? getCategoriesState(store) : [];

export const getCategoryById = (store, id) =>
    getCategoriesState(store) ? getCategoryList.filter(({itemId}) => id === itemId) : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getCategories = store => getCategoryList(store);

export const getCategoriesByVisibilityFilter = (store, visibilityFilter) => {
    const allCategories = getCategories(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.ENABLED:
            return allCategories.filter(category => category.enabled);
        case VISIBILITY_FILTERS.DISABLED:
            return allCategories.filter(category => !category.enabled);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allCategories;
    }
};
