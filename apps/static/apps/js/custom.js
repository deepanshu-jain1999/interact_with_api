(function ($) {
    "use strict";

  
    // on ready function
    jQuery(document).ready(function ($) {
        var $this = $(window);

        /*========sticky header on scroll======*/
        $(window).scroll(function () {
            var sticky = $('.menuFull')
            scroll = $(window).scrollTop();

            if (scroll >= 40) sticky.addClass('menu_fixed');
            else sticky.removeClass('menu_fixed');
        });
        /*========sticky header on scroll end======*/

        /*========chat box======*/
        $(function () {
            $("#popup-addClass").click(function () {
                var classexist = $('#qnimate').hasClass('popup-box-on');
                if (classexist) {
                    $('#qnimate').removeClass('popup-box-on');
                    $('#popup-removeClass').hide();
                    $("#popup-addClass").show();

                }
                else {
                    $('#qnimate').addClass('popup-box-on showBox');
                    $('#popup-removeClass').show();
                    $("#popup-addClass").hide();
                }
            });


            $("#popup-removeClass").click(function () {
                $("#popup-removeClass").hide();
                $('#qnimate').removeClass('popup-box-on');
                $("#popup-addClass").show();

            });
        });
        /*========chat box end======*/

        /*====================Progress bar js=====================*/
        $(".progress").each(function () {

            var $bar = $(this).find(".bar");
            var $val = $(this).find("span");
            var perc = parseInt($val.text(), 10);

            $({ p: 0 }).animate({ p: perc }, {
                duration: 3000,
                easing: "swing",
                step: function (p) {
                    $bar.css({
                        transform: "rotate(" + (45 + (p * 1.8)) + "deg)",
                    });
                    $val.text(p | 0);
                }
            });
        });
        /*====================Progress bar js end=====================*/

        /*======slick js========*/
            $('.customer-logos').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
        /*======slick js end========*/

        /*====Noti-drop first letter start=====*/
            var firstName = $('.notifica-first').text();
            var intials = $('.notifica-first').text().charAt(0);
            var profileImage = $('.notifica-bck').text(intials);


            var randomColors = ["#42a5f5", "#3f51b5", "#558b2f", "#ef5350", "#ffa500"];
            $(".notifica-bck").each(function (index) {
                var len = randomColors.length;
                var randomNum = Math.floor(Math.random() * len);
                $(this).css("backgroundColor", randomColors[randomNum]);
                //Removes color from array so it can't be used again
                randomColors.splice(randomNum, 1);
            });

        /*======Noti-drop first letter end========*/


        /*====step progrs bar start=====*/
            $('.span-apply').click(function () {
                $('.span-apply').css('display', 'none');
                $('.span-applied').css('display', 'block');
                $('.progt1').removeClass('progtrckr-todo');
                $('.progt1').addClass('progtrckr-applied');
            });

        /*======step progrs bar  end========*/

        /*====nav bar js start=====*/
        $('.house_toggle').on('click', function (event) {
            event.preventDefault();
            toggleNav();

        });

        $('.cd-dropdown .cd-close').on('click', function (event) {
            event.preventDefault();
            toggleNav();
        });

        $('.has-children').children('a').on('click', function (event) {
            event.preventDefault();
            var selected = $(this);
            selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
        });

        $('.go-back').on('click', function () {
            var selected = $(this),
                visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
            selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
        });

        function toggleNav() {
            var navIsVisible = (!$('.cd-dropdown').hasClass('dropdown-is-active')) ? true : false;
            $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
            $('.house_toggle').toggleClass('dropdown-is-active', navIsVisible);
            if (!navIsVisible) {
                $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                    $('.has-children ul').addClass('is-hidden');
                    $('.move-out').removeClass('move-out');
                    $('.is-active').removeClass('is-active');
                });
            }
        }
        /*=====nav bar js end=====*/

        // ========= search box==========//
        var submitIcon = $('.searchbox-icon');
        var inputBox = $('.searchbox-input');
        var searchBox = $('.searchbox');
        var isOpen = false;
        submitIcon.click(function () {
            if (isOpen == false) {
                searchBox.addClass('searchbox-open');
                inputBox.focus();
                isOpen = true;
                $('.linkin1').css('display', 'none');
                $('.facebk1').css('display', 'none');
                $('.twitter1').css('display', 'none');
                $('.googlep1').css('display', 'none');
                $('.youtube1').css('display', 'none');
            } else {
                searchBox.removeClass('searchbox-open');
                inputBox.focusout();
                isOpen = false;
                $('.linkin1').css('display', 'block');
                $('.facebk1').css('display', 'block');
                $('.twitter1').css('display', 'block');
                $('.googlep1').css('display', 'block');
                $('.youtube1').css('display', 'block');
            }
        });
        submitIcon.mouseup(function () {
            return false;
        });
        searchBox.mouseup(function () {
            return false;
        });
        $(document).mouseup(function () {
            if (isOpen == true) {
                $('.searchbox-icon').css('display', 'block');
                submitIcon.click();
            }
        });

        var submitIcon1 = $('.searchboxMob-icon');
        var inputBox1 = $('.searchboxMob-input');
        var searchBox1 = $('.searchboxMob');
        var isOpen = false;
        submitIcon1.click(function () {
            if (isOpen == false) {
                searchBox1.addClass('searchboxMob-open');
                inputBox1.focus();
                isOpen = true;
                $('.phone').css('display', 'none');
                $('.email').css('display', 'none');
            } else {
                searchBox1.removeClass('searchboxMob-open');
                inputBox1.focusout();
                isOpen = false;
                $('.phone').css('display', 'inline-block');
                $('.email').css('display', 'inline-block');
            }
        });
        submitIcon1.mouseup(function () {
            return false;
        });
        searchBox1.mouseup(function () {
            return false;
        });
        $(document).mouseup(function () {
            if (isOpen == true) {
                $('.searchboxMob-icon').css('display', 'inline-block');
                submitIcon1.click();
            }
        });
        // ========= search box end==========//
        // ========= autocomplete single==========//
            $(function () {
                var availableTags = [
                  "Ahemdabad",
                  "Bangalore",
                  "Chennai",
                  "Kolkata",
                ];
                $("#city1,#city2,#city3").autocomplete({
                    source: availableTags
                });
            });

            $(function () {
                var availableTags = [
                  "America",
                  "Australia",
                  "China",
                  "England",
                ];
                $("#country1,#country2").autocomplete({
                    source: availableTags
                });
            });
            
            $(function () {
                var availableTags = [
                  "HCL",
                  "TCS",
                  "Wipro",
                ];
                $("#company1").autocomplete({
                    source: availableTags
                });
            });

            $(function () {
                var availableTags = [
                  "Java",
                  "DotNet",
                  "Web Designer",
                  "Business Analyst",
                  "Web Developer",
                  "Software Developer",
                  "Accountant",
                ];
                $("#keywords").autocomplete({
                    source: availableTags
                });
            });

            $(function () {
                var availableTags = [
                  "New Delhi",
                  "Noida",
                  "Gurugram",
                  "Delhi/NCR",
                  "Chennai",
                  "Bangalore",
                  "Mumbai",
                ];
                $("#location").autocomplete({
                    source: availableTags
                });
            });

            $(function () {
                var availableTags = [
                  "BPO/KPO",
                  "IT Software",
                  "Banking",
                  "Education",
                  "Chemicals",
                  "Medical",
                  "IT Hardware",
                ];
                $("#industry").autocomplete({
                    source: availableTags
                });
            });

            $(function () {
                var availableTags = [
                  "IT Software",
                  "Accounts/Finance",
                  "Tax",
                  "Banking",
                  "Insurance",
                  "Administration",
                  "Security",
                ];
                $("#function").autocomplete({
                    source: availableTags
                });
            });
           

        // ========= autocomplete single end==========//

        // ========= autocomplete multiple==========//
            $(function () {
                var availableTags = [
                  "ActionScript",
                  "AppleScript",
                  "Asp",
                  "BASIC",
                  "C",
                  "C++",
                  "Clojure",
                  "COBOL",
                  "ColdFusion",
                  "Erlang",
                  "Fortran",
                  "Groovy",
                  "Haskell",
                  "Java",
                  "JavaScript",
                  "Lisp",
                  "Perl",
                  "PHP",
                  "Python",
                  "Ruby",
                  "Scala",
                  "Scheme"
                ];
                function split(val) {
                    return val.split(/,\s*/);
                }
                function extractLast(term) {
                    return split(term).pop();
                }

                $("#Skill1")
                  // don't navigate away from the field on tab when selecting an item
                  .on("keydown", function (event) {
                      if (event.keyCode === $.ui.keyCode.TAB &&
                          $(this).autocomplete("instance").menu.active) {
                          event.preventDefault();
                      }
                  })
                  .autocomplete({
                      minLength: 0,
                      source: function (request, response) {
                          // delegate back to autocomplete, but extract the last term
                          response($.ui.autocomplete.filter(
                            availableTags, extractLast(request.term)));
                      },
                      focus: function () {
                          // prevent value inserted on focus
                          return false;
                      },
                      select: function (event, ui) {
                          var terms = split(this.value);
                          // remove the current input
                          terms.pop();
                          // add the selected item
                          terms.push(ui.item.value);
                          // add placeholder to get the comma-and-space at the end
                          terms.push("");
                          this.value = terms.join(", ");
                          return false;
                      }
                  });
            });

            $(function () {
                var availableTags = [
                  "Web designer",
                  "UI Developer",
                  "Graphic Designing",
                  "Creating Prototype",
                ];
                function split(val) {
                    return val.split(/,\s*/);
                }
                function extractLast(term) {
                    return split(term).pop();
                }

                $("#role1")
                  // don't navigate away from the field on tab when selecting an item
                  .on("keydown", function (event) {
                      if (event.keyCode === $.ui.keyCode.TAB &&
                          $(this).autocomplete("instance").menu.active) {
                          event.preventDefault();
                      }
                  })
                  .autocomplete({
                      minLength: 0,
                      source: function (request, response) {
                          // delegate back to autocomplete, but extract the last term
                          response($.ui.autocomplete.filter(
                            availableTags, extractLast(request.term)));
                      },
                      focus: function () {
                          // prevent value inserted on focus
                          return false;
                      },
                      select: function (event, ui) {
                          var terms = split(this.value);
                          // remove the current input
                          terms.pop();
                          // add the selected item
                          terms.push(ui.item.value);
                          // add placeholder to get the comma-and-space at the end
                          terms.push("");
                          this.value = terms.join(", ");
                          return false;
                      }
                  });
            });
       
        // ========= autocomplete multiple end==========//
    });

    
    // ========= search box==========//
    function buttonUp() {
        var inputVal = $('.searchbox-input').val();
        inputVal = $.trim(inputVal).length;
        if (inputVal !== 0) {
            $('.searchbox-icon').css('display', 'none');
        } else {
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display', 'block');
        }
    }

    function buttonUpMob() {
        var inputVal1 = $('.searchboxMob-input').val();
        inputVal1 = $.trim(inputVal).length;
        if (inputVal1 !== 0) {
            $('.searchboxMob-icon').css('display', 'none');
        } else {
            $('.searchboxMob-input').val('');
            $('.searchboxMob-icon').css('display', 'inline-block');
        }
    }
    // ========= search box end==========//
})();

