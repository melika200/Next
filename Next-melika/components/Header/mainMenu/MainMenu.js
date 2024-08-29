import Link from "next/link";
import styles from "./mainMenu.module.css";
import { GoArrowDown } from "react-icons/go";
import { useState } from "react";
import Submenu from "../submenu/Submenu";
export default function MainMenu() {
    const[showsubmenu,setShowsubmenu]=useState(false)
  return (
    <>
      <div className={styles.menu}>
        <div className="container">
          <ul>
            <li onMouseEnter={()=>setShowsubmenu(true)}
                onMouseLeave={()=>setShowsubmenu(false)}>
              <Link href='/products/laptop'>لپ تاپ</Link>
              <GoArrowDown />
              {
                showsubmenu && <Submenu/>
                
              }
            </li>
            <li>
              <Link href='/products/mobile'>موبایل</Link>
              <GoArrowDown />
            </li>
            <li>
              <Link href='/products/tablet'>تبلت</Link>
              <GoArrowDown />
            </li>
            <li>
              <Link href='/products/console'>کنسول و بازی</Link>
              <GoArrowDown />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
