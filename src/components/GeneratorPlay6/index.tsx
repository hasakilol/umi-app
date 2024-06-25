function* gen() {
  console.log('Play 6');
  throw new Error('error happens');
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

export const GeneratorPlay6: React.FC = () => {
  return (
    <>
      <div>6</div>
      <div>See console</div>
    </>
  );
};