// ================================ Other Details in Profile Form =========================//

$("#btn-male").click(function () {
    $("#btn-male").addClass("profile-frm-lightblue").removeClass("profile-lightblue-Outline");
    $("#btn-female").addClass("profile-lightblue-Outline").removeClass("profile-frm-lightblue");
    $("#btn-others").addClass("profile-lightblue-Outline").removeClass("profile-frm-lightblue");
});

$("#btn-female").click(function () {
    $("#btn-male").addClass("profile-lightblue-Outline").removeClass("profile-frm-lightblue");
    $("#btn-female").addClass("profile-frm-lightblue").removeClass("profile-lightblue-Outline");
    $("#btn-others").addClass("profile-lightblue-Outline").removeClass("profile-frm-lightblue");
});

$("#btn-others").click(function () {
    $("#btn-male").addClass("profile-lightblue-Outline").removeClass("profile-frm-lightblue");
    $("#btn-female").addClass("profile-lightblue-Outline").removeClass("profile-frm-lightblue");
    $("#btn-others").addClass("profile-frm-lightblue").removeClass("profile-lightblue-Outline");
});

$("#btn-single").click(function () {
    $("#btn-single").addClass("profile-frm-lightblue").removeClass("profile-lightblue-Outline");
    $("#btn-married").addClass("profile-lightblue-Outline").removeClass("profile-frm-lightblue");
});

