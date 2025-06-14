$(document).ready(function() {
    // Set current year in footer
    $('#currentYear').text(new Date().getFullYear());
    
    // Header scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.main-header').addClass('scrolled');
        } else {
            $('.main-header').removeClass('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            var headerHeight = $('.main-header').outerHeight();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - headerHeight
            }, 1000);
        }
    });
    
    // Active navigation highlighting
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        var headerHeight = $('.main-header').outerHeight();
        
        $('section[id]').each(function(i) {
            var sectionTop = $(this).offset().top - headerHeight - 100;
            var sectionBottom = sectionTop + $(this).outerHeight();
            var sectionId = $(this).attr('id');
            
            if (scrollDistance >= sectionTop && scrollDistance < sectionBottom) {
                $('.navbar-nav .nav-link').removeClass('active');
                $('.navbar-nav .nav-link[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });
    
    // Contact form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        $('#success-message').removeClass('d-none').addClass('fade-in-up');
        
        // Reset form
        this.reset();
        
        // Hide success message after 3 seconds
        setTimeout(function() {
            $('#success-message').addClass('d-none').removeClass('fade-in-up');
        }, 3000);
    });
    
    // Animate elements on scroll
    function animateOnScroll() {
        $('.feature-card, .quality-card, .service-card, .product-card, .contact-info-card').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('fade-in-up');
            }
        });
    }
    
    // Run animation on scroll
    $(window).scroll(animateOnScroll);
    
    // Run animation on page load
    animateOnScroll();
    
    // Counter animation for stats
    function animateCounters() {
        $('.stat-number').each(function() {
            var $this = $(this);
            var countTo = $this.text().replace('+', '');
            var isPlus = $this.text().includes('+');
            
            if (!$this.hasClass('animated')) {
                $this.addClass('animated');
                $({ countNum: 0 }).animate({
                    countNum: parseInt(countTo)
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum) + (isPlus ? '+' : ''));
                    },
                    complete: function() {
                        $this.text(countTo + (isPlus ? '+' : ''));
                    }
                });
            }
        });
    }
    
    // Trigger counter animation when stats section is visible
    $(window).scroll(function() {
        var statsSection = $('.stats-section');
        if (statsSection.length) {
            var elementTop = statsSection.offset().top;
            var elementBottom = elementTop + statsSection.outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                animateCounters();
            }
        }
    });
    
    // Mobile menu close on link click
    $('.navbar-nav .nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
    
    // Carousel auto-play control
    $('#heroCarousel').carousel({
        interval: 5000,
        ride: 'carousel'
    });
    
    // Add hover effect to carousel
    $('#heroCarousel').hover(
        function() {
            $(this).carousel('pause');
        },
        function() {
            $(this).carousel('cycle');
        }
    );
    
    // Lazy loading for images
    $('img').each(function() {
        var $img = $(this);
        var src = $img.attr('src');
        
        if (src) {
            $img.on('load', function() {
                $img.addClass('fade-in-up');
            });
        }
    });
    
    // Add loading state to buttons
    $('.btn').on('click', function() {
        var $btn = $(this);
        if (!$btn.hasClass('loading')) {
            $btn.addClass('loading');
            setTimeout(function() {
                $btn.removeClass('loading');
            }, 1000);
        }
    });
    
    // Parallax effect for hero section
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        var parallax = $('.hero-section');
        var speed = 0.5;
        
        parallax.css('transform', 'translateY(' + (scrolled * speed) + 'px)');
    });
    
    // Add floating animation to decorative elements
    $('.feature-icon, .quality-icon, .service-icon').addClass('float');
    
    // Initialize tooltips if Bootstrap tooltips are needed
    $('[data-bs-toggle="tooltip"]').tooltip();
    
    // Initialize popovers if Bootstrap popovers are needed
    $('[data-bs-toggle="popover"]').popover();
    
    // Add click effect to cards
    $('.feature-card, .quality-card, .service-card, .product-card').on('click', function() {
        $(this).addClass('clicked');
        setTimeout(() => {
            $(this).removeClass('clicked');
        }, 200);
    });
    
    // Smooth reveal animation for sections
    function revealSections() {
        $('section').each(function() {
            var sectionTop = $(this).offset().top;
            var sectionHeight = $(this).outerHeight();
            var windowTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (windowTop + windowHeight > sectionTop + 100) {
                $(this).addClass('revealed');
            }
        });
    }
    
    $(window).scroll(revealSections);
    revealSections(); // Run on page load
    
    // Add CSS class for revealed sections
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            section {
                opacity: 0;
                transform: translateY(50px);
                transition: all 0.8s ease;
            }
            section.revealed {
                opacity: 1;
                transform: translateY(0);
            }
            .clicked {
                transform: scale(0.98) !important;
            }
            .loading {
                pointer-events: none;
                opacity: 0.7;
            }
        `)
        .appendTo('head');
});

// Additional utility functions
function scrollToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
}

// Add scroll to top functionality
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        if (!$('.scroll-to-top').length) {
            $('body').append(`
                <button class="scroll-to-top" onclick="scrollToTop()" style="
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #FF6B35, #DC2626);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    font-size: 20px;
                    cursor: pointer;
                    z-index: 1000;
                    box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
                    transition: all 0.3s ease;
                ">
                    <i class="fas fa-arrow-up"></i>
                </button>
            `);
        }
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});

// Add hover effects to scroll to top button
$(document).on('mouseenter', '.scroll-to-top', function() {
    $(this).css('transform', 'scale(1.1)');
});

$(document).on('mouseleave', '.scroll-to-top', function() {
    $(this).css('transform', 'scale(1)');
});