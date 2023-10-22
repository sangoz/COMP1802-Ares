const clickthongbao=document.querySelector('.a--htd')//clicthongbao là tên và document.querySelector là để truy vấn tới  phần tử có class là (a--htd)
clickthongbao.addEventListener("click",function(){//có nghĩa là cho sự kiện click vào phần tử có class có class là (a--htd)
   document.querySelector('.computer-htd-dtqa').style.display="flex"//thì phần tử có class là (computer-htd-dtqa) sẽ được hiển thị lên
})
const clickthongbaodong=document.querySelector('.dong')
clickthongbaodong.addEventListener("click",function(){//có nghĩa là cho sự kiện click vào phần tử có class có class là (dong)
    document.querySelector('.computer-htd-dtqa').style.display="none"//thì phần tử có class là (computer-htd-dtqa) sẽ được đóng đi
})
// ..............phần lướt ngang hình ảnh khi click chuột...........
// ..............phần lướt ngang hình ảnh khi click chuột...........
// ..............phần lướt ngang hình ảnh khi click chuột...........
// ..............phần lướt ngang hình ảnh khi click chuột...........
// ..............phần lướt ngang hình ảnh khi click chuột...........
let i=0;
const nuber=document.querySelectorAll('.silde-content-trai-top img')
const clickluottrai=document.querySelector('.fa-arrow-left')
clickluottrai.addEventListener("click",function(){
    i=i+1;
    if(i>nuber.length-1){
        i=0;
    }
    document.querySelector('.silde-content-trai-top').style.right=i*100+"%";
})
const clickluotphai=document.querySelector('.fa-arrow-right')
clickluotphai.addEventListener("click",function(){
    i=i-1;
    if(i<=-1){
        i=5;
    }
    document.querySelector('.silde-content-trai-top').style.right=i*100+"%"
})