const products = [
    {
        id: 1,
        name: "Mother MSI A320M PRO-VH AM4",
        price: 4.299,
        img: 'https://res.cloudinary.com/doxz3menn/image/upload/v1639679629/mother-msi-a320m-pro-vh-am4_gcuhr5.jpg',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu velit a odio ultrices vehicula. Suspendisse eget lacinia tellus. Proin aliquam est sed mauris ultrices tempus",
        category: "motherboards",
        stock: 30

    },
    {
      id: 2,
      name: "Procesador AMD RYZEN 7 3700X 4.4 GHz AM4 Wraith Prism RGB Led Coole",
      price: 5000,
      img: 'https://res.cloudinary.com/doxz3menn/image/upload/v1639679629/Procesador_AMD_RYZEN_7_3700X_4.4_GHz_AM4_Wraith_Prism_RGB_Led_Cooler_4e00eaaf-grn_oeo4bg.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu velit a odio ultrices vehicula. Suspendisse eget lacinia tellus. Proin aliquam est sed mauris ultrices tempus",
      category: "procesadores",
      stock: 20
    }

]

export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
  


export default products;