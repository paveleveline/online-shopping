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
    // poti sa iti trimiti indexul aici care sa te ajute mai jos pe randul 51 sa iti extragi obiectul dorit
    // atentie, in getproductHTML il trimit mai departe cu data-index
    productHTML = getproductHTML(i, productObj);
    photosContentWrapper.append(productHTML);

    }

    photosContentWrapper.delegate('.picture-coat',"click", function(){
    const id = $(this).parents('.single-coat-wrapper').data('id');
    const index = $(this).parents('.single-coat-wrapper').data('index');
    console.log(id);

    // nu ai nevoie de if-ul acesta pe selectie, in pictureSelected ai o selectie, nu un boolean si mereu vei avea o selectie deci if-ul e redundant. pur si simplu la click pe produs overlay-ul tau trebuie sa apara, va fi inchis de la iconita de close si doar asta e posibilul flow
    if(pictureSelected){
        showOverlay.removeClass('hidden');
    } else{
        showOverlay.addClass('hidden');
    }

    // iti sugerez sa folosesti proprietatea imgUrl ca sa iti contruiesti path-ul pentru bg-image aici, este doar o coincidenta ca id-ul coincide cu partea finala a imgUrl-ul, este foarte riscant sa faci asa si daca tot ai o proprietate specifica pentru asta cum e imgUrl te sfatuiesc sa profiti de ea.
    cartSelection.css({backgroundImage: "url(assets/coats/coat-" + id + ".jpg" + ")"});   
    
    // este riscant si aici sa consideri ca id-ul are vreun impact asupra pozitiei, pentru ca nu o are, este o simpla coincidenta, id-urile de asemenea se pot modifica usor atat din FE cat si din database
   //const productItem = products.coats[id-1];
   const productItem = products.coats[index];
    console.log(productItem);

    //console.log($(this).parents('.single-coat-wrapper').data('index'));


    // o solutie frumoasa era sa folosesti find aici  $('.name-price-size-wrapper').find('.name')
    // good practice este sa salvezi $('.name-price-size-wrapper') intr-o constanta si mai apoi sa folosesti find
    // era suficient sa folosesti metoda text() in loc de html() pentru ca adaugi doar text la urma urmei
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