import Link from "next/link";

export default function Header() {
  return (
    <header className=" flex items-center gap-[40rem] my-3 mx-6">
      <h1 className="text-2xl font-bold ">
        <Link href={"/"}>Agrive</Link>
      </h1>

      <ul className="">
        <Link href={"/about"}>
          <li className="">About</li>
        </Link>
      </ul>
    </header>
  );
}
