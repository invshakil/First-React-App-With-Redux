import {VISIBILITY_FILTERS} from "../helpers/constants";

export const getCategoriesState = store => store.categories;

export const getCategoryList = store =>
    getCategoriesState(store) ? getCategoriesState(store).allIds : [];

export const getCategoryById = (store, id) =>
    getCategoriesState(store) ? {...getCategoriesState(store).byIds[id], id} : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getCategories = store =>
    getCategoryList(store).map(id => getCategoryById(store, id));

export const getCategoriesByVisibilityFilter = (store, visibilityFilter) => {
    const allCategories = getCategories(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allCategories.filter(category => category.enabled);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allCategories.filter(category => !category.enabled);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allCategories;
    }
};
