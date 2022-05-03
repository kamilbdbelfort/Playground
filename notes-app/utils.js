import chalk from "chalk";

export const toChalk = (color, value) => {
    if (color === 'red') {
        return chalk.red.inverse(value);
    } else if (color === 'green') {
        return chalk.green.inverse(value);
    } else if (color === 'blue')  {
        return chalk.blue.bold.inverse(value);
    } else if (color === 'yellow')  {
        return chalk.yellow.bold.inverse(value);
    } else if (color === 'white')  {
        return chalk.white.bold.inverse(value);
    }
}