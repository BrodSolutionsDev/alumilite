var calculator = {
  instructions: {
    'step 1': {
      heading: 'Select project',
      image: 'https://cdn11.bigcommerce.com/s-2yiip5r05b/product_images/uploaded_images/tools.png?t=1643662697&_gl=1*1rqlh36*_ga*NTY1NDIyNTkuMTY0MzE0ODUxOQ..*_ga_WS2VZYPC6G*MTY0MzY1NDExMC4xMi4xLjE2NDM2NjI3MDEuMjI.'
    },
    'step 2': {
      heading: 'Select product',
      image: 'https://cdn11.bigcommerce.com/s-2yiip5r05b/product_images/uploaded_images/water-gallon.png?t=1643662698&_gl=1*1rqlh36*_ga*NTY1NDIyNTkuMTY0MzE0ODUxOQ..*_ga_WS2VZYPC6G*MTY0MzY1NDExMC4xMi4xLjE2NDM2NjI3MDEuMjI.'
    },
    'step 3': {
      heading: 'Enter dimensions',
      image: 'https://cdn11.bigcommerce.com/s-2yiip5r05b/product_images/uploaded_images/ruler.png?t=1643663028&_gl=1*tv5py3*_ga*NTY1NDIyNTkuMTY0MzE0ODUxOQ..*_ga_WS2VZYPC6G*MTY0MzY1NDExMC4xMi4xLjE2NDM2NjMwMzAuNTc.'
    },
    'step 4': {
      heading: 'Calculate results',
      image: 'https://cdn11.bigcommerce.com/s-2yiip5r05b/product_images/uploaded_images/calculator.png?t=1643663029&_gl=1*1clhusl*_ga*NTY1NDIyNTkuMTY0MzE0ODUxOQ..*_ga_WS2VZYPC6G*MTY0MzY1NDExMC4xMi4xLjE2NDM2NjMwMzAuNTc.'
    }
  },
  projects: {
    surface: {
      object_id: 0,
      image:
        'https://cdn11.bigcommerce.com/s-2yiip5r05b/product_images/uploaded_images/pouring-resin.png?t=1609274017',
      name: 'Surface Coat',
      description:
        'A surface coat is a thick epoxy that is applied via brush or squeegee.',
      examples: {
        example_1: 'Countertops',

        example_2: 'Bar Tops',

        example_3: 'Floors'
      },
      products: [
        {
          clear: {
            object_id: 0,
            product_id: 237,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/237/950/Amazing_Clear_Cast_32ozBox_Kit__74031.1636577670.jpg',
            name: 'Amazing Clear Cast',
            description:
              'Coating clear epoxy resin that cures to a solid, strong and clear finish. Can be colored with dyes, alcohol inks and non-water based colorants.',
            sku: 'ACC16OZ', // temporary sku
            examples: {
              'example 1': 'Bar Tops',

              'example 2': 'River Tables',

              'example 3': 'Artwork'
            }
          }
        },
        {
          clear_plus: {
            object_id: 1,
            product_id: 316,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/960w/products/316/953/Amazing_Clear_Cast_Plus_16ozBox_Kit__37734.1620006468.jpg?c=1',
            name: 'Amazing Clear Cast Plus',
            description:
              'Amazing Clear Cast Plus epoxy provides the same great features of our Amazing Clear Cast but now brings the added benefit of industry-leading UV resistance.',
            sku: 'ACC16OZ', // temporary sku
            examples: {
              'example 1': 'Bar Tops',

              'example 2': 'River Tables',

              'example 3': 'Artwork'
            }
          }
        },
        {
          quick: {
            object_id: 2,
            product_id: 322,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/960w/products/322/959/Amazing_Quick_Coat_16ozBox_Kit__36706.1623182419.jpg?c=1',
            name: 'Amazing Quick Coat',
            description:
              'Amazing Quick Coat is an easy to use 2-part epoxy that cures to a durable, high-gloss finish that is FDA compliant when accurately measured, properly mixed, and fully cured. This quick curing formula is tack-free in as little as 4 hours at 75°F.',
            sku: 'ADP160Z', // temporary sku
            sizes: [
              {
                16: 'AL10601'
              }
            ],
            examples: {
              'example 1': 'example 1 of quick coat',

              'example 2': 'example 2 of quick coat',

              'example 3': 'example 3 of quick coat'
            }
          }
        }
      ]
    },
    flood: {
      object_id: 1,
      image:
        'https://cdn11.bigcommerce.com/s-2yiip5r05b/product_images/uploaded_images/flood.jpg?t=1641843145',
      name: 'Flood Coat',
      description:
        'A flood coat is a layer of epoxy (up to 1/8") that you pour on the surface and it self levels.',
      examples: {
        example_1: 'example 1',
        example_2: 'example 2',
        example_3: 'example 3'
      },
      products: [
        {
          quick: {
            object_id: 0,
            product_id: 322,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/960w/products/322/959/Amazing_Quick_Coat_16ozBox_Kit__36706.1623182419.jpg?c=1',
            name: 'Amazing Quick Coat',
            description:
              'Amazing Quick Coat is an easy to use 2-part epoxy that cures to a durable, high-gloss finish that is FDA compliant when accurately measured, properly mixed, and fully cured. This quick curing formula is tack-free in as little as 4 hours at 75°F.',
            sku: 'ADP160Z', // temporary sku
            sizes: [
              {
                16: 'AL10601'
              }
            ],
            examples: {
              'example 1': 'example 1 of quick coat',

              'example 2': 'example 2 of quick coat',

              'example 3': 'example 3 of quick coat'
            }
          }
        },
        {
          clear: {
            object_id: 1,
            product_id: 237,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/237/950/Amazing_Clear_Cast_32ozBox_Kit__74031.1636577670.jpg',
            name: 'Amazing Clear Cast',
            description:
              'Coating clear epoxy resin that cures to a solid, strong and clear finish. Can be colored with dyes, alcohol inks and non-water based colorants.',
            sku: 'ACC16OZ', // temporary sku
            examples: {
              'example 1': 'Bar Tops',

              'example 2': 'River Tables',

              'example 3': 'Artwork'
            }
          }
        },
        {
          clear_plus: {
            object_id: 2,
            product_id: 316,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/960w/products/316/953/Amazing_Clear_Cast_Plus_16ozBox_Kit__37734.1620006468.jpg?c=1',
            name: 'Amazing Clear Cast Plus',
            description:
              'Amazing Clear Cast Plus epoxy provides the same great features of our Amazing Clear Cast but now brings the added benefit of industry-leading UV resistance.',
            sku: 'ACC16OZ', // temporary sku
            examples: {
              'example 1': 'Bar Tops',

              'example 2': 'River Tables',

              'example 3': 'Artwork'
            }
          }
        }
      ]
    },
    tumbler: {
      object_id: 2,
      image:
        'https://cdn11.bigcommerce.com/s-2yiip5r05b/product_images/uploaded_images/tumbler.jpg?t=1641842307',
      name: 'Tumbler',
      description: 'A tumbler is a glass without handles to contain liquid.',
      examples: {
        example_1: 'Travel mugs',
        example_2: 'Vases'
      },
      products: [
        {
          clear: {
            object_id: 0,
            product_id: 237,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/237/950/Amazing_Clear_Cast_32ozBox_Kit__74031.1636577670.jpg',
            name: 'Amazing Clear Cast',
            description:
              'Coating clear epoxy resin that cures to a solid, strong and clear finish. Can be colored with dyes, alcohol inks and non-water based colorants.',
            sku: 'ACC16OZ', // temporary sku
            examples: {
              'example 1': 'Bar Tops',

              'example 2': 'River Tables',

              'example 3': 'Artwork'
            }
          }
        },
        {
          quick: {
            object_id: 1,
            product_id: 322,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/960w/products/322/959/Amazing_Quick_Coat_16ozBox_Kit__36706.1623182419.jpg?c=1',
            name: 'Amazing Quick Coat',
            description:
              'Amazing Quick Coat is an easy to use 2-part epoxy that cures to a durable, high-gloss finish that is FDA compliant when accurately measured, properly mixed, and fully cured. This quick curing formula is tack-free in as little as 4 hours at 75°F.',
            sku: 'ADP160Z', // temporary sku
            sizes: [
              {
                16: 'AL10601'
              }
            ],
            examples: {
              'example 1': 'example 1 of quick coat',

              'example 2': 'example 2 of quick coat',

              'example 3': 'example 3 of quick coat'
            }
          }
        }
      ]
    },
    casting: {
      object_id: 3,
      image:
        'https://cdn11.bigcommerce.com/s-2yiip5r05b/product_images/uploaded_images/alumilite-rotocasting-supplies.jpg?t=1585079004',
      name: 'Casting',
      description: 'Pour epoxy into a mold to make a cast',
      examples: {
        example_1: 'Chess Pieces',
        example_2: 'Rock Climbing Holds',
        example_3: 'Fishing Lures'
      },
      products: [
        {
          clear: {
            object_id: 0,
            product_id: 235,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/235/702/AlumiliteClear_16lbthumb__87135.1618857570.jpg?c=1',
            name: 'Alumilite Clear',
            description:
              'Alumilite Clear is a glossy, crystal clear resin that is convenient to use for a wide range of casting and turning projects.',
            examples: {
              'Example 1': 'Example of Alumilite Clear',
              'Example 2': 'Example of Alumilite Clear',
              'Example 3': 'Example of Alumilite Clear'
            }
          }
        },
        {
          casting: {
            object_id: 1,
            product_id: 299,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/299/937/Amazing_Casting_Resin_16ozBox_Bottles__66376.1626785509.jpg?c=1',
            name: 'Amazing Casting Resin',
            description:
              'Amazing Casting Resin (also known and sold as Alumilite White) is an easy to use white urethane resin that creates a durable casting with perfect cosmetics and intricate details.',
            examples: {
              'Example 1': 'Example of Amazing Casting Resin',
              'Example 2': 'Example of Amazing Casting Resin',
              'Example 3': 'Example of Amazing Casting Resin'
            }
          }
        },
        {
          white: {
            object_id: 2,
            product_id: 242,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/242/677/AlumiliteWhite_Consumer_Gallon_Propped__62501.1635056990.jpg?c=1',
            name: 'Alumilite White',
            description:
              'Alumilite White (also known and sold as Amazing Casting Resin) is an easy to use white urethane resin that creates a durable casting with perfect cosmetics and intricate details.',
            examples: {
              'Example 1': 'Example of Alumilite White',
              'Example 2': 'Example of Alumilite White',
              'Example 3': 'Example of Alumilite White'
            }
          }
        },
        {
          amazingClear: {
            object_id: 3,
            product_id: 237,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/237/950/Amazing_Clear_Cast_32ozBox_Kit__74031.1636577670.jpg',
            name: 'Amazing Clear Cast',
            description:
              'Coating clear epoxy resin that cures to a solid, strong and clear finish. Can be colored with dyes, alcohol inks and non-water based colorants.',
            sku: 'ACC16OZ', // temporary sku
            examples: {
              'example 1': 'Bar Tops',

              'example 2': 'River Tables',

              'example 3': 'Artwork'
            }
          }
        },
        {
          clearSlow: {
            object_id: 4,
            product_id: 236,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/236/699/AlumiliteClearSlow_Propped__86147.1618857559.jpg?c=1',
            name: 'Alumilite Clear Slow',
            description:
              'Alumilite Clear Slow is a crystal-clear resin with a longer (twelve-minute) open time, making it convenient to use for large casting and turning projects.',
            examples: {
              'Example 1': 'Example of Alumilite Clear Slow',
              'Example 2': 'Example of Alumilite Clear Slow',
              'Example 3': 'Example of Alumilite Clear Slow'
            }
          }
        },
        {
          waterClear: {
            object_id: 5,
            product_id: 238,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/238/691/AlumiliteWaterClear_Propped__15793.1618857541.jpg?c=1',
            name: 'Alumilite Water Clear',
            description:
              'Alumilite Water Clear is a rigid, clear casting resin that is commonly used for lenses, encapsulations, and water reproductions.',
            examples: {
              'Example 1': 'Example of Alumilite Water Clear',
              'Example 2': 'Example of Alumilite Water Clear',
              'Example 3': 'Example of Alumilite Water Clear'
            }
          }
        },
        {
          rc3Tan: {
            object_id: 6,
            product_id: 243,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/243/676/AlumiresRC3Tan_Consumer_Gallon_Propped__14774.1614611255.jpg?c=1',
            name: 'Alumires (RC-3) Tan',
            description:
              'Alumires (RC-3) is an easy to mix and pour resin that is great for casting large, durable pieces.',
            examples: {
              'Example 1': 'Example of Alumires (RC-3) Tan',
              'Example 2': 'Example of Alumires (RC-3) Tan',
              'Example 3': 'Example of Alumires (RC-3) Tan'
            }
          }
        },
        {
          rc3Black: {
            object_id: 7,
            product_id: 329,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/239/685/AlumiresRC3Black_Consumer_Gallon_Propped__17243.1618857527.jpg?c=1',
            name: 'Alumires (RC-3) Black',
            description:
              'Alumires (RC-3) Black is our original AlumiRes that has been pre-dyed black. It is an easy to mix and pour resin that is great for casting large, durable pieces.',
            examples: {
              'Example 1': 'Example of Alumires (RC-3) Black',
              'Example 2': 'Example of Alumires (RC-3) Black',
              'Example 3': 'Example of Alumires (RC-3) Black'
            }
          }
        },
        {
          slowSet: {
            object_id: 8,
            product_id: 244,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/244/673/SlowSet7_Consumer_32oz_Propped__86065.1629219916.jpg?c=1',
            name: 'Slow Set 7',
            description:
              'Slow Set 7 is a urethane casting resin with a long open time – it cures tan and rigid, and is perfect for casting large, intricate pieces.',
            examples: {
              'Example 1': 'Example of Slow Set 7',
              'Example 2': 'Example of Slow Set 7',
              'Example 3': 'Example of Slow Set 7'
            }
          }
        },
        {
          performance65D: {
            object_id: 9,
            product_id: 240,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/489_source_1584374608.jpg',
            name: 'Performance 65D',
            description:
              'Performance 65D is a rigid yet flexible urethane elastomer – it’s perfect for parts that will be under repeated strain, stress or impact.',
            examples: {
              'Example 1': 'Example of Performance 65D',
              'Example 2': 'Example of Performance 65D',
              'Example 3': 'Example of Performance 65D'
            }
          }
        },
        {
          performance80D: {
            object_id: 10,
            product_id: 241,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/487_source_1584374530.jpg',
            name: 'Performance 80D',
            description:
              'Performance 80D is a urethane elastomer that produces tough parts with ultra-high tear and impact properties.',
            examples: {
              'Example 1': 'Example of Performance 80D',
              'Example 2': 'Example of Performance 80D',
              'Example 3': 'Example of Performance 80D'
            }
          }
        },
        {
          flex20: {
            object_id: 11,
            product_id: 292,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/389_source_1583162454.jpg',
            name: 'Flex 20',
            description:
              'Flex 20 is a soft, flexible yet durable urethane rubber. It’s easy to use, accepts color, and allows for excellent detail and part reproduction.',
            examples: {
              'Example 1': 'Example of Flex 20',
              'Example 2': 'Example of Flex 20',
              'Example 3': 'Example of Flex 20'
            }
          }
        },
        {
          flex50: {
            object_id: 12,
            product_id: 293,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/390_source_1583162341.jpg',
            name: 'Flex 50',
            description:
              'Flex 50 is a low-viscosity, tough, and flexible urethane rubber that allows for great detail and part reproduction.',
            examples: {
              'Example 1': 'Example of Flex 50',
              'Example 2': 'Example of Flex 50',
              'Example 3': 'Example of Flex 50'
            }
          }
        },
        {
          flex60: {
            object_id: 13,
            product_id: 294,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/960w/products/294/495/Flex60_Propped__96832.1618853957.jpg?c=1',
            name: 'Flex 60',
            description:
              'Flex 60 is a tough urethane rubber with flexibility -- excellent for duplicating rubber parts or for making rubber molds.',
            examples: {
              'Example 1': 'Example of Flex 60',
              'Example 2': 'Example of Flex 60',
              'Example 3': 'Example of Flex 60'
            }
          }
        },
        {
          flex70: {
            object_id: 14,
            product_id: 295,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/394_source_1583162179.jpg',
            name: 'Flex 70',
            description:
              'Flex 70 is flexible, tough urethane rubber that is excellent for duplicating rubber parts or for making rubber molds.',
            examples: {
              'Example 1': 'Example of Flex 70',
              'Example 2': 'Example of Flex 70',
              'Example 3': 'Example of Flex 70'
            }
          }
        },
        {
          flex80: {
            object_id: 15,
            product_id: 296,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/296/491/Flex80_Propped__41285.1618853894.jpg?c=1',
            name: 'Flex 80',
            description:
              'Flex 80 is an extremely tough yet still flexible urethane rubber that is a great product for duplicating or casting hard rubber parts.',
            examples: {
              'Example 1': 'Example of Flex 80',
              'Example 2': 'Example of Flex 80',
              'Example 3': 'Example of Flex 80'
            }
          }
        },
        {
          deep: {
            object_id: 16,
            product_id: 317,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/637_source_1620006176.jpg',
            name: 'Amazing Deep Pour',
            description:
              'Amazing Deep Pour is a 2-part, extremely clear, deep-cast epoxy. It is ideal for applications requiring thicker pours (up to 2 inches thick) or a glass-like finish.',
            sku: 'ADP160Z', // temporary sku
            sizes: [
              {
                16: 'AL10601'
              }
            ],
            examples: {
              'example 1': 'example 1 of deep pour',

              'example 2': 'example 2 of deep pour',

              'example 3': 'example 3 of deep pour'
            }
          }
        },
        {
          foam58: {
            object_id: 17,
            product_id: 271,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/103_source_1583162677.jpg',
            name: 'Flexible Foam 5-8 Density',
            description:
              'This two-part foam is an expanding, flexible, and high tear strength product. Flexible Foam expands to 3-5 times its original volume and remains soft.',
            examples: {
              'Example 1': 'Example of Flexible Foam 5-8 Density',
              'Example 2': 'Example of Flexible Foam 5-8 Density',
              'Example 3': 'Example of Flexible Foam 5-8 Density'
            }
          }
        },
        {
          alumifoam: {
            object_id: 18,
            product_id: 263,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/432_source_1584723408.jpg',
            name: 'AlumiFoam',
            description:
              'AlumiFoam is a rigid 2-part foam that produces a hard, dense, and durably cast piece.',
            examples: {
              'Example 1': 'Example of AlumiFoam',
              'Example 2': 'Example of AlumiFoam',
              'Example 3': 'Example of AlumiFoam'
            }
          }
        },
        {
          clear_plus: {
            object_id: 19,
            product_id: 316,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/960w/products/316/953/Amazing_Clear_Cast_Plus_16ozBox_Kit__37734.1620006468.jpg?c=1',
            name: 'Amazing Clear Cast Plus',
            description:
              'Amazing Clear Cast Plus epoxy provides the same great features of our Amazing Clear Cast but now brings the added benefit of industry-leading UV resistance.',
            sku: 'ACC16OZ', // temporary sku
            examples: {
              'example 1': 'Bar Tops',

              'example 2': 'River Tables',

              'example 3': 'Artwork'
            }
          }
        },
        {
          foam610: {
            object_id: 20,
            product_id: 262,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/435_source_1582923627.jpg',
            name: '610 Foam',
            description:
              '610 Foam is a 2-part foam that cures rigid and lightweight that expands up to ten times its original volume.',
            examples: {
              'Example 1': 'Example of 610 Foam',
              'Example 2': 'Example of 610 Foam',
              'Example 3': 'Example of 610 Foam'
            }
          }
        },
        {
          superfoam: {
            object_id: 21,
            product_id: 248,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/399_source_1584370643.jpg',
            name: 'Super Foam 320',
            description:
              'Super Foam 320 is a user-friendly, 2-part expandable foam that expands up to 20 times its original liquid volume.',
            examples: {
              'Example 1': 'Example of Super Foam 320',
              'Example 2': 'Example of Super Foam 320',
              'Example 3': 'Example of Super Foam 320'
            }
          }
        }
      ]
    },
    onePiece: {
      object_id: 4,
      image:
        'https://cdn11.bigcommerce.com/s-2yiip5r05b/product_images/uploaded_images/56.jpg?t=1628282238&_gl=1*1xcmsrx*_ga*NTY1NDIyNTkuMTY0MzE0ODUxOQ..*_ga_WS2VZYPC6G*MTY0MzIwMjAyMi4zLjEuMTY0MzIwMzIyMC40Nw..',
      name: 'One Piece Molds',
      description: 'Description of one piece molds',
      examples: {
        example_1: 'example 1',
        example_2: 'example 2',
        example_3: 'example 3'
      },
      products: [
        {
          putty: {
            object_id: 0,
            product_id: 254,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/454_source_1584208331.jpg',
            name: 'Amazing Mold Putty',
            description:
              'Mold Putty is a food-safe, easy to use, two-part silicone putty that allows you to make a flexible rubber mold in just ten minutes.',
            examples: {
              'Example 1': 'Example of Amazing Mold Putty',
              'Example 2': 'Example of Amazing Mold Putty',
              'Example 3': 'Example of Amazing Mold Putty'
            }
          }
        },
        {
          moldRubber: {
            object_id: 1,
            product_id: 206,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/206/999/Unknown__12076.1638987370.jpg?c=1',
            name: 'Amazing Rubber',
            description:
              'Amazing Mold Rubber is an easy to use tin-based silicone mold-making material that cures quickly and picks up intricate details.',
            examples: {
              'Example 1': 'Example of Amazing Rubber',
              'Example 2': 'Example of Amazing Rubber',
              'Example 3': 'Example of Amazing Rubber'
            }
          }
        },
        {
          highStrength1: {
            object_id: 2,
            product_id: 253,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/253/642/HighStrength1_5lbs_Propped__04185.1630586770.jpg?c=1',
            name: 'High Strength 1',
            description:
              'Use High Strength 1, a tin-based silicone mold making rubber, when your mold requires a little more stiffness but still need exceptional tear strength.',
            examples: {
              'Example 1': 'Example of High Strength 1',
              'Example 2': 'Example of High Strength 1',
              'Example 3': 'Example of High Strength 1'
            }
          }
        },
        {
          highStrength2: {
            object_id: 3,
            product_id: 251,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/251/651/HighStrength2_5lb_Propped__23149.1630586757.jpg?c=1',
            name: 'High Strength 2',
            description:
              'High Strength 2 is a tin-based silicone mold making rubber with high tear strength and is great for making all types of molds – it’s soft enough for 1-piece molds with undercuts and strong enough for 2-piece molds with secure alignment.',
            examples: {
              'Example 1': 'Example of High Strength 2',
              'Example 2': 'Example of High Strength 2',
              'Example 3': 'Example of High Strength 2'
            }
          }
        },
        {
          highStrength3: {
            object_id: 4,
            product_id: 252,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/252/647/HighStrength3_5lbs_Propped__55124.1630586783.jpg?c=1',
            name: 'High Strength 3',
            description:
              'High Strength 3 is our most flexible tin-based silicone mold making rubber – it’s great for making molds of parts with deep undercuts or negative space.',
            examples: {
              'Example 1': 'Example of High Strength 3',
              'Example 2': 'Example of High Strength 3',
              'Example 3': 'Example of High Strength 3'
            }
          }
        },
        {
          moldMaker: {
            object_id: 5,
            product_id: 323,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/323/961/Amazing_Mold_Maker_16ozBox__87414.1621512890.jpg?c=1',
            name: 'Amazing Mold Maker',
            description:
              'Amazing Mold Maker is an easy-to-use platinum-based silicone mold-making material that demolds in 30 minutes and picks up intricate details. Amazing Mold Maker is ideal for highly-detailed, fast-curing molds and is FDA compliant!',
            examples: {
              'Example 1': 'Example of Amazing Mold Maker',
              'Example 2': 'Example of Amazing Mold Maker',
              'Example 3': 'Example of Amazing Mold Maker'
            }
          }
        },
        {
          quickset: {
            object_id: 6,
            product_id: 250,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/250/654/Quickset_5lbs_Propped__49167.1614718238.jpg?c=1',
            name: 'Quickset',
            description:
              'Quickset is a tin-based mold making silicone that is ideal for one- or two-piece molds that don’t require a lot of stress or flexibility.',
            examples: {
              'Example 1': 'Example of Quickset',
              'Example 2': 'Example of Quickset',
              'Example 3': 'Example of Quickset'
            }
          }
        },
        {
          moldPutty: {
            object_id: 7,
            product_id: 254,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/attribute_rule_images/454_source_1584208331.jpg',
            name: 'Mold Putty',
            description:
              'Mold Putty is a food-safe, easy to use, two-part silicone putty that allows you to make a flexible rubber mold in just ten minutes.',
            examples: {
              'Example 1': 'Example of Mold Putty',
              'Example 2': 'Example of Mold Putty',
              'Example 3': 'Example of Mold Putty'
            }
          }
        },
        {
          moldPutty15: {
            object_id: 8,
            product_id: 258,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/258/624/MoldPutty15_1lb__27252.1618857323.jpg?c=1',
            name: 'Mold Putty 15',
            description:
              'Mold Putty 15 is a two-part silicone mold making putty with a long open time that allows you to create larger-scaled projects.',
            examples: {
              'Example 1': 'Example of Mold Putty 15',
              'Example 2': 'Example of Mold Putty 15',
              'Example 3': 'Example of Mold Putty 15'
            }
          }
        },
        {
          plat10: {
            object_id: 9,
            product_id: 255,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/255/637/Plat10_5lb_Propped__27096.1618857378.jpg?c=1',
            name: 'Plat 10',
            description:
              'Plat 10 is a platinum-based silicone mold making rubber that cures extremely soft and pliable. It’s ideal for intricate molds with undercuts or negative space due to its high flexibility.',
            examples: {
              'Example 1': 'Example of Plat 10',
              'Example 2': 'Example of Plat 10',
              'Example 3': 'Example of Plat 10'
            }
          }
        },
        {
          plat25: {
            object_id: 10,
            product_id: 257,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/257/514/Plat25_10lb_Propped__47883.1618857340.jpg?c=1',
            name: 'Plat 25',
            description:
              'Plat 25 is a platinum-based silicone mold making rubber that when cured yields a soft and pliable rubber while maintaining the mold’s structural properties.',
            examples: {
              'Example 1': 'Example of Plat 25',
              'Example 2': 'Example of Plat 25',
              'Example 3': 'Example of Plat 25'
            }
          }
        },
        {
          plat40: {
            object_id: 11,
            product_id: 256,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/256/630/Plat40_9lb__30071.1630437682.jpg?c=1',
            name: 'Plat 40',
            description:
              'Plat 40 is a platinum-based silicone mold making rubber that cures flexible and with medium hardness. It’s ideal for molds that need a combination of stability and flexibility.',
            examples: {
              'Example 1': 'Example of Plat 40',
              'Example 2': 'Example of Plat 40',
              'Example 3': 'Example of Plat 40'
            }
          }
        },
        {
          plat55: {
            object_id: 12,
            product_id: 297,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/297/537/Plat55_1lbs__26629.1618853880.jpg?c=1',
            name: 'Plat 55',
            description:
              'Plat 55 is a platinum-based silicone mold making rubber that is perfect for making stiff, stable molds.',
            examples: {
              'Example 1': 'Example of Plat 55',
              'Example 2': 'Example of Plat 55',
              'Example 3': 'Example of Plat 55'
            }
          }
        },
        {
          platsil: {
            object_id: 13,
            product_id: 261,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/261/615/PolytekPlatsil_9lbs__90145.1618857267.jpg?c=1',
            name: 'PlatSil 73-60',
            description:
              'PlatSil 73-60 is a two-part liquid silicone mold-making material that cures to a blue rubber, ideal for strong molds that require limited flexibility.',
            examples: {
              'Example 1': 'Example of PlatSil 73-60',
              'Example 2': 'Example of PlatSil 73-60',
              'Example 3': 'Example of PlatSil 73-60'
            }
          }
        },
        {
          trans40: {
            object_id: 14,
            product_id: 260,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/260/618/Trans40_1lbs__67769.1618857289.jpg?c=1',
            name: 'Trans 40',
            description:
              'Trans 40 is a translucent, platinum-based silicone rubber that is ideal for molds that require visual inspection or for creating prototype designs.',
            examples: {
              'Example 1': 'Example of Trans 40',
              'Example 2': 'Example of Trans 40',
              'Example 3': 'Example of Trans 40'
            }
          }
        },
        {
          remelt: {
            object_id: 15,
            product_id: 266,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/266/926/Amazing_ReMelt_.625lb__76545.1619726611.jpg?c=1',
            name: 'Amazing Remelt',
            description:
              'Amazing Remelt is a mold making material that is reusable and non-toxic. Amazing Remelt can be used to make new molds time and time again.',
            examples: {
              'Example 1': 'Example of Amazing Remelt',
              'Example 2': 'Example of Amazing Remelt',
              'Example 3': 'Example of Amazing Remelt'
            }
          }
        }
      ]
    },
    twoPiece: {
      object_id: 5,
      image:
        'https://cdn11.bigcommerce.com/s-2yiip5r05b/product_images/uploaded_images/architectural-2-part-mold-alumilite-home-materials-architectural-restoration-materials-supplies-2.jpg?t=1585506970&_gl=1*1ge5t0o*_ga*NTY1NDIyNTkuMTY0MzE0ODUxOQ..*_ga_WS2VZYPC6G*MTY0MzIwMjAyMi4zLjEuMTY0MzIwNDQ3OC40OQ..',
      name: 'Two Piece Molds',
      description: 'Description of two piece molds',
      examples: {
        example_1: 'example 1',
        example_2: 'example 2',
        example_3: 'example 3'
      },
      products: [
        {
          moldRubber: {
            object_id: 0,
            product_id: 206,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/206/999/Unknown__12076.1638987370.jpg?c=1',
            name: 'Amazing Rubber',
            description:
              'Amazing Mold Rubber is an easy to use tin-based silicone mold-making material that cures quickly and picks up intricate details.',
            examples: {
              'Example 1': 'Example of Amazing Rubber',
              'Example 2': 'Example of Amazing Rubber',
              'Example 3': 'Example of Amazing Rubber'
            }
          }
        },
        {
          highStrength1: {
            object_id: 1,
            product_id: 253,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/253/642/HighStrength1_5lbs_Propped__04185.1630586770.jpg?c=1',
            name: 'High Strength 1',
            description:
              'Use High Strength 1, a tin-based silicone mold making rubber, when your mold requires a little more stiffness but still need exceptional tear strength.',
            examples: {
              'Example 1': 'Example of High Strength 1',
              'Example 2': 'Example of High Strength 1',
              'Example 3': 'Example of High Strength 1'
            }
          }
        },
        {
          highStrength2: {
            object_id: 2,
            product_id: 251,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/251/651/HighStrength2_5lb_Propped__23149.1630586757.jpg?c=1',
            name: 'High Strength 2',
            description:
              'High Strength 2 is a tin-based silicone mold making rubber with high tear strength and is great for making all types of molds – it’s soft enough for 1-piece molds with undercuts and strong enough for 2-piece molds with secure alignment.',
            examples: {
              'Example 1': 'Example of High Strength 2',
              'Example 2': 'Example of High Strength 2',
              'Example 3': 'Example of High Strength 2'
            }
          }
        },
        {
          highStrength3: {
            object_id: 3,
            product_id: 252,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/252/647/HighStrength3_5lbs_Propped__55124.1630586783.jpg?c=1',
            name: 'High Strength 3',
            description:
              'High Strength 3 is our most flexible tin-based silicone mold making rubber – it’s great for making molds of parts with deep undercuts or negative space.',
            examples: {
              'Example 1': 'Example of High Strength 3',
              'Example 2': 'Example of High Strength 3',
              'Example 3': 'Example of High Strength 3'
            }
          }
        },
        {
          moldMaker: {
            object_id: 4,
            product_id: 323,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/323/961/Amazing_Mold_Maker_16ozBox__87414.1621512890.jpg?c=1',
            name: 'Amazing Mold Maker',
            description:
              'Amazing Mold Maker is an easy-to-use platinum-based silicone mold-making material that demolds in 30 minutes and picks up intricate details. Amazing Mold Maker is ideal for highly-detailed, fast-curing molds and is FDA compliant!',
            examples: {
              'Example 1': 'Example of Amazing Mold Maker',
              'Example 2': 'Example of Amazing Mold Maker',
              'Example 3': 'Example of Amazing Mold Maker'
            }
          }
        },
        {
          quickset: {
            object_id: 5,
            product_id: 250,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/250/654/Quickset_5lbs_Propped__49167.1614718238.jpg?c=1',
            name: 'Quickset',
            description:
              'Quickset is a tin-based mold making silicone that is ideal for one- or two-piece molds that don’t require a lot of stress or flexibility.',
            examples: {
              'Example 1': 'Example of Quickset',
              'Example 2': 'Example of Quickset',
              'Example 3': 'Example of Quickset'
            }
          }
        },
        {
          plat10: {
            object_id: 6,
            product_id: 255,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/255/637/Plat10_5lb_Propped__27096.1618857378.jpg?c=1',
            name: 'Plat 10',
            description:
              'Plat 10 is a platinum-based silicone mold making rubber that cures extremely soft and pliable. It’s ideal for intricate molds with undercuts or negative space due to its high flexibility.',
            examples: {
              'Example 1': 'Example of Plat 10',
              'Example 2': 'Example of Plat 10',
              'Example 3': 'Example of Plat 10'
            }
          }
        },
        {
          plat25: {
            object_id: 7,
            product_id: 257,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/257/514/Plat25_10lb_Propped__47883.1618857340.jpg?c=1',
            name: 'Plat 25',
            description:
              'Plat 25 is a platinum-based silicone mold making rubber that when cured yields a soft and pliable rubber while maintaining the mold’s structural properties.',
            examples: {
              'Example 1': 'Example of Plat 25',
              'Example 2': 'Example of Plat 25',
              'Example 3': 'Example of Plat 25'
            }
          }
        },
        {
          plat40: {
            object_id: 8,
            product_id: 256,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/256/630/Plat40_9lb__30071.1630437682.jpg?c=1',
            name: 'Plat 40',
            description:
              'Plat 40 is a platinum-based silicone mold making rubber that cures flexible and with medium hardness. It’s ideal for molds that need a combination of stability and flexibility.',
            examples: {
              'Example 1': 'Example of Plat 40',
              'Example 2': 'Example of Plat 40',
              'Example 3': 'Example of Plat 40'
            }
          }
        },
        {
          plat55: {
            object_id: 9,
            product_id: 297,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/297/537/Plat55_1lbs__26629.1618853880.jpg?c=1',
            name: 'Plat 55',
            description:
              'Plat 55 is a platinum-based silicone mold making rubber that is perfect for making stiff, stable molds.',
            examples: {
              'Example 1': 'Example of Plat 55',
              'Example 2': 'Example of Plat 55',
              'Example 3': 'Example of Plat 55'
            }
          }
        },
        {
          platsil: {
            object_id: 10,
            product_id: 261,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/261/615/PolytekPlatsil_9lbs__90145.1618857267.jpg?c=1',
            name: 'PlatSil 73-60',
            description:
              'PlatSil 73-60 is a two-part liquid silicone mold-making material that cures to a blue rubber, ideal for strong molds that require limited flexibility.',
            examples: {
              'Example 1': 'Example of PlatSil 73-60',
              'Example 2': 'Example of PlatSil 73-60',
              'Example 3': 'Example of PlatSil 73-60'
            }
          }
        },
        {
          trans40: {
            object_id: 11,
            product_id: 260,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/260/618/Trans40_1lbs__67769.1618857289.jpg?c=1',
            name: 'Trans 40',
            description:
              'Trans 40 is a translucent, platinum-based silicone rubber that is ideal for molds that require visual inspection or for creating prototype designs.',
            examples: {
              'Example 1': 'Example of Trans 40',
              'Example 2': 'Example of Trans 40',
              'Example 3': 'Example of Trans 40'
            }
          }
        }
      ]
    },
    woodTurning: {
      object_id: 6,
      image: 'https://cdn11.bigcommerce.com/s-2yiip5r05b/product_images/uploaded_images/ivan-turning.jpg?t=1585502913&_gl=1*1ehsw4q*_ga*NTY1NDIyNTkuMTY0MzE0ODUxOQ..*_ga_WS2VZYPC6G*MTY0Mzk4MzY0NC4yNS4xLjE2NDM5ODUyOTYuNTA.',
      name: 'Wood Turning',
      description: 'Description of wood turning',
      examples: {
        example1: 'example 1',
        example2: 'example 2',
        example3: 'example 3'
      },
      products: [
        {
          clear: {
            object_id: 0,
            product_id: 235,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/235/702/AlumiliteClear_16lbthumb__87135.1618857570.jpg?c=1',
            name: 'Alumilite Clear',
            description:
              'Alumilite Clear is a glossy, crystal clear resin that is convenient to use for a wide range of casting and turning projects.',
            examples: {
              'Example 1': 'Example of Alumilite Clear',
              'Example 2': 'Example of Alumilite Clear',
              'Example 3': 'Example of Alumilite Clear'
            }
          }
        },
        {
          clearSlow: {
            object_id: 1,
            product_id: 236,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/236/699/AlumiliteClearSlow_Propped__86147.1618857559.jpg?c=1',
            name: 'Alumilite Clear Slow',
            description:
              'Alumilite Clear Slow is a crystal-clear resin with a longer (twelve-minute) open time, making it convenient to use for large casting and turning projects.',
            examples: {
              'Example 1': 'Example of Alumilite Clear Slow',
              'Example 2': 'Example of Alumilite Clear Slow',
              'Example 3': 'Example of Alumilite Clear Slow'
            }
          }
        },
        {
          waterClear: {
            object_id: 2,
            product_id: 238,
            image:
              'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/238/691/AlumiliteWaterClear_Propped__15793.1618857541.jpg?c=1',
            name: 'Alumilite Water Clear',
            description:
              'Alumilite Water Clear is a rigid, clear casting resin that is commonly used for lenses, encapsulations, and water reproductions.',
            examples: {
              'Example 1': 'Example of Alumilite Water Clear',
              'Example 2': 'Example of Alumilite Water Clear',
              'Example 3': 'Example of Alumilite Water Clear'
            }
          }
        },
        {
          alumiUV: {
            object_id: 3,
            product_id: 265,
            image: 'https://cdn11.bigcommerce.com/s-2yiip5r05b/images/stencil/300x300/products/265/392/New_Alumi-UV_25lb__27353.1618854009.png?c=1',
            name: 'Alumi-UV',
            description: 'Alumi-UV is a clear doming and coating resin. Once cured with a UV light, it creates a high-gloss coating on paper, plastic, wood, metal, and more.',
            examples: {
              example1: "example 1",
              example2: "example 2",
              example3: "example 3",
            }
          }
        }
      ]
    }
  },
  calculators: {
    circle: {
      calculation: function (radius, height) {
        return Math.PI * Math.pow(radius, 2) * height * 0.554;
      },
      ounces: function (oz) {
        var ounces = oz;
        return ounces.toLocaleString('en-US', { maximumFractionDigits: 2 });
      },
      gallons: function (oz) {
        var gallons = oz * 0.0078125;
        return gallons.toLocaleString('en-US', { maximumFractionDigits: 2 });
      },
      milliliters: function (oz) {
        var milliliters = oz * 29.5735;
        return milliliters.toLocaleString('en-US', {
          maximumFractionDigits: 2
        });
      },
      liters: function (oz) {
        var liters = oz * 0.0295735000007998;
        return liters.toLocaleString('en-US', { maximumFractionDigits: 2 });
      },
      pounds: function (oz) {
        var pounds = oz * 0.065198;
        return pounds.toLocaleString('en-US', { maximumFractionDigits: 2 });
      }
    },
    rectangle: {
      calculation: function (width, length, thickness) {
        return width * length * thickness * 0.554;
      },
      ounces: function (oz) {
        var ounces = oz;
        return ounces.toLocaleString('en-US', { maximumFractionDigits: 2 });
      },
      gallons: function (oz) {
        var gallons = oz * 0.0078125;
        return gallons.toLocaleString('en-US', { maximumFractionDigits: 2 });
      },
      milliliters: function (oz) {
        var milliliters = oz * 29.5735;
        return milliliters.toLocaleString('en-US', {
          maximumFractionDigits: 2
        });
      },
      liters: function (oz) {
        var liters = oz * 0.0295735000007998;
        return liters.toLocaleString('en-US', { maximumFractionDigits: 2 });
      },
      pounds: function (oz) {
        var pounds = oz * 0.065198;
        return pounds.toLocaleString('en-US', { maximumFractionDigits: 2 });
      }
    },
    tumbler: {
      calculation: function (oz, total) {
        return oz * 0.125 * total;
      },
      ounces: function ounces(oz) {
        return oz.toLocaleString('en-US', { maximumFractionDigits: 2 });
      },
      gallons: function gallons(oz) {
        var gallons = oz * 0.0078125;
        return gallons.toLocaleString('en-US', { maximumFractionDigits: 2 });
      },
      milliliters: function (oz) {
        var milliliters = oz * 29.5735;
        return milliliters.toLocaleString('en-US', {
          maximumFractionDigits: 2
        });
      },
      liters: function (oz) {
        var liters = oz * 0.0295735000007998;
        return liters.toLocaleString('en-US', { maximumFractionDigits: 2 });
      },
      pounds: function (oz) {
        var pounds = oz * 0.065198;
        return pounds.toLocaleString('en-US', { maximumFractionDigits: 2 });
      }
    }
  }
};

