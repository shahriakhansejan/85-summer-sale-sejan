
//kitchenware Card1
let counter = 1;
document.getElementById('Kitchenware1').addEventListener('click', function(){
    const kitchenware1NameField = document.getElementById('kitchenware1-name-field');
    const kitchenware1Name = kitchenware1NameField.innerText 

    const priceFields= document.getElementById('price-fields');
    const p = document.createElement('p');
    p.innerText = counter + ". "+ kitchenware1Name;
    p.classList.add('paragraph');
    priceFields.appendChild(p);
    counter++;

    const kitchenware1PriceField = document.getElementById('kitchenware1-price');
    const kitchenware1PriceStr = kitchenware1PriceField.innerText;
    const kitchenware1Price = parseFloat(kitchenware1PriceStr);
    const totalPrice = document.getElementById('total-price');
    const priceStr = totalPrice.innerText;
    const price = parseFloat(priceStr);
    const newPrice = price + kitchenware1Price;


// Common part
    const purchaseBtn = document.getElementById('make-purchase-btn');
    if(newPrice != 0){
        purchaseBtn.disabled = false; 
    }
    else{
        purchaseBtn.disabled = true;
    }
    const applyBtn = document.getElementById('apply-btn');
    if(newPrice >= 200){
        applyBtn.disabled = false;
    }
    else{
        applyBtn.disabled = true;
    }
    


    totalPrice.innerText = newPrice;

})




//kitchenware  card 2
document.getElementById('Kitchenware2').addEventListener('click', function(){
    const kitchenware2NameField = document.getElementById('kitchenware2-name-field');
    const kitchenware2Name = kitchenware2NameField.innerText 

    const priceFields= document.getElementById('price-fields');
    const p = document.createElement('p');
    p.innerText = counter + ". "+ kitchenware2Name;
    p.classList.add('paragraph');
    priceFields.appendChild(p);
    counter++;

    const kitchenware2PriceField = document.getElementById('kitchenware2-price');
    const kitchenware2PriceStr = kitchenware2PriceField.innerText;
    const kitchenware2Price = parseFloat(kitchenware2PriceStr);
    const totalPrice = document.getElementById('total-price');
    const priceStr = totalPrice.innerText;
    const price = parseFloat(priceStr);
    const newPrice = price + kitchenware2Price;

    // Common part
    const purchaseBtn = document.getElementById('make-purchase-btn');
    if(newPrice != 0){
        purchaseBtn.disabled = false; 
    }
    else{
        purchaseBtn.disabled = true;
    }
    const applyBtn = document.getElementById('apply-btn');
    if(newPrice >= 200){
        applyBtn.disabled = false;
    }
    else{
        applyBtn.disabled = true;
    }
    


    totalPrice.innerText = newPrice;

})





//kitchenware  card 3
document.getElementById('Kitchenware3').addEventListener('click', function(){
    const kitchenware3NameField = document.getElementById('kitchenware3-name-field');
    const kitchenware3Name = kitchenware3NameField.innerText 

    const priceFields= document.getElementById('price-fields');
    const p = document.createElement('p');
    p.innerText = counter + ". "+ kitchenware3Name;
    p.classList.add('paragraph');
    priceFields.appendChild(p);
    counter++;

    const kitchenware3PriceField = document.getElementById('kitchenware3-price');
    const kitchenware3PriceStr = kitchenware3PriceField.innerText;
    const kitchenware3Price = parseFloat(kitchenware3PriceStr);
    const totalPrice = document.getElementById('total-price');
    const priceStr = totalPrice.innerText;
    const price = parseFloat(priceStr);
    const newPrice = price + kitchenware3Price;

    // Common part
    const purchaseBtn = document.getElementById('make-purchase-btn');
    if(newPrice != 0){
        purchaseBtn.disabled = false; 
    }
    else{
        purchaseBtn.disabled = true;
    }
    const applyBtn = document.getElementById('apply-btn');
    if(newPrice >= 200){
        applyBtn.disabled = false;
    }
    else{
        applyBtn.disabled = true;
    }
    


    totalPrice.innerText = newPrice;

})





