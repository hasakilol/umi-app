/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return
 * 和里面说的不一样啊？？？
 */
function* gen() {
  console.log('Play 3');
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    console.log('do nothing');
  }
}

const g1 = gen();
console.log(g1.next()); // { value: 1, done: false }

// Execution is suspended before the try...finally.
console.log(g1.return('early return')); // { value: 'early return', done: true }

const g2 = gen();
console.log(g2.next()); // { value: 1, done: false }
console.log(g2.next()); // { value: 2, done: false }
/**
 * 可以uncomment下面的一句或者两句，看看效果是什么样的
 */
// console.log(g2.next()); // { value: 3, done: false }
// console.log(g2.next()); // { value: undefined, done: true }
//
console.log(g2.return('early return')); // { value: 'early return', done: true }

console.log(g2.next()); // { value: undefined, done: true }

// Generator is in the completed state
console.log(g2.return('not so early return')); // { value: undefined, done: true }

export const GeneratorPlay3: React.FC = () => {
  return (
    <>
      <div>3</div>
      <div>See console</div>
    </>
  );
};
