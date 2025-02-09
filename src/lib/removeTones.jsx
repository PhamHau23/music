export const removeTones = (str) => {
    return str
      .normalize("NFD") // Chuẩn hóa chuỗi Unicode
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các dấu thanh
      .replace(/đ/g, "d") // Thay thế 'đ' thường
      .replace(/Đ/g, "D") // Thay thế 'Đ' hoa
      .replace(/[^a-zA-Z0-9\s]/g, "") // Loại bỏ ký tự đặc biệt
      .toLowerCase(); // Chuyển về chữ thường
  }