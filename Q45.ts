function information(
    manufacturer: string,
    model: string,
    ...options: [string, any][]
  ) {
    let car = { manufacturer, model };
    options.forEach(([key, val]) => (car[key] = val));
  
    return car;
  }
  console.log(information("Toyota", "Yaris", ["color", "White"], ["year", 2024]));


  