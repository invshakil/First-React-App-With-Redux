import Dashboard from "./views/dashboard";
import Categories from "./views/categories";
import ProductList from "./views/products";

const dashboardRoutes = [
    {
        path: "/",
        name: "Dashboard",
        component: Dashboard,
        layout: "/admin",
        exact: true
    },
    {
        path: "/categories",
        name: "Categories",
        component: Categories,
        layout: "/admin"
    },
    {
        path: "/product/manage",
        name: "Manage Product",
        component: ProductList,
        layout: "/admin"
    },
];

export default dashboardRoutes;
