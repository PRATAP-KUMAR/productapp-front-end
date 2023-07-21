import errorEliminator from "./errorEliminator";

const errorIndicator = (msg) => {
    errorEliminator();
    let ele = document.getElementById('product_form').form;
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id', 'errormsg');
    newDiv.setAttribute('class', 'errormsg');
    const newContent = document.createTextNode(msg);
    newDiv.appendChild(newContent);
    document.body.insertBefore(newDiv, ele)
}

export default errorIndicator;