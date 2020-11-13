$(function() { 

let pictureSelected = $('.picture-coat');

const photosContentWrapper = $('.photos-content-wrapper');
const overlayContentWrapper = $('.overlay-content-wrapper');
const cartSelection = $('.cart-selection'); 
const closeBtn = $('.close-icon');
const showOverlay = $('.overlay');

productCoatObj = products.coats;
console.log(productCoatObj)

getproductHTML = function(index, productCoatObj){
    return `<div class="single-coat-wrapper" data-index=${index} data-id=${productCoatObj.id}>
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
    productHTML = getproductHTML(i, productObj);
    photosContentWrapper.append(productHTML);
    }

    photosContentWrapper.delegate('.picture-coat',"click", function(){
    const id = $(this).parents('.single-coat-wrapper').data('id');
    console.log('id is: ',  id);
    const index = $(this).parents('.single-coat-wrapper').data('index');
    console.log('index is: ', index);
   
    showOverlay.removeClass('hidden');
   
   const productIndex = products.coats[index];
    console.log(productIndex);
    const namePriceWrapper = $('.name-price-size-wrapper');
    const compositionCountryWrapper = $('.composition-and-country-wrapper');
    
    cartSelection.css({backgroundImage: "url(assets/coats/" + productIndex.imgUrl + ")"});   
    namePriceWrapper.find('.name').text(productIndex.name);
    namePriceWrapper.find('.price').text(productIndex.currency + productIndex.price);
    compositionCountryWrapper.find('.composition').children().text(productIndex.composition);
    compositionCountryWrapper.find('.country').children().text(productIndex.country);
    $('.care-wrapper div').text(productIndex.care);
     
    });

    closeBtn.click(function(){
    showOverlay.addClass('hidden');
    });

});