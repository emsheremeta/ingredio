import Link from "next/link";

export default function Test() {
  return (
    <div>
      <p>This is test routing</p>
      <Link href="/">go to homepage link, click on me</Link>
    </div>
  );
}
