const input = document.querySelector("#add_item_input");
const form = document.querySelector("form");
const itemList = document.querySelector(".list");
let deleteIcons = document.querySelectorAll(".item button");

deleteIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let parent = icon.parentElement;
        itemList.removeChild(parent);
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.length != 0) {

        let div = document.createElement('div');
        div.setAttribute("class", "item");
        

        let p = document.createElement("p");
        p.textContent = input.value;
        let btn = document.createElement("button");
        let pic = document.createElement("img");
        pic.setAttribute("src", "assets/delete_icon.svg");
        pic.setAttribute("alt", "delete icon");

        btn.appendChild(pic);

        div.appendChild(p);
        div.appendChild(btn);

        itemList.appendChild(div);

        input.value = "";
        
        btn.addEventListener("click", () => {
            let parent = btn.parentElement;
            itemList.removeChild(parent);
        });
    };
});







