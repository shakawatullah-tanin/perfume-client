import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { CiHeart, CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="flex justify-between container p-4 mx-auto  items-center">
      <h3 className="text-2xl text-black/75 uppercase font-bold">SmellKing</h3>
      <ul className="md:flex hidden gap-2 uppercase font-bold text-black/70">
        <li className="flex cursor-pointer px-4 gap-1 items-center justify-center ">
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
        <CiHeart size={30}></CiHeart>

        <CiUser size={30}></CiUser>
        <CiShoppingCart size={30}></CiShoppingCart>
        <CiSearch size={30}></CiSearch>
      </div>
    </nav>
  );
};

export default Navbar;
