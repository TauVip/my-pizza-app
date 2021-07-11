const mongoose = require('mongoose')

const pizzasSchema = new mongoose.Schema(
  {
    images: {
      type: {
        traditional: {
          type: {
            small: { type: String },
            medium: { type: String },
            big: { type: String }
          }
        },
        thin: {
          type: {
            small: { type: String },
            medium: { type: String },
            big: { type: String }
          }
        }
      },
      required: [true, 'Pizza images is required']
    },
    name: {
      type: String,
      unique: true,
      required: [true, 'Pizza name is required']
    },
    composition: {
      type: [
        {
          name: {
            type: String,
            required: true
          },
          canRemove: {
            type: Boolean,
            required: true
          }
        }
      ],
      required: true,
      validate: [value => value.length > 0, 'No outputs']
    },
    price: {
      type: {
        small: { type: Number },
        medium: { type: Number },
        big: { type: Number }
      },
      required: [true, 'Pizza price is required']
    },
    thickness: {
      type: {
        traditional: {
          type: {
            small: { type: Number },
            medium: { type: Number },
            big: { type: Number }
          }
        },
        thin: {
          type: {
            small: { type: Number },
            medium: { type: Number },
            big: { type: Number }
          }
        }
      },
      required: [true, 'Pizza thickness is required']
    },
    snacksId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'PizzasSnacks'
        }
      ]
    },
    description: {
      type: {
        energyValue: {
          type: {
            traditional: {
              type: {
                small: { type: Number },
                medium: { type: Number },
                big: { type: Number }
              }
            },
            thin: {
              type: {
                small: { type: Number },
                medium: { type: Number },
                big: { type: Number }
              }
            }
          },
          required: true
        },
        proteins: {
          type: {
            traditional: {
              type: {
                small: { type: Number },
                medium: { type: Number },
                big: { type: Number }
              }
            },
            thin: {
              type: {
                small: { type: Number },
                medium: { type: Number },
                big: { type: Number }
              }
            }
          },
          required: true
        },
        fats: {
          type: {
            traditional: {
              type: {
                small: { type: Number },
                medium: { type: Number },
                big: { type: Number }
              }
            },
            thin: {
              type: {
                small: { type: Number },
                medium: { type: Number },
                big: { type: Number }
              }
            }
          },
          required: true
        },
        carbohydrates: {
          type: {
            traditional: {
              type: {
                small: { type: Number },
                medium: { type: Number },
                big: { type: Number }
              }
            },
            thin: {
              type: {
                small: { type: Number },
                medium: { type: Number },
                big: { type: Number }
              }
            }
          },
          required: true
        },
        addInfo: { type: [String] }
      },
      required: [true, 'Pizza description is required']
    },
    citiesId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Cities'
        }
      ],
      required: true,
      validate: [value => value.length > 0, 'No outputs']
    }
  },
  { timestamps: true }
)
const Pizzas = mongoose.model('Pizzas', pizzasSchema)
module.exports = Pizzas
