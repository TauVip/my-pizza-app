import { Link } from 'react-router-dom'
import './styles.css'

const About = () => {
  return (
    <div style={{ paddingTop: 60 }}>
      <div className='container'>
        <section className='about-content-section'>
          <h1 className='about-content__title'>Мы</h1>
          <p className='about-content__p'>
            Обычно люди приходят в Додо Пиццу, чтобы просто поесть. Наши
            промоутеры раздают листовки про кусочек пиццы за 100 тенге или ещё
            что-то выгодное. Мы делаем это как первый шаг, чтобы познакомиться.
          </p>
          <p className='about-content__p'>
            Но для нас Додо — не только пицца. Это и пицца тоже, но в первую
            очередь это большое дело, которое вдохновляет нас, заставляет каждое
            утро просыпаться и с интересом продолжать работу.
          </p>
          <p className='about-content__p'>
            В чём же наш интерес? Сейчас расскажем.
          </p>
          <div className='about-content__images'>
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/755b0b67afea05fc6ebb.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/21406e80e169f29a2a1e.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/576e2d9c15dd73d3e3db.svg'
              alt=''
              className='about-content__img'
            />
          </div>
        </section>
        <section className='about-content-section'>
          <h2 className='about-content__title-h2'>Идеальные ингредиенты</h2>
          <p className='about-content__p'>
            Почему мы так хотим познакомиться? Потому что дальше пицца делает
            всё сама. Люди видят, что она вкусная, и возвращаются снова. Нам
            главное первый раз это показать.
          </p>
          <p className='about-content__p'>
            Вообще пицца — очень простая штука, её сложно испортить. Достаточно
            хороших ингредиентов и правильного теста. Это конструктор, если
            детали качественные, то и результат будет в порядке. Вот они, наши
            детали:
          </p>
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/256129c62108008ace9d.svg'
            alt=''
            className='about-content__img-left'
            style={{ width: '67.5%' }}
          />
          <div style={{ position: 'relative' }}>
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/99b416049189c533d958.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/034e85056761eb0e2287.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/6823bc0209edf438a7f6.svg'
              alt=''
              className='about-content__img'
            />
          </div>
        </section>
        <section className='about-content-section'>
          <h2 className='about-content__title-h2'>
            Одинаково вкусно в Москве и Сыктывкаре
          </h2>
          <p className='about-content__p'>
            Кто угодно может сделать вкусную пиццу. А шеф-повар итальянского
            ресторана сделает и вовсе шедевр. Он молодец. Но представьте, что
            вам нужно сделать вкусную пиццу в сотнях пиццерий, за сотни
            километров друг от друга. Это наш случай, у нас их вон уже сколько:
          </p>
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/fad04afd044ff19e42f3.svg'
            alt=''
            className='about-content__img-left'
          />
          <p className='about-content__p'>
            Пицца должна быть вкусной и везде одинаковой. Пиццерии должны быть
            одинаково уютными, кассиры неизменно приветливыми, а курьеры —
            расторопными.
          </p>
          <p className='about-content__p'>И это как раз сложно. Но мы умеем!</p>
          <div style={{ position: 'relative' }}>
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/0a0347640db82a1a40c2.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/f1028617e3ff7b832f27.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/7431babf745ffe56507b.svg'
              alt=''
              className='about-content__img'
            />
          </div>
        </section>
        <section className='about-content-section'>
          <h2 className='about-content__title-h2'>Единые стандарты</h2>
          <p className='about-content__p'>
            Цифровые технологии помогают нам вовремя замечать, если что-то идёт
            неправильно. Но как понять, что правильно, а что нет? Для этого у
            нас есть стандарты. Вот, например, про мытьё рук:
          </p>
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/9b2321b20c46607b7bea.svg'
            alt=''
            className='about-content__img-left'
          />
          <p className='about-content__p'>
            Наши стандарты — это не какие-то заумные схемы и формулы, а
            супер-понятные правила. У нас их сотни, буквально про всё. Именно
            так мы умудряемся делать всё хорошо и одновременно быстро расти.
          </p>
          <div style={{ position: 'relative', bottom: -50 }}>
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/20dd4c439cc3e6e57d41.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/4f465faafe8ee8c92c9b.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/f6fba11a423c51f17869.svg'
              alt=''
              className='about-content__img'
            />
          </div>
        </section>
        <section className='about-content-section'>
          <h2 className='about-content__title-h2'>Открытость во всём</h2>
          <p className='about-content__p'>
            Кто угодно может написать сотню правил, но само по себе это не
            работает. Нужна сила, благодаря которой стандарты будут соблюдаться.
            Для нас этой силой стала открытость. Мы сделали всё настолько
            прозрачным, что отступать от стандартов просто не получается.
          </p>
          <p className='about-content__p'>В чём конкретно это проявляется?</p>
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/c7e5c65568dfe97195e5.svg'
            alt=''
            className='about-content__img-left'
          />
          <p className='about-content__p'>
            Именно открытость заставляет нас выполнять обещания, соблюдать
            стандарты и работать строго в рамках закона. Но открытость для нас —
            не просто модный тренд. Это наше глубокое убеждение, философия и
            ценность, которую мы хотим нести миру.
          </p>
          <div style={{ position: 'relative', bottom: -50 }}>
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/ddfa0f6c233d31693bf5.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/866cd48e883d1c66f542.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/20ddf04f01833500c100.svg'
              alt=''
              className='about-content__img'
            />
          </div>
        </section>
        <section className='about-content-section'>
          <h2 className='about-content__title-h2'>Почему Додо</h2>
          <p className='about-content__p'>
            Знаете почему мы называемся в честь этой странной птицы? Додо, или
            маврикийские дронты, были очень доверчивыми и наивными, и вымерли в
            конце семнадцатого века с приходом колонизаторов.
          </p>
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/4448c089783ebc407a3e.svg'
            alt=''
            className='about-content__img-left'
            style={{ width: '56.25%' }}
          />
          <div style={{ position: 'relative' }}>
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/51550f7037b7be64a97d.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/0a059853f3626d554ca1.svg'
              alt=''
              className='about-content__img'
            />
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/703998d2e00d51b1e3a5.svg'
              alt=''
              className='about-content__img'
            />
          </div>
          <p className='about-content__p'>
            Жаль, что маврикийские дронты не дожили до сегодняшнего дня. Мы
            уверены: сейчас доверие, отзывчивость и открытость — серьёзные
            конкурентные преимущества. Именно благодаря открытости и доверию, мы
            смогли за семь лет стать самой крупной сетью пиццерий в России.
            Звучит как парадокс, но мы видим в этом закономерность.
          </p>
          <p className='about-content__p'>
            Мы хотим жить и работать в мире, где люди доверяют друг другу. Мы
            создаём такой мир, делая очень простой и приземлённый продукт:
            пиццу. Это лишь способ жить так, как мы хотим!
          </p>
        </section>
        <section className='about-content-section'>
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/67130451a949e975753f.jpg'
            alt=''
            className='about-content-gallery__img'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/97114ed89637dc6f0832.jpg'
            alt=''
            className='about-content-gallery__img w50 pr10'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/2fa54610bf283e94faf1.jpg'
            alt=''
            className='about-content-gallery__img w50'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/a076c0ab28153808492b.jpg'
            alt=''
            className='about-content-gallery__img'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/92c81f74f53de7957301.jpg'
            alt=''
            className='about-content-gallery__img w80-right'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/4bc4e3335a045aa86ec2.jpg'
            alt=''
            className='about-content-gallery__img w50 pr10'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/af5077ef9b7ad9221353.jpg'
            alt=''
            className='about-content-gallery__img w50'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/site-static/dist/82fb09105280cd765989.jpg'
            alt=''
            className='about-content-gallery__img w80'
          />
        </section>
        <section className='about-content-section'>
          <p className='about-content__p'>
            Если вы испытываете похожие чувства — прочитайте нашу книгу, и может
            быть мы станем друзьями. Если считаете, что это полная ерунда и так
            не бывает — всё равно прочитайте и расскажите, что думаете.
          </p>
          <Link
            to={{ pathname: 'https://book.dodopizza.info/' }}
            target='_blank'>
            <div className='read-button'>Читать</div>
            <img
              src='https://dodopizza-a.akamaihd.net/site-static/dist/eec6a1974ba591acfdcb.svg'
              alt=''
              className='about-content__book-img'
            />
          </Link>
        </section>
      </div>
    </div>
  )
}
export default About
