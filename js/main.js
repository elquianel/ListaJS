var list = new LinkedList();

$().ready(function () {
    $('#insert').click(insertElement)
    $('#insert_at').click(insertElementAt)
    $('#remove').click(removeElement)
    $('#remove_at').click(removeElementAt)
})

function showData() {
    let text = `<div class="ui label">
                    ${list.size() > 0 ? list.toString('</div><div class="ui label">') : 'vazia'}
                </div>`
    let out = $('#output')
    out.empty()
    out.append(text)
}
function insertElement() {
    let val = prompt('digite um valor a ser inserido:')
    list.append(val)
    showData();
}
function insertElementAt() {
    let val = prompt('digite um valor a ser inserido:')
    let pos = prompt('digite uma posição a inserir:')
    list.insert(pos, val)
    showData();
}
function removeElement() {
    let val = prompt('digite um valor a ser removido:')
    removedHandle(list.remove(val))
}

function removeElementAt() {
    let pos = prompt('digite uma posição a remover:')
    removedHandle(list.removeAt(pos))
}

function removedHandle(removed) {
    if (removed) {
        showData()
        alert(removed + ' removido com sucesso')
    } else {
        alert('não econtrado!')
    }
}