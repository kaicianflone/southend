const header = `<nav class="gtco-nav" role="navigation">
			<div class="gtco-container">
				<div class="row">
					<div class="col-md-12 text-right gtco-contact">
						<ul class="">
							<li>
								<a href="#">
									<i class="ti-mobile"></i> (980) 226-2887 </a>
							</li>
							<li>
								<a href="mailto:info@SouthEndWebDesign.com">
									<i class="icon-mail2"></i>
								</a>
							</li>
							<li>
								<a href="http://instagram.com/SouthEndWebDesign">
									<i class="ti-instagram"></i>
								</a>
							</li>
							<li>
								<a href="http://facebook.com/SouthEndWebDesign">
									<i class="ti-facebook"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-4 col-xs-12">
						<div class="active" id="gtco-logo">
              <a href="index.html">
                <img style="height: 3.5em; padding-bottom: 1em" src="./images/SouthEnd.png" alt=""/>
              </a>
						</div>
					</div>
					<div class="col-xs-8 text-right menu-1">
						<ul>
							<li class="has-dropdown">
                <a href="websites">Websites</a>
								<ul class="dropdown">
									<li>
										<a href="websites">New Projects</a>
									</li>
									<li>
										<a href="websites">Add-ons and fixes</a>
									</li>
									<li>
										<a href="websites">API integrations</a>
									</li>
									<li>
										<a href="websites">Free Hosting</a>
									</li>
								</ul>
							</li>
							<li class="has-dropdown">
								<a href="services.html">E-Commerce</a>
								<ul class="dropdown">
									<li>
										<a href="#">$100 Websites</a>
									</li>
									<li>
										<a href="#">Stripe/Paypal integration</a>
									</li>
									<li>
										<a href="#">Custom Shopify Templates</a>
									</li>
									<li>
										<a href="#">E-Commerce with Login</a>
									</li>
								</ul>
							</li>
							<li class="has-dropdown">
								<a href="#">Mobile Apps</a>
								<ul class="dropdown">
									<li>
										<a href="#">iOS</a>
									</li>
									<li>
										<a href="#">Android</a>
									</li>
									<li>
										<a href="#">Web Apps</a>
									</li>
								</ul>
							</li>
							<li class="has-dropdown">
								<a href="#">Marketing</a>
								<ul class="dropdown">
									<li>
										<a href="#">Branding</a>
									</li>
									<li>
										<a href="#">Google and Facebook Ads</a>
									</li>
									<li>
										<a href="#">Marketing Campaigns</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="portfolio.html">Portfolio</a>
							</li>
							<li>
								<a href="contact.html">Contact</a>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</nav>`;

document.getElementById("header").innerHTML = header;

const footer = `<footer id="gtco-footer" role="contentinfo">
			<div class="gtco-container">
				<div class="row row-p	b-md">

					<div class="col-md-4">
						<div class="gtco-widget">
							<h3>About Us</h3>
							<p style="text-align: justify; text-justify: inter-word;">Founded by Kai Cianflone and Dana Ruscitti,<br/> South End Web Design helps small businesses power their brand online. Building fast and
								beautiful websites is our mission. We will also help you with digital marketing and branding to ensure your business
								brings in customers through your websites. Consult us today for all websites and mobile applications. </p>
						</div>
					</div>

					<div class="col-md-4 col-md-push-1">
						<div class="gtco-widget">
							<h3>Links</h3>
							<ul class="gtco-footer-links">
								<li>
									<a href="#">Websites</a>
								</li>
								<li>
									<a href="#">E-Commerce</a>
								</li>
								<li>
									<a href="#">Digital Marketing</a>
								</li>
								<li>
									<a href="#">Mobile Applications</a>
								</li>
								<li>
									<a href="#">API Integrations</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-md-4">
						<div class="gtco-widget">
							<h3>Get In Touch</h3>
							<ul class="gtco-quick-contact">
								<li>
									<a href="#">
										<i class="icon-phone"></i>(980) 226-2887</a>
								</li>
								<li>
									<a href="#">
										<i class="icon-mail2"></i> info@SouthEndWebDesign.com</a>
								</li>
								<li>
									<a href="#">
										<i class="icon-chat"></i> Live Chat</a>
								</li>
							</ul>
						</div>
					</div>

				</div>

				<div class="row copyright">
					<div class="col-md-12">
						<p class="pull-left">
							<small class="block">&copy; 2018 South End Web Design. All Rights Reserved.</small>
						</p>
						<p class="pull-right">
							<ul class="gtco-social-icons pull-right">
								<li>
									<a href="#">
										<i class="ti-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="ti-facebook"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="ti-linkedin"></i>
									</a>
								</li>
								<li>
									<a href="#">
										<i class="ti-instagram"></i>
									</a>
								</li>
							</ul>
						</p>
					</div>
				</div>

			</div>
		</footer>`;

document.getElementById("footer").innerHTML = footer;

const contact = `<div id="gtco-subscribe">
<div class="gtco-container">
  <div class="row ">
    <div class="col-md-8 col-md-offset-2 text-center gtco-heading">
      <h2>Quick Contact</h2>
      <p>Sign up below to have our team reach out to you for a free quote.</p>
      <p>Have more time? Fill out our web design contact form here</p>
    </div>
  </div>
  <div class="row ">
    <div class="col-md-12">
      <form class="form-inline">
        <div class="col-md-4 col-sm-4">
          <div class="form-group">
            <label for="email" class="sr-only">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Your Email">
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="form-group">
            <label for="name" class="sr-only">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Your Name">
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <button type="submit" class="btn btn-default btn-block">Contact</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>`;

