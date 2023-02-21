var incBtn=document.getElementById('inc-btn')
var decBtn=document.getElementById('dec-btn')
var inputfield=document.getElementById('input-field')
var incBtn2=document.getElementById('inc-btn2')
var decBtn2=document.getElementById('dec-btn2')
var inputfield2=document.getElementById('input-field2')
var pop=document.getElementById('pop-up')
var pop2=document.getElementById('pop-up2')
var popclose=document.getElementById('close-pop')
var popclose2=document.getElementById('close-pop2')
var crossicon=document.getElementById('searchicon')
var fromtext=document.getElementById('fromt')
var totext=document.getElementById('tot')
var swap=document.getElementById('arrow')
var crossicon2=document.getElementById('searchicon2')
var totext=document.getElementById('tot')
var spin=document.getElementById('arrow')
var temp;
var f=document.getElementById('generatedform')
var cfm=document.getElementById('cfm')
var j


crossicon.addEventListener('click',()=>{
    fromtext.value='';
})

crossicon2.addEventListener('click',()=>{
    totext.value='';
})

spin.addEventListener('click',()=>{
    spin.classList.toggle('spin');
    temp=fromtext.value;
    fromtext.value=totext.value;
    totext.value=temp;

    setTimeout(()=>{
        spin.classList.toggle('spin');
    },300)
})

inputfield.addEventListener('keyup',()=>{
    if(inputfield.value>0)
        {
            decBtn.disabled=false;
        }
    if(inputfield.value>6)
        {   pop.classList.add('openpopup');
            popclose.classList.add('close-pop-appear');
        }
    popclose.addEventListener('click',()=>
        {   remove();
            inputfield.value=6;
        })
})

inputfield.addEventListener('keyup',()=>{
    if(inputfield.value<6)
    {
    remove();
    }
})

inputfield2.addEventListener('keyup',()=>{
    if(inputfield2.value>0)
    {
        decBtn2.disabled=false;
    }
    if(inputfield2.value>6)
    {   
        pop2.classList.add('openpopup2');
        popclose2.classList.add('close-pop-appear2');
    }
    popclose2.addEventListener('click',()=>
    { remove()
    })
})

inputfield2.addEventListener('keyup',()=>{
    if(inputfield2.value<6)
    {
 remove2();
    }
})

fromtext.addEventListener('focus',()=>{
if(fromtext!=""){
   crossicon.classList.add('showcross');}
})

fromtext.addEventListener('blur',()=>{
    crossicon.classList.remove('showcross');
})

totext.addEventListener('focus',()=>{
    crossicon2.classList.add('showcross2');
})
 
totext.addEventListener('blur',()=>{
    crossicon2.classList.remove('showcross2');
})

inputfield.addEventListener('blur',(e)=>{
if(inputfield.value>6)
    {
           pop.classList.add('openpopup');
           popclose.classList.add('close-pop-appear');
           popclose.addEventListener('click',()=>{ remove() })
    }
})

incBtn.addEventListener('click',()=>{
if(inputfield.value<6){
        inputfield.value++;}
else{
        pop.classList.add('openpopup');
        popclose.classList.add('close-pop-appear');
        decBtn.disabled=false;
    }
})

decBtn.addEventListener('click',()=>{
if(inputfield.value>0)
    {
        inputfield.value--;
    }
if (inputfield.value==0)
    {
        decBtn.disabled=true;
    }
})

popclose.addEventListener('click',()=>{ remove()
})

function remove()
{
    pop.classList.remove('openpopup');
    popclose.classList.remove('close-pop-appear');
}

function remove2()
{
    pop2.classList.remove('openpopup2');
    popclose2.classList.remove('close-pop-appear2');
}

inputfield2.addEventListener('blur',(e)=>{

    {
        if(inputfield2.value>6){
           pop2.classList.add('openpopup2');
           popclose2.classList.add('close-pop-appear2');
           popclose2.addEventListener('click',()=>{ remove2() })
           inputfield2.value=6;
        }
    }
})

incBtn2.addEventListener('click',()=>{
if(inputfield2.value<6){
        inputfield2.value++;}
else{
        pop2.classList.add('openpopup2');
        popclose2.classList.add('close-pop-appear2');
        decBtn2.disabled=false;
    }
})

decBtn2.addEventListener('click',()=>{
if(inputfield2.value>0)
{inputfield2.value--;}
if (inputfield2.value==0)
{
    decBtn2.disabled=true;
}
})

popclose2.addEventListener('click',()=>{ remove2()
})

cfm.addEventListener('click',()=>{ 
    j=parseInt(inputfield.value)+ parseInt(inputfield2.value);
    for(var i=0;j>i;i++){
  
    f.innerHTML=f.innerHTML+ `    <div class="gform" style="padding:10px 15px 10px 0px; margin:8px 0 5px 0;border-radius:25px;box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.20); background-color:#D8E6FD;"> 
    <input type="text" placeholder="First Name" style="padding:5px 0 5px 12px;border-radius:15px;margin-left:10px;">
    <input type="text" placeholder="Last Name" style="padding:5px 0 5px 12px;border-radius:15px;margin-left:10px;">
    <input type="text" placeholder="Age" style="width:50px;text-align: center;padding:5px;border-radius:15px;margin-left:10px;">
    <select name="gender" id="g" style="padding:5px;border-radius:15px;margin-left:10px;">
        <option value="">Select Gender</option>
        <option value="women">Women</option>
        <option value="man">Man</option>
        <option value="transgender">Transgender</option>
        <option value="Non-binary">Non-binary/non-conforming</option>
        <option value="Others">Others</option>
    </select> </div>`}

})