// ===============================================
// INSTRUCTIONS
// ===============================================
var stepCards = [];
Object.values(calculator.instructions).forEach((item, i) => {
  var calc_card = document.createElement('div');

  calc_card.className = 'calc-card directions-card';
  calc_card.innerHTML = `
            <div class="calc-card-inner instructions-card">
            <img class="instructions-icon" src="${item.image}" alt="step-${
    i + 1
  }">
            <h3><u>Step ${i + 1}</u></h3>
            <h5>${item.heading}</h5>
          </div>
        `;

  stepCards.push(calc_card); // push instruction cards to export
});

// ===============================================
// PROJECTS
// ===============================================
var projectCards = [];
var examples = Object.values(calculator.projects).map(item =>
  Object.values(item.examples)
);
Object.values(calculator.projects).forEach((item, i) => {
  var calc_card = document.createElement('a');

  calc_card.id = `project_${item.object_id}`;
  // calc_card.href = '#regForm';
  calc_card.setAttribute('data-project-id', item.object_id);
  calc_card.className = 'calc-card';
  calc_card.innerHTML = `
    <img class="calc-card-img" src=${item.image} alt=${item.name} />
    <div class="calc-card-inner" style="text-align: left !important">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <ul class="calc-card__examples">
    ${examples[i].map(example => `<li>${example}</li>`).join('')}
    </ul>
    </a>`;

  projectCards.push(calc_card);
});

