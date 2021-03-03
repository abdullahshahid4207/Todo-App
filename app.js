var inp = document.getElementById('inp')
var btn1 = document.getElementById('add')
var btn2 = document.getElementById('delAll')
var div1 = document.getElementById('div')
var ul = document.getElementById('ul')

// function1: Add //

function add() {
    var li = document.createElement('li')
    var inpVal = inp.value
    var editBtn = document.createElement('button')
    var delBtn = document.createElement('button')
    editBtn.innerHTML = 'Edit'
    delBtn.innerHTML = 'Delete'
    var textNode1 = document.createTextNode(inpVal)
    li.setAttribute('class', 'li')
    editBtn.setAttribute('id', 'edit')
    editBtn.setAttribute('onclick', 'edit(this.parentNode)')
    delBtn.setAttribute('onclick', 'del(this.parentNode)')
    delBtn.setAttribute('id', 'del')
    li.appendChild(textNode1)
    li.appendChild(editBtn)
    li.appendChild(delBtn)
    ul.appendChild(li)
    div1.appendChild(ul)
    // console.log(editBtn.parentNode.firstChild)
}

// function2: Edit //error

function edit(li) {
    var input = prompt('Write to create TODO', inp.value)
    // var c = document.createTextNode(input)
    li.innerHTML = ''
    var editBtn = document.createElement('button')
    var delBtn = document.createElement('button')
    editBtn.innerHTML = 'Edit'
    delBtn.innerHTML = 'Delete'
    editBtn.setAttribute('id', 'edit')
    editBtn.setAttribute('onclick', 'edit(this.parentNode)')
    delBtn.setAttribute('onclick', 'del(this.parentNode)')
    delBtn.setAttribute('id', 'del')
    var a = document.createTextNode(input)
    li.appendChild(a)
    li.appendChild(editBtn)
    li.appendChild(delBtn)
}

// function3: Delete //error

function del(li) {
    var a = li;
    a.remove()
}
// btn2.setAttribute('onclick', 'delAll()')

// function4: DeleteAll //

function delAll() {
    ul.innerHTML = ""
}

// var div = document.getElementById('ul')
// var inp = document.getElementById('inp')
// var addBtn = document.getElementById('add')
// var addAllBtn = document.getElementById('delAll')