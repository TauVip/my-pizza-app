import { useState } from 'react'
import { useSelector } from 'react-redux'
import closeIcon from '../../../../images/close-icon.svg'
import InformationCircle from '../InformationCircle'

const ModalComboCard = props => {
  const comboProducts = {
    pizzas: [
      {
        composition: [
          {
            name: 'Цыпленок',
            canRemove: true
          },
          {
            name: 'томатный соус',
            canRemove: false
          },
          {
            name: 'моцарелла',
            canRemove: false
          },
          {
            name: 'кисло-сладкий соус',
            canRemove: false
          }
        ],
        snacksId: [
          '60eaa8376891252b608c4758',
          '60eab1b88cdfe902dc7a82d8',
          '60eaacb48cdfe902dc7a82d2',
          '60eaab158cdfe902dc7a82ce',
          '60eaaba68cdfe902dc7a82d0'
        ],
        citiesId: ['60bc792460a1c329e0af345c', '60c1ac669f2d2b332c4f459a'],
        _id: '60ebb3691ed843253c3f0535',
        images: {
          traditional: {
            small:
              'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/aaeb4249-614e-4ba5-a5a9-5b51c41526ec.jpg',
            medium:
              'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/aa6bfef2-c2e8-4f43-89c2-4c6256beaa31.jpg',
            big: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/5e28fb64-d731-4bf8-b864-26ec1c56f1a8.jpg'
          },
          thin: {
            medium:
              'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/39ffe4ad-b57c-4119-b46d-4d69a0bca209.jpg',
            big: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/f0dceab1-b4dc-4761-9cf4-de585701afca.jpg'
          }
        },
        name: 'Кисло-сладкий цыпленок',
        price: {
          small: 1450,
          medium: 2000,
          big: 2950
        },
        description: {
          energyValue: {
            traditional: {
              small: 236.3,
              medium: 239.8,
              big: 237.4
            },
            thin: {
              medium: 230.4,
              big: 232.1
            }
          },
          proteins: {
            traditional: {
              small: 9.4,
              medium: 9.7,
              big: 9.7
            },
            thin: {
              medium: 10.4,
              big: 10.2
            }
          },
          fats: {
            traditional: {
              small: 6.1,
              medium: 6.4,
              big: 6.1
            },
            thin: {
              medium: 6.9,
              big: 6.5
            }
          },
          carbohydrates: {
            traditional: {
              small: 34.3,
              medium: 34.3,
              big: 34.5
            },
            thin: {
              medium: 30.1,
              big: 31.6
            }
          },
          addInfo: [
            'Содержит аллергены: молоко',
            'Может содержать аллергены: аспартам, горчица, диоксид серы и сульфиты, кунжут, моллюски, молоко, орехи, ракообразные, рыба, сельдерей, соя, яйца'
          ]
        },
        weight: {
          traditional: {
            small: 370,
            medium: 540,
            big: 720
          },
          thin: {
            medium: 440,
            big: 610
          }
        }
      },
      {
        composition: [
          {
            name: 'Картофель из печи',
            canRemove: true
          },
          {
            name: 'соленые огурчики',
            canRemove: true
          },
          {
            name: 'цыпленок',
            canRemove: true
          },
          {
            name: 'соус ранч',
            canRemove: true
          },
          {
            name: 'томаты',
            canRemove: true
          },
          {
            name: 'красный лук',
            canRemove: true
          },
          {
            name: 'чеснок',
            canRemove: true
          },
          {
            name: 'моцарелла',
            canRemove: false
          },
          {
            name: 'томатный соус',
            canRemove: false
          }
        ],
        snacksId: [
          '60eab1b88cdfe902dc7a82d8',
          '60eaab158cdfe902dc7a82ce',
          '60eaaba68cdfe902dc7a82d0'
        ],
        citiesId: ['60c1ac669f2d2b332c4f459a'],
        _id: '60ee55d96df2352d10376a7d',
        images: {
          traditional: {
            small:
              'https://dodopizza-a.akamaihd.net/static/Img/Products/61e4d6be8b424ead81efa793b263f0af_584x584.jpeg',
            medium:
              'https://dodopizza-a.akamaihd.net/static/Img/Products/e017d3f4ce184175b2563687cf1567a3_584x584.jpeg',
            big: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c884da4361104faa87674d9fb8392d4e_584x584.jpeg'
          },
          thin: {
            medium:
              'https://dodopizza-a.akamaihd.net/static/Img/Products/c421b3ec10764965bf1293d102dd7394_584x584.jpeg',
            big: 'https://dodopizza-a.akamaihd.net/static/Img/Products/94f6620030134a169b25c4ae7bf531c4_584x584.jpeg'
          }
        },
        name: 'Деревенская',
        price: {
          small: 1750,
          medium: 2650,
          big: 3350
        },
        weight: {
          traditional: {
            small: 510,
            medium: 790,
            big: 1080
          },
          thin: {
            medium: 680,
            big: 960
          }
        },
        description: {
          energyValue: {
            traditional: {
              small: 215.7,
              medium: 214.6,
              big: 206.2
            },
            thin: {
              medium: 204.5,
              big: 208.6
            }
          },
          proteins: {
            traditional: {
              small: 8.1,
              medium: 8.1,
              big: 7.9
            },
            thin: {
              medium: 8.4,
              big: 8.3
            }
          },
          fats: {
            traditional: {
              small: 7.7,
              medium: 7.6,
              big: 7.6
            },
            thin: {
              medium: 8.2,
              big: 8.3
            }
          },
          carbohydrates: {
            traditional: {
              small: 27,
              medium: 26.4,
              big: 25.1
            },
            thin: {
              medium: 22.9,
              big: 23.7
            }
          }
        }
      }
    ],
    products: [
      {
        citiesId: ['60c1ac669f2d2b332c4f459a'],
        _id: '60f649607b9ed7012cf01b52',
        category: 'snacks',
        name: 'Додстер',
        image:
          'https://dodopizza-a.akamaihd.net/static/Img/Products/f0a9fcc7ed2a49a3addd7edff462a2a0_1875x1875.jpeg',
        info: 'Легендарная горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
        defaultCount: '1 шт',
        weight: 210,
        price: 850,
        description: {
          energyValue: 244.6,
          proteins: 11.9,
          fats: 12.8,
          carbohydrates: 18.7
        }
      },
      {
        citiesId: ['60c1ac669f2d2b332c4f459a'],
        _id: '60f648d97b9ed7012cf01b51',
        category: 'snacks',
        name: 'Додстер Чипотле',
        image:
          'https://dodopizza-a.akamaihd.net/static/Img/Products/78afc2d0d3144ae19f8f4497d64415c9_1875x1875.jpeg',
        info: 'Горячая закуска с пикантным соусом чипотле из копченых перчиков, цыплёнком, томатами, моцареллой в тонкой пшеничной лепешке',
        defaultCount: '1 шт',
        weight: 210,
        price: 850,
        description: {
          energyValue: 233.9,
          proteins: 12.6,
          fats: 10.8,
          carbohydrates: 20
        }
      }
    ]
  }

  const combo = {
    pizzas: {
      id: [
        '60efb7e16fe49c2f24bcf5fb',
        '60efd0346fe49c2f24bcf601',
        '60efcb026fe49c2f24bcf600',
        '60eeacd02c89e728981370fb',
        '60ee84ce1fecbc14c4e6b5f3',
        '60eea79b2c89e728981370fa'
      ],
      default: '60efb7e16fe49c2f24bcf5fb',
      size: 'small',
      thickness: 'traditional'
    },
    snacks: {
      id: ['60f649607b9ed7012cf01b52', '60f6485d7b9ed7012cf01b50'],
      default: '60f649607b9ed7012cf01b52'
    },
    drinks: {
      id: [
        '60f69af630d3c2052c49c37f',
        '60f69cae30d3c2052c49c383',
        '60f69de930d3c2052c49c386',
        '60f691e1f4c44505209148f3',
        '60f694155078231b8c133e20',
        '60f694a15078231b8c133e23',
        '60f695665078231b8c133e26',
        '60f695205078231b8c133e25',
        '60f697755078231b8c133e2d',
        '60f6a25e3a91d90fec508663'
      ],
      default: '60f691e1f4c44505209148f3'
    },
    sauces: [
      {
        name: 'Сырный соус',
        image:
          'https://dodopizza-a.akamaihd.net/static/Img/Products/Sauces/ru-RU/4426a41c-cbba-4f49-b03e-0dfc06f7c716.jpg',
        default: true
      },
      {
        name: 'Барбекю',
        image:
          'https://dodopizza-a.akamaihd.net/static/Img/Products/Sauces/ru-RU/9a30910e-b485-49ea-85c7-a70dd7972315.jpg'
      },
      {
        name: 'Чесночный',
        image:
          'https://dodopizza-a.akamaihd.net/static/Img/Products/Sauces/ru-RU/7d16b5cb-83c2-4dd3-bde7-67d77e1502c2.jpg'
      },
      {
        name: 'Сгущенка',
        image:
          'https://dodopizza-a.akamaihd.net/static/Img/Products/Sauces/ru-RU/22514455-3de1-4634-9b70-9ac40d101707.jpg'
      }
    ]
  }

  const { sizeVars } = useSelector(state => state.pizzasList)

  const [comboSectionChecked, setComboSectionChecked] = useState(null)
  const [thickness, setThickness] = useState('traditional')

  const changeComboSection = e => {
    if (e.currentTarget.dataset.active === 'false')
      e.currentTarget.dataset.active = true
    else e.currentTarget.dataset.active = false

    if (comboSectionChecked && comboSectionChecked !== e.currentTarget)
      comboSectionChecked.dataset.active = false

    if (comboSectionChecked === e.currentTarget) setComboSectionChecked(null)
    else setComboSectionChecked(e.currentTarget)

    console.log(e.currentTarget.dataset.active, comboSectionChecked)
  }

  return (
    <div className='show-locality__selector'>
      <div className='show-locality__shadow' />
      <div className='locality-selector__wrapper'>
        <div className='modal-product__card'>
          <div style={{ display: 'flex' }}>
            <div className='combo-info__wrapper'>
              <div className='combo-info__section'>
                <div className='combo-info__title'>
                  <span style={{ fontSize: 24, lineHeight: '28px' }}>
                    Комбо за 2 650 тг.
                  </span>
                  <InformationCircle
                    comboProducts={comboProducts}
                    thickness={combo.pizzas.thickness}
                    sizeChosen={combo.pizzas.size}
                    sizeVars={sizeVars}
                  />
                </div>
                <div className='combo-info__desc'>
                  Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и
                  соус. Выбор пицц ограничен
                </div>
                <div
                  className='combo-product__section'
                  data-active={false}
                  onClick={changeComboSection}
                >
                  <img
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/2e8c610d59ce49fbae8f8909b2940343_233x233.jpeg'
                    alt=''
                    className='combo-product__img'
                  />
                  <i style={{ position: 'absolute', top: 14, right: 12 }}>
                    <svg
                      width='8'
                      height='13'
                      viewBox='0 0 8 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.26544 5.78418C7.66806 6.17666 7.66806 6.82382 7.26544 7.21631L6.72208 7.74599L1.90072 12.3992C1.55373 12.7341 1.00345 12.7327 0.65814 12.3961C0.297847 12.0448 0.299019 11.4654 0.66073 11.1156L5.06205 6.85969C5.26529 6.66315 5.26529 6.33733 5.06204 6.1408L0.66073 1.8849C0.299019 1.53513 0.297847 0.955646 0.658139 0.604424C1.00345 0.267805 1.55373 0.266429 1.90072 0.601317L6.72208 5.2545L7.26544 5.78418Z'
                        fill='#D8D8D8'
                      ></path>
                    </svg>
                  </i>
                  <div style={{ marginLeft: 76 }}>
                    <div className='combo-product__title'>Аррива!</div>
                    <div style={{ fontSize: 12, lineHeight: '16px' }}>
                      Соус бургер, цыпленок, соус ранч, чоризо из цыпленка,
                      сладкий перец, красный лук, моцарелла, томаты, чеснок
                    </div>
                    <div className='combo-product__size'>
                      Маленькая 25 см, традиционное тесто
                    </div>
                  </div>
                  {comboSectionChecked && (
                    <div
                      className='pizza-info__size'
                      onClick={e => e.stopPropagation()}
                    >
                      <div
                        className={`product-chosen ${thickness}-chosen`}
                        style={{ width: '50%' }}
                      />
                      <input
                        type='radio'
                        id='thickness-traditional'
                        className='product-size__input'
                        name='product-thickness'
                        checked={thickness === 'traditional'}
                        onChange={() => setThickness('traditional')}
                      />
                      <label
                        htmlFor='thickness-traditional'
                        className='product-size__label'
                      >
                        Традиционное
                      </label>
                      <input
                        type='radio'
                        id='thickness-thin'
                        className='product-size__input'
                        name='product-thickness'
                        checked={thickness === 'thin'}
                        onChange={() => setThickness('thin')}
                      />
                      <label
                        htmlFor='thickness-thin'
                        className='product-size__label'
                      >
                        Тонкое
                      </label>
                    </div>
                  )}
                </div>
                <div
                  className='combo-product__section'
                  data-active={false}
                  onClick={changeComboSection}
                >
                  <img
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/f0a9fcc7ed2a49a3addd7edff462a2a0_233x233.jpeg'
                    alt=''
                    className='combo-product__img'
                  />
                  <i style={{ position: 'absolute', top: 14, right: 12 }}>
                    <svg
                      width='8'
                      height='13'
                      viewBox='0 0 8 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.26544 5.78418C7.66806 6.17666 7.66806 6.82382 7.26544 7.21631L6.72208 7.74599L1.90072 12.3992C1.55373 12.7341 1.00345 12.7327 0.65814 12.3961C0.297847 12.0448 0.299019 11.4654 0.66073 11.1156L5.06205 6.85969C5.26529 6.66315 5.26529 6.33733 5.06204 6.1408L0.66073 1.8849C0.299019 1.53513 0.297847 0.955646 0.658139 0.604424C1.00345 0.267805 1.55373 0.266429 1.90072 0.601317L6.72208 5.2545L7.26544 5.78418Z'
                        fill='#D8D8D8'
                      ></path>
                    </svg>
                  </i>
                  <div style={{ marginLeft: 76 }}>
                    <div className='combo-product__title'>Додстер</div>
                    <div style={{ fontSize: 12, lineHeight: '16px' }}>
                      Легендарная горячая закуска с цыплёнком, томатами,
                      моцареллой, соусом ранч в тонкой пшеничной лепешке
                    </div>
                  </div>
                </div>
                <div
                  className='combo-product__section'
                  data-active={false}
                  onClick={changeComboSection}
                >
                  <img
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/9c1e756e24ed405aaebfe9270f4350cd_233x233.jpeg'
                    alt=''
                    className='combo-product__img'
                  />
                  <i style={{ position: 'absolute', top: 14, right: 12 }}>
                    <svg
                      width='8'
                      height='13'
                      viewBox='0 0 8 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.26544 5.78418C7.66806 6.17666 7.66806 6.82382 7.26544 7.21631L6.72208 7.74599L1.90072 12.3992C1.55373 12.7341 1.00345 12.7327 0.65814 12.3961C0.297847 12.0448 0.299019 11.4654 0.66073 11.1156L5.06205 6.85969C5.26529 6.66315 5.26529 6.33733 5.06204 6.1408L0.66073 1.8849C0.299019 1.53513 0.297847 0.955646 0.658139 0.604424C1.00345 0.267805 1.55373 0.266429 1.90072 0.601317L6.72208 5.2545L7.26544 5.78418Z'
                        fill='#D8D8D8'
                      ></path>
                    </svg>
                  </i>
                  <div style={{ marginLeft: 76 }}>
                    <div className='combo-product__title'>Кофе Капучино</div>
                    <div style={{ fontSize: 12, lineHeight: '16px' }}>
                      0.3 л
                    </div>
                  </div>
                </div>
                <div
                  className='combo-product__section'
                  data-active={false}
                  onClick={changeComboSection}
                >
                  <img
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/Sauces/ru-RU/4426a41c-cbba-4f49-b03e-0dfc06f7c716.jpg'
                    alt=''
                    className='combo-product__img'
                  />
                  <i style={{ position: 'absolute', top: 14, right: 12 }}>
                    <svg
                      width='8'
                      height='13'
                      viewBox='0 0 8 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.26544 5.78418C7.66806 6.17666 7.66806 6.82382 7.26544 7.21631L6.72208 7.74599L1.90072 12.3992C1.55373 12.7341 1.00345 12.7327 0.65814 12.3961C0.297847 12.0448 0.299019 11.4654 0.66073 11.1156L5.06205 6.85969C5.26529 6.66315 5.26529 6.33733 5.06204 6.1408L0.66073 1.8849C0.299019 1.53513 0.297847 0.955646 0.658139 0.604424C1.00345 0.267805 1.55373 0.266429 1.90072 0.601317L6.72208 5.2545L7.26544 5.78418Z'
                        fill='#D8D8D8'
                      ></path>
                    </svg>
                  </i>
                  <div style={{ marginLeft: 76 }}>
                    <div className='combo-product__title'>Сырный соус</div>
                  </div>
                </div>
              </div>
              <div style={{ flex: '0 0 auto', padding: '16px 30px 30px' }}>
                <div style={{ lineHeight: '16px', marginBottom: 16 }}>
                  Стоимость
                  <div style={{ float: 'right' }}>2 650 тг.</div>
                  <div className='combo-full-price'>3 150 тг.</div>
                </div>
                <button className='add-cart__button'>В корзину</button>
              </div>
            </div>
            <div className='combo-choose__wrapper'>
              <img
                src='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/e4aecdc6e454411b912eb335be5249de_1875x1875.webp'
                alt=''
                style={{ width: '100%', userSelect: 'none' }}
              />
            </div>
          </div>
          <img
            src={closeIcon}
            alt='Close Icon'
            className='close-icon'
            onClick={() => props.setShowComboCard(false)}
          />
        </div>
      </div>
    </div>
  )
}
export default ModalComboCard
