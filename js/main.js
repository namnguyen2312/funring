$(document).ready(function () {
	
	
    var cssLink = $("<link rel='stylesheet' type='text/css' href='css/custom.css'>");
    var cssLink1 = $("<link rel='stylesheet' type='text/css' href='css/nam.css'>");
 	var vp = $('<meta name="viewport" content="width=device-width, initial-scale=1">');
    $("head").append(cssLink);
    $("head").append(cssLink1);
    $("head").append(vp);

	//xóa dấu + nếu ko có list con
	$('.wrapper-menu .block').each(function(i){
		if($(this).children('div').length == 0)
		{			
			$(this).find('h2 a').remove();
		}
	});



	$('.menu_lv2').hide();
	$('.wrapper-menu .block .block-body').hide();

	//Dấu + lớn cấp 1
	$('.wrapper-menu > .block > h2 > a.show-cat').click(function(e){
		$('.wrapper-menu .block .block-body').slideUp();
		if (!$(this).hasClass('active')){				  
		  $(this).parent().next().slideToggle();
		  $('.wrapper-menu > .block > h2 > a.show-cat').removeClass('active');
		  $(this).addClass('active');		 
		}
		else if ($(this).hasClass('active')) {
			$(this).removeClass('active');			
		}
		return false;
  	});

	//Dấu + cấp2
  	$('.menu > li > a.show-cat').click(function(){
		$('.menu li ul').slideUp();
		if (!$(this).hasClass('active')){				  
		  $(this).next().slideToggle();
		  $('.menu li a.show-cat').removeClass('active');
		  $(this).addClass('active');
		}
		else if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		}
		return false;
  	});

  	//Điều chỉnh độ cao của đường line footer
  // 	$(window).resize(function() {
  // 		var max = 0;
		// $('.line-ft').each(function(){
		// 	if( $(this).height() > max ) {
		// 		max = $(this).height();
		// 	}
		// });
		// $('.line-ft').height(max);
  // 	}); 	

	
	// Display Responsive Menu

	$('#menu-icon').click(function() {
		/* Act on the event */
		$('.sidebar').addClass('show-menu');
		$('body').append('<div id="lean_overlay1" style="display: block; opacity: 0.6;"></div>');
		return false;

	});
	$('body').click(function() {
		if ($('.sidebar').hasClass('show-menu')){
			$('body').find('.sidebar').removeClass('show-menu');
			$('body').find('#lean_overlay1').remove();
		}
	});

	//slider
	if($('.fn-slide').length)
	{
		$('.fn-slide').slick({
			lazyLoad: "ondemand",
	        dots: true,
	        dotsClass: "slick-dots slide-direction",
	        customPaging: function(b, a) {
	            return "<span></span>"
	        },
	        prevArrow: "#feature .fn-prev",
	        nextArrow: "#feature .fn-next",
	        infinite: true,
	        speed: 1000,
	        fade: true,
	        slide: "div",
	        cssEase: "linear",
	        autoplay: true,
	        autoplaySpeed: 3000,
	        adaptiveHeight: true
		});
	}
	

	//expand lyric
	$('.fn-expand').click(function(e) {
		e.preventDefault();
	    $('.fn-lyrics').find('p.fn-wlyrics').toggleClass('small big');
	    $(this).text($(this).text() == "Rút gọn" ? "Xem toàn bộ": "Rút gọn");
	});

	$('.mt20 div a:first-child').addClass('button-style-default');

	$('.mt20 div a').on('click', function(){
	    $('a').removeClass('button-style-click');
	    $('a').removeClass('button-style-default');
	    $(this).addClass('button-style-click');
	});

	$('.album-right-wrap a:last-child').addClass('button-style-default1');

	$('.album-right-wrap a').on('click', function(){
	    $('a').removeClass('button-style-click1');
	    $('a').removeClass('button-style-default1');
	    $(this).addClass('button-style-click1');
	});

   

	//song headphone
	var max = 0;
	$('.song-headphone').each(function(){
		if( $(this).width() > max ) {
			max = $(this).width();
		}
	});
	$('.song-headphone').width(max);

	//ticker
	$('#hot-news-ul').webTicker();

    //popup
    $(".popup-songgift").leanModal({overlay : 0.6, closeButton: ".modal_close" });
    $(".popup-songdownload").leanModal({overlay : 0.6, closeButton: ".modal_close" });

	function addClass_custom()
	{
		width = window.innerWidth;
		//Điều chỉnh hot news bar
        if(width <= 980)
        {        	
        	$('.hot-news-bar').children().children('.col-9').addClass('col-12');
        }
        else
        {
        	$('.hot-news-bar').children().children('.col-9').removeClass('col-12');	
        }

        //copy nhạc chờ
        if($('#div-copy').length)
        {
        	if(width <= 690)
	        {        	
	        	$('#div-copy').children('.col-3').remove();
	        	$('#div-copy').children('.col-6').addClass('col-12');
	        }
	        else
	        {
	        	if(!$('#div-copy .col-3').length)
	        	{
	        		$('#div-copy .col-6').before('<div class="col-3"></div>');
	        	}
	        	$('#div-copy').children('.col-6').removeClass('col-12');
	        }
        }
	}
	addClass_custom();
	$( window ).resize(function() {
		addClass_custom();
	});

	var maxheight = 0;	
	$('.menu-songs > .subcol > .subinner_item > ul').each(function(){		
		if( $(this).height() > maxheight ) {
			maxheight = $(this).height();		
		}
	});
	$('.menu-songs > .subcol > .subinner_item > ul').height(maxheight);


	if($('#sugResult').length)
	{
		zmp3Suggest.init();	
	}
	
});

