import Main from "./pages/main/index"
import Profile from "./pages/profile/index"
import Not404 from "./components/404"
const Auth = [{
        path: '/',
        component: Main,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '*',
        component: Not404,
    },
]
const notAuth = [{
        path: '/',
        component: Main,
    }, {
        path: '*',
        component: Not404,
    },

]

export { Auth, notAuth }