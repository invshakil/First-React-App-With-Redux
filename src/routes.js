import Dashboard from "./views/dashboard";
import Categories from "./views/categories";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        layout: "/admin"
    },
    {
        path: "/categories",
        name: "Categories",
        component: Categories,
        layout: "/admin"
    },
];

export default dashboardRoutes;
