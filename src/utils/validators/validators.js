export const requared = (value) => {

    if (value) {
        return undefined
    }
    return "Fild is requared"

}

export const maxLenghtCreator = (maxLength) => (value) => {

    if (value.length > maxLength) {
        return (`Max length is ${maxLength} symbols`)
    }
    return undefined

}