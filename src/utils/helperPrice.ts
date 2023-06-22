export const formatPrice = (price: string) => {
    const priceNumber = +price;
    let priceString = '';
    let resultPrice = '';
     if (Number.isInteger(priceNumber)) {
        priceString = String(priceNumber);
    } else {
        return price;
    }
    if (String(Math.abs(priceNumber)).length <= 4) {
        resultPrice = priceString;
    } else {
        resultPrice = new Intl.NumberFormat('ru-RU').format(priceNumber)
    }
    return resultPrice;
}

export const removeSpace = (price: string) => {
    return price.replaceAll(/\s/g, '')
}