import React from "react"

const routes = [
    {
        path: '/',
        component: React.lazy(() => import('../layout')),
        childern: [
            {
                path: '/useMouseHook',
                component: React.lazy(() => import('../page/useMouseHook')),
                title: 'useMouseHookDemo'
            },
            {
                path: '/test',
                component: React.lazy(() => import('../page/test')),
                title: 'testDemo'
            }
        ]
    }
]

export default routes