// ===============================================
// PRODUCTS
// ===============================================
var productCards = [];
function getProducts(id) {
  Object.values(calculator.projects).forEach(project => {
    if (project.object_id == id) {
      project.products.map(product => {
        var calc_card = document.createElement('a');
        var currentProduct = Object.values(product)[0];
        var currentProductExamples = Object.values(currentProduct.examples);

        calc_card.id = `product_${currentProduct.object_id}`;
        // calc_card.href = "#regForm";
        calc_card.setAttribute('data-product-id', currentProduct.object_id);
        calc_card.className = 'calc-card';
        calc_card.innerHTML = `
                <img class="calc-card-img" src="${currentProduct.image}" alt="${
          currentProduct.name
        }" />
                <div class="calc-card-inner">
                  <h3>${currentProduct.name}</h3>
                  <p>${currentProduct.description}</p>
                  <ul class="calc-card__examples">
                  ${currentProductExamples
                    .map(example => `<li>${example}</li>`)
                    .join('')}
                    </ul>
                </div>`;

        productCards.push(calc_card);
      });
    }
  });
}

var rectangleCalculator = `
<div class="inputs-container">
  <div class="input-wrapper">
      <label for="width">Width</label>
      <input type="number" id="width" />
  </div>
  <span>&#10005;</span>
  <div class="input-wrapper">
      <label for="length">Length</label>
      <input type="number" id="length" />
  </div>
  <span>&#10005;</span>
  <div class="input-wrapper">
      <label for="thickness">Thickness</label>
      <select name="thickness" id="thickness-select">
        <option value=".125">1/8"</option>
        <option value=".25">1/4"</option>
        <option value=".325">3/8"</option>
        <option value=".5">1/2"</option>
        <option value=".625">5/8"</option>
        <option value=".75">3/4"</option>
        <option value=".875">7/8"</option>
        <option value="1">1"</option>
        <option value="1.125">1 1/8"</option>
        <option value="1.25">1 1/4"</option>
        <option value="1.325">1 3/8"</option>
        <option value="1.5">1 1/2"</option>
        <option value="1.625">1 5/8"</option>
        <option value="1.75">1 3/4"</option>
        <option value="1.875">1 7/8"</option>
        <option value="2">2"</option>
        <option value="2.5">2.5"</option>
        <option value="3">3"</option>
        <option value="3.5">3.5"</option>
        <option value="4">4"</option>
      </select>
  </div>
</div>
<p>*values are in inches</p>
<a id="calculate">Calculate</a>`;

