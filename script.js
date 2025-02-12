const h2 = document.createElement("h2");
h2.textContent = "I am currently employed as a teacher, but am looking to switch careers. I want to become a software engineer. In order to accomplish my goal I have enrolled in flatiron school. I am very excited about what I am learning and I can't wait to tackle new problems with my newfound abilities."

//document.querySelector("body").appendChild(h2);



let myButton = document.getElementById("whiteSpace");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollToSection(sectionID) {
    const section = document.getElementById(sectionID);
    if (section) {
        section.scrollIntoView({behavior: 'smooth'})
    }
}