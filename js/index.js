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

document.getElementById('btnXepLoai').addEventListener('click', function(){

    var diemToan = Number(document.getElementById('diemToan').value);
    var diemLy = Number(document.getElementById('diemLy').value);
    var diemHoa = Number ( document.getElementById('diemHoa').value);
    
    // output ( String ) gồm: DTB : number + xếp loại : String
    var DTB = 0;
    var xepLoai = '';
    // progress
    DTB = ( diemToan + diemLy + diemHoa)/3;

    if ( DTB < 5){

        xepLoai = 'Yếu';
    } else if ( DTB >= 5 && DTB < 6.5){
        xepLoai = 'Trung Bình';
    } else if ( DTB >= 6.5 && DTB < 8){
        xepLoai = ' Khá';
    } else if( DTB >= 8 && DTB <=10){
        xepLoai = 'Giỏi';
    }else {
        xepLoai = ' Không hợp lệ';
    }

    document.getElementById('idKetQua2').innerHTML = ' Điểm Trung Bình: ' + DTB.toFixed(2) + ' - Xếp Loại: ' + xepLoai;
})

/** 
 * Bài tập 2: Viết chương trình cho phép người dùng nhập vào số giờ và
        lương trên 1h. Tính tiền lương theo công thức sau. Làm quá 40 tiếng thì
        tiếng thứ 41 sẽ tính lương gấp 1.5 lần
*/

document.getElementById('tinhTien').onclick = function(){

    // input : soGioLam: number soTienMotGio : number
    var soGio = Number(document.getElementById('soGio').value);
    var luongCB = Number(document.getElementById('tienLuong').value);

    // output : Tổng tiền lương
    //progress
    var tongTienLuong = 0;

    if( soGio <= 40){
        tongTienLuong = soGio * luongCB;
    } else if ( soGio > 40){
        tongTienLuong =  (luongCB * 40) + ((soGio -40) * luongCB * 1.5);
    }
    // toLocaleString() : tách số thêm dấu phẩy 4.000
    document.getElementById('ketQua3').innerHTML = 'Tổng số tiền lương: ' + tongTienLuong.toLocaleString();
}