function base64ToBytes(base64: string) {
  const binString = atob(base64);
  return Uint8Array.from<string>(binString, (m) => m.codePointAt(0)!);
}

function bytesToBase64(bytes: Uint8Array) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join('');
  console.log('binString', binString);
  return btoa(binString);
}

// Usage
const aa = bytesToBase64(new TextEncoder().encode('a Ā 𐀀 文 🦄')); // "YSDEgCDwkICAIOaWhyDwn6aE"
const bb = new TextDecoder().decode(base64ToBytes('YSDEgCDwkICAIOaWhyDwn6aE')); // "a Ā 𐀀 文 🦄"

export const EncodeDecodePlay2: React.FC = () => {
  const encoded = btoa('Hello, world');
  return (
    <>
      <div>2</div>
      <div>{aa}</div>
      <div>{bb}</div>
    </>
  );
};
