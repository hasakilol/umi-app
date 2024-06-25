console.log('Play 3');
const aa = new TextEncoder().encode('𐍈'); // F0 90 8D 88
aa.forEach((item) => console.log(item));

export const EncodeDecodePlay3: React.FC = () => {
  const encoded = btoa('Hello, world');
  return (
    <>
      <div>3</div>
      <div>See console</div>
    </>
  );
};
