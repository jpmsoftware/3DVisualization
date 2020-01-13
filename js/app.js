var header = document.getElementById("header");

window.onscroll = function(){
    if(window.pageYOffset >= this.header.offsetTop)
    {
        this.header.classList.add("sticky")
    }
    else{
        this.header.classList.remove("sticky");
    }
}