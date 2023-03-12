const body = document.querySelector('body')
const userImg = document.querySelector('#user-img')
const cartContainer = document.querySelector('.cart-container')
const emptyCart = document.createElement('p')
emptyCart.innerText = 'Your cart is empty'
emptyCart.classList.add('empty-cart')
const cartItems = document.querySelector('.items')
const items = document.querySelector('.items')
items.append(emptyCart)
items.classList.add('items-before')
userImg.addEventListener('click', function () {
    cartContainer.classList.toggle('disappear')
})

const addBtn = document.querySelector('.add-to-cart-btn')
const qty = document.querySelector('.qty')
const qtyBtnPlus = document.querySelector('.plus')
const qtyBtnMinus = document.querySelector('.minus')
let qtyValue = 0
qtyBtnPlus.addEventListener('click', function () {
    qtyValue++
    qty.innerText = qtyValue
})

qtyBtnMinus.addEventListener('click', function () {
    qtyValue--
    if (qtyValue >= 0) {
        qty.innerText = qtyValue
    }
})
let clickCounter = 0
const quantity = document.createElement('span')
addBtn.addEventListener('click', function () {
    clickCounter++
    if (clickCounter === 1) {
        const purchasedItemContainer = document.createElement('div')
        const purchasedItemText = document.createElement('div')
        const itemImg = document.createElement('img')
        const checkoutBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')
        deleteBtn.style.background = '0'
        deleteBtn.style.border = '0'
        deleteBtn.style.cursor = 'pointer'
        deleteBtn.addEventListener('click', function () {
            purchasedItemContainer.remove()
            checkoutBtn.remove()
            cartItems.classList.replace('items', 'items-before')
            cartItems.append(emptyCart)
            clickCounter = 0
        })
        const deleteImg = document.createElement('img')
        deleteImg.setAttribute('src', "C:/Users/User/Desktop/sneakers/icon-delete.png")
        deleteBtn.append(deleteImg)
        checkoutBtn.innerText = 'Checkout'
        checkoutBtn.classList.add('checkout-btn')
        itemImg.setAttribute('src', `C:/Users/User/Desktop/sneakers/image-product-1-thumbnail.jpg`)
        itemImg.classList.add('purchasedItemImg')
        const title = document.createElement('h3')
        title.innerText = 'Fall Limited Edition Sneakers'
        title.classList.add('item-title')
        quantity.innerText = `$125 * ${qty.innerText}. Total:$${125 * parseInt(qty.innerText)}`
        purchasedItemText.append(title)
        purchasedItemText.append(quantity)
        purchasedItemText.classList.add('purchasedItemText')
        purchasedItemContainer.classList.add('purchasedItemContainer')
        purchasedItemContainer.append(purchasedItemText)
        purchasedItemContainer.append(deleteBtn)
        purchasedItemContainer.prepend(itemImg)
        cartItems.classList.replace('items-before', 'items')
        cartItems.removeChild(emptyCart)
        cartItems.append(purchasedItemContainer)
        cartItems.append(checkoutBtn)

    } else {
        quantity.innerText = `$125 * ${qty.innerText}. Total:$${125 * parseInt(qty.innerText)}`
    }
    qty.innerText = 0;
    qtyValue = 0
})

const firstBottomImg = document.querySelector('#first')
const secondBottomImg = document.querySelector('#second')
const thirdBottomImg = document.querySelector('#third')
const fourthBottomImg = document.querySelector('#fourth')

const imgs = [
    {
        id: 1,
        url: 'C:/Users/User/Desktop/ecommerce/images/image-product-1.jpg'
    },
    {
        id: 2,
        url: 'C:/Users/User/Desktop/ecommerce/images/image-product-2.jpg'
    },
    {
        id: 3,
        url: 'C:/Users/User/Desktop/ecommerce/images/image-product-3.jpg'
    },
    {
        id: 4,
        url: 'C:/Users/User/Desktop/ecommerce/images/image-product-4.jpg'
    }
]
const currentImg = document.querySelector('#current-img')

function switchImg(id) {
    return function () {
        const desirable = imgs.filter(x => x.id === id)
        currentImg.setAttribute('src', desirable[0].url)

    }
}
function styleChanged() {
    const imgs = [firstBottomImg, secondBottomImg, thirdBottomImg, fourthBottomImg]
    for (let x of imgs.filter(x => x !== this)) {
        x.style.border = '0'
        x.style.backgroundColor = '0'
        x.style.opacity = '1'
    }

    this.style.backgroundColor = 'rgba(239, 239, 240,0.7)'
    this.style.opacity = '0.3'
    this.style.border = `3px solid hsl(26, 100%, 55%)`

}
firstBottomImg.addEventListener('click', switchImg(1))
firstBottomImg.addEventListener('click', styleChanged)
secondBottomImg.addEventListener('click', switchImg(2))
secondBottomImg.addEventListener('click', styleChanged)
thirdBottomImg.addEventListener('click', switchImg(3))
thirdBottomImg.addEventListener('click', styleChanged)
fourthBottomImg.addEventListener('click', switchImg(4))
fourthBottomImg.addEventListener('click', styleChanged)



const imgContainer = document.querySelector('.img-container')
currentImg.style.cursor = 'pointer'

const navigation = document.querySelector('.nav-links')
const expandBtn = document.createElement('button');
const expandIcon = document.createElement('img')
expandIcon.setAttribute('src', 'C:/Users/User/Desktop/sneakers/icon-menu.png')
expandBtn.append(expandIcon)
navigation.prepend(expandBtn)
expandBtn.style.background = '0'
expandBtn.style.border = '0'
expandIcon.style.width = '50px'
expandIcon.style.height = '50px'
expandBtn.classList.add('disappear1')

expandBtn.addEventListener('click', function () {
    const div = document.createElement('div')
    const button = document.createElement('button')
    const x = document.createElement('img')
    x.setAttribute('src', 'C:/Users/User/Desktop/sneakers/icon-close.png')
    x.style.width = '50px'
    x.style.height = '50px'
    button.append(x)
    button.style.background = '0'
    button.style.border = '0'
    button.addEventListener('click', function () {
        div.remove()
    })
    div.append(button)
    div.classList.add('testing')
    body.append(div)
    console.log('hey')
})