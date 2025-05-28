import axios from "axios";
import { backendConfig } from "../constants/content/MainContent";

const loginApiBaseAUrl = backendConfig.base + "/landingpage";

console.log(loginApiBaseAUrl);
const token = localStorage.getItem("token");

// faq section

export async function getFaqs() {
  const response = await axios.get(`${loginApiBaseAUrl}/faqs`)
//   console.log('respone',response.data)
  return response?.data;
}


// event section

export async function getEvent() {
  const response = await axios.get(`${loginApiBaseAUrl}/events`)
//   console.log('respone',response.data)
  return response?.data;
}

// Product
export async function getProduct() {
  const response = await axios.get(`${loginApiBaseAUrl}/products`)
//   console.log('respone',response.data)
  return response?.data;
}


// Overview
export async function getOverview() {
  const response = await axios.get(`${loginApiBaseAUrl}/overviews`)
  // console.log('respone',response.data)
  return response?.data;
}

// === WHY CHOOSE US ROUTES ===
export async function getAllWhyChooseUs() {
  const response = await axios.get(`${loginApiBaseAUrl}/why-choose-us/all`)
  // console.log('respone',response.data)
  return response?.data;
}

// === Logo ===
export async function getLatestLogo() {
  const response = await axios.get(`${loginApiBaseAUrl}/logos/latest`)
   console.log('respone',response.data)
  return response?.data;
}














