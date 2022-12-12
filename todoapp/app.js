var inputVal = document.getElementById('inp')
    // var addd = add();

// var sch = document.createElement("h1")
// var schText = document.createTextNode("Design Your Schedule")
// sch.appendChild(schText)
// maind.appendChild(sch)
// document.write(sch)


function add() {
    console.log(inputVal.value)
    if (inputVal.value == " ") {
        console.log("Please Enter a value")


    } else {
        var list = document.createElement("li")
        var ulist = document.createTextNode(inputVal.value)
        list.appendChild(ulist)
        maind.appendChild(main)

        // Edit button
        var editBtn = document.createElement("Button")
        var editBtnText = document.createTextNode("Edit")
        editBtn.appendChild(editBtnText)
        editBtn.setAttribute("onclick", "edit(this)")
        editBtn.setAttribute("class", "btn btn-outline-success rounded")
        list.appendChild(editBtn)
        main.appendChild(list)
        maind.appendChild(main)
        inputVal.value = ""

        // del btn
        var delBtn = document.createElement("button");
        var delBtnText = document.createTextNode("x")
        delBtn.append(delBtnText)
        delBtn.setAttribute("onclick", "del(this)")
        delBtn.setAttribute("class", "dell")
        list.appendChild(delBtn)
        main.appendChild(list)
        maind.appendChild(main)
        inputVal.value = "";


    }

}

// edit function
function edit(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Edit your Item ", val)
        // val.nodeValue = editValue
    e.parentNode.firstChild.nodeValue = editValue;


}

// del function
function del(element) {

    element.parentNode.remove()
}

function deall() {
    main.innerHTML = "";
}