import { useState, useEffect } from "react"

function useWidth(props) {
    const [windowWidth, setWindowWidth] = useState(0)
    useEffect(() => {
        const handleWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleWidth)
        return () => {
            document.removeEventListener("resize", handleWidth)
        }
    }, [])
    return windowWidth
}

export default useWidth
