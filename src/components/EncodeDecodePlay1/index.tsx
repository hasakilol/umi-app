export const EncodeDecodePlay1: React.FC = () => {
  const encoded = btoa('Hello, world');
  return (
    <>
      <div>1</div>
      <div>btoa(&apos;Hello, world&apos;):{encoded}</div>
      <div>
        atob(&apos;{encoded}&apos;):{atob(encoded)}
      </div>
    </>
  );
};
