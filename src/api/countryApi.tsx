import axiosInstance from "./api.js";

export const getCountries = async ():Promise<{data:[]}> => {
  return axiosInstance("/v3.1/all");
}