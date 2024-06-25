/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return
 * 和里面说的不一样啊？？？
 */
function* gen() {
  console.log('Play 2');
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 'cleanup';
  }
}

const g1 = gen();
console.log(g1.next()); // { value: 1, done: false }

// Execution is suspended before the try...finally.
console.log(g1.return('early return')); // { value: 'early return', done: true }

const g2 = gen();
console.log(g2.next()); // { value: 1, done: false }
console.log(g2.next()); // { value: 2, done: false }

// Execution is suspended within the try...finally.
console.log(g2.return('early return')); // { value: 'cleanup', done: false }

// The completion value is preserved
console.log(g2.next()); // { value: 'early return', done: true }

// Generator is in the completed state
console.log(g2.return('not so early return')); // { value: 'not so early return', done: true } 实际情况是： chrome 输出 { value: undefined, done: true }

export const GeneratorPlay2: React.FC = () => {
  return (
    <>
      <div>2</div>
      <div>See console</div>
    </>
  );
};
