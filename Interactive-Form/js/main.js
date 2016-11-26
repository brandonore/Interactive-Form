/*
|--------------------------------------------------------------------------
| Declare Initial Variables
|--------------------------------------------------------------------------
*/

// Store all 'select' elemnts into a variable for reset on page load
var elements = $('select');

// T-shirt color select info
var themeSelect = '<option>&#60; -- Please select a T-shirt theme</option>';
var jsPuns = '<option value="cornflowerblue">Cornflower Blue</option><option value="darkslategrey">Dark Slate Grey</option><option value="gold">Gold</option>';
var jsHeart = '<option value="tomato">Tomato</option><option value="steelblue">Steel Blue</option><option value="dimgrey">Dim Grey</option>';

// Store checkbox reference info into variables for disabling/enabling
var all = 'input[type="checkbox"][name="all"]';
var jsFrameworks = 'input[type="checkbox"][name="js-frameworks"]';
var jsLibs = 'input[type="checkbox"][name="js-libs"]';
var express = 'input[type="checkbox"][name="express"]';
var node = 'input[type="checkbox"][name="node"]';
var buildTools = 'input[type="checkbox"][name="build-tools"]';
var npm = 'input[type="checkbox"][name="npm"]';

// Store Total cost for workshops
var totalCost = 0;

// Store payment options
var paypal = 'div p:contains("PayPal")';
var bitcoin = 'div p:contains("Bitcoin")';

// Set pattern variable for email verification
var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


/*
|--------------------------------------------------------------------------
| Reset/hide elements on page load
|--------------------------------------------------------------------------
*/

// Reset all 'select' dropdown menus to default index on page load
for (var i = 0; i < elements.length; i++) {
  elements[i].selectedIndex = 0;
}

// Give focus to the 'name' input box on page load
$('#name').focus();

// Set placeholder text for the 'other' job role input field
$('#other-title').attr('placeholder', 'Your Job Role').css('display', 'none');

// Hide tshirt color dropdown box
$('#colors-js-puns').css('display', 'none');

// Hide the total amount h3 element
$('#final-total').css('display', 'none');

// Hide payment options on page load
$('#credit-card').css('display', 'none');
$('div p:contains("PayPal")').css('display', 'none');
$('div p:contains("Bitcoin")').css('display', 'none');

// Hide shirt and activity error labels on page load
$('.shirt-label').css({'margin-top': '-20px', 'margin-bottom': '20px', 'color': '#d22500', 'display': 'none'});
$('.activity-label').css({'margin-top': '-20px', 'margin-bottom': '20px', 'color': '#d22500', 'display': 'none'});

/*
|--------------------------------------------------------------------------
| Basic Info Section
|--------------------------------------------------------------------------
*/

// Hide or display job text field
$('select[name="user_title"]').change(function(){
  // If the 'other' option is selected from the dropdown menu,
  if($(this).val() == "other") {
      // display 'other-title' text field
    $('#other-title').css('display', 'block');
  } else {
    // otherwise, hide the text field if another option is selected
    $('#other-title').css('display', 'none');
  }
});

/*
|--------------------------------------------------------------------------
| T-Shirt Info Section
|--------------------------------------------------------------------------
*/

// Show appropriate color category based on selected choice in 'design' dropdown menu
$('select[name="user_design"]').change(function(){
  if($(this).val() == "js puns") {
    $('#colors-js-puns').css('display', 'block');
    $('select[id="color"]').html(jsPuns);
  } else if ($(this).val() == "heart js") {
    $('#colors-js-puns').css('display', 'block');
    $('select[id="color"]').html(jsHeart);
    // reset to default if 'Select theme' is selected again
  } else if ($(this).val() == "select theme") {
    $('select[id="color"]').html(themeSelect);
  }
});

/*
|--------------------------------------------------------------------------
| Register for Activities Section
|--------------------------------------------------------------------------
*/

// Add $200 for main conference click
$(all).click(function(){
  if($(this).is(':checked')) {
    totalCost += 200;
    $('#final-total').css('display', 'block').text('Total: $' + totalCost);
  } else if (!$(this).is(':checked')) {
    totalCost -= 200;
    $('#final-total').css('display', 'none');
  }
});

// Disable express workshop if js frameworks is selected
$(jsFrameworks).click(function(){
    if($(this).is(':checked')) {
      totalCost += 100;
      $('#final-total').text('Total: $' + totalCost);
      $(express).prop('disabled', true).parent().css('opacity', '0.5');
      console.log('js-frameworks is checked');
    } else if (!$(this).is(':checked')) {
      totalCost -= 100;
      $('#final-total').text('Total: $' + totalCost);
      $(express).prop('disabled', false).parent().css('opacity', '1');
      console.log('js-frameworks is unchecked');
    }
});

// Disable js frameworks workshop if express is selected
$(express).click(function(){
    if($(this).is(':checked')) {
      totalCost += 100;
      $('#final-total').text('Total: $' + totalCost);
      $(jsFrameworks).prop('disabled', true).parent().css('opacity', '0.5');
      console.log('js-frameworks is checked');
    } else if (!$(this).is(':checked')) {
      totalCost -= 100;
      $('#final-total').text('Total: $' + totalCost);
      $(jsFrameworks).prop('disabled', false).parent().css('opacity', '1');
      console.log('js-frameworks is unchecked');
    }
});

