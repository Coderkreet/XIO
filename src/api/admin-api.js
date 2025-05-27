import axios from "axios";
import { backendConfig } from "../constants/content/MainContent";

const apiURL = backendConfig.base + "/admin";
const LendingApiURL = backendConfig.base ;

console.log(apiURL);
const token = localStorage.getItem("token");

export async function getPendingComplainHistory() {
  const response = await axios.get(`${apiURL}/support-in-process`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function approveComplainRequest(id, responsePayload) {
  const res = await axios.post(
    `${apiURL}/support/status/approve/${id}`,
    { status: "accept", ...responsePayload },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
  return res;
}

export async function rejectComplainRequest(id,responsePayload) {
  const response = await axios.post(
    `${apiURL}/support/status/reject/${id}`,
    { status: "reject",...responsePayload },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );
  return response;
}

export async function getAllUserList() {
  const response = await axios.get(`${apiURL}/all-users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function userStatusToggle(id) {
  const response = await axios.get(`${apiURL}/user-block/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response;
}
export async function deleteUserAdminEnd(id) {
  const response = await axios.get(`${apiURL}/delete-user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response;
}
export async function getDirectReferralIncome() {
  const response = await axios.get(`${apiURL}/directreferralincome-reports`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getSelfIncomeHistory() {
  const response = await axios.get(`${apiURL}/selfincome-reports`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getMatchingIncomeHistory() {
  const response = await axios.get(`${apiURL}/matchingincome-reports`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getLevelIncomeHistory() {
  const response = await axios.get(`${apiURL}/getAllLevelIncome-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getAllPlanPurchaseList() {
  const response = await axios.get(`${apiURL}/getAllInvestedUsers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function createOrUpdateBanner(payload) {
  const response = await axios.post(`${apiURL}/upload-banner`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getBannerList() {
  const response = await axios.get(`${apiURL}/get-banner`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function adminWithdrawalUpdate(payload) {
  const response = await axios.post(`${apiURL}/withdrawal-update`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function loginWithEmailAdminApi(payload) {
  const response = await axios.post(`${apiURL}/login`, payload, {
    withCredentials: true,
  });
  return response?.data;
}

export async function getAdminInfo() {
  const response = await axios.get(`${apiURL}/getProfile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getTotalIncomeInfo() {
  const response = await axios.get(`${apiURL}/getAllIncomes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getUsers() {
  const response = await axios.get(`${apiURL}/getAllUsers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
export async function getROiHistory() {
  const response = await axios.get(`${apiURL}/get-roi-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getAllBanners() {
  const response = await axios.get(`${apiURL}/get-banners`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function deleteBanner(id) {
  const response = await axios.get(`${apiURL}/delete-banner/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}


export async function RefferralIncomeAPi() {
  const response = await axios.get(`${apiURL}/getAllReferalBonus-history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function createEvent(payload) {
  const response = await axios.post(`${LendingApiURL}/landingpage/events`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getAllEvents() {
  const response = await axios.get(`${LendingApiURL}/landingpage/events`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getEventsByType(type) {
  const response = await axios.get(`${LendingApiURL}/landingpage/events/type/${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getEventById(id) {
  const response = await axios.get(`${LendingApiURL}/landingpage/events/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function updateEvent(id, payload) {
  const response = await axios.put(`${LendingApiURL}/landingpage/events/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function deleteEvent(id) {
  const response = await axios.delete(`${LendingApiURL}/landingpage/events/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}


export async function createFAQ(payload) {
  const response = await axios.post(`${LendingApiURL}/landingpage/faqs`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getAllFAQs() {
  const response = await axios.get(`${LendingApiURL}/landingpage/faqs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getFAQById(id) {
  const response = await axios.get(`${LendingApiURL}/landingpage/faqs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function updateFAQ(id, payload) {
  const response = await axios.put(`${LendingApiURL}/landingpage/faqs/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function deleteFAQ(id) {
  const response = await axios.delete(`${LendingApiURL}/landingpage/faqs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}


export async function createOverview(payload) {
  const response = await axios.post(`${LendingApiURL}/landingpage/overviews`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getAllOverviews() {
  const response = await axios.get(`${LendingApiURL}/landingpage/overviews`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function getOverviewById(id) {
  const response = await axios.get(`${LendingApiURL}/landingpage/overviews/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function updateOverview(id, payload) {
  const response = await axios.put(`${LendingApiURL}/landingpage/overviews/${id}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}

export async function deleteOverview(id) {
  const response = await axios.delete(`${LendingApiURL}/landingpage/overviews/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });
  return response?.data;
}
