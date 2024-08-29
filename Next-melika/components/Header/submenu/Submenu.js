import Link from "next/link";
import styles from './Submenu.module.css'
export default function Submenu() {
  return (
    <>
      <div className={styles.submenu}>
        <div className="container">
          <ul>
            <li>
              <Link href='/products/laptop/asus'>asus</Link>
            </li>
            <li>
              <Link href='/products/laptop/apple'>apple</Link>
            </li>
            <li>
              <Link href='/products/laptop/sony'>sony</Link>
            </li>
            <li>
              <Link href='/products/laptop/dell'>dell</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
