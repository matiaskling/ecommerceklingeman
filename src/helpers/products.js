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
      name: "Procesador AMD RYZEN 7 3700X 4.4 GHz AM4 Wraith Prism RGB Led Coole",
      price: 5000,
      img: './assets/products/Procesador_AMD_RYZEN_7_3700X_4.4_GHz_AM4_Wraith_Prism_RGB_Led_Cooler_4e00eaaf-grn.jpg',
      stock: 20
    }

]

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
  


export default products;