function onBlurBind(b, a) {
    $(document).click(function(c) {
        var d = $(b).offset();
        if (c.pageY < d.top || c.pageY > d.top + $(b).height() || c.pageX < d.left || c.pageX > d.left + $(b).width()) {
            a(c)
        }
    })
}
String.prototype.stripViet = function() {
    var replaceChr = String.prototype.stripViet.arguments[0];
    var stripped_str = this;
    var viet = [];
    i = 0;
    viet[i++] = new Array("a", "/á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/g");
    viet[i++] = new Array("o", "/ó|ò|ỏ|õ|ọ|ơ|ớ|ờ|ở|ỡ|ợ|ô|ố|ồ|ổ|ỗ|ộ/g");
    viet[i++] = new Array("e", "/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/g");
    viet[i++] = new Array("u", "/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/g");
    viet[i++] = new Array("i", "/í|ì|ỉ|ĩ|ị/g");
    viet[i++] = new Array("y", "/ý|ỳ|ỷ|ỹ|ỵ/g");
    viet[i++] = new Array("d", "/đ/g");
    for (var i = 0; i < viet.length; i++) {
        stripped_str = stripped_str.replace(eval(viet[i][1]), viet[i][0]);
        stripped_str = stripped_str.replace(eval(viet[i][1].toUpperCase().replace("G", "g")), viet[i][0].toUpperCase())
    }
    if (replaceChr) {
        return stripped_str.replace(/[\W]|_/g, replaceChr).replace(/\s/g, replaceChr).replace(/^\-+|\-+$/g, replaceChr)
    } else {
        return stripped_str
    }
};

var zmp3UI = {
    init: function() {
        
    },    
    highlight: function() {
        var d = $(".fn-highlight");
        if (d.length) {
            for (var b = 0; b < d.length; b++) {
                var c = $(d[b]);
                if (c.data("highlight")) {
                    var e = c.html().split("/");
                    var a = this.matchMaker(e.length > 1 ? e[1].trim() : e[0], c.data("highlight").stripViet().toLowerCase());
                    if (a) {
                        c.html((e.length > 1 ? e[0] + "/ " : "") + a)
                    }
                }
            }
            d.removeClass("fn-highlight")
        }
    },
    matchMaker: function(c, b) {
        var a = c.stripViet().toLowerCase();
        var d = a.indexOf(b);
        if (d > -1) {
            return c.substr(0, d) + '<strong class="mark">' + c.substr(d, b.length) + "</strong>" + c.substr(d + b.length, c.length)
        }
        return false
    }
};

