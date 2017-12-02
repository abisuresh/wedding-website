//Displaying and keeping appropriate tab content open
function openPage(event, pageName) {
    // Variables in tabs code
    var i, tabcontent, tablinks;

    // Hiding tab content until tab is clicked
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Removing the automatic active setting of the class of tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Displaying only the tab that was clicked on
    document.getElementById(pageName).style.display = "block";
    event.currentTarget.className += " active";

}

//Creating modals for images to allow for popup displays with title underneath photo

//Allison's Grad-1

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('grad');
var modalImg = document.getElementById("gen1");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

//Brewery Festival- 2

var modal2 = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('brewery');
var modalImg2 = document.getElementById("gen1");
var captionText2 = document.getElementById("caption");
img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
};

//Mom's Grad-3

var modal3 = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('momgrad');
var modalImg3 = document.getElementById("gen1");
var captionText3 = document.getElementById("caption");
img3.onclick = function () {
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
    modal3.style.display = "none";
};

//Covered Bridges-4

var modal4 = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img4 = document.getElementById('running');
var modalImg4 = document.getElementById("gen1");
var captionText4 = document.getElementById("caption");
img4.onclick = function () {
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span4.onclick = function () {
    modal4.style.display = "none";
};

//Flight picture-5

var modal5 = document.getElementById('myModal');

var img5 = document.getElementById('flight');
var modalImg5 = document.getElementById("gen1");
var captionText5 = document.getElementById("caption");
img5.onclick = function () {
    modal5.style.display = "block";
    modalImg5.src = this.src;
    captionText5.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span5.onclick = function () {
    modal5.style.display = "none";
};


//Picture from Chelsea & Sam's wedding-6

var modal6 = document.getElementById('myModal');

var img6 = document.getElementById('wedding');
var modalImg6 = document.getElementById("gen1");
var captionText6 = document.getElementById("caption");
img6.onclick = function () {
    modal6.style.display = "block";
    modalImg6.src = this.src;
    captionText6.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span6.onclick = function () {
    modal6.style.display = "none";
};

//Picture TWO from Chelsea & Sam's wedding-7

var modal7 = document.getElementById('myModal');

var img7 = document.getElementById('wedding2');
var modalImg7 = document.getElementById("gen1");
var captionText7 = document.getElementById("caption");
img7.onclick = function () {
    modal7.style.display = "block";
    modalImg7.src = this.src;
    captionText7.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span7 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span7.onclick = function () {
    modal7.style.display = "none";
};

//Christmas 2016 picture-8
var modal8 = document.getElementById('myModal');

var img8 = document.getElementById('xmas');
var modalImg8 = document.getElementById("gen1");
var captionText8 = document.getElementById("caption");
img8.onclick = function () {
    modal8.style.display = "block";
    modalImg8.src = this.src;
    captionText8.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span8 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span8.onclick = function () {
    modal8.style.display = "none";
};

//Happy engagement picture-9
var modal9 = document.getElementById('myModal');

var img9 = document.getElementById('happyeng');
var modalImg9 = document.getElementById("gen1");
var captionText9 = document.getElementById("caption");
img9.onclick = function () {
    modal9.style.display = "block";
    modalImg9.src = this.src;
    captionText9.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span9 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span9.onclick = function () {
    modal9.style.display = "none";
};

//Bench engagement picture-10
var modal10 = document.getElementById('myModal');

var img10 = document.getElementById('bencheng');
var modalImg10 = document.getElementById("gen1");
var captionText10 = document.getElementById("caption");
img10.onclick = function () {
    modal10.style.display = "block";
    modalImg10.src = this.src;
    captionText10.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span10 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span10.onclick = function () {
    modal10.style.display = "none";
};


//Ring engagement picture-11
var modal11 = document.getElementById('myModal');

var img11 = document.getElementById('ringeng');
var modalImg11 = document.getElementById("gen1");
var captionText11 = document.getElementById("caption");
img11.onclick = function () {
    modal11.style.display = "block";
    modalImg11.src = this.src;
    captionText11.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span11 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span11.onclick = function () {
    modal11.style.display = "none";
};


//hug engagement picture-12
var modal12 = document.getElementById('myModal');

var img12 = document.getElementById('hugeng');
var modalImg12 = document.getElementById("gen1");
var captionText12 = document.getElementById("caption");
img12.onclick = function () {
    modal12.style.display = "block";
    modalImg12.src = this.src;
    captionText12.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span12 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span12.onclick = function () {
    modal12.style.display = "none";
};

//eyes engagement picture-13
var modal13 = document.getElementById('myModal');

var img13 = document.getElementById('eyeseng');
var modalImg13 = document.getElementById("gen1");
var captionText13 = document.getElementById("caption");
img13.onclick = function () {
    modal13.style.display = "block";
    modalImg13.src = this.src;
    captionText13.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span13 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span13.onclick = function () {
    modal13.style.display = "none";
};


