let info = localStorage.getItem('data');
const show = document.getElementById('info');

let dataArr = JSON.parse(info);
show.innerHTML=`<h3 id='title'>ثبت نام شما انجام شد!</h3>
<div id='one' class='information'>
<span>نام:</span>
<span>${dataArr[0].firstname}</span>
</div>
<div id='two' class='information'>
<span>نام خانوادگی:</span>
<span>${dataArr[0].lastname}</span>
</div>
<div class='information'>
<span>نام کاربری:</span>
<span>${dataArr[0].username}</span>
</div>
<div class='information'>
<span>کد ملی:</span>
<span>${dataArr[0].nationalcode}</span>
</div>
<div class='information'>
<span>جنسیت:</span>
<span>${dataArr[0].gender}</span>
</div>


`

