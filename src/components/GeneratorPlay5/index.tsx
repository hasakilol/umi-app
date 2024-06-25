function* gen() {
  console.log('Play 5');
  while (true) {
    try {
      yield 42;
    } catch (e) {
      console.log('Error caught!');
    }
  }
}

const g = gen();
console.log(g.next());
// { value: 42, done: false }
console.log(g.throw(new Error('Something went wrong')));
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

// "Error caught!"
// { value: 42, done: false }

export const GeneratorPlay5: React.FC = () => {
  return (
    <>
      <div>5</div>
      <div>See console</div>
    </>
  );
};
