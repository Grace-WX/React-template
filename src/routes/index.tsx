import Login from '../pages/login/index';
import PageNotFound from '../pages/404/index';
import HomePage from '../pages/homePage/index';
import Animation from '../pages/animation';
import TabTest from '../pages/tabTest';
import FormTest from '../pages/formTest';


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
    },
    {
        path: '/admin/animation',
        component: Animation,
        exact: true
    },
    {
        path: '/admin/tabTest',
        component: TabTest,
        exact: true
    },
    {
        path: '/admin/formTest',
        component: FormTest,
        exact: true
    },
]