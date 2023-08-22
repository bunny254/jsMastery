let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];
/* Method 1
for (const color of cmyk) {
  colors.push(color);
}
*/
/* Method 2 spread operator*/
colors.push(...cmyk)
console.log(colors);