var zmp3Suggest = {
    lastQ: "",
    tplArtist: null,
    lastcall: 0,
    tplAlbum: null,
    tplSong: null,
    tplVideo: null,
    init: function() {
        var c = $("#sug");
        var d = $(".fn-result", c);
        $('input[name="q"]').focus();
        
        var b = new RegExp("q=(.*?)(&|$)");
        var a = b.exec(location.search);
        if (a) {
            $("input[name=q]", c).val(decodeURIComponent(decodeURI(a[1]).replace(new RegExp("\\+", "g"), " ")))
        }
        tplArtist = document.getElementById("tplSugArtist").cloneNode(true);
        tplAlbum = document.getElementById("tplSugAlbum").cloneNode(true);
        tplSong = document.getElementById("tplSugSong").cloneNode(true);
        tplVideo = document.getElementById("tplSugVideo").cloneNode(true);
        d.mCustomScrollbar({
            scrollInertia: 0,
            scrollbarPosition: "outside",
            autoHideScrollbar: true,
            autoExpandScrollbar: true,
            keyboard: {
                enable: true
            },
            mouseWheel: {
                scrollAmount: 100,
                preventDefault: true
            }
        });
        this.clearResult();

        onBlurBind('input[name="q"]', function() {
            d.addClass("none")
        });
        $("form", c).submit(function() {
            var e = $(".fn-list .fn-item.active", d);
            if (e.length > 0) {
                location.href = $(".fn-link", e).attr("href");
                return false
            }
            if ($.trim($('input[name="q"]').val()).length < 1) {
                return false
            }
        });
        $('input[name="q"]', c).keydown(function(j) {
            if (j.keyCode === 13) {
                var h = $(".fn-list .fn-item.active", d);
                if (h.length > 0) {
                    location.href = $(".fn-link", h).attr("href");
                    return false
                }
            } else {
                var g = $(".fn-list .fn-item", d);
                if ((j.keyCode === 38 || j.keyCode === 40)) {
                    if (g.length > 0) {
                        var k = -1;
                        for (var f = 0; f < g.length; f++) {
                            if ($(g[f]).hasClass("active")) {
                                k = f;
                                break
                            }
                        }
                        g.removeClass("active");
                        switch (j.keyCode) {
                            case 38:
                                (k > 0) ? $(g[k - 1]).addClass("active"): $(g[g.length - 1]).addClass("active");
                                break;
                            case 40:
                                (k < g.length - 1) ? $(g[k + 1]).addClass("active"): $(g[0]).addClass("active");
                                break
                        }
                    }
                    return false
                }
            }
        }).keyup(function(f) {
            if (f.keyCode > 40) {
                zmp3Suggest.suggest($(this))
            }
        }).focus(function() {
            zmp3Suggest.suggest($(this))
        }).click(function() {
            zmp3Suggest.suggest($(this))
        });
        d.height($(window).height() - 42)
    },
    clearResult: function() {
        $("#sugResult").data("current", -1);
        $("#tplSugArtist").remove();
        $("#tplSugAlbum").remove();
        $("#tplSugSong").remove();
        $("#tplSugVideo").remove()
    },
    resize: function() {
        if ($("#sugResult ul").first().height() <= $("#sugResult").height()) {
            $("#sugResult").height($("#sugResult ul").first().height())
        } else {
            $("#sugResult").height($(window).height() - 42)
        }
    },
    suggest: function(b) {
        if (b.val().length > 1) {
            var a = $.now();
            if (this.lastQ !== b.val().trim() && this.lastcall + 50 < a) {
                zmp3Suggest.lastQ = b.val().trim();
                zmp3Suggest.lastcall = a;
                $.getJSON("data/search.json", {
                    query: zmp3Suggest.lastQ
                }, function(c) {
                    if (zmp3Suggest.lastQ === b.val().trim()) {
                        $("#sugSong .fn-list").empty();
                        $("#sugAlbum .fn-list").empty();
                        $("#sugVideo .fn-list").empty();
                        $("#sugArtist .fn-list").empty();
                        if (c.data) {
                            $(tplArtist).data("highlight", b.val());
                            $(tplSong).data("highlight", b.val());
                            $(tplAlbum).data("highlight", b.val());
                            $(tplVideo).data("highlight", b.val());
                            if (c.data[0].artist.length > 0) {
                                for (x in c.data[0].artist) {
                                    var d = c.data[0].artist[x];
                                    var e = tplArtist.cloneNode(true);
                                    d.name = d.name.replace("(S)", "").trim();
                                    $(".fn-name", e).addClass("fn-highlight").data("highlight", b.val()).html(d.name);
                                    $("a.fn-link", e).attr("title", d.name).attr("href", "/nghe-si/" + d.name.stripViet("-"));
                                    $("img.fn-thumb", e).attr("src", "http://image.mp3.zdn.vn/thumb/94_94/" + d.thumb).attr("alt", d.name);
                                    $(e).removeClass("none");
                                    $("#sugArtist .fn-list").append(e)
                                }
                                $("#sugArtist").removeClass("none")
                            } else {
                                $("#sugArtist").addClass("none")
                            }
                            if (c.data[1].album.length > 0) {
                                for (x in c.data[1].album) {
                                    var d = c.data[1].album[x];
                                    var e = tplAlbum.cloneNode(true);
                                    $(".fn-name", e).addClass("fn-highlight").data("highlight", b.val()).html(d.name);
                                    $(".fn-artist", e).addClass("fn-highlight").data("highlight", b.val()).html(d.artist);
                                    $("a.fn-link", e).attr("title", d.name + " - " + d.artist).attr("href", "/album/" + d.name.stripViet("-") + "-" + d.artist.stripViet("-") + "/" + d.id + ".html");
                                    $("img.fn-thumb", e).attr("src", "http://image.mp3.zdn.vn/thumb/94_94/" + d.thumb).attr("alt", d.name);
                                    $(e).removeClass("none");
                                    $("#sugAlbum .fn-list").append(e)
                                }
                                $("#sugAlbum").removeClass("none")
                            } else {
                                $("#sugAlbum").addClass("none")
                            }
                            if (c.data[2].video.length > 0) {
                                for (x in c.data[2].video) {
                                    var d = c.data[2].video[x];
                                    var e = tplVideo.cloneNode(true);
                                    $(".fn-name", e).addClass("fn-highlight").data("highlight", b.val()).html(d.name);
                                    $(".fn-artist", e).addClass("fn-highlight").data("highlight", b.val()).html(d.artist);
                                    $("a.fn-link", e).attr("title", d.name + " - " + d.artist).attr("href", "/video-clip/" + d.name.stripViet("-") + "-" + d.artist.stripViet("-") + "/" + d.id + ".html");
                                    $("img.fn-thumb", e).attr("src", "http://image.mp3.zdn.vn/thumb/128_72/" + d.thumb).attr("alt", d.name);
                                    $(e).removeClass("none");
                                    $("#sugVideo .fn-list").append(e)
                                }
                                $("#sugVideo").removeClass("none")
                            } else {
                                $("#sugVideo").addClass("none")
                            }
                            if (c.data[3].song.length > 0) {
                                for (x in c.data[3].song) {
                                    var d = c.data[3].song[x];
                                    var e = tplSong.cloneNode(true);
                                    $(".fn-name", e).addClass("fn-highlight").data("highlight", b.val()).html(d.name);
                                    $(".fn-artist", e).addClass("fn-highlight").data("highlight", b.val()).html(d.artist);
                                    $("a.fn-link", e).attr("title", d.name + " - " + d.artist).attr("href", "/bai-hat/" + d.name.stripViet("-") + "-" + d.artist.stripViet("-") + "/" + d.id + ".html");
                                    $(e).removeClass("none");
                                    $("#sugSong .fn-list").append(e)
                                }
                                $("#sugSong").removeClass("none")
                            } else {
                                $("#sugSong").addClass("none")
                            }
                            $("#sugResult").removeClass("none");
                            zmp3UI.highlight()
                        }
                    }
                    zmp3Suggest.resize()
                })
            } else {
                $("#sugResult").removeClass("none");
                zmp3Suggest.resize()
            }
        } else {
            this.clearResult()
        }
    }
};
