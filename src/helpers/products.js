const products = [
    {
        id: 1,
        name: "Mother MSI A320M PRO-VH AM4",
        price: 4.299,
        img: './assets/products/mother-msi-a320m-pro-vh-am4.jpg',
        stock: 30

    },
    {
      id: 2,
      name: "Mother MSI A320M PRO-VH AM4",
      price: 4.299,
      img: './assets/products/mother-msi-a320m-pro-vh-am4.jpg',
      stock: 20
    }

]

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
  


export default products;