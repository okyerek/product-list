export const priceValidator = (price, fieldName) => {
    const number = /^(\d+\.?\d{0,9}|\.\d{1,9})$/;
    if(!price) return `${fieldName} can not be empty`;
    if(!number.test(parseFloat(price))) return `Please enter the a correct price`
    return ''
}

export const nameValidator = (name, fieldName) => {
    if (!name) return `${fieldName} can not be empty`
    return
}