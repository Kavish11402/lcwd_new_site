import axios from "axios";

const axiosURL = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

export function topFreeCourses() {
  return axiosURL
    .get(`/courses/top-courses/`)
    .then((response) => response.data);
}

export function getFreeCourses() {
  return axiosURL.get(`/courses/`).then((response) => response.data);
}

export function getCourseDetail(slug) {
  return axiosURL
    .get(`/courses/url/${slug}/`)
    .then((response) => response.data);
}

export function getCourseVideos(id) {
  return axiosURL
    .get(`/courses/${id}/videos/`)
    .then((response) => response.data);
}

export function getBlogs() {
  return axiosURL.get(`/blogs/`).then((res) => res.data);
}

export function getBlogUsingSlug(slug) {
  return axiosURL.get(`/blogs/url/${slug}/`).then((res) => res.data);
}

export function getCodeOfVideo(videoId) {
  return axiosURL.get(`/videos/${videoId}/codes`).then((res) => res.data);
}

export function getResourcesOfCourse(courseId) {
  return axiosURL.get(`/courses/${courseId}/resources/`).then((res) => res.data);
}

export function downloadFile(id) {
  return axiosURL
    .get(`/resources/${id}/download/`, { responseType: "blob" })
    .then((res) => res.data);
}

export function createOrder(price) {
  let formData = new FormData();
  formData.append("price", price);
  return axiosURL.post(`/create-order/`, formData).then((res) => res.data);
}

export function successPayment(res) {
  let f = new FormData();
  f.append("razorpay_signature", res.razorpay_signature);
  f.append("razorpay_order_id", res.razorpay_order_id);
  f.append("razorpay_payment_id", res.razorpay_payment_id);
  f.append("rid", res.rid);
  return axiosURL.post(`/success-payment/`, f).then((res) => res.data);
}

// blog categories
export const getBlogCategories = async () => {
  const result = await axiosURL.get("/blog-categories");
  return result.data;
};

export const getCategoryWiseBlogs = async (categoryId) => {
  const result = await axiosURL.get(`/blog-categories/${categoryId}/blogs/`);
  return result.data;
};
export const getLatestBlogs = async () => {
  const result = await axiosURL.get(`/blogs/latest-blogs/`);
  return result.data;
};
