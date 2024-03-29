import { makeBadge, ValidationError } from "badge-maker";
import { readFile, writeFileSync } from "fs";

const generateCodeCovBadge = () => {
  readFile("coverage/coverage-summary.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const coverage = JSON.parse(data);
    const total = coverage.total.lines.pct;

    const svg = makeBadge({
      label: "coverage",
      message: String(total) + "%",
      color: "brightgreen",
    });

    writeFileSync("public/codecov-badge.svg", svg);
  });
};

const generateNpmVersionBadge = () => {
  readFile("package.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const { version } = JSON.parse(data);

    const svg = makeBadge({
      label: "npm",
      message: version,
      color: "blue",
    });

    writeFileSync("public/npm-badge.svg", svg);
  });
};

generateCodeCovBadge();
generateNpmVersionBadge();
