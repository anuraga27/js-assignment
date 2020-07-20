var  shoppingList=[
    { name: 'potatoes', quantity: 4 },
    { name: 'butter', quantity: 1 },
    { name: 'milk', quantity: 1, description: '1 cup' },
    { name: 'potatoes', quantity: 3 },
    { name: 'oil', quantity: 1, description: '3 cups' } ];
  
  const shoppingBucket = [];
  
  for (let i = 0; i < shoppingList.length; i ++) {
    for (let j = 0; j < shoppingBucket.length; j ++){
      let ingredient = shoppingList[i];
      let shoppingListItem = shoppingBucket[j];
      if(ingredient === shoppingListItem){
        break;
      }else if (roughDraftItem.name === shoppingListItem.name){
        shoppingListItem.quantity += roughDraftItem.quantity;
        } else {shoppingBucket.push(roughDraftItem);
          }
      }
    }