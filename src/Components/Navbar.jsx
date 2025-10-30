import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { CiHeart, CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto items-center">
      <h3 className="text-3xl uppercase">Sk</h3>
      <ul className="md:flex hidden gap-2">
        <li className="flex cursor-pointer px-4 gap-1 items-center justify-center">
          <Link href={"/"}>Home</Link>
          <FaChevronDown size={10}></FaChevronDown>
        </li>
        <li className="flex cursor-pointer px-4 gap-1 items-center justify-center">
          <Link href={"/"}>Catalog</Link>
          <FaChevronDown size={10}></FaChevronDown>
        </li>
        <li className="flex cursor-pointer px-4 gap-1 items-center justify-center">
          <Link href={"/"}>Shop</Link>
          <FaChevronDown size={10}></FaChevronDown>
        </li>
        <li className="flex cursor-pointer px-4 gap-1 items-center justify-center">
          <Link href={"/"}>Contact</Link>
          <FaChevronDown size={10}></FaChevronDown>
        </li>
      </ul>
      <div className="flex justify-end items-center gap-4 text-xl">
        <CiHeart></CiHeart>

        <CiUser></CiUser>
        <CiShoppingCart></CiShoppingCart>
        <CiSearch></CiSearch>
      </div>
    </nav>
  );
};

export default Navbar;
