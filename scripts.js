let increase = document.getElementById('plusBtn');
let itemValue = document.getElementById('itemValue').value;

increase.addEventListener('click', function(){
    let itemValueNum = parseInt(itemValue);
    let newValueNum = itemValueNum + 1;
    document.getElementById('itemValue').value = newValueNum;
    console.log(newValueNum)
})