var circleCalculator = `
<div class="inputs-container">
  <div class="input-wrapper">
      <label for="radius">Radius</label>
      <input type="number" id="radius" />
  </div>
  <span>&#10005;</span>
  <div class="input-wrapper">
      <label for="height">Thickness</label>
      <select name="thickness" id="thickness-select">
        <option value=".125">1/8"</option>
        <option value=".25">1/4"</option>
        <option value=".325">3/8"</option>
        <option value=".5">1/2"</option>
        <option value=".625">5/8"</option>
        <option value=".75">3/4"</option>
        <option value=".875">7/8"</option>
        <option value="1">1"</option>
        <option value="1.125">1 1/8"</option>
        <option value="1.25">1 1/4"</option>
        <option value="1.325">1 3/8"</option>
        <option value="1.5">1 1/2"</option>
        <option value="1.625">1 5/8"</option>
        <option value="1.75">1 3/4"</option>
        <option value="1.875">1 7/8"</option>
        <option value="2">2"</option>
        <option value="2.5">2.5"</option>
        <option value="3">3"</option>
        <option value="3.5">3.5"</option>
        <option value="4">4"</option>
      </select>
  </div>
</div>
<p>*values are in inches</p>
<a id="calculate">Calculate</a>`;

var tumblerCalculator = `
<div class="inputs-container">
  <div class="input-wrapper">
      <label for="ounces">Ounces</label>
      <input type="number" id="ounces" />
  </div>
  <span>&#10005;</span>
  <div class="input-wrapper">
      <label for="total" id="total-label">Total Tumblers</label>
      <input type="number" id="total" />
  </div>
</div>
<p>*values are in fluid ounces</p>
<a id="calculate">Calculate</a>
`;
