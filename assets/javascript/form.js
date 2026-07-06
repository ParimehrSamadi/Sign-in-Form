let firstname=document.getElementsByTagName('input')[0];
let lastname=document.getElementsByTagName('input')[1];
let username=document.getElementsByTagName('input')[2];
let nationalcode=document.getElementsByTagName('input')[3];
let gender='';
const approve = document.getElementById('approve');
const firstnameError=document.getElementById('firstnameError');
const lastnameError=document.getElementById('lastnameError');
const usernameError=document.getElementById('usernameError')
const nationalCodeError=document.getElementById('nationalCodeError');
const genderError=document.getElementById('gendererror');
const btnSend = document.getElementById('btnSend');
const info=document.getElementById('info')
btnSend.setAttribute('disabled', true);
let object={}
let data=[]

errorMessage = (e) => {
    e.innerHTML=``;
}

firstnameCheck = () => {
    let fn=firstname.value;
    if (fn==''){
        firstnameError.innerHTML=`<span><i class="bi bi-chat-heart"></i></span> نام خود را وارد کنید.`;
        setTimeout(() => {
            firstnameError.innerHTML=``
        },5000)
    }else{
        firstnameError.innerText='';
        object.firstname=fn
    }
}
firstname.addEventListener('blur',firstnameCheck);
lastnameCheck = () => {
    let ln=lastname.value;
    if (ln==''){
        lastnameError.innerHTML=`<span><i class="bi bi-chat-heart"></i></span> نام خانوادگی خود را وارد کنید.`;
        setTimeout(() => {
            lastnameError.innerHTML=``
        },5000)
    }else{
        lastnameError.innerText='';
        object.lastname=ln
    }
}
lastname.addEventListener('blur',lastnameCheck);
usernameCheck = () => {
    let un=username.value;
    if (un==''){
        usernameError.innerHTML=`<span><i class="bi bi-chat-heart"></i></span> نام کاربری خود را وارد کنید.`;
        setTimeout(() => {
            usernameError.innerHTML=``
        },5000)
    }else if (un.length<5){
        usernameError.innerHTML=`<span><i class="bi bi-chat-heart"></i></span> نام کاربری باید حداقل 5 کاراکتر باشد.`;
        setTimeout(() => {
            usernameError.innerHTML=``
        },5000)
    }else{
        usernameError.innerText='';
        object.username=un
    }
}
username.addEventListener('blur',usernameCheck);
nationalcodeCheck = () => {
    let nc=nationalcode.value;
    if (nc==''){
        nationalCodeError.innerHTML=`<span><i class="bi bi-chat-heart"></i></span> کد ملی خود را وارد کنید.`;
        setTimeout(() => {
            nationalCodeError.innerHTML=``
        },5000)
    }else if (nc.length!=10){
        nationalCodeError.innerHTML=`<span><i class="bi bi-chat-heart"></i></span> کد ملی معتبر نیست.`;
        setTimeout(() => {
            nationalCodeError.innerHTML=``
        },5000)
    }else{
        nationalCodeError.innerText='';
        object.nationalcode=nc
    }
}
nationalcode.addEventListener('blur', nationalcodeCheck);
selectGender = (e) => {
    gender=e.id;
}
approve.addEventListener('change', function(e){
    if(e.target.checked){
        if (gender !='' && firstname!=null && lastname!=null && username!=null && firstname.value!='' && lastname.value!='' && username.value!='' && nationalcode!=null && nationalcode.value!=''){
            btnSend.removeAttribute('disabled') ;
            if (gender=='female'){
                object.gender= 'زن';
            }
            else{
                object.gender='مرد';
            }
        }else{
            genderError.innerHTML=`<span><i class="bi bi-chat-heart"></i></span> لطفا همه موارد را تکمیل کنید.`
            setTimeout(() => {
                genderError.innerHTML=``
            },5000)
        }
    }else{
        btnSend.setAttribute('disabled', true);
    }
})
btn = () => {
    data.push(object);
    console.log(data)
    let dataStr= JSON.stringify(data);
    localStorage.setItem('data', dataStr);
}
btnSend.addEventListener('click',btn)



