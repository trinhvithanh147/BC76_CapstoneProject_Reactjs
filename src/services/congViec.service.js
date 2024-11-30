import { http } from "./config";

export const congViecService = {
  getCongViecTheoTen: (keyword) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`);
  },
  layCongViec: () => {
    return http.get(`/cong-viec`);
  },
  chiTietCongViec: (id) => {
    return http.get(`/chi-tiet-loai-cong-viec/${id}`);
  },
  layCongViecTheoChiTietLoai: (maChiTietLoai) => {
    return http.get(
      `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${maChiTietLoai}`
    );
  },
  xoaCongViec: (id, token) => {
    return http.delete(`/cong-viec/${id}`, { headers: { token: token } });
  },
  themCongViec: (data, token) => {
    return http.post(`/cong-viec`, data, { headers: { token: token } });
  },
};
