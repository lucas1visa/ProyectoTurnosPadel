import Link from "next/link";
const Navegacion = () => {
    return (
     <>
     <h1>Navegacion</h1>
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/">home</Link>
        </li>
      </ul>
    </> 
    );
}
 
export default Navegacion;