document.getElementById("contact").innerHTML = contact;

const mobileMenuOutsideClick = function() {
  $(document).click(function(e) {
    var container = $("#gtco-offcanvas, .js-gtco-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".js-gtco-nav-toggle").addClass("gtco-nav-white");

      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas");
        $(".js-gtco-nav-toggle").removeClass("active");
      }
    }
  });
};

const offcanvasMenu = function() {
  $("#page").prepend('<div id="gtco-offcanvas" />');
  $("#page").prepend(
    '<a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>'
  );
  var clone1 = $(".menu-1 > ul").clone();
  $("#gtco-offcanvas").append(clone1);
  var clone2 = $(".menu-2 > ul").clone();
  $("#gtco-offcanvas").append(clone2);

  $("#gtco-offcanvas .has-dropdown").addClass("offcanvas-has-dropdown");
  $("#gtco-offcanvas")
    .find("li")
    .removeClass("has-dropdown");

  // Hover dropdown menu on mobile
  $(".offcanvas-has-dropdown")
    .mouseenter(function() {
      var $this = $(this);

      $this
        .addClass("active")
        .find("ul")
        .slideDown(500, "easeOutExpo");
    })
    .mouseleave(function() {
      var $this = $(this);
      $this
        .removeClass("active")
        .find("ul")
        .slideUp(500, "easeOutExpo");
    });

  $(window).resize(function() {
    if ($("body").hasClass("offcanvas")) {
      $("body").removeClass("offcanvas");
      $(".js-gtco-nav-toggle").removeClass("active");
    }
  });
};

const burgerMenu = function() {
  $("body").on("click", ".js-gtco-nav-toggle", function(event) {
    var $this = $(this);

    if ($("body").hasClass("overflow offcanvas")) {
      $("body").removeClass("overflow offcanvas");
    } else {
      $("body").addClass("overflow offcanvas");
    }
    $this.toggleClass("active");
    event.preventDefault();
  });
};

const dropdown = function() {
  $(".has-dropdown")
    .mouseenter(function() {
      var $this = $(this);
      $this
        .find(".dropdown")
        .css("display", "block")
        .addClass("animated-fast fadeInUpMenu");
    })
    .mouseleave(function() {
      var $this = $(this);

      $this
        .find(".dropdown")
        .css("display", "none")
        .removeClass("animated-fast fadeInUpMenu");
    });
};

const owlCarousel = function() {
  var owl = $(".owl-carousel-carousel");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    smartSpeed: 800,
    autoHeight: true,
    navText: [
      "<i class='ti-arrow-left owl-direction'></i>",
      "<i class='ti-arrow-right owl-direction'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  var owl = $(".owl-carousel-fullwidth");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    smartSpeed: 800,
    autoHeight: true,
    navText: [
      "<i class='ti-arrow-left owl-direction'></i>",
      "<i class='ti-arrow-right owl-direction'></i>"
    ]
  });
};

const tabs = function() {
  // Auto adjust height
  $(".gtco-tab-content-wrap").css("height", 0);
  var autoHeight = function() {
    setTimeout(function() {
      var tabContentWrap = $(".gtco-tab-content-wrap"),
        tabHeight = $(".gtco-tab-nav").outerHeight(),
        formActiveHeight = $(".tab-content.active").outerHeight(),
        totalHeight = parseInt(tabHeight + formActiveHeight + 90);

      tabContentWrap.css("height", totalHeight);

      $(window).resize(function() {
        var tabContentWrap = $(".gtco-tab-content-wrap"),
          tabHeight = $(".gtco-tab-nav").outerHeight(),
          formActiveHeight = $(".tab-content.active").outerHeight(),
          totalHeight = parseInt(tabHeight + formActiveHeight + 90);

        tabContentWrap.css("height", totalHeight);
      });
    }, 100);
  };

  autoHeight();

  // Click tab menu
  $(".gtco-tab-nav a").on("click", function(event) {
    var $this = $(this),
      tab = $this.data("tab");

    $(".tab-content").addClass("animated-fast fadeOutDown");

    $(".tab-content").removeClass("active");

    $(".gtco-tab-nav li").removeClass("active");

    $this.closest("li").addClass("active");

    $this
      .closest(".gtco-tabs")
      .find('.tab-content[data-tab-content="' + tab + '"]')
      .removeClass("animated-fast fadeOutDown")
      .addClass("animated-fast active fadeIn");

    autoHeight();
    event.preventDefault();
  });
};

var goToTop = function() {
  $(".js-gotop").on("click", function(event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("html").offset().top
      },
      500,
      "easeInOutExpo"
    );

    return false;
  });

  $(window).scroll(function() {
    var $win = $(window);
    if ($win.scrollTop() > 200) {
      $(".js-top").addClass("active");
    } else {
      $(".js-top").removeClass("active");
    }
  });
};

// Loading page
const loaderPage = function() {
  $(".gtco-loader").fadeOut("slow");
};

const counter = function() {
  $(".js-counter").countTo({
    formatter: function(value, options) {
      return value.toFixed(options.decimals);
    }
  });
};

const counterWayPoint = function() {
  if ($("#gtco-counter").length > 0) {
    $("#gtco-counter").waypoint(
      function(direction) {
        if (direction === "down" && !$(this.element).hasClass("animated")) {
          setTimeout(counter, 400);
          $(this.element).addClass("animated");
        }
      },
      { offset: "90%" }
    );
  }
};

mobileMenuOutsideClick();
offcanvasMenu();
burgerMenu();
dropdown();
owlCarousel();
tabs();
goToTop();
loaderPage();
counterWayPoint();
