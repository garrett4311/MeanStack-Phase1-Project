
function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}

function validateForm() {

    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var rank = document.contactForm.rank.value;

    var nameErr = emailErr = mobileErr = rankErr = true;

    //validate name
    if (name =="") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    //validate email
    if (email =="") {
        printError("emailErr", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    //validate mobile number
    if (mobile =="") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{2}\d{3}\d{4}$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    //validate mobile number
    if (rank =="Select") {
        printError("rankErr", "Please enter your rank");
    } else {
        printError("rankErr", "");
        rankErr = false;
    }

    if (nameErr || emailErr || mobileErr || rankErr == true) {
        return false;
    } else {
        alert('You have submitted the form.')
    }

}

function addArticle() {
    var inputTitle = document.getElementById("newArticleTitle").value
    var text = document.createTextNode(inputTitle)
    var h2 = document.createElement('h2');
    h2.appendChild(text);
    var inputArticle = document.getElementById("newArticle").value
    var text2 = document.createTextNode(inputArticle)
    var p = document.createElement('p');
    p.appendChild(text2);
    if (inputTitle === '' || inputArticle === ''){
        alert('You must write something')
    } else {
        document.getElementById('newArticleSlot').appendChild(h2);
        document.getElementById('newArticleSlot').appendChild(p);
        document.getElementById('newArticleTitle').value = '';
        document.getElementById('newArticle').value = '';
    }
}