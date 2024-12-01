import { http } from "./config"

export const binhLuan = {
    binhLuanNguoiDung : (maCongViec) =>{
        return http.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${maCongViec}`);
    }
}