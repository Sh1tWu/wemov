import React from "react"
import { Redirect } from "react-router-dom"
import { dynamic } from "utils/LazyWrapper"

const Home = dynamic(() =>
    import(
        /* webpackChunkName: 'Home' */
        "pages/home/index"
    )
)
const Introduction = dynamic(() =>
    import(
        /* webpackChunkName: 'Introduction' */
        /* webpackPrefetch:true */
        "pages/introduction/introduction"
    )
)
const Credits = dynamic(() =>
    import(
        /* webpackChunkName: 'Credits' */
        /* webpackPrefetch:true */
        "pages/credits/credits"
    )
)
const Trending = dynamic(() =>
    import(
        /* webpackChunkName: 'Trending' */
        /* webpackPrefetch:true */
        "pages/trending/trending"
    )
)
const Cast = dynamic(() =>
    import(
        /* webpackChunkName: 'Cast' */
        /* webpackPrefetch:true */
        "pages/cast/cast/"
    )
)
const Artworks = dynamic(() =>
    import(
        /* webpackChunkName: 'Artworks' */
        /* webpackPrefetch:true */
        "pages/artworks/artworks"
    )
)
const Search = dynamic(() =>
    import(
        /* webpackChunkName: 'Search' */
        /* webpackPrefetch:true */
        "pages/search/search"
    )
)
const NotExistRoute = dynamic(() =>
    import(
        /* webpackChunkName: 'NotExistRoute' */
        /* webpackPrefetch:true */
        "./404"
    )
)

const routes = [
    {
        // 首页
        path: "/home",
        exact: true,
        component: Home,
    },
    {
        path: "/",
        name: "HomeRedirect",
        exact: true,
        render() {
            return <Redirect to="/home" />
        },
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
        exact: true,
        path: "/cast/:name",
        component: Cast,
    },
    {
        // 作品集
        path: "/cast/:name/films/:apartment",
        component: Artworks,
    },
    // 搜索结果
    {
        path: "/search",
        exact: true,
        render() {
            return <Redirect to="/search/films" />
        },
    },
    {
        path: "/search/films",
        component: Search,
    },
    {
        path: "/search/cast",
        component: Search,
    },
    // 404
    {
        path: "",
        component: NotExistRoute,
    },
]

export default routes
