"use client";
import Link from "next/link";
import Container from "../container/Container";
import { useSliderContext } from "@/contexts/sliderContext";
import { IoCartOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import MainSlide from "../mainSlide/MainSlide";
import { useCartContext } from "@/contexts/CartContext";
import { UseAutoContext } from "@/contexts/AuthContext";
import SearchComponent from "../search/SearchComponent";

export default function Navbar() {
  const { cartItems } = useCartContext();
  const { user, handleLogOut } = UseAutoContext();
  console.log(user);
  console.log(user?.username);
  const path = usePathname();
  const isPath = path === "/store";
  const isPathBlog = path.startsWith("/blog");

  return (
    <div className={"w-full shadow-lg flex   items-center relative"}>
      <Container>
        <nav className="w-full flex items-center relative z-10 py-2">
          <div className="hidden md:flex md:flex-1 ">
            <Link href={"/store"}>
              <h2 className="font-bold font-lincoln text-3xl">MODKADE</h2>
              <p className="font-medium text-xl">دوست خوش پوش من</p>
            </Link>
          </div>
          <div className="md:flex w-full justify-center items-center mx-auto md:flex-col gap-2 md:flex-1">
            <SearchComponent />
            {isPathBlog ? (
              <ul className="flex  gap-6 col-span-3 font-medium">
                <li className="relative group">
                  <Link href={"/blog"}>مد و استایل</Link>
                  <div className="absolute right-2 hidden  space-y-2 bg-white shadow-lg group-hover:block z-20 rounded-md ">
                    <ul className="flex flex-col gap-2 p-2 w-56">
                      <Link href="/blog/men">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          مد و استایل آقایان
                        </li>
                      </Link>
                      <Link href="/blog/women">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          مد واستایل خانم ها
                        </li>
                      </Link>
                      <Link href="/men/children">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          مد واستایل کودکانه
                        </li>
                      </Link>
                      <Link href="/store/men/ پیراهن">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          برند ها و طراحان مد
                        </li>
                      </Link>
                      <Link href="/store/men/ لباس زیر">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          استایل سلبریتی ها
                        </li>
                      </Link>
                      <Link href="/store/men/ کیف و کفش">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          استایل ترند
                        </li>
                      </Link>
                      <Link href="/store/men/اکسسوری">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          مراقبت و نگهداری لباس
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="hidden md:flex md:w-full  gap-6 col-span-3 font-medium">
                <li className="relative group">
                  <Link href={"/store/men"}>مردانه</Link>
                  <div className="absolute right-2 hidden  space-y-2 bg-white shadow-lg group-hover:block z-20 rounded-md ">
                    <ul className="flex flex-col gap-2 p-2 w-56">
                      <Link href="/men/پلیور و هودی و سویشرت">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          پلیور و هودی و سویشرت
                        </li>
                      </Link>
                      <Link href="/men/کاپشن و پالتو و بارانی">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          کاپشن و پالتو و بارانی
                        </li>
                      </Link>
                      <Link href="/men/شلوار">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          شلوار
                        </li>
                      </Link>
                      <Link href="/men/پیراهن">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          پیراهن
                        </li>
                      </Link>
                      <Link href="/men/لباس زیر">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          لباس زیر
                        </li>
                      </Link>
                      <Link href="/men/کیف و کفش">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          گیف و کفش
                        </li>
                      </Link>
                      <Link href="/men/اکسسوری">
                        <li className="bg-sky-100  hover:bg-pink-500 px-2 rounded-md font-light">
                          اکسسوری
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
                <li className="relative group">
                  <Link href={"/store/women"}>زنانه</Link>
                  <div className="absolute hidden space-y-2 bg-white shadow-lg group-hover:block z-20">
                    <ul className="flex flex-col gap-2 p-2 w-56">
                      <Link href="/women/پالتو">
                        <li className="bg-sky-100 hover:bg-pink-500 px-2 rounded-md font-light">
                          پالتو
                        </li>
                      </Link>
                      <Link href="/women/بافت و سویشرت">
                        <li className="bg-sky-100 hover:bg-pink-500 px-2 rounded-md font-light">
                          بافت وسویشرت
                        </li>
                      </Link>
                      <Link href="/women/شلوار">
                        <li className="bg-sky-100 hover:bg-pink-500 px-2 rounded-md font-light">
                          شلوار
                        </li>
                      </Link>
                      <Link href="/women/لباس زیر و راحتی">
                        <li className="bg-sky-100 hover:bg-pink-500 px-2 rounded-md font-light">
                          لباس زیر و راحتی
                        </li>
                      </Link>
                      <Link href="/women/کیف و کفش">
                        <li className="bg-sky-100 hover:bg-pink-500 px-2 rounded-md font-light">
                          کیف و کفش
                        </li>
                      </Link>
                      <Link href="/women/شال و روسری">
                        <li className="bg-sky-100 hover:bg-pink-500 px-2 rounded-md font-light">
                          شال و روسری
                        </li>
                      </Link>
                      <Link href="/women/اکسسوری">
                        <li className="bg-sky-100 hover:bg-pink-500 px-2 rounded-md font-light">
                          اکسسوری
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
                <li className="relative group">
                  <Link href="/store/kids" className="hover:text-pink-500">
                    بچگانه
                  </Link>
                  <div className="absolute w-72  hidden group-hover:flex gap-8 space-x-4 bg-white shadow-lg z-20 p-2">
                    <div className="flex flex-col ">
                      <Link
                        href="/kids/پسرانه"
                        className=" hover:bg-pink-500 px-4 rounded-md "
                      >
                        پسرانه
                      </Link>
                      <ul className="mt-4 flex flex-col gap-4">
                        <Link href="/kids/boyish/کاپشن">
                          <li className="bg-sky-100 hover:bg-pink-500 px-4 rounded-md font-thin">
                            کاپشن
                          </li>
                        </Link>
                        <Link href="/kids/boyish/شلوار">
                          <li className="bg-sky-100 hover:bg-pink-500 px-4 rounded-md font-thin">
                            شلوار
                          </li>
                        </Link>
                      </ul>
                    </div>
                    <div className="flex flex-col">
                      <Link
                        href="/kids/دخترانه"
                        className="hover:bg-pink-500 px-4  rounded-md "
                      >
                        دخترانه
                      </Link>
                      <ul className="mt-4 flex flex-col gap-4">
                        <Link href="/kids/girlish/پیراهن">
                          <li className="bg-sky-100 hover:bg-pink-500 px-4 rounded-md font-thin">
                            پیراهن
                          </li>
                        </Link>
                        <Link href="/kids/girlish/دامن">
                          <li className="bg-sky-100 hover:bg-pink-500 px-4 rounded-md font-thin w-full">
                            شلوار و دامن
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href={"/blog"}> بلاگ </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="hidden md:flex items-center justify-end gap-4 font-bold flex-1">
            <Link href={"/cart"}>
              <div className="relative">
                <IoCartOutline className="text-xl " />
                <p className="bg-red-500 text-sm rounded-full px-1 text-white absolute -top-4 -right-1">
                  {cartItems.length > 0 ? cartItems.length : ""}
                </p>
              </div>
            </Link>
            {user ? (
              <div className="flex gap-4">
                <p>{user?.username || "نام کاربری موجود نیست"}</p>
                <button onClick={handleLogOut} className="font-light">
                  خروج
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link href={"/login"}>وارد شوید</Link>
                <Link href={"/register"}>ثبت نام</Link>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
}
