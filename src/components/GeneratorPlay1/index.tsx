/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/return
 * 和里面说的不一样啊？？？
 */
function* gen() {
  console.log('Play 1');
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next()); // { value: 3, done: false }
console.log(g.next()); // { value: undefined, done: true }
console.log(g.return(1)); // { value: undefined, done: true }
console.log(g.return(1)); // { value: 1, done: true } 实际情况是： chrome 输出 { value: undefined, done: true }

export const GeneratorPlay1: React.FC = () => {
  return (
    <>
      <div>1</div>
      <div>See console</div>
    </>
  );
};
