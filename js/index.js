// innerHTML : phần nội dung giữa 2 thẻ đóng mở <tag>innerHTML <\tag>

// value : là nội dung của thẻ input

// function: hàm thực thi khi người dùng thao tác 1 sự kiện

// --------------////-----------
// Ví dụ 1

function handle_click() {

    //DOM : document object model

    var tagP = document.getElementById('pText');

    tagP.innerHTML = 'Nội dung đã được thay đổi';

    // Thay đổi thuộc tính css cuả thẻ.style.[ thuộc tính của thẻ]


    document.getElementById('pText').style.color = 'red';
    document.getElementById('pText').style.fontSize = '30px';

}

// Ví dụ 2 : Bật - tắt đèn

var btnBatDen = document.getElementById('idBatDen');
var btnTatDen = document.getElementById('idTatden');
var imgHinh = document.getElementById('imgVidu2');

btnBatDen.onclick = function () {


    imgHinh.src = '../img/pic_bulbon.gif';
    // Xử lý active button
    btnBatDen.className = 'btn btn-success';
    btnTatDen.className = '';
}
btnTatDen.onclick = function () {


    imgHinh.src = '../img/pic_bulboff.gif';
    // Xử lý active button
    btnBatDen.className = '';
    btnTatDen.className = 'btn btn-success';
}

//======= Bài tập 1: Tính tiền tip

var btnTinhTien = document.getElementById('btnTinh');

btnTinhTien.onclick = function () {
    // Ghi chú: tất cả dữ liệu lấy từ giao diện mạc định là chuỗi
    // input : Tổng tiền - number, phần trăm tip - number, số nhân viên- number
    var tongTien = Number(document.getElementById('idTongTien').value);
    var phanTramTip = Number(document.getElementById('phanTramTip').value);
    var soNV = Number(document.getElementById('idSoNV').value);
    // output : Số tiền Tip mỗi người - number
    var tienTip = 0;
    tienTip = tongTien * phanTramTip / 100 / soNV;

    // Hiển thị kết quả trên giao diện
    // toFixed(2) : làm tròn 2 số
    document.getElementById('tienTip').innerHTML = tienTip.toFixed(2) + '$';
}
//-------------------====------------------
// Ví dụ 3: Cho phép người dùng nhập vào 2 số => in ra số lớn nhất

document.getElementById('btnInSoLonNhat').onclick = function () {

    // input : soThuNhat : number soThuHai : number

    var soThuNhat = Number(document.getElementById('soThuNhat').value);
    var soThuHai = Number(document.getElementById('soThuHai').value);

    // output : max: number
    var max = 0;
    if (soThuNhat > soThuHai) {
        max = soThuNhat;
    } else {
        max = soThuHai;
    }

    document.getElementById('ketQua1').innerHTML = 'Số Lớn Nhất Là: ' + max;
}

/*Ví dụ 4: Viết chương trình cho phép người dùng nhập vào điểm toán, điểm lý, điểm hóa => Tính điểm trung bình và xếp loại
    ĐTB bé hơn 5 => Học lực yếu <br/>
    ĐTB >= 5 và bé hơn 6.5 => Học lực TB <br/>
    ĐTB >= 6.5 và bé hơn 8 => Học lực khá <br/>
    ĐTB >= 8 và bé hơn 10 => Học lực giỏi
*/

document.getElementById('btnXepLoai').addEventListener('click', function () {

    var diemToan = Number(document.getElementById('diemToan').value);
    var diemLy = Number(document.getElementById('diemLy').value);
    var diemHoa = Number(document.getElementById('diemHoa').value);

    // output ( String ) gồm: DTB : number + xếp loại : String
    var DTB = 0;
    var xepLoai = '';
    // progress
    DTB = (diemToan + diemLy + diemHoa) / 3;

    if (DTB < 5) {

        xepLoai = 'Yếu';
    } else if (DTB >= 5 && DTB < 6.5) {
        xepLoai = 'Trung Bình';
    } else if (DTB >= 6.5 && DTB < 8) {
        xepLoai = ' Khá';
    } else if (DTB >= 8 && DTB <= 10) {
        xepLoai = 'Giỏi';
    } else {
        xepLoai = ' Không hợp lệ';
    }

    document.getElementById('idKetQua2').innerHTML = ' Điểm Trung Bình: ' + DTB.toFixed(2) + ' - Xếp Loại: ' + xepLoai;
})

