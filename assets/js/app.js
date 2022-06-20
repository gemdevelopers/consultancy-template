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
            600:{
               items:1
            },
            1000:{
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
               items:1
            },
            600:{
               items:3
            },
            1000:{
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
            600:{
               items:2
            },
            1000:{
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
            600:{
               items:2
            },
            1000:{
               items:3
            }
         }
      });         
      }
   };
   $(function () {
     gemDev.init();
  });
})(jQuery);