// Disable node workshop if js libraries is selected
$(jsLibs).click(function(){
    if($(this).is(':checked')) {
      totalCost += 100;
      $('#final-total').text('Total: $' + totalCost);
      $(node).prop('disabled', true).parent().css('opacity', '0.5');
      console.log('js-frameworks is checked');
    } else if (!$(this).is(':checked')) {
      totalCost -= 100;
      $('#final-total').text('Total: $' + totalCost);
      $(node).prop('disabled', false).parent().css('opacity', '1');
      console.log('js-frameworks is unchecked');
    }
});

// Disable js libraries workshop if node is selected
$(node).click(function(){
    if($(this).is(':checked')) {
      totalCost += 100;
      $('#final-total').text('Total: $' + totalCost);
      $(jsLibs).prop('disabled', true).parent().css('opacity', '0.5');
      console.log('js-frameworks is checked');
    } else if (!$(this).is(':checked')) {
      totalCost -= 100;
      $('#final-total').text('Total: $' + totalCost);
      $(jsLibs).prop('disabled', false).parent().css('opacity', '1');
      console.log('js-frameworks is unchecked');
    }
});

// Add or Subtract $100 if build tools workshop is selected
$(buildTools).click(function(){
  if($(this).is(':checked')) {
    totalCost += 100;
    $('#final-total').text('Total: $' + totalCost);
  } else if (!$(this).is(':checked')) {
    totalCost -= 100;
    $('#final-total').text('Total: $' + totalCost);
  }
});

// Add or Subtract $100 if npm workshop is selected
$(npm).click(function(){
  if($(this).is(':checked')) {
    totalCost += 100;
    $('#final-total').text('Total: $' + totalCost);
  } else if (!$(this).is(':checked')) {
    totalCost -= 100;
    $('#final-total').text('Total: $' + totalCost);
  }
});

/*
|--------------------------------------------------------------------------
| Payment Info Section
|--------------------------------------------------------------------------
*/

// If user selects 'credit card',
$('select[name="user_payment"]').change(function(){
  if($(this).val() == "credit card") {
      // display credit card field
    $('#credit-card').css('display', 'block');
    $('#cc-num').focus();
  } else {
    // otherwise, hide the fields
    $('#credit-card').css('display', 'none');
  }
});

// If user selects 'paypal',
$('select[name="user_payment"]').change(function(){
  if($(this).val() == "paypal") {
    // display paypal text
    $(paypal).css('display', 'block');
  } else {
    // otherwise hide paypal text
    $(paypal).css('display', 'none');
  }
});

// If user selects 'bitcoin'
$('select[name="user_payment"]').change(function(){
  if($(this).val() == "bitcoin") {
    // display bitcoin text
    $(bitcoin).css('display', 'block');
  } else {
    // otherwise hide bitcoin text
    $(bitcoin).css('display', 'none');
  }
});

/*
|--------------------------------------------------------------------------
| Validation Section
|--------------------------------------------------------------------------
*/

// When 'register' button is clicked, prevent default submit action until verification is successful
$('button[type="submit"]').click(function(e){

  // Check that 'name' input is not empty
  if ($('#name').val() === '') {
    e.preventDefault();
    $('label[for="name"]').css('color', '#d22500').text('Name: (please enter your name)');
  } else {
    $('label[for="name"]').css('color', '#000').text('Name:');
  }

  // Check 'email' field is not empty
  if($('#mail').val() === '') {
    e.preventDefault();
    $('label[for="mail"]').css('color', '#d22500').text('Email: (please provide an email address)');
  } else {
    $('label[for="mail"]').css('color', '#000').text('Email:');
  }

  // Check for 'email' field for a valid email address
  if(!pattern.test($('#mail').val()) && $('#mail').val() !== '') {
      $('label[for="mail"]').css('color', '#d22500').text('Email: (please provide a valid email address)');
  }

  // Check that a t-shirt design is chosen, a t-shirt color will be selected by default once a design is chosen
  if($('#design').val() == "select theme") {
    e.preventDefault();
    $('.shirt-label').css('display', 'block');
  } else {
    $('.shirt-label').css('display', 'none');
  }

  // Check that at least on activty has been selected
  if($('.activities input:checked').length === 0) {
    e.preventDefault();
    $('.activity-label').css('display', 'block');
  } else {
    $('.activity-label').css('display', 'none');
  }

  // Check credit card number for empty, numberic value and min 13 digits. Max length of 16 is set in html input field
  if($('#payment').val() === "credit card") {
    if($('#cc-num').val() !== '' && !$.isNumeric($('#cc-num').val()) || $('#cc-num').val() === '' || $('#cc-num').val().length < 13) {
      e.preventDefault();
      $('label[for="cc-num"]').css('color', '#d22500');
    } else {
      $('label[for="cc-num"]').css('color', '#000');
    }
  }

  // Check zip code field for empty, numeric value and only 5 digits
  if($('#payment').val() === "credit card") {
    if($('#zip').val() !== '' && !$.isNumeric($('#zip').val()) || $('#zip').val() === '' || $('#zip').val().length !== 5) {
      e.preventDefault();
      $('label[for="zip"]').css('color', '#d22500');
    } else {
      $('label[for="zip"]').css('color', '#000');
    }
  }

  // Check cvv field for empty, numeric value and only 3 digits
  if($('#payment').val() === "credit card") {
    if($('#cvv').val() !== '' && !$.isNumeric($('#cvv').val()) || $('#cvv').val() === '' || $('#cvv').val().length !== 3) {
      e.preventDefault();
      $('label[for="cvv"]').css('color', '#d22500');
    } else {
      $('label[for="cvv"]').css('color', '#000');
    }
  }
});
