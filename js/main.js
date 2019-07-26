$(document).ready(function() {
  // Animate SVG
  function animateSVG(target, percent) {
    var path = $(target).get(0);
    var pathLen = path.getTotalLength();
    var adjustedLen = (percent * pathLen) / 100;
    path.setAttribute("stroke-dasharray", adjustedLen + " " + pathLen);
  }

  function initCircle() {
    animateSVG("#circle", 0);
  }

  // Move buildings background
  function moveBuildingsBackground() {
    var tweenMaxRepeat = new TimelineMax({ repeat: -1 });

    tweenMaxRepeat
      .to("#buildings", 1, {
        backgroundPosition: "30% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 2, {
        // Return 0
        backgroundPosition: "0% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 3, {
        // Delay on 0
        backgroundPosition: "0% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "50% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 0.8, {
        backgroundPosition: "48% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "60% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1.2, {
        backgroundPosition: "48% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 0.2, {
        backgroundPosition: "48% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "50% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 0.5, {
        backgroundPosition: "50% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "60% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 0.2, {
        // Delay on 60
        backgroundPosition: "60% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "80% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "78% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "82% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "75% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        backgroundPosition: "98% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1.5, {
        backgroundPosition: "35% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1, {
        // Delay on 35
        backgroundPosition: "35% 100%",
        ease: Linear.easeNone
      })
      .to("#buildings", 1.2, {
        backgroundPosition: "0% 100%",
        ease: Linear.easeNone
      });
  }

  // Animate title
  function animateTitle() {
    $("#future_title").textillate({
      type: "char",
      in: {
        effect: "fadeInUp",
        delayScale: 0.8,
        delay: 40,
        callback: function() {
          // console.log("Finished loading title");
        }
      },
      out: {
        effect: "none"
      }
    });
  }

  function animatePoints() {
    // Get point child element
    var time = 0.1;

    for (i = 1; i < 40; i++) {
      var point = $(`.main .future-of-hr-tech .animation-container .circle-container .invisible-circle .point-container:nth-child(${i}) .point`);

      point.addClass("with-animation");
      point.css({ "animation-delay": `${time}s` });
      time += 0.05;
    }
  }

  // Animate circle
  function animateCircle() {
    // Get circle element
    var circleSVG = $("#circle");
    // Adding stroke color
    circleSVG.css({ stroke: "#000000" });
    // Adding class to enable transition
    circleSVG.attr("class", "with-transition");

    animateSVG("#circle", 100);

    // Run animate points
    setTimeout(function() {
      animatePoints();
    }, 200);
  }

  // Animate blue circle
  function animateBlueCircle() {
    var tweenMax = new TimelineMax();

    tweenMax.to("#blue_circle", 0.85, {
      opacity: 1,
      scale: 1,
      ease: Linear.easeNone,
      delay: 0
    });
  }

  // Animate iphone
  function animateIphone() {
    var tweenMax = new TimelineMax();

    tweenMax.to("#iphone", 0.6, {
      opacity: 1,
      scale: 1,
      ease: Linear.easeNone,
      delay: 0
    });
  }

  // Animate button Executive & Manager Insights
  function animateButtonExecutiveManager() {
    var tweenMax = new TimelineMax();

    tweenMax
      .to(".animate.executive-manager", 0.6, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".animate.executive-manager",
        0.6,
        {
          y: 0,
          ease: Power1.easeOut
        },
        "-=0.6"
      );
  }

  // Animate button Data Explorers
  function animateButtonDataExplorers() {
    var tweenMax = new TimelineMax();

    tweenMax
      .to(".animate.data-explorers", 0.6, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".animate.data-explorers",
        0.6,
        {
          x: 0,
          ease: Power1.easeOut
        },
        "-=0.6"
      );
  }

  // Animate button Reporting & Analytics
  function animateButtonReportingAnalytics() {
    var tweenMax = new TimelineMax();

    tweenMax
      .to(".animate.reporting-analytics", 0.6, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".animate.reporting-analytics",
        0.6,
        {
          y: 0,
          ease: Power1.easeOut
        },
        "-=0.6"
      );
  }

  // Animate button Benchmarking
  function animateButtonBenchmarking() {
    var tweenMax = new TimelineMax();

    tweenMax
      .to(".animate.benchmarking", 0.6, {
        opacity: 1,
        ease: Linear.easeNone
      })
      .to(
        ".animate.benchmarking",
        0.6,
        {
          x: 0,
          ease: Power1.easeOut
        },
        "-=0.6"
      );
  }

  // Collapse and add/remove active class to button
  function collapseAndActive(button, block) {
    block.slideToggle(300, function() {
      if (block.css("display") === "block") {
        $(this).addClass("active");
        button.addClass("active");
      } else {
        $(this).removeClass("active");
        button.removeClass("active");
      }
    });
  }

  function hidePreviousCollapse(currentIndex) {
    var selectors = ["executive-manager", "data-explorers", "reporting-analytics", "benchmarking"];

    selectors.forEach(function(item, index) {
      if (index != currentIndex) {
        var block = $(`.description.mobile.${item}`);
        var button = $(`.button.mobile.${item}`);

        if (block.hasClass("active")) {
          collapseAndActive(button, block);
        }
      }
    });
  }

  // Button mobile click listener - Executive & Manager Insights
  $(".button.mobile.executive-manager").click(function() {
    var buttonElement = $(this);
    var blockElement = $(".description.mobile.executive-manager");

    hidePreviousCollapse(0);
    collapseAndActive(buttonElement, blockElement);
  });

  // Button mobile click listener - Data Explorers
  $(".button.mobile.data-explorers").click(function() {
    var buttonElement = $(this);
    var blockElement = $(".description.mobile.data-explorers");

    hidePreviousCollapse(1);
    collapseAndActive(buttonElement, blockElement);
  });

  // Button mobile click listener - Reporting & Analytics
  $(".button.mobile.reporting-analytics").click(function() {
    var buttonElement = $(this);
    var blockElement = $(".description.mobile.reporting-analytics");

    hidePreviousCollapse(2);
    collapseAndActive(buttonElement, blockElement);
  });

  // Button mobile click listener - Benchmarking
  $(".button.mobile.benchmarking").click(function() {
    var buttonElement = $(this);
    var blockElement = $(".description.mobile.benchmarking");

    hidePreviousCollapse(3);
    collapseAndActive(buttonElement, blockElement);
  });

  function addTextillateToInformation() {
    var titles = ["#executive_manager_title", "#data_explorers_title", "#reporting_analytics_title", "#benchmarking_title"];
    var descriptions = ["#executive_manager_description", "#data_explorers_description", "#reporting_analytics_description", "#benchmarking_description"];
    var containers = [".description.desktop.executive-manager", ".description.desktop.data-explorers", ".description.desktop.reporting-analytics", ".description.desktop.benchmarking"];

    titles.forEach((title, count) => {
      $(title).textillate({
        type: "char",
        autoStart: false,
        loop: true,
        in: {
          effect: "fadeInLeft",
          delayScale: 0.5,
          callback: function() {
            $(descriptions[count]).textillate("in");
          }
        },
        out: {
          effect: "fadeOutLeft",
          delayScale: 0.5,
          callback: function() {
            $(containers[count]).fadeOut(10);
          }
        }
      });
    });

    descriptions.forEach((description, count) => {
      $(description).textillate({
        type: "word",
        autoStart: false,
        loop: true,
        in: {
          effect: "fadeInDown",
          delayScale: 0.5,
          sync: true
        },
        out: {
          effect: "fadeOutUp",
          delayScale: 0.5,
          sync: true,
          callback: function() {
            $(titles[count]).textillate("out");
          }
        }
      });
    });
  }

  function closeNonActiveDescriptions(index) {
    var buttons = [".button.desktop.executive-manager", ".button.desktop.data-explorers", ".button.desktop.reporting-analytics", ".button.desktop.benchmarking"];
    var containers = [".description.desktop.executive-manager", ".description.desktop.data-explorers", ".description.desktop.reporting-analytics", ".description.desktop.benchmarking"];
    var descriptions = ["#executive_manager_description", "#data_explorers_description", "#reporting_analytics_description", "#benchmarking_description"];

    descriptions.forEach((description, count) => {
      if (count != index) {
        if ($(containers[count]).hasClass("active")) {
          $(description).textillate("out");

          $(buttons[count]).removeClass("active");
          $(containers[count]).removeClass("active");
        }
      }
    });
  }

  // Show descriptions with animation
  async function animateShowDescriptions(timer = 0, index, button, container, title) {
    return new Promise(function(resolve, reject) {
      closeNonActiveDescriptions(index);

      setTimeout(() => {
        $(container).fadeIn(10, () => {
          $(title).textillate("in");
          $(button).addClass("active");
          $(container).addClass("active");
        });

        setTimeout(() => {
          resolve("Done!");
        }, 4000);
      }, 3500);

      // if (ready) {
      //   resolve("Done!");
      // } else {
      //   reject(Error("Failed!"));
      // }
    });
  }

  function animateALL() {
    // // Animate description Executive Manager
    // try {
    //   let result = await console.log(result);
    // } catch (err) {
    //   console.log(err);
    // }
    // // Animate description Data Explorers
    // try {
    //   let result1 = await animateShowDescriptions(1, 1, ".button.desktop.data-explorers", ".description.desktop.executive-manager", "#executive_manager_title");
    //   console.log(result1);
    // } catch (err) {
    //   console.log(err);
    // }

    animateShowDescriptions(2, 0, ".button.desktop.executive-manager", ".description.desktop.data-explorers", "#data_explorers_title")
      .then(function whenOk(response) {
        console.log(response);
        return response;
      })
      .catch(function notOk(err) {
        console.error(err);
      });
  }

  // Run ALL animations
  function playAnimations() {
    // Run init cicle
    initCircle();

    // Run init textillate
    addTextillateToInformation();

    // Run move buildings background
    moveBuildingsBackground();

    // Run animate blue circle
    animateBlueCircle();
    // Run animate title
    animateTitle();

    let timer = 500;

    // Run animate iphone
    setTimeout(function() {
      animateIphone();
    }, timer);

    // Reset timer
    timer = 250;

    // Run animate button Executive & Manager Insights
    setTimeout(function() {
      animateButtonExecutiveManager();
    }, timer * 2);

    // Run animate button Data Explorers
    setTimeout(function() {
      animateButtonDataExplorers();
    }, timer * 3);

    // Run animate button Reporting & Analytics
    setTimeout(function() {
      animateButtonReportingAnalytics();
    }, timer * 4);

    // Run animate button Benchmarking
    setTimeout(function() {
      animateButtonBenchmarking();
    }, timer * 5);

    // Run animate circle
    setTimeout(function() {
      animateCircle();
    }, timer * 5);

    // Reset timer
    timer = 4800;

    // Run animate descriptions
    // setTimeout(function() {

    setTimeout(function() {
      animateALL();
    }, 1000);

    // setTimeout(function() {
    //
    // }, 10000);

    //   // Animate description Reporting & Analytics
    // await animateShowDescriptions( 3, 2, ".button.desktop.reporting-analytics", ".description.desktop.reporting-analytics", "#reporting_analytics_title"
    //   );

    //   // Animate description Benchmarking
    //   animateShowDescriptions( 4, 3, ".button.desktop.benchmarking", ".description.desktop.benchmarking", "#benchmarking_title"
    //   );
    // }, timer);
  }

  playAnimations();
});
