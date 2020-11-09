$(function() { 

let pictureSelected = $('.picture-coat');

const photosContentWrapper = $('.photos-content-wrapper');
const overlayContentWrapper = $('.overlay-content-wrapper');
const cartSelection = $('.cart-selection'); 
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

    photosContentWrapper.delegate('.picture-coat',"click", function(){
    const id = $(this).parents('.single-coat-wrapper').data('id');
    console.log(id);

    if(pictureSelected){
        showOverlay.removeClass('hidden');
    } else{
        showOverlay.addClass('hidden');
    }

    cartSelection.css({backgroundImage: "url(assets/coats/coat-" + id + ".jpg" + ")"});   
    
   const productItem = products.coats[id-1];
    console.log(productItem);
  $('.name-price-size-wrapper .name').html(productItem.name);
  $('.name-price-size-wrapper .price').html(productItem.currency + productItem.price);
  $('.composition-and-country-wrapper .composition div').html(productItem.composition);
  $('.composition-and-country-wrapper .country div').html(productItem.country);
  $('.care-wrapper div').html(productItem.care);
     
    });

    closeBtn.click(function(){
    showOverlay.addClass('hidden');
    });
        
});