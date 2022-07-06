import { lazy } from "react"

const Home = lazy(() => import("@/pages/home/index"))
const Introduction = lazy(() => import("@/pages/introduction/index"))
const Credits = lazy(() => import("@/pages/credits/credits"))
const Trending = lazy(() => import("@/pages/trending/trending"))
const Cast = lazy(() => import("@/pages/cast/cast/"))
const NotExistRoute = lazy(() => import("./404"))

const routes = [
    {
        // 首页
        path: "/",
        exact: true,
        component: Home,
    },
    {
        // 影片详情页
        path: "/introduction/:movie_id",
        exact: true,
        component: Introduction,
    },
    {
        // 演职表
        path: "/introduction/:movie_id/credits",
        component: Credits,
    },
    // 榜单
    {
        path: "/trending",
        component: Trending,
    },
    // 演员详情
    {
        path: "/cast/:name",
        component: Cast,
    },
    // 演员影片详情
    {
        path: "/cast/:name/films/:apartment",
        // component:
    },
    {
        // 404
        path: "",
        component: NotExistRoute,
    },
]

export default routes
