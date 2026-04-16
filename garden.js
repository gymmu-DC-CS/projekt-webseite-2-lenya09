// Toggle checklist item
function toggleItem(element, id){
    element.classList.toggle("done");

    // Save state
    if(element.classList.contains("done")){
        localStorage.setItem(id, "true");
    } else {
        localStorage.removeItem(id);
    }
}

// Load saved state when page opens
window.onload = function(){
    const items = document.querySelectorAll(".checklist li");

    items.forEach((item, index) => {
        let id = "item" + (index + 1);

        if(localStorage.getItem(id) === "true"){
            item.classList.add("done");
        }

        // Re-attach click with correct ID
        item.setAttribute("onclick", `toggleItem(this, '${id}')`);
    });
};