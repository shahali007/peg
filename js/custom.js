/* ---------------------
	CUSTOM JS DOCUMENT 
--------------------- */
var appMaster = {
	/* ---------------------
		Page Loader 
	--------------------- */
	pageLoader: function(){
		$(".loader-item").delay(700).fadeOut();
		$("#pageloader").delay(800).fadeOut("slow");
	},
	/* ---------------------
		Navigation Menu 
	--------------------- */
	navBar: function(){	
		/* ---------------------
			Sticky 
		--------------------- */
		 if ($('#sticker').length) {
			$("#sticker").sticky({topSpacing:0});
		 }
		 
		$(".transparent-header header .header-search").click(function () {
 
		  $('.sticky-wrapper').addClass('search-open');
	 
		});
		$(".transparent-header header .close").click(function () {
 
		  $('.sticky-wrapper').removeClass('search-open');
	 
		});
		/* --------------------------
		Home Background Super Slider 
		-------------------------- */
		 if ($('#slides').length) {
			$('#slides').superslides({
			});
		 }
		 /* --------------------------
		Tooltop
		-------------------------- */
		$('[data-toggle="tooltip"]').tooltip()
	},
	
	/* --------------------------
	HeaderSearch, Phone & Social Icons Toggle
	-------------------------- */
	toggleNav: function(){
		
		/* header Contact (Phone) */
	   $( ".header-contact" ).click(function() {
		$( ".header-contact-content" ).show( "fast", function() {});
		
		$(".close").click(function() {
		  $(".header-contact-content").hide("fast", function() {});
		})
	   });
	   
	   
	   /* header Search (Search Form) */
	   $( ".header-search" ).click(function() {
		$( ".header-search-content" ).show( "fast", function() {});
		
		$(".close").click(function() {
		  $(".header-search-content").hide("fast", function() {});
		})
	   });
	   
	   
		/* header Share (Search Form) */
	   $( ".header-share" ).click(function() {
		$( ".header-share-content" ).show( "fast", function() {});
		
		$(".close").click(function() {
		  $(".header-share-content").hide("fast", function() {});
		})
	   });
	},
	/* ---------------------	
		Owl Slider
	/* --------------------- */
	owlCarousel: function(){	
		(function($) {
			"use strict";
			if ($('.owl-carousel').length) {		    
				  $(".owl-carousel").each(function (index) {
					var effect_mode = $(this).data('effect');
					var autoplay = $(this).data('autoplay');
					var navigation = $(this).data('navigation');
					var pagination = $(this).data('pagination');
					var singleitem = $(this).data('singleitem');
					var items = $(this).data('items');
					var margin = $(this).data('margin');
					var itemMobile = $(this).data('itemmobile');
					$(this).owlCarousel({
						transitionStyle: effect_mode,
						autoplay: autoplay,
						autoPlay: true,
						navigation : navigation,
						pagination : pagination, 
						singleItem : singleitem,
						items : items,
						navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],						
						itemsDesktop: [1250,3],
						itemsDesktopSmall: [991,3],
						itemsMobile: itemMobile,
						margin:margin,
					});
				});
			}  
		 })(jQuery);
	},
	/* ---------------------	
		Animation
	/* --------------------- */	
	dataAnimations: function() {
	  $('[data-animation]').each(function() {
			var element = $(this);
			element.addClass('animated');
			element.appear(function() {
				
				var delay = ( element.data('delay') ? element.data('delay') : 1 );
				if( delay > 1 ) element.css('animation-delay', delay + 'ms');				
				element.addClass( element.data('animation') );
				setTimeout(function() {
					element.addClass('visible');
				}, delay);
				
			});
	  });
	},
	/* ---------------------	
		Owl Slider
	/* --------------------- */
	progressBar: function(){		
		if ($('.progress-bar').length) {		
		 $('.progress-bar').each(function() {
			$(this).appear(function(){
			 var datavl = $(this).attr('data-percentage');
			 $(this).animate({ "width" : datavl + "%"}, '1200');
			});
		  });
		}
	},
	/* ---------------------	
		Background Image Attribute
	/* --------------------- */
	bgImage: function(){		
		var pageSection = $(".image-bg, .parallax-bg");
		pageSection.each(function(indx){
			if ($(this).attr("data-background")){
				$(this).css("background-image", "url(" + $(this).data("background") + ")");
			}
		});
	},
	/* ---------------------	
		Fun Factor / Counter
	/* --------------------- */
	funFactor: function(){	
		(function($){			
			$(".count-number").appear(function(){
				$(this).each(function(){
					datacount = $(this).attr('data-count');
					$(this).find('.counter').delay(6000).countTo({
						from: 10,
						to: datacount,
						speed: 3000,
						refreshInterval: 50,
					});
				});
			});
		})(jQuery);
	},
	/* ---------------------	
		Parallax BG
	/* --------------------- */
	parallaxBg: function(){	
		if($('.image-bg').length != 0 && !navigator.userAgent.match(/iPad|iPhone|Android/i)){
			$(".parallax-1").parallax("50%", 0.1);
            $(".parallax-2").parallax("50%", 0.2);
            $(".parallax-3").parallax("50%", 0.3);
            $(".parallax-4").parallax("50%", 0.4);
            $(".parallax-5").parallax("50%", 0.5);
            $(".parallax-6").parallax("50%", 0.6);
            $(".parallax-7").parallax("50%", 0.7);
            $(".parallax-8").parallax("50%", 0.5);
            $(".parallax-9").parallax("50%", 0.5);
            $(".parallax-10").parallax("50%", 0.5);
            $(".parallax-11").parallax("50%", 0.05);
		}
    },
	/* ---------------------	
		Portfolio
	/* --------------------- */
	portfolioFilter: function(){	
	if($('#mix-container').length != 0){
		$('#mix-container').mixItUp();
	}
	},
	/* ---------------------	
		Image Popup
	/* --------------------- */
	prettyPhoto: function(){
		(function($) {
			"use strict";
			if( $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").length != 0 ) { 
			 $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel', theme: "dark_square", social_tools: false, deeplinking: false, autoplay_slideshow: true, slideshow: 4000});
			}
		 })(jQuery);
	},
	/* ---------------------	
		Background Video 
	/* --------------------- */
	backgroundVideo: function(){
        if (typeof $.fn.mb_YTPlayer != 'undefined' && $.isFunction($.fn
            .mb_YTPlayer)) {
            var m = false;
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
                navigator.userAgent)) {
                m = true
            }
            var v = $('.player');
            if (m == false) {
                v.mb_YTPlayer();
                $('#video-controls a')
                    .each(function() {
                        var t = $(this);
                        t.on('click', (function(e) {
                            e.preventDefault();
                            if (t.hasClass(
                                'fa-volume-off')) {
                                t.removeClass(
                                        'fa-volume-off'
                                    )
                                    .addClass(
                                        'fa-volume-down'
                                    );
                                v.unmuteYTPVolume();
                                return false
                            }
                            if (t.hasClass(
                                'fa-volume-down')) {
                                t.removeClass(
                                        'fa-volume-down'
                                    )
                                    .addClass(
                                        'fa-volume-off'
                                    );
                                v.muteYTPVolume();
                                return false
                            }
                            if (t.hasClass('fa-pause')) {
                                t.removeClass(
                                        'fa-pause')
                                    .addClass('fa-play');
                                v.pauseYTP();
                                return false
                            }
                            if (t.hasClass('fa-play')) {
                                t.removeClass('fa-play')
                                    .addClass(
                                        'fa-pause');
                                v.playYTP();
                                return false
                            }
                        }));
                    });
                $('#video-controls')
                    .show();
            }
        }
    },
	/* ---------------------	
		Contact Form  
	/* --------------------- */
	simplecontactForm: function(){	
		if ( $( "#contactform" ).length !== 0 ) {
		$('#contactform').bootstrapValidator({
				container: 'tooltip',
				feedbackIcons: {
					valid: 'fa fa-check',
					warning: 'fa fa-user',
					invalid: 'fa fa-times',
					validating: 'fa fa-refresh'
				},
				fields: { 
					contact_name: {
                        validators: {
                            notEmpty: {
                                message: ''
                            }
                        }
                    },
                    contact_email: {
                        validators: {
                            notEmpty: {
                                message: ''
                            },
                            emailAddress: {
                                message: ''
                            },
							regexp: {
									regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
									message: 'The value is not a valid email address'
							}
                        }
                    },
					contact_phone: {
                        validators: {
                            notEmpty: {
                                message: ''
                            }
                        }
                    },
					contact_subject: {
                        validators: {
                            notEmpty: {
                                message: ''
                            }
                        }
                    },
                    contact_message: {
                        validators: {
                            notEmpty: {
                                message: ''
                            }
                        }
                    },
				}
			})	
			.on('success.form.bv', function(e) {
				e.preventDefault();
				var $form        = $(e.target),
				validator    = $form.data('bootstrapValidator'),
				submitButton = validator.getSubmitButton();
				var form_data = $('#contactform').serialize();
				$.ajax({
						type: "POST",
						dataType: 'json',
						url: "php/contact-form.php",					
						data: form_data,
						success: function(msg){						
							$('.form-message').html(msg.data);
							$('.form-message').show();
							submitButton.removeAttr("disabled");
							resetForm($('#contactform'));						
						},
						error: function(msg){}
				 });
				return false;
			});
		}
		function resetForm($form) {

            $form.find(
                    'input:text, input:password, input, input:file, select, textarea'
                )
                .val('');

            $form.find('input:radio, input:checkbox')
                .removeAttr('checked')
                .removeAttr('selected');
			$form.find('button[type=submit]')
                .attr("disabled", "disabled");

        }
	},
	/* ---------------------	
		Subscribe Form  
	/* --------------------- */
	subscribeForm: function(){	 
		if ( $( "#subscribe_form" ).length !== 0 ) {
		$('#subscribe_form').bootstrapValidator({
				container: 'tooltip',
				feedbackIcons: {
					valid: 'fa fa-check',
					warning: 'fa fa-user',
					invalid: 'fa fa-times',
					validating: 'fa fa-refresh'
				},
				fields: { 
					subscribe_email: {
						validators: {
							notEmpty: {
								message: 'Email is required. Please enter email.'
							},
							emailAddress: {
								message: 'Please enter a correct email address.'
							},
							regexp: {
									regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
									message: 'The value is not a valid email address'
							}
						}
					},	
				}
			})	
			.on('success.form.bv', function(e) {
				e.preventDefault();
				var $form        = $(e.target),
				validator    = $form.data('bootstrapValidator'),
				submitButton = validator.getSubmitButton();
				var form_data = $('#subscribe_form').serialize();
				$.ajax({
						type: "POST",
						dataType: 'json',
						url: "php/subscription.php",					
						data: form_data,
						success: function(msg){						
							$('.form-message1').html(msg.data);
							$('.form-message1').show();
							submitButton.removeAttr("disabled");
							resetForm($('#subscribe_form'));						
						},
						error: function(msg){}
				 });
				return false;
			});
		}
		function resetForm($form) {

            $form.find(
                    'input:text, input:password, input, input:file, select, textarea'
                )
                .val('');

            $form.find('input:radio, input:checkbox')
                .removeAttr('checked')
                .removeAttr('selected');
			$form.find('button[type=submit]')
                .attr("disabled", "disabled");

        }
	},
	/* --------------------------------------------
	 Scroll Navigation
	-------------------------------------------- */	
	navMenu: function(){	 
		jQuery('.scroll').on('click', function(event) {
		var $anchor = jQuery(this);
		var headerH = jQuery('#navigation').outerHeight();
			jQuery('html, body').stop().animate({					
				scrollTop : jQuery($anchor.attr('href')).offset().top  - 60 + "px"
			}, 1200, 'easeInOutExpo');
		event.preventDefault();
	});
		/* Active When Scroll */
		jQuery('body').scrollspy({ 
			target: '#topnav',
			offset: 95
		})
		/* Responsive Auto Close */
		$('.one-page .nav li a.scroll').click(function () {
			 $('.navbar-collapse').removeClass('in');
		});
		/* Smooth Scroll Links */
		jQuery('.page-scroll a')
            .on('click', function(event) {
                var $anchor = jQuery(this);
                jQuery('html, body')
                    .stop()
                    .animate({
                        scrollTop: jQuery($anchor.attr('href'))
                            .offset()
                            .top
                    }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
	},
	/* --------------------------------------------
	 Scroll Navigation
	-------------------------------------------- */	
	/* Text Tying Slider */
	typedSlider: function() {
		jQuery(".element").each(function(){
			var $this = jQuery(this);
			$this.typed({
			strings: $this.attr('data-elements').split(','),
			typeSpeed: 100, 
			backDelay: 3000 
			});
		});
	},
	/* --------------------------------------------
	 Video Slider 
	-------------------------------------------- */	
	videotextSlider: function() {
		$(function() {
			"use strict";
			if ( jQuery( ".video-slider-text" ).length !== 0 ) {
				jQuery('.video-slider-text').easyTicker({
					direction: 'up',  
					speed: 'slow',
					interval: 4000,
					height: 'auto',
					visible: 1,
					mousePause: 0,
				});
			}
		});
	},
	/* --------------------------------------------
	 Day Counter
	-------------------------------------------- */	
	countDown: function() {
	  $('.daycounter').each(function(){
	   var counter_id = $(this).attr('id');
	   var counter_type = $(this).data('counter');
	   var year = $(this).data('year');
	   var month = $(this).data('month');
	   var date = $(this).data('date');
	   var countDay = new Date();
	   countDay = new Date(year, month - 1, date);
	   if( counter_type == "down" ) {
		$("#"+counter_id).countdown({
		 labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs'],
		 labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Min', 'Sec'],
		 until: countDay
		});
	   } else if( counter_type == "up" ) {
		$("#"+counter_id).countdown({
		 labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs'],
		 labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Min', 'Sec'],
		 since: countDay
		});
	   }
	  });
	 },
	 

	 /* --------------------------------------------
	Social Feeds
	-------------------------------------------- */	
	 socialPhotostream: function() {
		 
		if( $(".my-feeds").length != 0 ) {
			/* ================ FLICKR FEED ================ */
			$('.flickr-feed').socialstream({
				socialnetwork: 'flickr',
				limit: 12,
				username: 'google'
			})
			/* ================ PINTEREST FEED ================ */
			$('.pinterest-feed').socialstream({
				socialnetwork: 'pinterest',
				limit: 12,
				username: 'vmrkela'
			})
			/* ================ INSTAGRAM FEED ================ */
			$('.instagram-feed').socialstream({
				socialnetwork: 'instagram',
				limit: 12,
				username: 'google'
			})
			/* ================ INSTAGRAM FOOTER FEED ================ */
			$('.instagram-footer-feed').socialstream({
				socialnetwork: 'instagram',
				limit: 10,
				username: 'google'
			})
			 /* ================ DRIBBBLE FEED ================ */
			$('.dribbble-feed').socialstream({
				socialnetwork: 'dribbble',
				limit: 12,
				username: 'envato'
			})
			/* ================ NEWSFEED ================ */
			$('.instagram-footer-feed').socialstream({
				socialnetwork: 'newsfeed',
				limit: 10,
				username: '#'
			}) 
			/* ================ PICASA FEED ================ */
			$('.picasa-feed').socialstream({
				socialnetwork: 'picasa',
				limit: 12,
				username: 'envato'
			});
			/* ================ YOUTUBE FEED ================ */
			$('.youtube-feed').socialstream({
				socialnetwork: 'youtube',
				limit: 12,
				username: 'Envato'
			})
		
		}
	},
	/* --------------------------------------------
	Price Range Slier 
	-------------------------------------------- */	
	 priceRange: function() {
		if( $(".range").length != 0 ) { 
			$('.range').nstSlider({
				"left_grip_selector": ".leftGrip",
				"right_grip_selector": ".rightGrip",
				"value_bar_selector": ".bar",
				"value_changed_callback": function(cause, leftValue, rightValue) {
					var $container = $(this).parent();
					$container.find('.leftLabel').text(leftValue);
					$container.find('.rightLabel').text(rightValue);
				},
				"highlight": {
					"grip_class": "gripHighlighted",
					"panel_selector": ".highlightPanel"
				}
			});
			$('#highlightRangeButton').click(function() {
				var highlightMin = Math.random() * 20,
					highlightMax = highlightMin + Math.random() * 80;
				$('.nstSlider').nstSlider('highlight_range', highlightMin, highlightMax);
			});
		}
	},
	/*==========Navigation Menu============*/	
	sideNav: function() {	
		$("#navigation-menu").click(function(e) {
			e.preventDefault();		
			$("#wrapper .toggle-menu").animate({ right: '0px' }, "slow");		
			return false;
		});					   
		$("#navigation-close").click(function(e) {
			e.preventDefault();		
			$("#wrapper .toggle-menu").animate({ right: '-50%' }, "slow");		
			return false;
		});	
		
		/* ----------- Menus hide after click -- mobile devices ----------- */	
	
		$('#wrapper .nav li a').click(function () {
			$("#wrapper .toggle-menu").animate({ right: '-50%' }, "slow");		
			return false;
		});
		
		$('.scroll-2').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation-menu').outerHeight();
				$('html, body').stop().animate({					
					scrollTop : $($anchor.attr('href')).offset().top  + 1 + "px"
				}, 1200, 'easeInOutExpo');		
			event.preventDefault();
		});
	},	
	
	// Background image height equal to the browser height.
		fullScreen: function() {
			$('.full-screen').css({ 'height': $(window).height() });
				 $(window).on('resize', function() {
					$('.full-screen').css({ 'height': $(window).height() });
			   });
		},
		
	fancySelect: function() {
		"use strict";
		if ( $( ".fancy-select" ).length !== 0 ) {
			$('.fancy-select').fancySelect();
		}
	},	
		
	/* --------------------------------------------
	Charts
	-------------------------------------------- */	
	allCharts: function() {
		
	jQuery(window).load( function(){
			var lineChartData = {
				labels : ["January","February","March","April","May","June","July"],
				datasets : [
					{
						fillColor : "rgba(220,220,220,.5)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						data : [10,20,40,70,100,90,40]
					},
					{
						fillColor : "rgba(151,187,205,0.5)",
						strokeColor : "rgba(151,187,205,1)",
						pointColor : "rgba(151,187,205,1)",
						pointStrokeColor : "#fff",
						data : [70,30,60,40,50,30,60]
					},
					{
						fillColor : "rgba(255,196,0,0.5)",
						strokeColor : "rgba(151,187,205,1)",
						pointColor : "rgba(151,187,205,1)",
						pointStrokeColor : "#fff",
						data : [10,40,100,70,30,80,50]
					}
				]
			};

			var barChartData = {
				labels : ["January","February","March","April","May","June","July"],
				datasets : [
					{
						fillColor : "rgba(255,196,0,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						data : [50,70,90,60,70,40,50]
					}
				]

			};

			var radarChartData = {
				labels : ["Html5","Css3","Jquery","Wordpress","Joomla","Drupal","Design"],
				datasets : [
					{
						fillColor : "rgba(220,220,220,0.5)",
						strokeColor : "rgba(220,220,220,1)",
						pointColor : "rgba(220,220,220,1)",
						pointStrokeColor : "#fff",
						data : [65,59,90,81,56,55,40]
					},
					{
						fillColor : "rgba(255,196,0,0.5)",
						strokeColor : "rgba(255,196,0,1)",
						pointColor : "rgba(255,196,0,1)",
						pointStrokeColor : "#fff",
						data : [28,48,40,19,96,27,100]
					}
				]

			};

			var pieChartData = [
				{
					value: 90,
					color:"#ffc400"
				},
				{
					value : 30,
					color : "#229e05"
				},
				{
					value : 60,
					color : "#171717"
				},
				{
					value : 100,
					color : "#004eff"
				},
				{
					value : 20,
					color : "#584A5E"
				}

			];

			var polarAreaChartData = [
				{
					value : 60,
					color: "#ffc400"
				},
				{
					value : 70,
					color: "#cccccc"
				},
				{
					value : 60,
					color: "#171717"
				},
				{
					value : 30,
					color: "#229e05"
				},
				{
					value : 50,
					color: "#004eff"
				},
				{
					value : 20,
					color: "#584A5E"
				}
			];

			var doughnutChartData = [
				{
					value: 30,
					color:"#ffc400"
				},
				{
					value : 50,
					color : "#cccccc"
				},
				{
					value : 100,
					color : "#171717"
				},
				{
					value : 40,
					color : "#004eff"
				},
				{
					value : 120,
					color : "#4D5360"
				}
			];

			function showLineChart(){
				var ctx = document.getElementById("lineChartmist").getContext("2d");
				 new Chart(ctx).Line(lineChartData, {	responsive: true	});
			}

			function showBarChart(){
				var ctx = document.getElementById("barChartmist").getContext("2d");
				new Chart(ctx).Bar(barChartData, {	responsive: true	});
			}

			function showRadarChart(){
				var ctx = document.getElementById("radarChartmist").getContext("2d");
				new Chart(ctx).Radar(radarChartData, {	responsive: true	});
			}

			function showPolarAreaChart(){
				var ctx = document.getElementById("polarAreaChartmist").getContext("2d");
				new Chart(ctx).PolarArea(polarAreaChartData, {	responsive: true	});
			}

			function showPieChart(){
				var ctx = document.getElementById("pieChartmist").getContext("2d");
				new Chart(ctx).Pie(pieChartData,{	responsive: true	});
			}
			function showDoughnutChart(){
				var ctx = document.getElementById("doughnutChartmist").getContext("2d");
				new Chart(ctx).Doughnut(doughnutChartData,{	responsive: true	});
			}

			$('#lineChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showLineChart,300); },{accX: 0, accY: -155},'easeInCubic');

			$('#barChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showBarChart,300); },{accX: 0, accY: -155},'easeInCubic');

			$('#radarChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showRadarChart,300); },{accX: 0, accY: -155},'easeInCubic');

			$('#polarAreaChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showPolarAreaChart,300); },{accX: 0, accY: -155},'easeInCubic');

			$('#pieChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showPieChart,300); },{accX: 0, accY: -155},'easeInCubic');

			$('#doughnutChart').appear( function(){ $(this).css({ opacity: 1 }); setTimeout(showDoughnutChart,300); },{accX: 0, accY: -155},'easeInCubic');

		});

	},
	/* --------------------------------------------
	Masonry Grid
	-------------------------------------------- */	
	masonryGrid: function(){
	
			 $('.masonry-grid').each(function(){  
			  var $port_container = $(this);  	  
			  
			  var filter_selector = $port_container.parent().find('.works-filters li.active').data('filter');  
			  
				$port_container.imagesLoaded(function(){  
					$port_container.isotope({   
					   itemSelector: '.grid-item',
					   filter: filter_selector,
					   animationEngine: "css",
					   masonry: {
						columnWidth: '.grid-sizer'
					   }
					  });
				});
			  
			  // Portfolio Filter Items
			 $('.works-filters li').click(function(){			  
				$(this).parents().find('.works-filters li.active').removeClass('active');    
				$(this).addClass('active');
				var selector = $(this).parents().find('.works-filters li.active').attr('data-filter');  
				$(this).parents().find('.masonry-grid').isotope({ filter: selector, animationEngine : "css" });

				return false; 
				});
			});
				 
	},
	/* --------------------------------------------
	Product Zoom
	-------------------------------------------- */	
	productZoom: function(){	
		if ( $( ".single-product" ).length !== 0 ) {
			var zoomWindowWidth;
			var zoomWindowHeight;
			
			 zoomWindowWidth    : 400;
			 zoomWindowHeight   : 470;	
			 zoomType   = 'window';
			 
			if ($(window).width() < 992) {
				 zoomWindowWidth    : 0;
				 zoomWindowHeight   : 0;	
				 zoomType   = 'inner';
			}
			
			$("#zoom-product").elevateZoom({				
			gallery:'zoom-product-thumb', 
			cursor: 'pointer', 
			galleryActiveClass: 'active', 
			imageCrossfade: true,
			responsive: true,
			scrollZoom: false,
			zoomWindowWidth    : zoomWindowWidth,
			zoomWindowHeight   : zoomWindowHeight,
			zoomType		: zoomType	
			}); 

			$("#zoom-product").on("click", function(e) {  
			  var ez =   $('#zoom-product').data('elevateZoom');	
				$.fancybox(ez.getGalleryList());
			  return false;
			});
			$('#plus').click(function() {
				$('#output').html(function(i, val) { return val*1+1 });
			});
			$('#minus').click(function() {
				$('#output').html(function(i, val) { return val*1-1 });
			});
		}	
	},
	
	/* --------------------------------------------
	Local Hosted Video Player
	-------------------------------------------- */	
	
	hostedVideo: function(){
		if ( $( ".video-section" ).length !== 0 ) {
			var player = videojs('really-cool-video', { /* Options */ }, function() {
			  console.log('Good to go!');

			  this.play(); // if you don't trust autoplay for some reason

			  // How about an event listener?
			  this.on('ended', function() {
				console.log('awww...over so soon?');
			  });
			});
		}
	},
	
	/* --------------------------------------------
	Career Form
	-------------------------------------------- */	
	careerForm: function(){	
		if ( $( "#careerform" ).length !== 0 ) {
		$('#careerform').bootstrapValidator({
				container: 'tooltip',
				feedbackIcons: {
					valid: 'fa fa-check',
					warning: 'fa fa-user',
					invalid: 'fa fa-times',
					validating: 'fa fa-refresh'
				},
				fields: {
                    career_name: {
                        validators: {
                            notEmpty: {
                                message: ''
                            }
                        }
                    },
                    career_email: {
                        validators: {
                            notEmpty: {
                                message: ''
                            },
                            emailAddress: {
                                message: ''
                            },
							regexp: {
									regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
									message: 'The value is not a valid email address'
							}
                        }
                    },
					career_phone: {
                        validators: {
                            notEmpty: {
                                message: ''
                            }
                        }
                    },
                    career_file: {
						validators: {
							notEmpty: {
                                message: 'Please Upload pdf or doc or docx file'
                            },
							file: {
								extension: 'pdf,doc,docx',
								type: 'application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword',
								message: 'The selected file is not valid!'
							}
						}
					},
                }
			})	
			.on('success.form.bv', function(e) {
				e.preventDefault();
				var $form        = $(e.target),
				validator    = $form.data('bootstrapValidator'),
				submitButton = validator.getSubmitButton();
				var form_data = $('#careerform').serialize();
				$.ajax({
						type: "POST",
						dataType: 'json',
						url: "php/career.php",					
						data: form_data,
						success: function(msg){						
							$('.form-message2').html(msg.data);
							$('.form-message2').show();
							submitButton.removeAttr("disabled");
							resetForm($('#careerform'));						
						},
						error: function(msg){}
				 });
				return false;
			});
		}
		function resetForm($form) {

            $form.find(
                    'input:text, input:password, input, input:file, select, textarea'
                )
                .val('');

            $form.find('input:radio, input:checkbox')
                .removeAttr('checked')
                .removeAttr('selected');
			$form.find('button[type=submit]')
                .attr("disabled", "disabled");

        }
	}	
}; 

$(document).ready(function() {
	appMaster.pageLoader();
	appMaster.navBar();
	appMaster.toggleNav();
	appMaster.owlCarousel();
	appMaster.progressBar();
	appMaster.dataAnimations();
	appMaster.bgImage();
	appMaster.funFactor();
	appMaster.parallaxBg();
	appMaster.portfolioFilter();
	appMaster.prettyPhoto();
	appMaster.backgroundVideo();
	appMaster.simplecontactForm();
	appMaster.subscribeForm();
	appMaster.navMenu();
	appMaster.typedSlider();
	appMaster.videotextSlider();
	appMaster.countDown();	
	appMaster.socialPhotostream();	
	appMaster.priceRange();	
	appMaster.allCharts();	
	appMaster.masonryGrid();
	appMaster.productZoom();
	appMaster.sideNav();
	appMaster.fullScreen();
	appMaster.fancySelect();
	appMaster.hostedVideo();
	appMaster.careerForm();
});	

/* --------------------------------------------
	
	Placeholder for Image
	-------------------------------------------- */	
$(window).load(function(){
		
	$('img:not(".site_logo")').each(function() {
		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
			var ieversion=new Number(RegExp.$1)
			if (ieversion>=9)
			if (typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
			  this.src = "http://placehold.it/" + ($(this).attr('width') || this.width || $(this).naturalWidth()) + "x" + (this.naturalHeight || $(this).attr('height') || $(this).height());
			}
		} else {
			if (!this.complete || typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
				this.src = "http://placehold.it/" + ($(this).attr('width') || this.width) + "x" + ($(this).attr('height') || $(this).height());
			}
		}
	});
	
	$('.image-bg').each(function() {
		var imageSrc = $(this).data('background');
		if( imageSrc !== undefined ) {
			var newSrc = imageSrc.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
		}

		// I just broke it up on newlines for readability        
		var image = new Image();
		image.src = newSrc;

		var width = image.width,
			height = image.height;
		
		if( width === 0 || height === 0 ) {
			$(this).attr('data-background', "http://placehold.it/" + ('1900') + "x" + ('700') + "/2e2e2e/666.jpg" );
			
			$(this).removeAttr('style');
			$(this).css("background-image", "url(" + "http://placehold.it/1900x700/2e2e2e/666.jpg" + ")");
		}
	});
});

/* --------------------------------------------
Google Map
-------------------------------------------- */	
window.onload = MapLoadScript;
function GmapInit() {
	  Gmap = $('.map-canvas');
	  Gmap.each(function() {
		var $this           = $(this),
			lat             = -35.2835,
			lng             = 149.128,
			zoom            = 12,
			scrollwheel     = false,
			zoomcontrol 	= true,
			draggable       = true,
			mapType         = google.maps.MapTypeId.ROADMAP,
			title           = '',
			contentString   = '',
			dataLat         = $this.data('lat'),
			dataLng         = $this.data('lng'),
			dataZoom        = $this.data('zoom'),
			dataType        = $this.data('type'),
			dataScrollwheel = $this.data('scrollwheel'),
			dataZoomcontrol = $this.data('zoomcontrol'),
			dataHue         = $this.data('hue'),
			dataTitle       = $this.data('title'),
			dataContent     = $this.data('content');
			
		if( dataZoom !== undefined && dataZoom !== false ) {
			zoom = parseFloat(dataZoom);
		}
		if( dataLat !== undefined && dataLat !== false ) {
			lat = parseFloat(dataLat);
		}
		if( dataLng !== undefined && dataLng !== false ) {
			lng = parseFloat(dataLng);
		}
		if( dataScrollwheel !== undefined && dataScrollwheel !== null ) {
			scrollwheel = dataScrollwheel;
		}
		if( dataZoomcontrol !== undefined && dataZoomcontrol !== null ) {
			zoomcontrol = dataZoomcontrol;
		}
		if( dataType !== undefined && dataType !== false ) {
			if( dataType == 'satellite' ) {
				mapType = google.maps.MapTypeId.SATELLITE;
				} else if( dataType == 'hybrid' ) {
				mapType = google.maps.MapTypeId.HYBRID;
			} else if( dataType == 'terrain' ) {
				mapType = google.maps.MapTypeId.TERRAIN;
			}		  	
		}
		if( dataTitle !== undefined && dataTitle !== false ) {
			title = dataTitle;
		}
		if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
			draggable = false;
		}
		
		var mapOptions = {
		  zoom        : zoom,
		  scrollwheel : scrollwheel,
		  zoomControl : zoomcontrol,
		  draggable   : draggable,
		  center      : new google.maps.LatLng(lat, lng),
		  mapTypeId   : mapType
		};		
		var map = new google.maps.Map($this[0], mapOptions);
		
		var image = 'img/map-marker.png';
		if( dataContent !== undefined && dataContent !== false ) {
			contentString = '<div class="map-data">' + '<h6>' + title + '</h6>' + '<div class="map-content">' + dataContent + '</div>' + '</div>';
		}
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		
		var marker = new google.maps.Marker({
		  position : new google.maps.LatLng(lat, lng),
		  map      : map,
		  icon     : image,
		  title    : title
		});
		if( dataContent !== undefined && dataContent !== false ) {
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		}
		
		if( dataHue !== undefined && dataHue !== false ) {
		  var styles = [
			{
			  stylers : [
				{ hue : dataHue },
				{ saturation: 80 },
				{ lightness: -10 }
			  ]
			}
		  ];
		  map.setOptions({styles: styles});
		}
	 });
}
	
function MapLoadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=GmapInit';
	document.body.appendChild(script);
}



/*---------------STICKY NAVIGATION------------------*/
var header = jQuery('#home'),
      headerPos = header.offset();
        
  $(window).scroll(function() {
	  if( $(".side-nav").length != 0 ) {
      if( $(this).scrollTop() > headerPos.top+header.height() ) {
          $('#sticky').addClass('nav-fixed').fadeIn('medium');
      } else {
          $('#sticky').removeClass('nav-fixed').fadeIn('medium');
	  }
      }
});



$(function() {
	$('.left-sidebar').StickySidebar({
		// Settings
		additionalMarginTop: 40
	});
});


(function ($) {
	$.fn.StickySidebar = function (options) {
		var defaults = {
			'containerSelector': '',
			'additionalMarginTop': 0,
			'additionalMarginBottom': 0,
			'updateSidebarHeight': true,
			'minWidth': 0,
			'disableOnResponsiveLayouts': true,
			'sidebarBehavior': 'modern'
		};
		options = $.extend(defaults, options);

		// Validate options
		options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;
		options.additionalMarginBottom = parseInt(options.additionalMarginBottom) || 0;

		tryInitOrHookIntoEvents(options, this);

		// Try doing init, otherwise hook into window.resize and document.scroll and try again then.
		function tryInitOrHookIntoEvents(options, $that) {
			var success = tryInit(options, $that);

			if (!success) {
				console.log('TST: Body width smaller than options.minWidth. Init is delayed.');

				$(document).scroll(function (options, $that) {
					return function (evt) {
						var success = tryInit(options, $that);

						if (success) {
							$(this).unbind(evt);
						}
					};
				}(options, $that));
				$(window).resize(function (options, $that) {
					return function (evt) {
						var success = tryInit(options, $that);

						if (success) {
							$(this).unbind(evt);
						}
					};
				}(options, $that))
			}
		}

		// Try doing init if proper conditions are met.
		function tryInit(options, $that) {
			if (options.initialized === true) {
				return true;
			}

			if ($('body').width() < options.minWidth) {
				return false;
			}

			init(options, $that);

			return true;
		}

		// Init the sticky sidebar(s).
		function init(options, $that) {
			options.initialized = true;

			// Add CSS
			$('head').append($('<style>.StickySidebar:after {content: ""; display: table; clear: both;}</style>'));

			$that.each(function () {
				var o = {};

				o.sidebar = $(this);

				// Save options
				o.options = options || {};

				// Get container
				o.container = $(o.options.containerSelector);
				if (o.container.length == 0) {
					o.container = o.sidebar.parent();
				}

				// Create sticky sidebar
				o.sidebar.parents().css('-webkit-transform', 'none'); // Fix for WebKit bug - https://code.google.com/p/chromium/issues/detail?id=20574
				o.sidebar.css({
					'position': 'relative',
					'overflow': 'visible',
					// The "box-sizing" must be set to "content-box" because we set a fixed height to this element when the sticky sidebar has a fixed position.
					'-webkit-box-sizing': 'border-box',
					'-moz-box-sizing': 'border-box',
					'box-sizing': 'border-box'
				});

				// Get the sticky sidebar element. If none has been found, then create one.
				o.stickySidebar = o.sidebar.find('.StickySidebar');
				if (o.stickySidebar.length == 0) {
					o.sidebar.find('script').remove(); // Remove <script> tags, otherwise they will be run again on the next line.
					o.stickySidebar = $('<div>').addClass('StickySidebar').append(o.sidebar.children());
					o.sidebar.append(o.stickySidebar);
				}

				// Get existing top and bottom margins and paddings
				o.marginTop = parseInt(o.sidebar.css('margin-top'));
				o.marginBottom = parseInt(o.sidebar.css('margin-bottom'));
				o.paddingTop = parseInt(o.sidebar.css('padding-top'));
				o.paddingBottom = parseInt(o.sidebar.css('padding-bottom'));

				// Add a temporary padding rule to check for collapsable margins.
				var collapsedTopHeight = o.stickySidebar.offset().top;
				var collapsedBottomHeight = o.stickySidebar.outerHeight();
				o.stickySidebar.css('padding-top', 1);
				o.stickySidebar.css('padding-bottom', 1);
				collapsedTopHeight -= o.stickySidebar.offset().top;
				collapsedBottomHeight = o.stickySidebar.outerHeight() - collapsedBottomHeight - collapsedTopHeight;
				if (collapsedTopHeight == 0) {
					o.stickySidebar.css('padding-top', 0);
					o.stickySidebarPaddingTop = 0;
				}
				else {
					o.stickySidebarPaddingTop = 1;
				}

				if (collapsedBottomHeight == 0) {
					o.stickySidebar.css('padding-bottom', 0);
					o.stickySidebarPaddingBottom = 0;
				}
				else {
					o.stickySidebarPaddingBottom = 1;
				}

				// We use this to know whether the user is scrolling up or down.
				o.previousScrollTop = null;

				// Scroll top (value) when the sidebar has fixed position.
				o.fixedScrollTop = 0;

				// Set sidebar to default values.
				resetSidebar();

				o.onScroll = function (o) {
					// Stop if the sidebar isn't visible.
					if (!o.stickySidebar.is(":visible")) {
						return;
					}

					// Stop if the window is too small.
					if ($('body').width() < o.options.minWidth) {
						resetSidebar();
						return;
					}

					// Stop if the sidebar width is larger than the container width (e.g. the theme is responsive and the sidebar is now below the content)
					if (o.options.disableOnResponsiveLayouts) {
						var sidebarWidth = o.sidebar.outerWidth(o.sidebar.css('float') == 'none');

						if (sidebarWidth + 50 > o.container.width()) {
							resetSidebar();
							return;
						}
					}

					var scrollTop = $(document).scrollTop();
					var position = 'static';

					// If the user has scrolled down enough for the sidebar to be clipped at the top, then we can consider changing its position.
					if (scrollTop >= o.container.offset().top + (o.paddingTop + o.marginTop - o.options.additionalMarginTop)) {
						// The top and bottom offsets, used in various calculations.
						var offsetTop = o.paddingTop + o.marginTop + options.additionalMarginTop;
						var offsetBottom = o.paddingBottom + o.marginBottom + options.additionalMarginBottom;

						// All top and bottom positions are relative to the window, not to the parent elemnts.
						var containerTop = o.container.offset().top;
						var containerBottom = o.container.offset().top + getClearedHeight(o.container);

						// The top and bottom offsets relative to the window screen top (zero) and bottom (window height).
						var windowOffsetTop = 0 + options.additionalMarginTop;
						var windowOffsetBottom;

						var sidebarSmallerThanWindow = (o.stickySidebar.outerHeight() + offsetTop + offsetBottom) < $(window).height();
						if (sidebarSmallerThanWindow) {
							windowOffsetBottom = windowOffsetTop + o.stickySidebar.outerHeight();
						}
						else {
							windowOffsetBottom = $(window).height() - o.marginBottom - o.paddingBottom - options.additionalMarginBottom;
						}

						var staticLimitTop = containerTop - scrollTop + o.paddingTop + o.marginTop;
						var staticLimitBottom = containerBottom - scrollTop - o.paddingBottom - o.marginBottom;

						var top = o.stickySidebar.offset().top - scrollTop;
						var scrollTopDiff = o.previousScrollTop - scrollTop;

						// If the sidebar position is fixed, then it won't move up or down by itself. So, we manually adjust the top coordinate.
						if (o.stickySidebar.css('position') == 'fixed') {
							if (o.options.sidebarBehavior == 'modern') {
								top += scrollTopDiff;
							}
						}

						if (o.options.sidebarBehavior == 'stick-to-top') {
							top = options.additionalMarginTop;
						}

						if (o.options.sidebarBehavior == 'stick-to-bottom') {
							top = windowOffsetBottom - o.stickySidebar.outerHeight();
						}

						if (scrollTopDiff > 0) { // If the user is scrolling up.
							top = Math.min(top, windowOffsetTop);
						}
						else { // If the user is scrolling down.
							top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight());
						}

						top = Math.max(top, staticLimitTop);

						top = Math.min(top, staticLimitBottom - o.stickySidebar.outerHeight());

						// If the sidebar is the same height as the container, we won't use fixed positioning.
						var sidebarSameHeightAsContainer = o.container.height() == o.stickySidebar.outerHeight();

						if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {
							position = 'fixed';
						}
						else if (!sidebarSameHeightAsContainer && top == windowOffsetBottom - o.stickySidebar.outerHeight()) {
							position = 'fixed';
						}
						else if (scrollTop + top - o.sidebar.offset().top - o.paddingTop <= options.additionalMarginTop) {
							// Stuck to the top of the page. No special behavior.
							position = 'static';
						}
						else {
							// Stuck to the bottom of the page.
							position = 'absolute';
						}
					}

					/*
                     * Performance notice: It's OK to set these CSS values at each resize/scroll, even if they don't change.
                     * It's way slower to first check if the values have changed.
                     */
					if (position == 'fixed') {
						o.stickySidebar.css({
							'position': 'fixed',
							'width': o.sidebar.width(),
							'top': top,
							'left': o.sidebar.offset().left + parseInt(o.sidebar.css('padding-left'))
						});
					}
					else if (position == 'absolute') {
						var css = {};

						if (o.stickySidebar.css('position') != 'absolute') {
							css.position = 'absolute';
							css.top = scrollTop + top - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom;
						}

						css.width = o.sidebar.width();
						css.left = '';

						o.stickySidebar.css(css);
					}
					else if (position == 'static') {
						resetSidebar();
					}

					if (position != 'static') {
						if (o.options.updateSidebarHeight == true) {
							o.sidebar.css({
								'min-height': o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom
							});
						}
					}

					o.previousScrollTop = scrollTop;
				};

				// Initialize the sidebar's position.
				o.onScroll(o);

				// Recalculate the sidebar's position on every scroll and resize.
				$(document).scroll(function (o) {
					return function () {
						o.onScroll(o);
					};
				}(o));
				$(window).resize(function (o) {
					return function () {
						o.stickySidebar.css({'position': 'static'});
						o.onScroll(o);
					};
				}(o));

				// Reset the sidebar to its default state
				function resetSidebar() {
					o.fixedScrollTop = 0;
					o.sidebar.css({
						'min-height': '1px'
					});
					o.stickySidebar.css({
						'position': 'static',
						'width': ''
					});
				}

				// Get the height of a div as if its floated children were cleared. Note that this function fails if the floats are more than one level deep.
				function getClearedHeight(e) {
					var height = e.height();

					e.children().each(function () {
						height = Math.max(height, $(this).height());
					});

					return height;
				}
			});
		}
	}
})(jQuery);



