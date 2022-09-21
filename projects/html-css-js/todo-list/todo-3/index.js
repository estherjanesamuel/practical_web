const input = document.querySelector('input');
const btn = document.querySelector('button');
const section = document.getElementById('todo-container')
const items = sessionStorage.items ? JSON.parse(sessionStorage.items) :  []
const sectionItems = document.querySelector('.list-items')

const persist = (items) => {
    sessionStorage.items = JSON.stringify(items);
}

const addTemplate = (inputValue) => {
    console.log(inputValue)

    const templateContainer = section.content.cloneNode(true)
    const textBlock = templateContainer.querySelector('.text-block')

    textBlock.appendChild(document.createTextNode(inputValue))
    sectionItems.appendChild(templateContainer)
}

const showHTMLForItem = (items) => {
    return items.forEach(item => addTemplate(item))
}

const searchIndex = (element) => {
    return Array.from(element.parentNode.children).indexOf(element)
}

showHTMLForItem(items)


btn.addEventListener('click', () => {
    const item = input.value;
    // console.log(item)
    addTemplate(item)
    items.push(item)
    input.value = ''
    persist(items)
})

input.focus();

sectionItems.addEventListener('click', (event) => {
    const button = event.target.closest('button')
    const action = button ? button.getAttribute('data-attr') : null
    switch (action) {
      case 'done':
        button.nextElementSibling.classList.toggle('done')
        button.innerHTML = button.nextElementSibling.classList.contains('done')
          ? '<i class="fal fa-solid fa-check"></i>'
          : '<i class="fal fa-circle fa-thin"></i>'
      break

      case 'delete':
        const deleteItem = button.parentNode
        deleteItem.classList.add('delete')
        deleteItem.addEventListener('transitionend', function removeItem() {
          deleteItem.removeEventListener('transitionend', removeItem)
          const index = searchIndex(deleteItem)

          items.splice(index, 1)
          sectionItems.removeChild(deleteItem)
          persist(items)
        })
      break

      case 'edit':
        const text = button.previousElementSibling;
        if (text.classList.contains('text-block')) {
            text.classList.add('edit')
            text.contentEditable = true
            text.focus()

            button.innerHTML = '<i class="fal fa-solid fa-check"></i>';
            button.setAttribute("data-attr", "update");
          }
      break

      case 'update':
        const newText = button.previousElementSibling;
        newText.contentEditable = false
        const indexOfChangedItem = searchIndex(newText.parentNode)
        items[indexOfChangedItem] = newText.innerText
        persist(items)
        button.innerHTML = '<i class="fal fa-edit fa-lg"></i>'
        button.setAttribute("data-attr", "edit");
      break
    }
  })

  sectionItems.addEventListener('dblclick', (event) => {
    const text = event.target

    if (text.classList.contains('text-block')) {
      text.classList.add('edit')
      text.contentEditable = true
      text.focus()
    }
  })


  sectionItems.addEventListener("keydown", (event) => {
    const text = event.target

    if (event.keyCode === 13 && text.classList.contains('text-block')) {
      event.preventDefault()
      text.contentEditable = false
      text.classList.remove('edit')
      const indexOfChangedItem = searchIndex(text.parentNode)
      items[indexOfChangedItem] = text.innerText
      persist(items)
    }
  })

  