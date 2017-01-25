$(function() {
    $(window).bind("load resize", function() {
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.sidebar-collapse').addClass('collapse')
        } else {
            $('div.sidebar-collapse').removeClass('collapse')
        }
    });

    $(".jumpto").click(function() {
				//alert("hey");
				$(".wrapper").hide();
				//$(".wrapper div").css('opacity',0).css('display','none');
				//alert($(this).attr('id'));
				$(".wrapper#content"+$(this).attr('id')).show();
				//$(".wrapper div#content"+$(this).css('opacity',1)).css('display','block');
			});
});
