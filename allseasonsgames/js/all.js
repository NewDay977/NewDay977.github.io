$(document).ready(function(){$(".sidebar__item_has-child .sidebar__caption").click(function(){$(this).closest(".sidebar__item_has-child").find(".sidebar__subitem").slideToggle("fast")})});
$(document).ready(function(){$(".gallery__photo").click(function(){var o=$(this).find("img").attr("src");$(".gallery__popup .popup__photo").find("img").attr("src",o),$(".gallery__popup").addClass("active"),$("body").addClass("ov-hide")}),$(".popup__close").click(function(){$("body").removeClass("ov-hide"),$(".gallery__popup").removeClass("active")})});
$(document).ready(function(){$(".reviews__list").slick({slidesToShow:3,slidesToScroll:3,prevArrow:'<i class="fas fa-chevron-left arrow-left"></i>',nextArrow:'<i class="fas fa-chevron-right arrow-right"></i>',responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:776,settings:{slidesToShow:1,slidesToScroll:1}}]})});
function readCookie(e){for(var t=e+"=",r=document.cookie.split(";"),s=0;s<r.length;s++){for(var o=r[s];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}$(document).ready(function(){null===readCookie("theme")?document.cookie="theme=light;expires=1":"dark"===readCookie("theme")?($(".header__theme-thumb").attr("src","img/sun.png"),$("#theme_styles").attr("href","css/style_dark.css"),$("#checkbox_img").attr("src","img/Checkbox_dark-empty.png"),$("#logo_img").attr("src","img/dark_logo.png"),$(".offer__arrows").attr("src","img/timer_arrow-dark.png")):($(".header__theme-thumb").attr("src","img/moon.png"),$("#theme_styles").attr("href","css/style_light.css")),$(".offer__label").click(function(){var e=$("#checkbox_img");e.toggleClass("active"),"dark"!=readCookie("theme")?e.hasClass("active")?e.attr("src","img/Checkbox.png"):e.attr("src","img/Checkbox_empty.png"):(e.hasClass("active")?e.attr("src","img/Checkbox_dark.png"):e.attr("src","img/Checkbox_dark-empty.png"),$("#logo_img").attr("src","img/dark_logo.png"),$(".offer__arrows").attr("src","img/timer_arrow-dark.png"))}),$(".header__theme-toggler").click(function(){"light"===readCookie("theme")?(document.cookie="theme=dark;expires=1",$(this).find("img").attr("src","img/sun.png"),$("#theme_styles").attr("href","css/style_dark.css")):(document.cookie="theme=light;expires=1",$(this).find("img").attr("src","img/moon.png"),$("#theme_styles").attr("href","css/style_light.css")),location.reload()})});