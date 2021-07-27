import Login from "../pages/login/Index"
import UseMouseHook from "../pages/useMouseHook"
import Test from "../pages/test"
import pageNotFound from "../pages/pageNotFound"


export const mainRoutes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: pageNotFound
    },
]
export const hooksRoutes = [
    {
        path: '/hooks/useMouseHook',
        component: UseMouseHook,
        title: 'useMouseHookDemo'
    },
    {
        path: '/hooks/test',
        component: Test,
        title: 'testDemo'
    }

]
