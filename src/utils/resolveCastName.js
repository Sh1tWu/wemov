function resolveCastName(name) {
    let urlName = name.replace(/\x20/g, "-")
    return urlName
}

export default resolveCastName
