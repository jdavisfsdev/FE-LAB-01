export const colorGenerator = (colors) => {
  for(let i = 0; i <= colors.length; i++) {
    const random = Math.random(Math.floor(i));
    return random;
  }
};
