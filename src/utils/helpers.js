// helper functions

export const filterForFeaturedProducts = (products) =>{
  return products.filter(product => {
    return product.featured === true;
  })
};
