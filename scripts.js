// Phone
document.getElementById('phoneIncrease').addEventListener('click',function(){
    handleProductChange('phone', true)
});
document.getElementById('phoneDecrease').addEventListener('click',function(){
    handleProductChange('phone', false)
});


// Case
document.getElementById('caseIncrease').addEventListener('click',function(){
    handleProductChange('case', true)
});
document.getElementById('caseDecrease').addEventListener('click',function(){
    handleProductChange('case', false)
});


function handleProductChange(product, isIncrease){
    const productValue = getInputValue(product);
    let productNewValue = productValue;
    if(isIncrease == false && productValue > 0){
        productNewValue = productValue - 1
    } 
    if (isIncrease == true) {
        productNewValue = productValue + 1
    }
    document.getElementById(product + 'Count').value = productNewValue;
    let productTotal = productNewValue;
    if(product == 'phone'){
        productTotal = productNewValue * 1219;
    }
    if(product == 'case'){
        productTotal = productNewValue * 59;

    }
    document.getElementById(product + 'Price').innerText = productTotal;
    
    calculateTotal();
}


function calculateTotal(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');
    const totalPrice = phoneCount * 1219 + caseCount * 59;

    document.getElementById('subtotal').innerText = totalPrice;

    const tax = Math.round(totalPrice * 0.2);
    document.getElementById('tax').innerText = tax;
    
    const total = (totalPrice + tax);
    console.log(total)
    document.getElementById('total').innerText = total;

}

function getInputValue(product){
    const productInput = document.getElementById(product + 'Count')
    const productCount = parseInt(productInput.value);
    return productCount;
}

document.getElementById('closeBtn').addEventListener('click', function(){
    document.getElementById('cart-item').style.display = "none"
})