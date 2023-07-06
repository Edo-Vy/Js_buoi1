// innerHTML : phần nội dung giữa 2 thẻ đóng mở <tag>innerHTML <\tag>

// value : là nội dung của thẻ input

// function: hàm thực thi khi người dùng thao tác 1 sự kiện

// --------------////-----------
// Ví dụ 1

function handle_click(){

    //DOM : document object model

    var tagP = document.getElementById('pText');

    tagP.innerHTML ='Nội dung đã được thay đổi';

    // Thay đổi thuộc tính css cuả thẻ.style.[ thuộc tính của thẻ]


    document.getElementById('pText').style.color = 'red';
    document.getElementById('pText').style.fontSize = '30px';

}

// Ví dụ 2 : Bật - tắt đèn

var btnBatDen = document.getElementById('idBatDen');
var btnTatDen = document.getElementById('idTatden');
var imgHinh = document.getElementById('imgVidu2');

btnBatDen.onclick = function(){
  
   
    imgHinh.src ='../img/pic_bulbon.gif';
    // Xử lý active button
    btnBatDen.className = 'btn btn-success';
    btnTatDen.className= '';
}
btnTatDen.onclick = function(){

   
    imgHinh.src ='../img/pic_bulboff.gif';
    // Xử lý active button
    btnBatDen.className='';
    btnTatDen.className ='btn btn-success';
}

//======= Bài tập 1: Tính tiền tip

var btnTinhTien = document.getElementById('btnTinh');

btnTinhTien.onclick = function(){
    // Ghi chú: tất cả dữ liệu lấy từ giao diện mạc định là chuỗi
    // input : Tổng tiền - number, phần trăm tip - number, số nhân viên- number
    var tongTien =Number(document.getElementById('idTongTien').value);
    var phanTramTip = Number(document.getElementById('phanTramTip').value);
    var soNV = Number(document.getElementById('idSoNV').value);
    // output : Số tiền Tip mỗi người - number
    var tienTip = 0;
    tienTip = tongTien *phanTramTip/100 / soNV;

    // Hiển thị kết quả trên giao diện
    // toFixed(2) : làm tròn 2 số
    document.getElementById('tienTip').innerHTML = tienTip.toFixed(2) + '$';
}