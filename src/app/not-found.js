import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ marginBlock: 100, marginInline: "auto", width: 200 }}>
      <h2>Lapa nav atrasta</h2>
      <Link href="/">Uz sākumu</Link>
    </div>
  );
}
