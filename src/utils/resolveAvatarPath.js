import IMGBASEURL from "@/network/IMAGEURL"

function resolveAvatarPath(url) {
    let reg = /^\/(https|http)/gs
    if (url.match(reg)) {
        return url.slice(1)
    }
    return `${IMGBASEURL}${url}`
}

export default resolveAvatarPath
