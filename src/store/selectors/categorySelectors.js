import {VISIBILITY_FILTERS} from "../../helpers/constants";

export const getCategoriesState = store => store.categories;

export const getCategoryList = store =>
    getCategoriesState(store) ? getCategoriesState(store).data : [];

export const getCategoryId = store => getCategoriesState(store).editId
/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getCategories = store => getCategoryList(store);

export const getCategoryById = (store) => {
    const id = getCategoryId(store);
    if (id === null) {
        return null
    }
    const category = getCategories(store).filter(item => item.id === id);
    return category.length ? category[0] : null;
};

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
