const inputTag = document.getElementsByClassName("inputBox")[0];
const ShoppingListTag = document.getElementsByClassName("shoppingList")[0];


const handleFunction = (event) => {
    const inputValue = event.target.value;
    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");
    const productDiv = document.createElement("div");
    productDiv.classList.add("products");
    productDiv.addEventListener('click', () => {
        const classExit = productDiv.classList.contains("purchased");
        if (classExit) {
            productDiv.classList.remove("purchased");
        } else {
            productDiv.classList.add("purchased");
        }

    })
    const spanTag = document.createElement("span");

    const crossIcon = document.createElement("i");
    crossIcon.classList.add("fa-solid", "fa-xmark")

    crossIcon.addEventListener('click', () => {
        productContainer.remove();
    })

    spanTag.append(inputValue);
    productDiv.append(spanTag);
    productContainer.append(productDiv, crossIcon);
    ShoppingListTag.append(productContainer);

    inputTag.value = "";
}

inputTag.addEventListener('change', handleFunction);