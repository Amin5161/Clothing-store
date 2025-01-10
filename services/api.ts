import axios from "axios";
import { IUser } from "../serverTypes/serverTypes";

const client = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getSlider = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/swiper`,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getCategoryList = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/category`,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getBrands = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/brands`,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getDiscount = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/discount`,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProducts = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/products`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getBestSellingBrand = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/BestSellingBrands`,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const checkEmailExist = async (email: string) => {
  try {
    const { data } = await client({
      method: "GET",
      url: `/users`,
    });
    console.log("Fetched users:", data);

    if (!data || !Array.isArray(data)) {
      console.error("API returned invalid data:", data);
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
      url: "/users",
      data: {
        userName,
        email,
        password,
      },
    });
    console.log("ثبت‌نام با موفقیت:", data); // اضافه کردن پیام در کنسول
    if (!data || !data.id) {
      throw new Error("اطلاعات کاربر معتبر نیست.");
    }
    return data;
  } catch (error) {
    console.error("خطا در ارسال اطلاعات به سرور:");
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const { data } = await client.get("/users");

    console.log(data);
    const findUser = data.find(
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
      url: "/blog",
    });
    console.log(data)
    return data;
  } catch (error) {
    console.error("خطا در دریافت اطلاعات", error);
  }
};

export const getBlogImages = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: "/blog",
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error("خطا در دریافت اطلاعات", error);
    throw error
  }
};
export const getBlogArticles = async () => {
  try {
    const { data } = await client({
      method: "GET",
      url: "/blog",
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error("خطا در دریافت اطلاعات", error);
    throw error
  }
};

