const products = [
    {
        id: 1,
        name: "Mother MSI A320M PRO-VH AM4",
        price: 4.299,
        img: 'mother-msi-a320m-pro-vh-am4.jpg'

    },
]

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 3000)
  })
  


export default products;