/** 
 * Bài tập 2: Viết chương trình cho phép người dùng nhập vào số giờ và
        lương trên 1h. Tính tiền lương theo công thức sau. Làm quá 40 tiếng thì
        tiếng thứ 41 sẽ tính lương gấp 1.5 lần
*/

document.getElementById('tinhTien').onclick = function () {

    // input : soGioLam: number soTienMotGio : number
    var soGio = Number(document.getElementById('soGio').value);
    var luongCB = Number(document.getElementById('tienLuong').value);

    // output : Tổng tiền lương
    //progress
    var tongTienLuong = 0;

    if (soGio <= 40) {
        tongTienLuong = soGio * luongCB;
    } else if (soGio > 40) {
        tongTienLuong = (luongCB * 40) + ((soGio - 40) * luongCB * 1.5);
    }
    // toLocaleString() : tách số thêm dấu phẩy 4.000
    document.getElementById('ketQua3').innerHTML = 'Tổng số tiền lương: ' + tongTienLuong.toLocaleString();
}

/** Bài tập 4:  Bài tập 4: Viết chương trình cho phép người dùng nhập vào 1 số n từ 1 ->
        4. In số đó ra bằng chữ. Lưu ý : khi người dùng nhập vào không phải 1, 2, 3, 4 => In ra giá trị không hợp lệ */

/** Cách 1
document.getElementById('btnDocSo').addEventListener('click', function(){

    // input : 1 số n : number
    var soN = document.getElementById('nhapSoN').value;
    // output: đọc số : String
    var docSoN = '';

    if (soN === 1){
         docSoN = 'Số Một';
    } else if (soN === 2){
        docSoN = 'Số Hai';
    } else if ( soN === 3){
        docSoN = 'Số Ba';
    } else if ( soN === 4){
        docSoN = 'Số Bốn';
    } else{
        docSoN =' Vui lòng nhập số từ 1 đến 4';
    }

    document.getElementById('ketQua4').innerHTML = docSoN;

}) */

// Cách 2 : Xử lý theo swith...case

document.getElementById('btnDocSo').onclick = function () {

    // input : 1 số n : number
    var soN = Number(document.getElementById('nhapSoN').value);
    // output: đọc số : String
    var docSoN = '';

    switch (soN) {
        case 1: {
            docSoN = 'Số Một';
            //break;
        }; break;
        case 2: {
            docSoN = ' Số Hai ';
        }; break;
        case 3: {
            docSoN = 'Số Ba ';
        }; break;
        case 4: {
            docSoN = 'Số Bốn';
        }; break;
        default: {
            docSoN = 'Vui lòng nhập số từ 1 đến 4';
        }
    }

    document.getElementById('ketQua4').innerHTML = docSoN;

}

/** Bài tập 5: Nhập vào một tháng ( nhập số ). In ra tên tháng và số ngày
        của tháng đó ( không tính năm nhuần ) */

document.getElementById('btnIn').onclick = function () {

    // input : soN : number
    var nhapSoN = Number(document.getElementById('nhapThang').value);
     
    // output : soThang : String - soNgay : String 
    // progress
    var soThang = '';
    var soNgay = 0;

    switch (nhapSoN) {

        case 1: {
            soThang = 'Tháng 1';
            soNgay =  31;
        }; break;
        case 2: {
            soThang = 'Tháng 2';
            soNgay = 28;
        }; break;
        case 3: {
            soThang = 'Tháng 3';
            soNgay = 31;
        }; break;
        case 4: {
            soThang = 'Tháng 4';
            soNgay = 30;
        }; break;
        case 5: {
            soThang = 'Tháng 5';
            soNgay = 31;
        }; break;
        case 6: {
            soThang = 'Tháng 6';
            soNgay = 30;
        }; break;
        case 7: {
            soThang = 'Tháng 7';
            soNgay = 31;
        }; break;
        case 8: {
            soThang = 'Tháng 8';
            soNgay = 31;
        }; break;
        case 9: {
            soThang = 'Tháng 9';
            soNgay = 30;
        }; break;
        case 10: {
            soThang = 'Tháng 10';
            soNgay = 31;
        }; break;
        case 11: {
            soThang = 'Tháng 11';
            soNgay = 30;
        }; break;
        case 12: {
            soThang = 'Tháng 12';
            soNgay = 31;
        }; break;
        default: {
            soThang = ' Tháng không Hợp Lệ!';
            soNgay = 0;
        }
    }

    document.getElementById('ketQua5').innerHTML = soThang + ' - ' + soNgay +' Ngày ';
}