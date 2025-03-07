$(function () {
  $(".fab").click(function () {
      $(".menu").toggle()
      
  })
  
})


var swiper = new Swiper(".mySwiper", {
    // TODO : 여기 옵션 넣기
    autoplay: {delay: 2000}
});




$(function () {
    $('.product-box').isotope({
        // options
        itemSelector: '.product',
        layoutMode: 'fitRows',

    });
    $(".product-list li").click(function () {
      $('.product-box').isotope({
        filter:$(this).attr("data-filter")

    });
    })

    
    
  })

 