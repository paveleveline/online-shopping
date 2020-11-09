$(function() { 

let pictureSelected = [];

const photosContentWrapper = $('.photos-content-wrapper');
const overlayContentWrapper = $('.overlay-content-wrapper');
const cartSelection = $('.cart-selection'); 
// ti-ar fi adus puncte frumoase sa implementezi click-ul si pe butonul asta si ar fi fost ceva foarte simplu pentru tine
const closeBtn = $('.close-icon');
const showOverlay = $('.overlay');

productCoatObj = products.coats;
console.log(productCoatObj)

getproductHTML = function(productCoatObj){
    return `<div class="single-coat-wrapper" data-id=${productCoatObj.id}>
    <div class="picture-coat" style="background-image: url(assets/coats/${productCoatObj.imgUrl})"></div>
    <div class="name-and-price-wrapper">
        <div class="name-coat">${productCoatObj.name}</div>
        <div class="price-coat">${productCoatObj.currency} ${productCoatObj.price}</div>
    </div>

</div>
    `;
};
for(let i=0; i<products.coats.length; i++){
    let productObj = products.coats[i];
    productHTML = getproductHTML(productObj);
    photosContentWrapper.append(productHTML);
    }

    photosContentWrapper.delegate('.picture-coat', "click", function(){
        const id = $(this).parents('.single-coat-wrapper').data('id');
        
        // nu ai nevoie de sectiunea asta in proiectul asta. Dincolo aveai nevoie pentru ca aveai un array de favorites unde voiai sa stii ce ai adaugat, dar aici ai un simplu click un overlay care arata datele respective
        if(jQuery.inArray(id, pictureSelected) === -1){
            pictureSelected.push(id);
        }else { 
            pictureSelected.splice(pictureSelected.indexOf(id), 1);
        }
            console.log(pictureSelected);
        
            if(pictureSelected.length>0 ){
                showOverlay.removeClass('hidden');
            } else{
                showOverlay.addClass('hidden');
            }
    });


});