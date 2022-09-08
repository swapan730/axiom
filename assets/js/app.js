! function (e) {
	"use strict";

	/***************************************************
	****************************************************
	// Core Script Active Js
	****************************************************
	***************************************************/
	function a() {
		e(".slimscroll").slimscroll({
			height: "auto",
			position: "right",
			size: "3px",
			color: "#97A3B9",
			opacity: 1,
			wheelStep: 5,
			touchScrollStep: 50
		})
	}
	a(), e("#main_menu_side_nav").metisMenu(), e(".button-menu-mobile").on("click", function (t) {
		t.preventDefault(), e("body").toggleClass("enlarge-menu"), a()
	}), e(window).width() < 1025 ? e("body").addClass("enlarge-menu") : 1 != e("body").data("keep-enlarged") && e("body").removeClass("enlarge-menu"), e(".search-btn").on("click", function () {
		var t = e(this).data("target");
		t && e(t).toggleClass("open")
	}), e(".main-icon-menu .nav-link").on("click", function (t) {
		t.preventDefault(), e(this).addClass("active"), e(this).siblings().removeClass("active"), e(".main-menu-inner").addClass("active");
		var a = e(this).attr("href");
		e(a).addClass("active"), e(a).siblings().removeClass("active")
	}), e.fn.tooltip && e('[data-toggle="tooltip"]').tooltip(), e('[data-toggle="tooltip-custom"]').tooltip({
		template: '<div class="tooltip tooltip-custom" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
	}), e(".left-sidenav a").each(function () {
		var t = window.location.href.split(/[?#]/)[0];
		if (this.href == t) {
			e(this).addClass("active"), e(this).parent().parent().addClass("in"), e(this).parent().parent().addClass("mm-show"), e(this).parent().parent().prev().addClass("active"), e(this).parent().parent().parent().addClass("active"), e(this).parent().parent().parent().addClass("mm-active"), e(this).parent().parent().parent().parent().addClass("in"), e(this).parent().parent().parent().parent().parent().addClass("active"), e(this).parent().parent().parent().parent().parent().parent().addClass("active");
			var a = e(this).closest(".main-icon-menu-pane").attr("id");
			e("a[href='#" + a + "']").addClass("active")
		}
	})

	/***************************************************
	****************************************************
	// Father Icon Active Js
	****************************************************
	***************************************************/
	$(function () {
		feather.replace()
	});

	/***************************************************
	****************************************************
	// Slimscroll Active Code
	****************************************************
	************************************************
	if ($.fn.slimscroll) {
		$(' #contentScroll, #chatContentRightSidebarScroll').slimscroll({
			height: '76.9vh',
			size: '2px',
			position: 'right',
			color: '#1b2835',
			alwaysVisible: false,
			distance: '0px',
			railVisible: true,
			wheelStep: 10,
			allowPageScroll: false,
		});
	}

	if ($.fn.slimscroll) {
		$('#contentScrollFull, #contentLeftSidebarFullScroll').slimscroll({
			height: '92vh',
			size: '2px',
			position: 'right',
			color: '#1b2835',
			alwaysVisible: false,
			distance: '0px',
			railVisible: true,
			wheelStep: 10,
			allowPageScroll: false,
		});
	}

	if ($.fn.slimscroll) {
		$('#contentLeftSidebarScroll, #forumLeftSidebarFullScroll').slimscroll({
			height: '84vh',
			size: '2px',
			position: 'right',
			color: '#1b2835',
			alwaysVisible: false,
			distance: '0px',
			railVisible: true,
			wheelStep: 10,
			allowPageScroll: false,
		});
	}
	***/

}(jQuery);