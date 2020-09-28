import Dashboard from "./views/dashboard";
import Categories from "./views/categories";

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
];

export default dashboardRoutes;
