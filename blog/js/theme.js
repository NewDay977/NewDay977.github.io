$(document).ready(function(){$(".header__menu-item a").each(function(){window.location.href==this.href&&$(this).parent().addClass("active")}),$("a").click(function(){var t=$(this).attr("href");if("#"==t)return $("html, body").animate({scrollTop:0},600),!1;var a=$(t).offset().top;return $("html, body").animate({scrollTop:a},600),!1})});