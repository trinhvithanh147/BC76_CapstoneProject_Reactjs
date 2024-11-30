import { http } from "./config";

export const loaiCongViecService = {
  layLoaiCongViec: () => {
    return http.get(`/loai-cong-viec`);
  },
};
