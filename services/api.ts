import axios from "axios";
import { IUser } from "../serverTypes/serverTypes";

const client = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getSlider = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/db.json`,
    });
    console.log(data.swiper);
    return data.swiper;
  } catch (error) {
    console.log(error);
  }
};
export const getCategoryList = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/db.json`,
    });
    console.log(data.category);
    return data.category;
  } catch (error) {
    console.log(error);
  }
};
export const getBrands = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/db.json`,
    });
    console.log(data.brands);
    return data.brands;
  } catch (error) {
    console.log(error);
  }
};
export const getDiscount = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/db.json`,
    });
    console.log(data.discount);
    return data.discount;
  } catch (error) {
    console.log(error);
  }
};
export const getProducts = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/db.json`,
    });
    return data.products;
  } catch (error) {
    console.log(error);
  }
};
export const getBestSellingBrand = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/db.json`,
    });
    return data.BestSellingBrands;
  } catch (error) {
    console.log(error);
  }
};

export const checkEmailExist = async (email: string) => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/db.json`,
    });
    console.log("Fetched users:", data.users);

    if (!data.users || !Array.isArray(data.users)) {
      console.error("API returned invalid data:", data.users);
      return [];
    }

    const filteredUsers = data.filter(
      (user: { email: string }) => user.email === email
    );
    return filteredUsers.length > 0 ? filteredUsers : [];
  } catch (error) {
    console.log("خطا در برسی کاربر", error);
    return false;
  }
};

export const register = async (
  userName: string,

  email: string,
  password: string
) => {
  try {
    const { data } = await client({
      method: "POST",
      url: "/db.json",
      data: {
        userName,
        email,
        password,
      },
    });
    console.log("ثبت‌نام با موفقیت:", data.users); // اضافه کردن پیام در کنسول
    if (!data.users || !data.users.id) {
      throw new Error("اطلاعات کاربر معتبر نیست.");
    }
    return data.users;
  } catch (error) {
    console.error("خطا در ارسال اطلاعات به سرور:");
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const { data } = await client.get("/db.json");

    console.log(data.users);
    const findUser = data.users.find(
      (user: IUser) => user.email === email && user.password === password
    );
    if (findUser) {
      console.log("کاربر یافت شد:", findUser);
      return findUser; // بازگرداندن کاربر یافت شده
    } else {
      console.log("کاربر یافت نشد.");
      return null; // اگر کاربر پیدا نشد، null برگردانید
    }
  } catch (error) {
    console.error("خطا در عملیات ورود:", error);
    throw error; // در صورت بروز خطا، آن را بازگردانید
  }
};

export const getBlogCategoryImages = async () => {
  try {
    const { data } = await client({
      method: "Get",
      url: "/db.json",
    });
    console.log(data.blog)
    return data.blog;
  } catch (error) {
    console.error("خطا در دریافت اطلاعات", error);
  }
};

export const getBlogImages = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: "/db.json",
    });
    console.log(data.blog);
    return data.blog;
  } catch (error) {
    console.error("خطا در دریافت اطلاعات", error);
    throw error
  }
};
export const getBlogArticles = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: "/db.json",
    });
    console.log(data.blog);
    return data.blog;
  } catch (error) {
    console.error("خطا در دریافت اطلاعات", error);
    throw error
  }
};

