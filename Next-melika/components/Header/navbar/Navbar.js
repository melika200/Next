import Link from "next/link";
import styles from "./Navbar.module.css"
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className="container">
          <ul>
            <li>
            <IoMenu />
            </li>
            <li>
              <Link href='/'>صفحه اصلی</Link>
            </li>
            <li>
              <Link href='/articles'>مقالات</Link>
            </li>
            <li>
              <Link href='/about'>درباره ما</Link>
            </li>
            <li>
              <Link href='/contact'>ارتباط با ما</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
