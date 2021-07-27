export const colorGenerator = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = ([r, g, b]);
  const color = `rgb(${rgb})`;
  console.log(color);
  return color;

};
