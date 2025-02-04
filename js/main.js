$(document).ready(() => {
  let informationFirstTime = true;

  // Animate SVG
  function animateSVG(target, percent) {
    let path = $(target).get(0);
    let pathLen = path.getTotalLength();
    let adjustedLen = (percent * pathLen) / 100;
    path.setAttribute("stroke-dasharray", adjustedLen + " " + pathLen);
  }

  function initCircle() {
    animateSVG("#circle", 0);
  }

  // Move buildings background
  function moveBuildingsBackground() {
    let tweenMaxRepeat = new TimelineMax({ repeat: -1 });

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
        callback: () => {
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
    let time = 0.1;

    for (i = 1; i < 40; i++) {
      let point = $(`.main .future-of-hr-tech .animation-container .circle-container .invisible-circle .point-container:nth-child(${i}) .point`);

      point.addClass("with-animation");
      point.css({ "animation-delay": `${time}s` });
      time += 0.05;
    }
  }

  // Animate circle
  function animateCircle() {
    // Get circle element
    let circleSVG = $("#circle");
    // Adding stroke color
    circleSVG.css({ stroke: "#000000" });
    // Adding class to enable transition
    circleSVG.attr("class", "with-transition");

    animateSVG("#circle", 100);

    // Run animate points
    setTimeout(() => {
      animatePoints();
    }, 200);
  }

  // Animate blue circle
  function animateBlueCircle() {
    let tweenMax = new TimelineMax();

    tweenMax.to("#blue_circle", 0.85, {
      opacity: 1,
      scale: 1,
      ease: Linear.easeNone,
      delay: 0
    });
  }

  // Animate iphone
  function animateIphone() {
    let tweenMax = new TimelineMax();

    tweenMax.to("#iphone", 0.6, {
      opacity: 1,
      scale: 1,
      ease: Linear.easeNone,
      delay: 0
    });
  }

  // Animate button Executive & Manager Insights
  function animateButtonExecutiveManager() {
    let tweenMax = new TimelineMax();

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
    let tweenMax = new TimelineMax();

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
    let tweenMax = new TimelineMax();

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
    let tweenMax = new TimelineMax();

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
    let selectors = ["executive-manager", "data-explorers", "reporting-analytics", "benchmarking"];

    selectors.forEach(function(item, index) {
      if (index != currentIndex) {
        let block = $(`.description.mobile.${item}`);
        let button = $(`.button.mobile.${item}`);

        if (block.hasClass("active")) {
          collapseAndActive(button, block);
        }
      }
    });
  }

  // Activate mobile buttons click listeners
  function ActivateButtonsMobileListers() {
    // Button mobile click listener - Executive & Manager Insights
    $(".button.mobile.executive-manager").click(function() {
      let buttonElement = $(this);
      let blockElement = $(".description.mobile.executive-manager");
      
      hidePreviousCollapse(0);
      collapseAndActive(buttonElement, blockElement);
    });

    // Button mobile click listener - Data Explorers
    $(".button.mobile.data-explorers").click(function() {
      let buttonElement = $(this);
      let blockElement = $(".description.mobile.data-explorers");

      hidePreviousCollapse(1);
      collapseAndActive(buttonElement, blockElement);
    });

    // Button mobile click listener - Reporting & Analytics
    $(".button.mobile.reporting-analytics").click(function() {
      let buttonElement = $(this);
      let blockElement = $(".description.mobile.reporting-analytics");

      hidePreviousCollapse(2);
      collapseAndActive(buttonElement, blockElement);
    });

    // Button mobile click listener - Benchmarking
    $(".button.mobile.benchmarking").click(function() {
      let buttonElement = $(this);
      let blockElement = $(".description.mobile.benchmarking");

      hidePreviousCollapse(3);
      collapseAndActive(buttonElement, blockElement);
    });
  }

  // Add Textillate properties to informations
  function addTextillateToInformation() {
    let titles = ["#executive_manager_title", "#data_explorers_title", "#reporting_analytics_title", "#benchmarking_title"];
    let descriptions = [
      "#executive_manager_description",
      "#data_explorers_description",
      "#reporting_analytics_description",
      "#benchmarking_description"
    ];
    let containers = [
      ".description.desktop.executive-manager",
      ".description.desktop.data-explorers",
      ".description.desktop.reporting-analytics",
      ".description.desktop.benchmarking"
    ];

    titles.forEach((title, count) => {
      $(title).textillate({
        type: "char",
        autoStart: false,
        loop: true,
        in: {
          effect: "fadeInLeft",
          delayScale: 0.5,
          callback: () => {
            $(descriptions[count]).textillate("in");
          }
        },
        out: {
          effect: "fadeOutLeft",
          delayScale: 0.5,
          callback: () => {
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
          callback: () => {
            $(titles[count]).textillate("out");
          }
        }
      });
    });
  }

  // Remove inactive class from buttons
  function removeInactiveState() {
    let buttons = [
      ".button.desktop.executive-manager",
      ".button.desktop.data-explorers",
      ".button.desktop.reporting-analytics",
      ".button.desktop.benchmarking"
    ];

    buttons.forEach(button => {
      if ($(button).hasClass("inactive")) {
        $(button).removeClass("inactive");
      }
    });

    // Run activate desktop buttons click listeners
    ActivateButtonsDesktopListeners();
  }

  // Activate desktop buttons click listeners
  function DeactivateButtonsDesktopListeners() {
    // Button desktop click listener - Executive & Manager Insights
    $(".button.desktop.executive-manager").unbind("click");

    // Button desktop click listener - Data Explorers
    $(".button.desktop.data-explorers").unbind("click");

    // Button desktop click listener - Reporting & Analytics
    $(".button.desktop.reporting-analytics").unbind("click");

    // Button desktop click listener - Benchmarking
    $(".button.desktop.benchmarking").unbind("click");
  }

  // Remove listeners from buttons
  function removeListenersToButtons() {
    // Run deactivate desktop buttons click listeners
    DeactivateButtonsDesktopListeners();

    let buttons = [
      ".button.desktop.executive-manager",
      ".button.desktop.data-explorers",
      ".button.desktop.reporting-analytics",
      ".button.desktop.benchmarking"
    ];

    buttons.forEach(button => {
      $(button).addClass("inactive");
    });
  }

  // Close non active informations
  function closeNonActiveDescriptions(index) {
    let tweenMax = new TimelineMax();
    let buttons = [
      ".button.desktop.executive-manager",
      ".button.desktop.data-explorers",
      ".button.desktop.reporting-analytics",
      ".button.desktop.benchmarking"
    ];
    let containers = [
      ".description.desktop.executive-manager",
      ".description.desktop.data-explorers",
      ".description.desktop.reporting-analytics",
      ".description.desktop.benchmarking"
    ];
    let descriptions = [
      "#executive_manager_description",
      "#data_explorers_description",
      "#reporting_analytics_description",
      "#benchmarking_description"
    ];
    let circleTitles = [
      ".circle-title.executive-manager",
      ".circle-title.data-explorers",
      ".circle-title.reporting-analytics",
      ".circle-title.benchmarking"
    ];

    descriptions.forEach((description, count) => {
      if (count != index) {
        if ($(containers[count]).hasClass("active")) {
          $(description).textillate("out");

          setTimeout(() => {
            tweenMax
              .to(circleTitles[count], 0.5, { scale: 1.1, ease: Linear.easeNone })
              .to(circleTitles[count], 0.2, { scale: 1, ease: Linear.easeNone });
          }, 1500);

          setTimeout(() => {
            $(containers[count]).removeClass("active");
            $(buttons[count]).removeClass("active");
          }, 2000);
        }
      }
    });
  }

  // Close non active informations on click
  async function closeNonActiveClickDescriptions(index) {
    let tweenMax = new TimelineMax();
    let circleTitles = [
      ".circle-title.executive-manager",
      ".circle-title.data-explorers",
      ".circle-title.reporting-analytics",
      ".circle-title.benchmarking"
    ];

    removeListenersToButtons();

    return new Promise(function(resolve) {
      let buttons = [
        ".button.desktop.executive-manager",
        ".button.desktop.data-explorers",
        ".button.desktop.reporting-analytics",
        ".button.desktop.benchmarking"
      ];
      let containers = [
        ".description.desktop.executive-manager",
        ".description.desktop.data-explorers",
        ".description.desktop.reporting-analytics",
        ".description.desktop.benchmarking"
      ];
      let descriptions = [
        "#executive_manager_description",
        "#data_explorers_description",
        "#reporting_analytics_description",
        "#benchmarking_description"
      ];

      descriptions.forEach((description, count) => {
        if (count != index) {
          if ($(containers[count]).hasClass("active")) {
            $(description).textillate("out");

            setTimeout(() => {
              tweenMax
                .to(circleTitles[count], 0.5, { scale: 1.1, ease: Linear.easeNone })
                .to(circleTitles[count], 0.2, { scale: 1, ease: Linear.easeNone });
            }, 1500);

            setTimeout(() => {
              $(containers[count]).removeClass("active");
              $(buttons[count]).removeClass("active");
            }, 2000);
          }
        }
      });

      setTimeout(() => {
        setTimeout(() => {
          ActivateButtonsDesktopListeners();
        }, 2500);
        resolve("Done!");
      }, 2500);
    });
  }

  // Show descriptions with animation
  async function animateShowDescriptions(index, button, container, title) {
    let tweenMax = new TimelineMax();
    let circleTitles = [
      ".circle-title.executive-manager",
      ".circle-title.data-explorers",
      ".circle-title.reporting-analytics",
      ".circle-title.benchmarking"
    ];
    let buttons = [
      ".button.desktop.executive-manager",
      ".button.desktop.data-explorers",
      ".button.desktop.reporting-analytics",
      ".button.desktop.benchmarking"
    ];

    return new Promise(function(resolve) {
      closeNonActiveDescriptions(index);

      setTimeout(() => {
        tweenMax
          .to(`${buttons[index]}>.explosion`, 0.45, { left: "-20pt", right: "-20pt", top: "-20pt", bottom: "-20pt", ease: Linear.easeNone })
          .to(`${buttons[index]}>.explosion`, 0.08, { borderWidth: 0, ease: Linear.easeNone }, "-=0.1");
        tweenMax.to(`${buttons[index]}>.explosion>.points-around`, 0.3, { scale: 2, opacity: 1, ease: Linear.easeNone }, "-=0.3");
        tweenMax.to(`${buttons[index]}>.explosion>.points-around>.points-container`, 0.4, { opacity: 0, ease: Linear.easeNone }, "-=0.3");
        tweenMax.to(`${buttons[index]}>.explosion>.points-around>.points-container>.point`, 0.4, { scale: 0, ease: Linear.easeNone }, "-=0.4");

        $(container).fadeIn(10, () => {
          tweenMax
            .to(circleTitles[index], 0.5, { scale: 1.1, ease: Linear.easeNone })
            .to(circleTitles[index], 0.4, { scale: 0, ease: Linear.easeNone }, "-=0.1");

          $(title).textillate("in");
          $(button).addClass("active");
          $(container).addClass("active");
        });

        setTimeout(() => {
          resolve("Done!");
        }, 4000);
      }, 3500);
    });
  }

  // Show descriptions with animation with click
  function animateShowDescriptionsClick(index, button, container, title) {
    let tweenMax = new TimelineMax();
    let circleTitles = [
      ".circle-title.executive-manager",
      ".circle-title.data-explorers",
      ".circle-title.reporting-analytics",
      ".circle-title.benchmarking"
    ];
    let buttons = [
      ".button.desktop.executive-manager",
      ".button.desktop.data-explorers",
      ".button.desktop.reporting-analytics",
      ".button.desktop.benchmarking"
    ];

    $(`${buttons[index]}>.explosion`).removeAttr("style");
    $(`${buttons[index]}>.explosion>.points-around`).removeAttr("style");
    $(`${buttons[index]}>.explosion>.points-around>.points-container`).removeAttr("style");
    $(`${buttons[index]}>.explosion>.points-around>.points-container>.point`).removeAttr("style");

    tweenMax
      .to(`${buttons[index]}>.explosion`, 0.45, { left: "-20pt", right: "-20pt", top: "-20pt", bottom: "-20pt", ease: Linear.easeNone })
      .to(`${buttons[index]}>.explosion`, 0.08, { borderWidth: 0, ease: Linear.easeNone }, "-=0.1");
    tweenMax.to(`${buttons[index]}>.explosion>.points-around`, 0.3, { scale: 2, opacity: 1, ease: Linear.easeNone }, "-=0.3");
    tweenMax.to(`${buttons[index]}>.explosion>.points-around>.points-container`, 0.4, { opacity: 0, ease: Linear.easeNone }, "-=0.3");
    tweenMax.to(`${buttons[index]}>.explosion>.points-around>.points-container>.point`, 0.4, { scale: 0, ease: Linear.easeNone }, "-=0.4");

    if (informationFirstTime) {
      $(container).fadeIn(10, () => {
        $(title).textillate("in");
        $(button).addClass("active");
        $(container).addClass("active");

        tweenMax
          .to(circleTitles[index], 0.5, { scale: 1.1, ease: Linear.easeNone })
          .to(circleTitles[index], 0.4, { scale: 0, ease: Linear.easeNone }, "-=0.1");
      });
    } else {
      closeNonActiveClickDescriptions(index).then(function(response) {
        // setTimeout(() => {
        $(container).fadeIn(10, () => {
          $(title).textillate("in");
          $(button).addClass("active");
          $(container).addClass("active");

          tweenMax
            .to(circleTitles[index], 0.5, { scale: 1.1, ease: Linear.easeNone })
            .to(circleTitles[index], 0.4, { scale: 0, ease: Linear.easeNone }, "-=0.1");
        });
        // }, 2000);
        // console.log(response);
        return;
      });
    }

    informationFirstTime = false;
  }

  // Activate desktop buttons click listeners
  function ActivateButtonsDesktopListeners() {
    let buttons = [
      ".button.desktop.executive-manager",
      ".button.desktop.data-explorers",
      ".button.desktop.reporting-analytics",
      ".button.desktop.benchmarking"
    ];

    buttons.forEach(button => {
      $(button).removeClass("inactive");
    });

    // Button desktop click listener - Executive & Manager Insights
    $(".button.desktop.executive-manager").click(() => {
      if (!$(this).hasClass("active")) {
        // Animate description Executive Manager
        animateShowDescriptionsClick(0, ".button.desktop.executive-manager", ".description.desktop.executive-manager", "#executive_manager_title");
      }
    });

    // Button desktop click listener - Data Explorers
    $(".button.desktop.data-explorers").click(() => {
      if (!$(this).hasClass("active")) {
        // Animate description Data Explorers
        animateShowDescriptionsClick(1, ".button.desktop.data-explorers", ".description.desktop.data-explorers", "#data_explorers_title");
      }
    });

    // Button desktop click listener - Reporting & Analytics
    $(".button.desktop.reporting-analytics").click(() => {
      if (!$(this).hasClass("active")) {
        // Animate description Reporting & Analytics
        animateShowDescriptionsClick(
          2,
          ".button.desktop.reporting-analytics",
          ".description.desktop.reporting-analytics",
          "#reporting_analytics_title"
        );
      }
    });

    // Button desktop click listener - Benchmarking
    $(".button.desktop.benchmarking").click(() => {
      if (!$(this).hasClass("active")) {
        // Animate description Benchmarking
        animateShowDescriptionsClick(3, ".button.desktop.benchmarking", ".description.desktop.benchmarking", "#benchmarking_title");
      }
    });
  }

  // Animate descriptions desktop
  function animateDescriptions() {
    // Animate description Executive Manager
    animateShowDescriptions(0, ".button.desktop.executive-manager", ".description.desktop.executive-manager", "#executive_manager_title").then(
      function(response) {
        // Animate description Data Explorers
        animateShowDescriptions(1, ".button.desktop.data-explorers", ".description.desktop.data-explorers", "#data_explorers_title").then(function(
          response
        ) {
          // Animate description Reporting & Analytics
          animateShowDescriptions(
            2,
            ".button.desktop.reporting-analytics",
            ".description.desktop.reporting-analytics",
            "#reporting_analytics_title"
          ).then(function(response) {
            // Animate description Benchmarking
            animateShowDescriptions(3, ".button.desktop.benchmarking", ".description.desktop.benchmarking", "#benchmarking_title").then(function(
              response
            ) {
              // return "Done";
              closeNonActiveDescriptions(1);

              setTimeout(() => {
                removeInactiveState();
              }, 2000);
            });
          });
        });
      }
    );
  }

  // Animate buttons titles
  function animateButtonsTitles() {
    let tweenMax = new TimelineMax();

    tweenMax
      .to(".circle-title.executive-manager", 0.5, { opacity: 1, ease: Linear.easeNone })
      .to(".circle-title.executive-manager", 0.5, { y: 0, ease: Power1.easeOut }, "-=0.5")
      .to(".circle-title.data-explorers", 0.5, { opacity: 1, ease: Linear.easeNone })
      .to(".circle-title.data-explorers", 0.5, { x: 0, ease: Power1.easeOut }, "-=0.5")
      .to(".circle-title.reporting-analytics", 0.5, { opacity: 1, ease: Linear.easeNone })
      .to(".circle-title.reporting-analytics", 0.5, { y: 0, ease: Power1.easeOut }, "-=0.5")
      .to(".circle-title.benchmarking", 0.5, { opacity: 1, ease: Linear.easeNone })
      .to(".circle-title.benchmarking", 0.5, { x: 0, ease: Power1.easeOut }, "-=0.5");
  }

  // Run ALL animations
  function playAnimations() {
    // Run init cicle
    initCircle();
    // Run activate mobile buttons click listeners
    ActivateButtonsMobileListers();

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
    setTimeout(() => {
      animateIphone();
    }, timer);

    // Reset timer
    timer = 250;

    // Run animate button Executive & Manager Insights
    setTimeout(() => {
      animateButtonExecutiveManager();
    }, timer * 2);

    // Run animate button Data Explorers
    setTimeout(() => {
      animateButtonDataExplorers();
    }, timer * 3);

    // Run animate button Reporting & Analytics
    setTimeout(() => {
      animateButtonReportingAnalytics();
    }, timer * 4);

    // Run animate button Benchmarking
    setTimeout(() => {
      animateButtonBenchmarking();
    }, timer * 5);

    // Run animate titles
    setTimeout(() => {
      animateButtonsTitles();
    }, timer * 6);

    // Run animate circle
    setTimeout(() => {
      animateCircle();
    }, timer * 13);

    // Run animate descriptions
    setTimeout(() => {
      animateDescriptions();
    }, 1500);
  }

  playAnimations();
});
