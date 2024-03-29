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

    writeFileSync("public/badge.svg", svg);
  });
};

generateCodeCovBadge();
