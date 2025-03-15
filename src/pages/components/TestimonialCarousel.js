import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: 'BerryMuffin150',
      review:
        'I am very happy with the theme, particularly with customizability, because it has many options and looks and you can create new ones as well.',
      attribute: 'Customizability',
      img: '/img/envato.png',
    },
    {
      name: 'korin_fr',
      review:
        "Awesome template ! One of the best I've worked with... beautiful and easy to customize. Elementor is a must. Great job!!",
      attribute: 'Design Quality',
      img: '/img/envato.png',
    },
    {
      name: 'NellLC29',
      review:
        "The customer support is perfect, same for the theme. You won't be disappointed! Le service client est parfait, le thème aussi. Vous pouvez l'acheter les yeux fermés !",
      attribute: 'Customer Support',
      img: '/img/envato.png',
    },
    {
      name: 'mpgmateus',
      review:
        'The theme is wonderful! I loved it!!! The support is UNREAL! You ROCK! Thank you very much for supporting like this! :))',
      attribute: 'Customer Support',
      img: '/img/envato.png',
    },
    {
        name: 'BerryMuffin150',
        review:
          'I am very happy with the theme, particularly with customizability, because it has many options and looks and you can create new ones as well.',
        attribute: 'Customizability',
        img: '/img/envato.png',
      },
      {
        name: 'korin_fr',
        review:
          "Awesome template ! One of the best I've worked with... beautiful and easy to customize. Elementor is a must. Great job!!",
        attribute: 'Design Quality',
        img: '/img/envato.png',
      },
      {
        name: 'NellLC29',
        review:
          "The customer support is perfect, same for the theme. You won't be disappointed! Le service client est parfait, le thème aussi. Vous pouvez l'acheter les yeux fermés !",
        attribute: 'Customer Support',
        img: '/img/envato.png',
      },
      {
        name: 'mpgmateus',
        review:
          'The theme is wonderful! I loved it!!! The support is UNREAL! You ROCK! Thank you very much for supporting like this! :))',
        attribute: 'Customer Support',
        img: '/img/envato.png',
      },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800">
            Real people, real stories. Hear from <br />
            our community.
          </h2>
        </div>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={Math.floor(testimonials.length / 2)} 
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 100,
            modifier: 5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="/img/quotes.png"
                  alt="Quotes"
                  className="w-10 h-10 mb-4"
                />
                <div className="mb-4">
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className="fas fa-star text-yellow-400 text-xs"
                      ></i>
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.review}</p>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4 text-left">
                    <h6 className="text-lg font-medium text-gray-700">
                      {testimonial.name}
                    </h6>
                    <span className="text-sm text-gray-500">
                      For{' '}
                      <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ">
                        {testimonial.attribute}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
