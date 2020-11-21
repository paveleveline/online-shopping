$(function() { 

    let pictureSelected = $('.picture-coat');
    const photosContentWrapper = $('.photos-content-wrapper');
    const cartSelection = $('.cart-selection'); 
    console.log(cartSelection)
    
    productCoatObj = products.coats;
    console.log(productCoatObj)
    
    getproductHTML = function(index, productCoatObj){
    return `<div class="col-lg-3 col-sm-6 single-coat-wrapper mb-3" data-index=${index} data-id=${productCoatObj.id}>
                        <img class="img-fluid picture-coat" data-toggle="modal" href="#" data-target="#showOverlay" src="assets/coats/${productCoatObj.imgUrl}">
                        <div class="row d-flex mt-2">
                            <div class="col color-textdark">
                                <h6>${productCoatObj.name}</h6>
                            </div>
                            <div class="col color-textlight d-flex">
                                <h6 class="ml-auto">${productCoatObj.currency} ${productCoatObj.price}</h6>
                            </div>
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
    });