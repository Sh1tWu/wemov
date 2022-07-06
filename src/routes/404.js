import { useEffect, useState } from "react"

import { useHistory } from "react-router-dom"

export default function NotExistRoute() {
    const history = useHistory()
    let [time, setTime] = useState(3)

    // 页面重定向
    useEffect(() => {
        let redirectToHome = setTimeout(() => {
            history.push("/")
        }, 3000)
        return () => clearTimeout(redirectToHome)
    })

    // 倒计时
    useEffect(() => {
        let timeCount = setInterval(() => {
            setTime(time - 1)
        }, 1000)
        return () => clearInterval(timeCount)
    }, [time])

    // 样式
    const styles = {
        width: "50%",
        textAlign: "center",
        margin: "0 auto",
    }
    return (
        <div className="notExistRoute" style={styles}>
            <h1>不存在此页面!</h1>
            <h1>将在{time}返回首页...</h1>
        </div>
    )
}
