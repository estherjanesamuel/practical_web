const items = sessionStorage.items ? JSON.parse(sessionStorage.items) : []
const newItemForm = document.getElementById('create-items')
const inputItem = newItemForm.item
const sectionItems = document.querySelector('.list-items')
const template = document.getElementById('todo-container')
const btnSearch = document.querySelector('.btn-search')

function persist(items) {
  sessionStorage.items = JSON.stringify(items)
}

function searchIndex(element) {
  return Array.from(element.parentNode.children).indexOf(element)
}

function showHTMLForItem(items) {
  return items.forEach(el => addTemplateForItem(el))
}

showHTMLForItem(items)

sectionItems.addEventListener('click', (event) => {
  const button = event.target.closest('button')
  const action = button ? button.getAttribute('data-attr') : null
  
  switch (action) {
    case 'done':
      button.nextElementSibling.classList.toggle('done')
      button.innerHTML = button.nextElementSibling.classList.contains('done') 
        ? '<i class="check circle green icon"></i>' 
        : '<i class="circle outline icon"></i>'
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

function addTemplateForItem(inputValue) {
  const templateContainer = template.content.cloneNode(true)
  const textBlock = templateContainer.querySelector('.text-block')
  
  textBlock.appendChild(document.createTextNode(inputValue))
  sectionItems.appendChild(templateContainer)
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()  
}

newItemForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const inputValue = capitalize(inputItem.value.trim())
  if(inputValue === '') { return }

  addTemplateForItem(inputValue)
  items.push(inputValue) 
  inputItem.value = ''
  search('')
  persist(items)
}) 

function search(str) {
  const text = str.trim().toLowerCase()
  const children = [...sectionItems.children]
  
  children.forEach(element => {
    const textElement = element.children[1].innerText.toLowerCase()
     if (textElement.includes(text) || text === '') {
       element.style.display = ''
     } else {
       element.style.display = 'none'
     }
  })
}

btnSearch.addEventListener('click', () => {
   search(inputItem.value)
})

inputItem.addEventListener('input', () => {
  search(inputItem.value)
})