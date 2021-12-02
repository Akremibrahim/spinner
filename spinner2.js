process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinnerUp = () => {
  return process.stdout.write('\r|   ')
} 
setTimeout(spinnerUP,100,900);
const spinnerRight = () => {
  return process.stdout.write('\r/   ')
} 
setTimeout(spinnerRight,300,1100);
const spinnerStraight = () => {
  return process.stdout.write('\r-   ')
} 
setTimeout(spinnerStraight,500,1300);
const spinnerLeft = () => {
  return process.stdout.write('\r/   ')
} 
setTimeout(spinnerLeft,700,1500);