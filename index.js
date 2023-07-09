// bài tập 1 : quản lí tuyển sinh
function quanLiTuyenSinh() {
  var khuVuc = document.getElementById("chonKhucVuc").value;
  if (khuVuc == "a") {
    khuVuc = 2;
  } else if (khuVuc == "b") {
    khuVuc = 1;
  } else if (khuVuc == "c") {
    khuVuc = 0.5;
  }
  var doiTuong = document.getElementById("chonDoiTuong").value;
  if (doiTuong == 1) {
    doiTuong = 2.5;
  } else if (doiTuong == 2) {
    doiTuong = 1.5;
  } else if (doiTuong == 3) {
    doiTuong = 1;
  }

  var diemTieuChuan = document.getElementById("diemChuan").value * 1;
  var diemMon1 = document.getElementById("mon1").value * 1;
  var diemMon2 = document.getElementById("mon2").value * 1;
  var diemMon3 = document.getElementById("mon3").value * 1;
  var diemTong = diemMon1 + diemMon2 + diemMon3;

  var diemUuTien = (khuVuc + doiTuong)*1;
  var tongKet = diemTong + diemUuTien ;
  if (tongKet >= diemChuan && diemMon1 >0 && diemMon2 >0 && diemMon3 >0 ) {
    document.getElementById("ketQuaBai1").innerHTML =
      "Đậu rồi nhé : " + "số điểm = " + tongKet;
  } else {
    document.getElementById("ketQuaBai1").innerHTML =
      "Rớt rồi nhé : " + " số điểm = " + tongKet;
  }
}

// bài tập 2: tính tiền điện

function soTienDien() {
  var hoTen = document.getElementById("hoVaTen").value;
  var soKw = document.getElementById("nhapSoKw").value * 1;
  if (soKw < 50) {
    var soTienDien = soKw * 500;
  } else if (50 < soKw <= 100) {
    var soTienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (100 < soKw <= 200) {
    var soTienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (200 < soKw <= 350) {
    var soTienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else if (soKw > 350) {
    var soTienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }
  console.log(hoTen);
  console.log(soTienDien);
  document.getElementById("ketQuaBai2").innerHTML =
    "Họ tên : " + hoTen + " -Tiền điện : " + soTienDien;
}

// bài tập 3: tính tiền thuế thu nhập cá nhân
function tinhTienThue() {
  var tenNguoi = document.getElementById("hoTen").value;
  var tongThuNhapNam = document.getElementById("thuNhap").value * 1;
  var nguoiPhuThuoc = document.getElementById("soNguoi").value * 1;
  var thuNhapChiuThue = (tongThuNhapNam - 4 - nguoiPhuThuoc) * 1.6;

  if (thuNhapChiuThue <= 60) {
    var thueThuNhap = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120) {
    var thueThuNhap = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
  } else if (thuNhapChiuThue <= 210) {
    var thueThuNhap = 60 * 0.05 + (thuNhapChiuThue - 120) * 0.1;
  } else if (thuNhapChiuThue <= 210) {
    var thueThuNhap =
      60 * 0.05 + 120 * 0.1 + (thuNhapChiuThue - 210) * 0.15;
  } else if (thuNhapChiuThue <= 384) {
    var thueThuNhap =
      60 * 0.05 +
      120 * 0.1 +
      210 * 0.15 +
      (thuNhapChiuThue - 384) * 0.2;
  } else if (thuNhapChiuThue <= 624) {
    var thueThuNhap =
      60 * 0.05 +
      120 * 0.1 +
      210 * 0.15 +
      38400000 * 0.2 +
      (thuNhapChiuThue - 60) * 0.25;
  } else if (thuNhapChiuThue <= 960) {
    var thueThuNhap =
      60 * 0.05 +
      120 * 0.1 +
      210 * 0.15 +
      384 * 0.2 +
      60 * 0.25 +
      (thuNhapChiuThue - 960) * 0.3;
  } else if (thuNhapChiuThue >= 960) {
    var thueThuNhap =
      60 * 0.05 +
      120 * 0.1 +
      210 * 0.15 +
      384 * 0.2 +
      60 * 0.25 +
      960 * 0.3 +
      (thuNhapChiuThue - 960) * 0.35;
  }
  var thueThuNhapFormatted = thueThuNhap.toFixed(2)
  document.getElementById("ketQuaBai3").innerHTML =
    "Họ tên: " + tenNguoi  + "  - Tiền thu nhập cá nhân: " + thueThuNhapFormatted + "triệu";
}


// bài tập 4: tính tiền cáp 
function tinhTienCapQuang() {
  var maKh = document.getElementById("maKH").value;
  var soKenh = document.getElementById("soKenh").value * 1;
  var chonKH = document.getElementById("chonKhach").value;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  if (chonKH == "doanhNghiep" && soKetNoi <= 10) {
    var tienCap = 15 + 75 + 50 * soKenh;
  } else if (chonKH == "doanhNghiep" && soKetNoi > 10) {
    var tienCap = 15 + 75 + soKetNoi * 5 + 50 * soKenh;
  } else if (chonKH == "nhaDan") {
    var tienCap = 4.5 + 20.5 + soKenh * 7.5;
  }
  document.querySelector("#hienThiTienCap").innerHTML =
    " mã khách hàng: " + maKh + " - tiền cáp : " + "$" + tienCap;
}
function doanhNghiep() {
  var chonKH = document.getElementById("chonKhach").value;
  if (chonKH == "doanhNghiep") {
    console.log("chonKH");
    document.getElementById("soKetNoi").style.display = `block`;
  } else if (chonKH == "nhaDan") {
    document.getElementById("soKetNoi").style.display = `none`;
  }
}