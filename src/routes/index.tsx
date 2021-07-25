import Login from '../pages/login/index';
import PageNotFound from '../pages/404/index';
import HomePage from '../pages/homePage/index';


export const mainRouters = [
    {
        path: '/login',
        component: Login
    }, {
        path: '/404',
        component: PageNotFound
    }
];

export const adminRouters = [
    {
        path: '/admin/homePage',
        component: HomePage,
        exact: true
    }
]