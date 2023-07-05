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
  
   // Xử lý active button
    imgHinh.src ='../img/pic_bulbon.gif';
}
btnTatDen.onclick = function(){

   // Xử lý active button
    imgHinh.src ='../img/pic_bulboff.gif';
}