// Soprats part
//Sports  card 1
document.getElementById('sports1').addEventListener('click', function(){
    const sports1NameField = document.getElementById('sports1-name-field');
    const sports1Name = sports1NameField.innerText 

    const priceFields= document.getElementById('price-fields');
    const p = document.createElement('p');
    p.innerText = counter + ". "+ sports1Name;
    p.classList.add('paragraph');
    priceFields.appendChild(p);
    counter++;

    const sports1PriceField = document.getElementById('sports1-price');
    const sports1PriceStr = sports1PriceField.innerText;
    const sports1Price = parseFloat(sports1PriceStr);
    const totalPrice = document.getElementById('total-price');
    const priceStr = totalPrice.innerText;
    const price = parseFloat(priceStr);
    const newPrice = price + sports1Price;


// Common part
    const purchaseBtn = document.getElementById('make-purchase-btn');
    if(newPrice != 0){
        purchaseBtn.disabled = false; 
    }
    else{
        purchaseBtn.disabled = true;
    }
    const applyBtn = document.getElementById('apply-btn');
    if(newPrice >= 200){
        applyBtn.disabled = false;
    }
    else{
        applyBtn.disabled = true;
    }
    


    totalPrice.innerText = newPrice;

})




//Sports  card 2
document.getElementById('sports2').addEventListener('click', function(){
    const sports2NameField = document.getElementById('sports2-name-field');
    const sports2Name = sports2NameField.innerText 

    const priceFields= document.getElementById('price-fields');
    const p = document.createElement('p');
    p.innerText = counter + ". "+ sports2Name;
    p.classList.add('paragraph');
    priceFields.appendChild(p);
    counter++;

    const sports2PriceField = document.getElementById('sports2-price');
    const sports2PriceStr = sports2PriceField.innerText;
    const sports2Price = parseFloat(sports2PriceStr);
    const totalPrice = document.getElementById('total-price');
    const priceStr = totalPrice.innerText;
    const price = parseFloat(priceStr);
    const newPrice = price + sports2Price;

    // Common part
    const purchaseBtn = document.getElementById('make-purchase-btn');
    if(newPrice != 0){
        purchaseBtn.disabled = false; 
    }
    else{
        purchaseBtn.disabled = true;
    }
    const applyBtn = document.getElementById('apply-btn');
    if(newPrice >= 200){
        applyBtn.disabled = false;
    }
    else{
        applyBtn.disabled = true;
    }
    


    totalPrice.innerText = newPrice;

})





//Sports  card 3
document.getElementById('sports3').addEventListener('click', function(){
    const sports3NameField = document.getElementById('sports3-name-field');
    const sports3Name = sports3NameField.innerText 

    const priceFields= document.getElementById('price-fields');
    const p = document.createElement('p');
    p.innerText = counter + ". "+ sports3Name;
    p.classList.add('paragraph');
    priceFields.appendChild(p);
    counter++;

    const sports3PriceField = document.getElementById('sports3-price');
    const sports3PriceStr = sports3PriceField.innerText;
    const sports3Price = parseFloat(sports3PriceStr);
    const totalPrice = document.getElementById('total-price');
    const priceStr = totalPrice.innerText;
    const price = parseFloat(priceStr);
    const newPrice = price + sports3Price;

    // Common part
    const purchaseBtn = document.getElementById('make-purchase-btn');
    if(newPrice != 0){
        purchaseBtn.disabled = false; 
    }
    else{
        purchaseBtn.disabled = true;
    }
    const applyBtn = document.getElementById('apply-btn');
    if(newPrice >= 200){
        applyBtn.disabled = false;
    }
    else{
        applyBtn.disabled = true;
    }
    


    totalPrice.innerText = newPrice;

})









    // Overall
document.getElementById('apply-btn').addEventListener('click',function(){
    const couponField = document.getElementById('coupon-field');
    const couponValue = couponField.value;
    const discountPrice = document.getElementById('discount-price');
    const discountValueStr = discountPrice.innerText;
    const discountValue = parseFloat(discountValueStr);

    const totalPrice = document.getElementById('total-price');
    const priceStr = totalPrice.innerText;
    const price = parseFloat(priceStr);

    const totalP = document.getElementById('total');
    const totalStr = totalP.innerText;
    const total = parseFloat(totalStr);

    if(couponValue === 'SELL200'){
        const feverPrice = price * 0.20;
        discountPrice.innerText = feverPrice.toFixed(3);

        const totalADis = price - feverPrice;
        totalP.innerText = totalADis.toFixed(3);
    }
})




// Purchase after go home
document.getElementById('go-to-home').addEventListener('click', function(){
    window.location.href= "index.html";
})
