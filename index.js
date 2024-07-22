
// lensSize => width and height
const lensSize = 200;
function magnify (id,zoom){
    const el = document.getElementById(id);

    // cloneNode() method creates acopy of a node and returns the clone
    const copy = el.cloneNode(true);

    // createElement() method creates on HTML element specified by tagName
    const lens = document.createElement("div");

    // setAttribute() sets the value of an 
    // attribute on the specified element
    lens.setAttribute("id","lens")
    lens.style.width = lensSize + "px";
    lens.style.height = lensSize + "px";

    // appendChild() method is used to insert a new node
    el.appendChild(lens);

    // getBouncingClientRect() method returns the size of an element
    // and its position
    el.getBoundingClientRect();
    copy.style.zoom = zoom;
    lens.appendChild(copy);
    copy.style.width = (el.offsetWidth * zoom) + "px";
    copy.style.height = (el.offsetHeight * zoom) + "px";
    copy.style.position = "absolute";


    // mousemove is executed when a pointer is moving 
    // over an element
    el.addEventListener("mousemove", (ev) => {

        // preventDefault() method stops the default 
        // action of a selected element
        ev.preventDefault();
        ev.stopPropagation();
        const pos = getCursorPos(ev);
        lens.style.left = -(lensSize/2) + pos.x + "px";
        lens.style.top = -(lensSize/2) + pos.y + "px";
        copy.style.left = -(pos.x - el.offsetLeft) + (lensSize/zoom)*0.5 + "px";
        copy.style.top = -(pos.y - el.offsetTop) + (lensSize/zoom)*0.5 + "px";
    })
}

function getCursorPos(e){
    var x = (window.Event)? e.pageX:event.clientX + 
    (document.documentElement.scrollLeft ? 
        document.documentElement.scrollLeft:document.body.scrollLeft);
        var y = (window.Event)? e.pageY:event.clientY + 
        (document.documentElement.scrollTop ? 
            document.documentElement.scrollTop:document.body.scrollTop);
            return {x:x,y,y};
}

// zoom value
magnify("zoom", 4)