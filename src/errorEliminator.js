const errorEliminator = () => {
    let check = document.getElementById('errormsg');
    if (check) check.remove();
}

export default errorEliminator;