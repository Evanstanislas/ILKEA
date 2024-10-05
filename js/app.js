document.addEventListener('DOMContentLoaded', function () {
    // Fetch and inject header
    fetch('../components/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data + document.body.innerHTML;
        });

    // Fetch and inject footer
    fetch('../components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML += data;
        });

    
});

// Member Validate function
function validate (e){
    e.preventDefault()
    const username= document.getElementById('username')
    const password= document.getElementById('pass')
    const email= document.getElementById('email')
    const age= document.getElementById('age')
    const checkbox= document.getElementById('checkbox')

    if(username.value.length<5){
        alert("Username must be more than 5 characters")
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("You must use your gmail")
    }
    else if (age.value<18){
        alert("You're underaged. You need your guardian to help you enter the family")
    }
    else if (!(male.value||female.value)){
        alert("Fill in your gender");
    }
    else if (password.value.length==0){
        alert("Password can't be empty")
    }
    else if(address.value.length==0){
        alert("Address can't be empty")
    }
    else if(!checkbox.checked){
        alert("You need to approve the ILKEA Sinar Abadi's T&C")
    }
    else{
        if(confirm("Press to confirm your registration")){
            alert("Welcome to ILKEA's family! Hope you have fun!")
        }
    }
    
}

let slideIndex = 0;
    function showSlides() {
        let slides = document.getElementsByClassName("slides");
    
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
    
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
    
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 15000);
    }

    function showSlidesManual(n) {
        let slides = document.getElementsByClassName("slides");
    
        if (n > slides.length) {
            slideIndex = 1;
        }
    
        if (n < 1) {
            slideIndex = slides.length;
        }
    
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    
        slides[slideIndex - 1].style.display = "block";
    }

    function plusSlides(n) {
        showSlidesManual(slideIndex += n);
    }

    showSlides();