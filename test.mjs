import { NonSpecRunScript } from './lib/engine.mjs';

/*
[
  'try { throw new Error("hi!"); } catch (e) { print(e.message); }',
  'print(ReferenceError.name);',
].forEach((sourceText) => {
  NonSpecRunScript(sourceText);
});
*/

const completion = NonSpecRunScript(`
'use strict';

Promise.reject('before').catch(print);
print('after');
`);

console.log(completion); // eslint-disable-line no-console
