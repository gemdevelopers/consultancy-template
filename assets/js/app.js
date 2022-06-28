/**
 * Theme main script.
 *
 * Contains all theme custom features.
 */
 var gemDev;
 ( function($) {
   gemDev = {
      init: function () {
         this.owlCarouselBasic();       
         this.owlCarouselBrand();       
         this.owlCarouselTestimonial();
         this.owlCarouselBlog();       
         this.search_button_overlay();       
      },
      ie: function () {
         try {
            if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
               $('body').addClass('ie-user');
               return true;
            }
         } catch (err) {
            console.log(err);
         }
         return false;
      },
      owlCarouselBasic: function () {
         $('.service-carousel').owlCarousel({
            loop:true,
            margin:10,
            autoplay: true,
            autoplayTimeout: 1000,
            nav:false,
            dots: false,
            responsive:{
              0:{
               items:1
            },
            758: {
               items:2
            },
            992:{
               items:3
            },
            1200:{
               items:4
            }
         }
      });
      },
      owlCarouselBrand: function () {
         $('.brand-carousel').owlCarousel({
            loop:true,
            margin:10,
            autoplay: true,
            nav:false,
            dots: false,
            responsive:{
              0:{
               items:2
            },
            768: {
               items:3
            },
            992:{
               items:3
            },
            1200:{
               items:5
            }
         }
      });         
      },
      owlCarouselTestimonial: function () {
         $('.testimonial-carousel').owlCarousel({
           loop:true,
           margin:10,
           nav:true,
           autoplay: false,
           dots: false,
           responsive:{
             0:{
               items:1
            },
            768: {
               items:2
            },
            992:{
               items:2
            },
            1200:{
               items:3
            }
         }
      });         
      },
      owlCarouselBlog: function () {
         $('.blog-carousel').owlCarousel({
           loop:true,
           margin:10,
           nav:true,
           autoplay: true,
           dots: false,
           responsive:{
             0:{
               items:1
            },
            768:{
               items:2
            },
            992:{
               items:2
            },
            1200:{
               items:3
            }
         }
      });         
      },
      search_button_overlay: function () {
         jQuery('#search-btn').click(function(e) {
            jQuery('#my-overlay').css('display','inline-block');
         });
         jQuery('.close-btn').click(function(e) {
            jQuery('#my-overlay').css('display','none');
         });
      }
   };
   $(function () {
     gemDev.init();
  });
})(jQuery);