$("#btn-married").click(function () {
    $("#btn-single").addClass("profile-lightblue-Outline").removeClass("profile-frm-lightblue");
    $("#btn-married").addClass("profile-frm-lightblue").removeClass("profile-lightblue-Outline");
});

$("#btn-day").click(function () {
    $("#btn-day").addClass("profile-frm-lightblue").removeClass("profile-lightblue-Outline");
    $("#btn-dan").addClass("profile-lightblue-Outline").removeClass("profile-frm-lightblue");
    $("#type-col").show();
});

$("#btn-dan").click(function () {
    $("#btn-day").addClass("profile-lightblue-Outline").removeClass("profile-frm-lightblue");
    $("#btn-dan").addClass("profile-frm-lightblue").removeClass("profile-lightblue-Outline");
    $("#type-col").hide();
});

// ================================ Other Details in Profile Form end =========================//

// ================================ Advance search in Job Search =========================//

$("#btn-all-jobs").click(function () {
    $("#btn-all-jobs").addClass("modal-button").removeClass("modal-border-button");
    $("#btn-company-jobs").addClass("modal-border-button").removeClass("modal-button");
    $("#btn-cons-jobs").addClass("modal-border-button").removeClass("modal-button");
});

$("#btn-company-jobs").click(function () {
    $("#btn-all-jobs").addClass("modal-border-button").removeClass("modal-button");
    $("#btn-company-jobs").addClass("modal-button").removeClass("modal-border-button");
    $("#btn-cons-jobs").addClass("modal-border-button").removeClass("modal-button");
});

$("#btn-cons-jobs").click(function () {
    $("#btn-all-jobs").addClass("modal-border-button").removeClass("modal-button");
    $("#btn-company-jobs").addClass("modal-border-button").removeClass("modal-button");
    $("#btn-cons-jobs").addClass("modal-button").removeClass("modal-border-button");
});

$("#btn-sort-rele").click(function () {
    $("#btn-sort-rele").addClass("modal-button").removeClass("modal-border-button");
    $("#btn-sort-date").addClass("modal-border-button").removeClass("modal-button");
});

$("#btn-sort-date").click(function () {
    $("#btn-sort-rele").addClass("modal-border-button").removeClass("modal-button");
    $("#btn-sort-date").addClass("modal-button").removeClass("modal-border-button");
});

// ================================ Advance search in Job Search end =========================//

// ================================ Job Search Applied button =========================//

$("#btn-apply-job-search").click(function () {
    $("#btn-apply-job-search").addClass("btn-red-outline-job-search").removeClass("btn-red-outline").text("Applied").attr("disabled",true);
});

// ================================ Job Search Applied button end =========================//
