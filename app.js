//get buyer details and update it on (invoice to)
document.getElementById('submit-btn').addEventListener('click', function(){
    const buyerInput = document.getElementById('input-details');
    const invoiceInfo = document.getElementById('invoice-info');
    invoiceInfo.innerText = buyerInput.value;
    buyerInput.value = '';
});

//get product details and update it on table and update prices
document.getElementById("add-btn").addEventListener('click', function(){
    //get tbody
    const tableInfo = document.getElementById('info-table')

    //get all input element
    const itemName = document.getElementById('item-name');
    const itemPrice = document.getElementById('item-price');
    const itemQuantity = document.getElementById('item-quantity');

    //create tr and td in table
    const tr = newElement('tr');
    const td = newElement('td');
    const td2 = newElement('td');
    const td3 = newElement('td');
    const td4 = newElement('td');

    //set input values in  td
    td.innerText = itemName.value;
    td2.innerText = itemPrice.value;
    td3.innerText = itemQuantity.value; 
    td4.innerText = itemPrice.value * itemQuantity.value;

    //td append child in tr
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    //tr append child in table body
    tableInfo.appendChild(tr);
});

//create element function
function newElement(tag){
    return document.createElement(tag);
};