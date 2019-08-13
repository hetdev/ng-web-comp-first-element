const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ng-web-comp-first-element/runtime-es5.js',
    // './dist/ng-web-comp-first-element/polyfills-es5.js',
    './dist/ng-web-comp-first-element/scripts.js',
    './dist/ng-web-comp-first-element/main-es5.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/ng-web-comp-first-element.js');
  await fs.copyFile(
    './dist/ng-web-comp-first-element/styles.css',
    'elements/styles.css'
  );
})();
