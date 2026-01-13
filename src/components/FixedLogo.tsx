import Image from "next/image";
import Link from "next/link";

export function FixedLogo() {
  return (
    <Link
      href="/"
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: 50,
        transition: "opacity 0.2s",
      }}
    >
      <Image src="/logo.svg" alt="André Pilch logo" width={156} height={69} />
    </Link>
  );
}
