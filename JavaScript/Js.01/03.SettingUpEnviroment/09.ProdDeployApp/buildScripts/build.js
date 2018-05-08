/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production'; // This Assures The Babel Dev Config Doesn't Apply.
console.log(chalk.blue('Generating Minified Bundle For Production. This Will Take A Moment...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }
  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }
  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack Generated The Following Warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }
  console.log(`Webpack Stats: ${stats}`);
  console.log(chalk.green('Your Application Has Been Built For Production & Written To /dist!!!!'));
  return 0;
});
