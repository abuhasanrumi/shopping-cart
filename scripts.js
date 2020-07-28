// Phone
document.getElementById('phoneIncrease').addEventListener('click',function(){
    handlePhoneChange(true)
});
document.getElementById('phoneDecrease').addEventListener('click',function(){
    handlePhoneChange(false)
});
function handlePhoneChange(isIncrease){
    const phoneCount = document.getElementById('phoneCount')
    const phoneValue = parseInt(phoneCount.value);
    let phoneNewValue = 0;
    if(isIncrease == false && phoneValue > 0){
        phoneNewValue = phoneValue - 1
    } 
    if (isIncrease == true) {
        phoneNewValue = phoneValue + 1
    }
    phoneCount.value = phoneNewValue;
    const phoneTotal = phoneNewValue * 1219;
    document.getElementById('phonePrice').innerText = phoneTotal;
}


// Case
document.getElementById('caseIncrease').addEventListener('click',function(){
    handleCaseChange(true)
});
document.getElementById('caseDecrease').addEventListener('click',function(){
    handleCaseChange(false)
});
function handleCaseChange(isIncrease){
    const caseCount = document.getElementById('caseCount');
    const caseValue = parseInt(caseCount.value);
    let caseNewValue = caseValue;
    if(isIncrease == true){
        caseNewValue = caseValue + 1;
    }
    if(isIncrease == false && caseValue > 0){
        caseNewValue = caseValue - 1;
    }
    caseCount.value = caseNewValue;
    const caseTotal = caseNewValue * 59;
    document.getElementById('casePrice').innerText = caseTotal;
}