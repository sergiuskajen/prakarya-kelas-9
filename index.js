$(window).on('load', function() {
  $('.loader').fadeOut(2000);
  $('.content').fadeIn(2000);
  $('html').css({
    overflowY: 'scroll',
    overflowX: 'hidden'
  })
});


window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".header").style.top = "-8vh";
  } else {
    document.querySelector(".header").style.top = "0";
  }
}

const outside = document.querySelector('.outside');

/*$('#openBar').click(function() {
  $('.menu').addClass('open');
  $('.menu-open').fadeTo(200, 1);
  $('html').css({
    overflowY: 'hidden',
    height: '100%'
  });
  $('.title').css('z-index', '1000');
});*/


  


$('.menu-btn').click(function() {
  $('.menu-container').css({
    top: '0'
  });
  $('.outside').css({
    display: 'block'
  })
  $('.menu-btn').addClass('active');
});

$('.close-menu').click(function() {
  $('.menu-container').css({
    top: '-50vh'
  });
  $('.menu-btn').removeClass('active');
});

$(window).click(function(event) {
  if (event.target === outside) {
    $('.menu-container').css({
      top: '-50vh'
    });
    outside.style.display = "none"
  }
});


$('.deformasi-btn').click(function(){
  $('.indicator-menu').css({
    marginLeft: '80px',
    width: '85px'
  });
  $('.deformasi-btn').css({
    opacity: '1'
  })
  $('.stilasi-btn').css({
    opacity: '0.7'
  });
  $('.stilasi').fadeOut(200);
  $('.rancangan-content').addClass('spread')
})

$('.stilasi-btn').click(function(){
  $('.indicator-menu').css({
    marginLeft: '0',
    width: '48px'
  });
  $('.stilasi-btn').css({
    opacity: '1'
  })
  $('.deformasi-btn').css({
    opacity: '0.7'
  });
  $('.stilasi').fadeIn(200);
  $('.rancangan-content').removeClass('spread')
});




window.addEventListener("scroll", firstReveal);

function firstReveal() {
  var first = document.querySelectorAll('.fading');

  for (var i = 0; i < first.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = first[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      first[i].classList.add('show');
    }
    else {
      first[i].classList.remove('show');
    }
  }
}


$(window).ready(function() {
  $('.banner-title').addClass('show');
  $('.banner-img').addClass('show');
})

/*$('.item-cta').click(function() {
  $('.item-cta').addClass('check');
})*/


/*var itemButton = document.getElementsByClassName('item-cta');

for (var i = 0; i < itemButton.length; i++) {
  var button = itemButton[i];
  button.addEventListener('click', addmenu);

  function addmenu(event) {
    var buttonClicked = event.target;
    //button after clicked
    buttonClicked.innerText = 'Di Keranjang';
    buttonClicked.classList.add('clicked');
    buttonClicked.removeEventListener('click', addmenu);
    //item in menu
    let menu = document.querySelector('.menu-content');
    var cardIn = document.createElement('div');
    cardIn.classList.add('card-item');
    menu.appendChild(cardIn);
    cardIn.style.borderBottom = "1px solid #999";
    //image-div
    var itemImage = document.createElement('img');
    cardIn.appendChild(itemImage);
    itemImage.src = buttonClicked.getAttribute('data-image');
    //namebox
    var nameContainer = document.createElement('div');
    nameContainer.classList.add('item-desc');
    cardIn.appendChild(nameContainer);

    //name
    var name = document.createElement('h3');
    nameContainer.appendChild(name);
    name.style.fontSize = "20px";
    name.innerText = buttonClicked.getAttribute('data-name');

    //quantity
    var quantity = document.createElement('div');
    quantity.classList.add('item-count');
    cardIn.appendChild(quantity);

    //min, input, plus
    var minBtn = document.createElement('button');
    minBtn.classList.add('min-btn');
    minBtn.innerText = "-"
    quantity.appendChild(minBtn);

    var itemCount = document.createElement('span');
    itemCount.innerText = "1"
    itemCount.classList.add('item-value');
    quantity.appendChild(itemCount);

    var plusBtn = document.createElement('button');
    plusBtn.classList.add('plus-btn');
    plusBtn.innerText = "+"
    quantity.appendChild(plusBtn);

    //price
    var price = document.createElement('p');
    var priceItem = buttonClicked.getAttribute('data-price');
    price.innerText = priceItem;
    console.log(priceItem);
    price.classList.add('price')
    nameContainer.appendChild(price);
    price.style.fontSize = "18px";
    //total
    var priceTotal = document.querySelector('.total');
    priceTotal.innerText = buttonClicked.getAttribute('data-price');
    
    function harga() {
      var cards = document.getElementsByClassName('card-item');
      var quantity = document.getElementsByClassName('.item-value');
      var priceValue = price.innerText;
      
      console.log(cards);

      //var priceTotalValue = quantity * priceValue;
      //priceTotal.innerText = priceTotalValue.toFixed(3);
    }

    var valueJumlah;
    
    plusBtn.addEventListener("click",function(){
      valueJumlah = itemCount.innerText;
      valueJumlah++;
      itemCount.innerText = valueJumlah;
      harga();
      
      if (valueJumlah > 0) {
        minBtn.removeAttribute("disabled");
      }
    });
    
    minBtn.addEventListener("click",function(){
      valueJumlah = itemCount.innerText;
      valueJumlah--;
      itemCount.innerText = valueJumlah;
      harga();
      
      if(valueJumlah == 0 || valueJumlah < 0){
        minBtn.setAttribute("disabled","disabled");
        menu.removeChild(cardIn);
        buttonClicked.innerText = 'Tambah';
        buttonClicked.classList.remove('clicked');
        buttonClicked.addEventListener('click', addmenu);
      }
    })

    
    
  }
}*/

/*var minus = document.querySelector('.min-btn');
let plus = document.querySelector('.plus-btn');
var jumlah = document.querySelector('.item-value');
*/