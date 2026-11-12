import { readFileSync } from "node:fs";
import chalk from "chalk";

const file = process.argv[2] ?? "README.md";
for (const line of readFileSync(file, "utf8").split("\n")) {
  if (line.startsWith("#")) console.log(chalk.bold.cyan(line.replace(/^#+\s*/, "")));
  else if (/^\s*[-*] /.test(line)) console.log(chalk.yellow("  • ") + line.replace(/^\s*[-*] /, ""));
  else console.log(line);
}
