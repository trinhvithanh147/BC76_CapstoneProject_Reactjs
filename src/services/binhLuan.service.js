import { http } from "./config";

export const binhLuanService = {
  layBinhLuan: () => {
    return http.get(`binh-luan`);
  },
};
