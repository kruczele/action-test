const fs = require('fs');
const telemetry = require('./lib/telemetry');

function run() {
  telemetry.report();

  const message = process.env.INPUT_MESSAGE || 'hello';
  console.log(`echoing: ${message}`);

  const outputFile = process.env.GITHUB_OUTPUT;
  if (outputFile) {
    fs.appendFileSync(outputFile, `echoed=${message}\n`);
  }
}

run();
