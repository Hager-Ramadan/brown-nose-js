var btnSubmit=document.querySelector('.btn-submit')
var inputs=document.querySelectorAll('.input')
var emptyInput=document.querySelector('.failed')
var submitError=document.querySelector('.submit-error')
var done=document.querySelector('.message-done')
var form=document.querySelector('.form_row')




function validationContact() {
    btnSubmit.addEventListener('click',function () {
     inputs.forEach(input=>{
        if (input.value.length==0) {
            input.parentElement.lastElementChild.innerHTML=`
                <p>Required field</p>
`
submitError.innerHTML=`<p>Please, fill all the required fields</p>
`
            
        }
   
     })
     })
}
validationContact()
