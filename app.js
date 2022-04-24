//get buyer details and update it on (invoice to)
document.getElementById('submit-btn').addEventListener('click', function(){
    const buyerInput = document.getElementById('input-details');
    const invoiceInfo = document.getElementById('invoice-info');
    invoiceInfo.innerText = buyerInput.value;
    buyerInput.value = '';
});

//get product details and update it on table and update prices
