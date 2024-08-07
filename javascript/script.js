function Home() {
    gsap.to(".row", {
        scale: 1,
    })

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home_section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: ".home_section",

        }
    })

    tl.to(".home_video", {
        "--clip" : "0%",
        ease: Power2, 
    },"a")

    tl.to(
        ".home_row",
        {
          scale: 1,
          ease: Power2,
        },
        "a"
    );

    tl.to(".left", {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
    },"b")

    
    tl.to(".right", {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
    },"b")
}

Home();