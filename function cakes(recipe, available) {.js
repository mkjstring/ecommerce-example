function cakes(recipe, available) {
    // TODO: insert code
    let ingredients = Object.keys(recipe);
    let possiblePortion = {}
    
    const portionPossibles = (recipe,available) => {return Math.floor(recipe/available)}
    
    ingredients.forEach(ingredient => {
      if (ingredient in available){
          possiblePortion:ingredient = portionPossibles(`recipe:ingredient`, `available:ingredient`)}
                        else possiblePortion:ingredient = 0})
  
    return possiblePortion
  }