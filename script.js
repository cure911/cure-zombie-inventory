$(document).ready(function () {
    $('.navbar-items').click(function(){
        $('.navbar-items').removeClass('active');
        $(this).removeClass('null')
        $(this).addClass('active')
        $('.genel-inb').css('display', 'none')
        $(`.${$(this).attr('id')}`).css('display', 'block')
    })

    $("#searchitems-marketplace").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(this).parent('div').parent('div').parent('div').children('.inventory-content-market-bag-items-list').children('div').children('.inventory-content-market-bag-items-row').filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $('.leave-team').click(function(){
        $('.leave-inside').css('display', 'flex');
        
    })

    $('.leave-refuse').click(function(){
        $('.leave-inside').css('display', 'none');
    })

    $('.leave-accept').click(function(){
        $('.leave-inside').css('display', 'none');
    })

    $('.boost-team').click(function(){
        $('.crew-boost').css('display', 'flex');
    })

    $('.boost-exit').click(function(){
        $('.crew-boost').css('display', 'none');
    })
    $('.inventory-content-crew-custom-boost-button').click(function(){
        $('.crew-boost').css('display', 'none');
    })

    $('.sans-cat').click(function(){
        $('.sans-cat').removeClass('active');
        $(this).addClass('active');

        var check = $(this).hasClass('sans-case');
        if(check == true){
            $('.boxlar').show();
            $('.keyler').hide();
        } else{
            $('.keyler').show();
            $('.boxlar').hide();
        }
    })

    $('.dukkan-button').click(function(){
        $('.dukkan-button').removeClass('active');
        $(this).addClass('active');
        
        var attr = $(this).attr('id');

        $('.dukkan-genel').css('display', 'none');
        $(`.${attr}`).css('display', 'flex');
    })

    $('.bp-level').click(function(){
        $('.bp-level').removeClass('bp-level');
        $(this).addClass('.bp-level');

        $('.bp-level-shw').html($(this).text());
    })
    $('.inventory-content-market-bag-items-row-box-buy').click(function(){
        $(this).css('background-color', 'white')
        $(this).css('color', 'black')
        $('.martket-acınca').show();
    })

    $('.ccor-open').click(function(){
        $('.lootbox').hide();
        $('.carksal').show();
    })
    $('.ccor-close').click(function(){
        $('.carksal').hide();
        $('.lootbox').show();
    })

    $('.buy-exit').click(function(){
        $('.market-buy-click').css('display', 'none');
    })

    $('.inventory-content-market-bag-items-offer-teklif-users-right-icon').click(function(){
        $('.market-buy-click').css('display', 'flex');
    })
});