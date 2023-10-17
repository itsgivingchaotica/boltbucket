const calculatePrice = (carBuild) => {
  let basePriceString = "$65000";
  let isConvertible = carBuild.convertible;
  if (isConvertible) {
    basePriceString = "$75000";
  }
  if (
    (carBuild.wheels[0].convertible === true && isConvertible === true) ||
    (carBuild.wheels[0].convertible === false && isConvertible === false)
  ) {
    let totalPrice = 0;
    const basePrice = parseInt(basePriceString.slice(1), 10);
    totalPrice = carBuild.wheels[0].price + basePrice;
    const formattedPrice = "$" + totalPrice.toString();
    basePriceString = formattedPrice;
  } else if (
    (carBuild.roof[0].convertible === true && isConvertible === true) ||
    (carBuild.roof[0].convertible === false && isConvertible === false)
  ) {
    let totalPrice = 0;
    const basePrice = parseInt(basePriceString.slice(1), 10);
    totalPrice = carBuild.roof[0].price + basePrice;
    const formattedPrice = "$" + totalPrice.toString();
    basePriceString = formattedPrice;
  } else if (
    (carBuild.interior[0].convertible === true && isConvertible === true) ||
    (carBuild.interior[0].convertible === false && isConvertible === false)
  ) {
    let totalPrice = 0;
    const basePrice = parseInt(basePriceString.slice(1), 10);
    totalPrice = carBuild.interior[0].price + basePrice;
    const formattedPrice = "$" + totalPrice.toString();
    basePriceString = formattedPrice;
  } else if (
    (carBuild.exterior[0].convertible === true && isConvertible === true) ||
    (carBuild.exterior[0].convertible === false && isConvertible === false)
  ) {
    let totalPrice = 0;
    const basePrice = parseInt(basePriceString.slice(1), 10);
    totalPrice = carBuild.exterior[0].price + basePrice;
    const formattedPrice = "$" + totalPrice.toString();
    basePriceString = formattedPrice;
  } else {
    return -1;
  }
  return basePriceString;
};

export { calculatePrice };
