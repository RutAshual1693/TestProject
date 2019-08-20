import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hot-products',
  templateUrl: './hot-products.component.html',
  styleUrls: ['./hot-products.component.css']
})
export class HotProductsComponent implements OnInit {
  arr = [1, 2, 3];
  id="bina1";
  idPF="bina2";
  idPB="bina3";
  idCX="bina4";
  idCY="bina4";
  constructor() { }
  viewDetails(i: number) {
    this.id="viewDetails"+i;
    this.idPF="PF"+i;
    this.idPB="PB"+i;
    this.idCX = "CX" + i;
    this.idCY = "CY" + i;
    $('div.carouselNext, div.carouselPrev').removeClass('visible');
    $('#' + this.id).addClass('flip-10');
    setTimeout(function () {
      $('#' + this.idPF).removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo(80, 1, function () {
        $('#' + this.idPF, '#' + this.idPF+ ' div.shadow').hide();
      });
    }, 50);

    setTimeout(function () {
      $('#' + this.id).removeClass('flip90').addClass('flip190');
      $('#' + this.idPB).show().find('div.shadow').show().fadeTo(90, 0);
      setTimeout(function () {
        $('#' + this.id).removeClass('flip190').addClass('flip180').find('div.shadow').hide();
        setTimeout(function () {
          $('#' + this.id).css('transition', '100ms ease-out');
          $('#' + this.idCX, '#' + this.idCY).addClass('s1');
          setTimeout(function () {
            $('#' + this.idCX, '#' + this.idCY).addClass('s2'); }, 100);
          setTimeout(function () {
            $('#' + this.idCX, '#' + this.idCY).addClass('s3'); }, 200);
          $('div.carouselNext, div.carouselPrev').addClass('visible');
        }, 100);
      }, 100);
    }, 150);
  }
  ngOnInit() {
  
    $(document).ready(function () {

      // Lift card and show stats on Mouseover
      $('.product-card').hover(function () {
        $(this).addClass('animate');
        $('div.carouselNext, div.carouselPrev').addClass('visible');
      }, function () {
        $(this).removeClass('animate');
        $('div.carouselNext, div.carouselPrev').removeClass('visible');
      });

      // Flip card to the back side
      $('.view_details').click(function () {
 
      });

      // Flip card back to the front side
      $('.flip-back').click(function () {

        $('.product-card').removeClass('flip180').addClass('flip190');
        setTimeout(function () {
          $('.product-card').removeClass('flip190').addClass('flip90');

          $('.product-back div.shadow').css('opacity', 0).fadeTo(100, 1, function () {
            $('.product-back, .product-back div.shadow').hide();
            $('.product-front, .product-front div.shadow').show();
          });
        }, 50);

        setTimeout(function () {
          $('.product-card').removeClass('flip90').addClass('flip-10');
          $('.product-front div.shadow').show().fadeTo(100, 0);
          setTimeout(function () {
            $('.product-front div.shadow').hide();
            $('.product-card').removeClass('flip-10').css('transition', '100ms ease-out');
            $('.cx, .cy').removeClass('s1 s2 s3');
          }, 100);
        }, 150);

      });


      /* ----  Image Gallery Carousel   ---- */

      var carousel = $('.carousel ul');
      var carouselSlideWidth = 335;
      var carouselWidth = 0;
      var isAnimating = false;

      // building the width of the casousel
      $('.carousel li').each(function () {
        carouselWidth += carouselSlideWidth;
      });
      $(carousel).css('width', carouselWidth);

      // Load Next Image
      $('div.carouselNext').on('click', function () {
        var currentLeft = Math.abs(parseInt($(carousel).css("left")));
        var newLeft = currentLeft + carouselSlideWidth;
        if (newLeft == carouselWidth || isAnimating === true) { return; }
        $('.carousel ul').css({
          'left': "-" + newLeft + "px",
          "transition": "300ms ease-out"
        });
        isAnimating = true;
        setTimeout(function () { isAnimating = false; }, 300);
      });

      // Load Previous Image
      $('div.carouselPrev').on('click', function () {
        var currentLeft = Math.abs(parseInt($(carousel).css("left")));
        var newLeft = currentLeft - carouselSlideWidth;
        if (newLeft < 0 || isAnimating === true) { return; }
        $('.carousel ul').css({
          'left': "-" + newLeft + "px",
          "transition": "300ms ease-out"
        });
        isAnimating = true;
        setTimeout(function () { isAnimating = false; }, 300);
      });
    });







    $(window).scroll(function () {
      $(".slideanim").each(function () {
        var pos = $("#slide3").offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $("#slide3").addClass("slide");
        }
        else {
          $("#slide3").removeClass("slide");
        }
      });
    });
  }

}
