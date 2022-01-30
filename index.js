let capcha;
 
let alphabets='AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
let stats =document.getElementById('status');
// let user = document.getElementById('enterd_captcha');

console.log(stats)
stats.innerHTML="captcha genrator";
generate=()=>{
    let first = alphabets[Math.floor(Math.random()* alphabets.length)];
    let second=Math.floor(Math.random() * 10 );
    let third=Math.floor(Math.random() * 10 );
    let fourth=alphabets[Math.floor(Math.random() * alphabets.length)];
    let fifth=alphabets[Math.floor(Math.random() * alphabets.length)];
    let sixth=Math.floor(Math.random() * 10 );
    capcha =first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
    document.getElementById('generated_captcha').value=capcha;
    document.getElementById('enterd_captcha').value='';
     stats.innerHTML="captcha genrator";

};
check = () => {
    // let user =document.getElementById('enterd_captcha').value;
    let user =document.querySelector('#enterd_captcha').value;
    
    console.log(capcha);
    console.log(user + "after copy");
    if(user == capcha){
      return   stats.innerHTML="Correct";
    console.log(user + "after copy");

    }else{
        stats.innerHTML="Try Again !!";
    document.getElementById('enterd_captcha').value='';

    }
}