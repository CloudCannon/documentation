if (!document.querySelector("body").classList.contains("cms-editor-active")) {
    
    var headings = document.querySelectorAll("h3[id], h4[id], h5[id], h6[id]");
    
    for (var i = 0; i < headings.length; i++) {
    	var anchorLink = document.createElement("a");
    	anchorLink.innerText = "#";
    	anchorLink.href = "#" + headings[i].id;
    	anchorLink.classList.add("header-link");
    
    	headings[i].appendChild(anchorLink);
    }
} else {
    console.log(document.querySelector("body").classList);
}

