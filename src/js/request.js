import loaderToggle from "./loader"

const request = async (reourse) => {
    loaderToggle(true)
    const req = await fetch(reourse)
    if (!req.ok){
        throw new Error("something went wrong :(")
    }
    const data = await req.json()
    loaderToggle(false)
    return data
}

export default request