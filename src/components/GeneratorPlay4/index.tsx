function* gen() {
  console.log('Play 4');
  try {
    yield 1;
  } finally {
    return 'cleanup';
  }
}

const g1 = gen();
console.log(g1.next()); // { value: 1, done: false }
console.log(g1.return('early return')); // { value: 'cleanup', done: true }
console.log(g1.next()); // { value: undefined, done: false }

export const GeneratorPlay4: React.FC = () => {
  return (
    <>
      <div>4</div>
      <div>See console</div>
    </>
  );
};
