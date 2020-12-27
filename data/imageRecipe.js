function imageRecipe(name) {
  console.log('inside imageRecipe');
  switch (name) {
    case 'Cake aux olives et tomates séchées':
      return require('./pictures/starters/01.png');
    case 'Cream cheese à la ciboulette':
      return require('./pictures/starters/02.jpg');
    default:
      return require('./pictures/no-image.png');
  }
}

export default imageRecipe;
