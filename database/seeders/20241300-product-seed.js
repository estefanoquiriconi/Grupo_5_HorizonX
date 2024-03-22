module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          name: "Razr 40 Ultra",
          description:
            "Diseño exclusivo con pantalla flexible de 6.9” y bisagra “gota” sin espacios entre sus lados",
          price: 268000.0,
          stock_quantity: 2,
          brand_id: 2,
          category_id: 1,
          color_id: 10,
        },
        {
          id: 2,
          name: "Buds 250",
          description:
            "True wireless headphones con estuche de carga inalámbrica · Bluetooth® 5.0 technology · Resistente al agua · Botón tactil inteligente",
          price: 80200.0,
          stock_quantity: 10,
          brand_id: 2,
          category_id: 2,
          color_id: 1,
        },
        {
          id: 3,
          name: "iPhone 14",
          description:
            "Frente de Ceramic Shield · Diseño de aluminio con parte posterior de vidrio · Chip A15 Bionic · Reconocimiento facial por medio de la cámara TrueDepth · Resistente al agua y salpicaduras",
          price: 237200.0,
          stock_quantity: 10,
          brand_id: 3,
          category_id: 1,
          color_id: 3,
        },
        {
          id: 4,
          name: "Galaxy Z Flip5",
          description:
            "Flex Window de 3,4 pulgadas que admite una mejor experiencia · Panel Flex Mode · Camara frontal de 14MP y camara trasera de 50MP",
          price: 252600.0,
          stock_quantity: 10,
          brand_id: 1,
          category_id: 1,
          color_id: 9,
        },
        {
          id: 5,
          name: "Razr 40",
          description:
            "Te presentamos el motorola razr 40, un teléfono sofisticado con un diseño plegable y compacto. Rediseñado para brindarte una experiencia superior, presenta un acabado de cuero vegano con colores originales y atractivos. Descubrí nuevas posibilidades con el motorola razr 40.",
          price: 236200.0,
          stock_quantity: 10,
          brand_id: 2,
          category_id: 1,
          color_id: 2,
        },
        {
          id: 6,
          name: "Moto G54",
          description:
            "Te presentamos el Motorola Moto G54 5G con un procesador Octa-Core 2.8GHz para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus fotos, tanto de día como de noche, con la cámara de 50+2 MP. Memoria interna de 128 GB",
          price: 253000.00,
          stock_quantity: 3,
          brand_id: 2,
          category_id: 1,
          color_id: 5,
        },
        {
          id: 7,
          name: "iPhone 15",
          description:
            "La Dynamic Island te muestra alertas y actividades en vivo · Nueva cámara de 48MP · Ceramic Shield frontal más resistente · Resistente a salpicadura, agua y polvo",
          price: 255400.0,
          stock_quantity: 10,
          brand_id: 3,
          category_id: 1,
          color_id: 1,
        },
        {
          id: 8,
          name: "Apple Watch Series 9",
          description:
            "Una forma nueva y mágica de interactuar con tu Apple Watch sin siquiera tocarlo · Una pantalla con el doble de brillo · Combinaciones de cajas y correas neutras en carbono · esistente al agua hasta 50 metros",
          price: 138600.0,
          stock_quantity: 10,
          brand_id: 3,
          category_id: 2,
          color_id: 9,
        },
        {
          id: 9,
          name: "Airpods Pro",
          description:
            "El Audio Espacial lleva la experiencia del sonido inmersivo a un nivel mucho más personal · Hasta 6 horas de audio con una sola carga · Resistente al agua y al sudor · Cancelación Activa de Ruido y modo Ambiente",
          price: 118440.0,
          stock_quantity: 10,
          brand_id: 3,
          category_id: 2,
          color_id: 2,
        },
        {
          id: 10,
          name: "Watch Fit Special Edition",
          description:
            "Pantalla AMOLED HD de 1.64 pulgadas · GPS integrado · Gestión profesional de la salud · Compatible con Android e iOS9 · Detección automática de entrenamiento",
          price: 106400.0,
          stock_quantity: 10,
          brand_id: 5,
          category_id: 2,
          color_id: 8,
        },
        {
          id: 11,
          name: "Smart Band 2 GL Watch",
          description:
            "Pantalla TFT dinámica de 1,47 pulgadas · Compatible con más de 30 modos de entrenamiento · Resistencia al agua de 5 ATM · Carga magnética en menos de 120 minutos",
          price: 107100.0,
          stock_quantity: 9,
          brand_id: 4,
          category_id: 2,
          color_id: 1,
        },
        {
          id: 12,
          name: "Galaxy Buds FE Graphite",
          description:
            "Desconéctate del mundo con la potente función ANC · Comodidad ergonómica · Batería de 30 horas de duración · Bluetooth v5.2 ",
          price: 124460.0,
          stock_quantity: 10,
          brand_id: 1,
          category_id: 2,
          color_id: 9,
        },
        {
          id: 13,
          name: "iPad Pro",
          description:
            "Un rendimiento extremo con pantalla avanzada · Neutral Engine de 16 nucleos · Pantalla Liquid Retina CDR de 12.9 pulgadas · Compatible con teclados bluetooth y Apple Pencil",
          price:452600.0,
          stock_quantity: 18,
          brand_id: 3,
          category_id: 3,
          color_id: 9,
        },
        {
          id: 14,
          name: "MatePad T10s",
          description:
            "Diseño con una Pantalla táctil  10.1 pulgadas Full HD con protección ocular · RAM de GB y ROM 64/128 GB · Bateria de 5.100 mAh · Bluetooth 4.2 ",
          price: 338180.0,
          stock_quantity: 10,
          brand_id: 5,
          category_id: 3,
          color_id: 9,
        },
        {
          id: 15,
          name: "Galaxy Tab S9",
          description:
            "Vistas amplias y luminosas incluso al aire libre con Vision Booster · Equipado con chipset Exynos 1380 de alto rendimiento · Resistencia al agua y al polvo · Conectividad con Physical SIM y un eSIM adicional",
          price: 339020.0,
          stock_quantity: 15,
          brand_id: 1,
          category_id: 3,
          color_id: 9,
        },
        {
          id: 16,
          name: "Galaxy Tab S9 Ultra",
          description:
            "Con Book cover Keyboard y S Pen · Bateria de 11200 mAh · Dynamic AMOLED 2X con Brillo uniforme · Tres tamaños a elección y dos colores inspirados en la naturaleza",
          price: 454700.0,
          stock_quantity: 20,
          brand_id: 1,
          category_id: 3,
          color_id: 2,
        },
        {
          id: 17,
          name: "MacBook Pro",
          description:
            "Los chips mas avanzados y hasta 22 horas de batería · Tecnología de 3 naómetros y nueva arquitectura GPU · Magic Keyboard con Touch ID integrado · Pantalla Liquid Retina XDR de 14.9 pulgadas",
          price: 662400.0,
          stock_quantity: 16,
          brand_id: 3,
          category_id: 4,
          color_id: 7,
        },
        {
          id: 18,
          name: "MateBook D14 2024",
          description:
            "Pantalla HUAWEI FullView con confort ocular · Procesador Intel Core de 12Gen · Resolución 1920 x 1200 · Bluetooth 5.1",
          price: 653720.0,
          stock_quantity: 11,
          brand_id: 5,
          category_id: 4,
          color_id: 1,
        },
        {
          id: 19,
          name: "Galaxy Book3 Pro 360",
          description:
            "Diseño ligero y fino con Bateria duradera · Rendimiento de siguiente nivel con 13th Gen Intel Core · Procesador Intel Core i7-1360P · Sistema Operativo Windows 11 Home",
          price: 768000.0,
          stock_quantity: 16,
          brand_id: 1,
          category_id: 4,
          color_id: 9,
        },
        {
          id: 20,
          name: "Galaxy Book3",
          description:
            "Pantalla TFT dinámica de 1,47 pulgadas · Compatible con más de 30 modos de entrenamiento · Procesador Intel Core i7-1355U · Sistema Operativo Windows 11 Home",
          price: 855260.0,
          stock_quantity: 8,
          brand_id: 1,
          category_id: 4,
          color_id: 7,
        },
        {
          id: 21,
          name: 'Galaxy Z Phantom',
          description:
          'Procesador Octa-Core (3.36GHz,2.8GHz,2GHz) Almacenamiento 512 GB | Disponible: 453.5 GB Cámaras Frontal 4 MP / Trasera 50+12+10 MP Tamaño de pantalla 7.6" + QXGA+ -DynamicAMOLED 2X | HD+ DynamicAMOLED 2X',
          price: 364999.0,
          stock_quantity: 5,
          brand_id: 1,
          category_id: 1,
          color_id: 1,
        },
        {
          id: 22,
          name: 'Moto E22 Niagara',
          description:
          'Versión 12 | Modo Retrato: Sí | Fotos panorámica: Sí | Flash Frontal: Backlight | Tarjeta de memoria: Micro SD | Zoom Macro: 2MP (80.1°) F2.4 | Flash: digital (4x fotos/4x videos)',
          price: 130498.0,
          stock_quantity: 2,
          brand_id: 2,
          category_id: 1,
          color_id: 5,
        },
        {
          id: 23,
          name: 'Moto G32',
          description:
          'Dimensiones: Alto 161.78 x 73.84 x 8.49 mm Ancho 73.84 Peso 180 g Pulgadas 6.49" (20:9)',
          price: 338175.0,
          stock_quantity: 3,
          brand_id: 2,
          category_id: 1,
          color_id: 2,
        },
        {
          id: 24,
          name: 'Moto G84',
          description:
          'Cam. Principal Principal: 50 MP (84.1°) F1.88 / Gran angular y macro: 8 MP (118.6¬) F2.2 Memoria interna (ROM) 256 GB',
          price: 499999.0,
          stock_quantity: 2,
          brand_id: 2,
          category_id: 1,
          color_id: 5,
        },
        {
          id: 25,
          name: 'Redmi Note 11',
          description:
          'Cam. Principal 50 MB + 8 MB + 2 MB + 2 MB Memoria interna (ROM) 128 GB Mem. RAM 4 GB',
          price: 339999.0,
          stock_quantity: 1,
          brand_id: 4,
          category_id: 1,
          color_id: 5,
        },
        {
          id: 26,
          name: 'Galaxy A24',
          description:
          'Cam. Principal 50 MP Memoria interna (ROM) 128 GB Mem. RAM 6 GB',
          price: 524999.0,
          stock_quantity: 5,
          brand_id: 1,
          category_id: 1,
          color_id: 1,
        },
        {
          id: 27,
          name: 'Adaptador De Carga Rápida',
          description:
          'Características generales PD max. 15 W Interfaz USB-C Contenido del paquete Power Adapter USB-C to USB-C Cable',
          price: 36999.0,
          stock_quantity: 10,
          brand_id: 1,
          category_id: 2,
          color_id: 1,
        },
        {
          id: 28,
          name: 'Cargador Portátil',
          description:
          'Dimensiones 14,9 * 7,6 * 1,5 cm Cargador portátil Modelo K42 Origen CHINA',
          price: 27000.0,
          stock_quantity: 3,
          brand_id: 4,
          category_id: 2,
          color_id: 1,
        },
        {
          id: 29,
          name: 'Cable Usb Apple Lightning',
          description:
          'Cable One For All USB/Lightning CC3323 3 mt Blanco, compatible para Ipod, Iphone, Ipad. Carga y sincronización. Características Marca One For All Modelo CC3323 Color Blanco Tipo de producto Cables Uso Informática Tipo de cable USB Largo del cable 3mts Tipo de ficha Lightning / Usb Dimensiones Con packaging 11.6 x 9.6 x 3.0 Peso 0,04 kg Otras Características Plugs durables // Carga y sincroniza Garantía 6 meses Origen China',
          price: 11600.0,
          stock_quantity: 3,
          brand_id: 3,
          category_id: 2,
          color_id: 2,
        },
        {
          id: 30,
          name: 'Aro De Luz + Trípode Mt',
          description:
          'ARO DE LUZ LED 26CM LUZ RGB CALIDA FRIA + TRIPODE 2.10MTS',
          price: 45500.0,
          stock_quantity: 5,
          brand_id: 3,
          category_id: 2,
          color_id: 2,
        },
        {
          id: 31,
          name: 'iPhone 13 Midnight',
          description:
          'Tu nuevo superpoder. Un chip super rápido que deja atrás a la competencia. Un gran salto en duración de batería que vas a notar todos los días',
          price: 2000000.0,
          stock_quantity: 1,
          brand_id: 3,
          category_id: 1,
          color_id: 1,
        },
        {
          id: 32,
          name: 'Galaxy A34',
          description: 'Cam. Principal 48.0 MP + 8.0 MP + 5.0 MP Memoria interna (ROM) 128 GB',
          price: 696000.0,
          stock_quantity: 3,
          brand_id: 1,
          category_id: 1,
          color_id: 4,
        },
        {
          id: 33,
          name: 'Edge 40',
          description:
          'Cam. Principal 50 MP + 13 MP Memoria interna (ROM) 256 GB Mem. RAM 8 GB',
          price: 999999.0,
          stock_quantity: 3,
          brand_id: 2,
          category_id: 1,
          color_id: 1,
        },
        {
          id: 34,
          name: 'Galaxy S21',
          description:
          'Pantalla AMOLED de 6.4". Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx. Cámara delantera de 32Mpx. Procesador Exynos 2100 Octa-Core Octa-Core de 2.9GHz con 6GB de RAM. Batería de 4500mAh con carga inalámbrica. Memoria interna de 128GB.',
          price: 850000.0,
          stock_quantity: 2,
          brand_id: 1,
          category_id: 1,
          color_id: 2,
        },
        {
          id: 35,
          name: 'Redmi Note 10S',
          description:
          'Cam. Principal 64 Memoria interna (ROM) 128 GB Mem. RAM 6 GB',
          price: 467000.0,
          stock_quantity: 2,
          brand_id: 4,
          category_id: 1,
          color_id: 5,
        },
       
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
