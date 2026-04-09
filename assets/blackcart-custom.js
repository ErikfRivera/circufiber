document.addEventListener('tbyb_cart_update', function() {
  console.log('tbyb_cart_update event triggered');
  setTimeout(function() {
    var isQualified = tbyb.validator.isQualified;
    console.log('isQualified:', isQualified);
    var checkoutContent = document.querySelector('.dynamic-checkout__content');
    console.log('checkoutContent:', checkoutContent);
    
    if (isQualified) {
      checkoutContent.style.display = 'none';
    } else {
      checkoutContent.style.display = 'block';
    }
  }, 500);
});

document.addEventListener('tbyb_cart_update', function() {
  console.log('tbyb_cart_update event triggered');
  var defaultTbyb = document.querySelector('[name="default_tbyb"]');
  var cartIcon = document.querySelector('.icon--cart');
  console.log('defaultTbyb:', defaultTbyb);
  console.log('cartIcon:', cartIcon);
  
  if (defaultTbyb) {
    cartIcon.style.display = 'none';
  } else {
    cartIcon.style.display = 'block';
  }
});

document.addEventListener('tbyb_cart_update', function() {
    var addToCartButton = document.querySelector('button.ajax-submit.action_button.button--add-to-cart.action_button--secondary');
    var shopifyPaymentButton = document.querySelector('.shopify-payment-button');
    var defaultTbybForm = document.querySelector('form[name="default_tbyb"]');
    
    if(addToCartButton && shopifyPaymentButton) {
        var tbybTracking = addToCartButton.getAttribute('data-tbyb-tracking');
        console.log('TBYB Enabled: ', tbybTracking);

        if(tbybTracking === 'add_to_cart') {
            shopifyPaymentButton.style.pointerEvents = 'none';
            shopifyPaymentButton.style.opacity = '0.5';
        } else if(tbybTracking === 'add_to_cart_upfront') {
            shopifyPaymentButton.style.pointerEvents = '';
            shopifyPaymentButton.style.opacity = '';
        }
    }
    
    if(defaultTbybForm) {
        defaultTbybForm.addEventListener('click', function() {
            var tbybTracking = addToCartButton.getAttribute('data-tbyb-tracking');
            console.log('TBYB Enabled: ', tbybTracking);

            if(tbybTracking === 'add_to_cart') {
                shopifyPaymentButton.style.pointerEvents = 'none';
                shopifyPaymentButton.style.opacity = '0.5';
            } else if(tbybTracking === 'add_to_cart_upfront') {
                shopifyPaymentButton.style.pointerEvents = '';
                shopifyPaymentButton.style.opacity = '';
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var svgIcon = document.querySelector('svg[data-icon="lock"]');
    if (svgIcon) {
        svgIcon.setAttribute("width", "16");
        svgIcon.setAttribute("height", "16");
    }
});

document.addEventListener("tbyb_cart_update", function () {
    var productId = tbyb.getSelectedVariants()?.productId;
    
    // Check if productId exists and is eligible
    if (productId && tbyb.viewManager.eligibilityService.getEligibilityStatus(productId).state) {
        // If the message is already displayed, return early
        if (document.querySelector("#toggle_deposit_text")) {
            return;
        }

        // Remove the first instance of the element with the class 'tbyb-3umn2w'
        var toRemove = document.querySelector('.tbyb-3umn2w');
        if (toRemove) {
            toRemove.remove();
        }

        // If #blackcart_info element exists, show the message
        var elem = document.querySelector("#blackcart_info");
        if (elem) {
            var p = document.createElement("p");
            p.setAttribute("id", "toggle_deposit_text");
            p.innerHTML = 'Only pay if you keep it. Try with a $5 order deposit. Free returns. &nbsp;';
            elem.prepend(p);
        }
    }
});

