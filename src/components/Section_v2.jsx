import {CheckIcon,ClockIcon} from '@heroicons/react/20/solid'
import {ChatBubbleLeftEllipsisIcon,UserGroupIcon } from '@heroicons/react/24/solid'
// eslint-disable-next-line no-unused-vars
import {Carousel} from '@preline/carousel';

const features = [
  {
    name:'Comunicación',
    description:'Considero importante la comunicación para comprender los requisitos del proyecto, compartir ideas y soluciones.',
    icon:ChatBubbleLeftEllipsisIcon,
  },
  {
    name: 'Responsabilidad',
    description:
      'Como programador mi deber es cumplir con los plazos, entregar un trabajo de calidad y asumir la responsabilidad de mis errores.',
    icon: ClockIcon,
  },
  {
    name: 'Trabajo en equipo',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: UserGroupIcon,
  },
  {
    name: 'Compromiso',
    description: 'Estoy dispuesto a aprender y crecer,  a ayudar a los demás y dar lo mejor de mi mismo.',
    icon: CheckIcon,
  },
]

export default function Section_v2() {
  return (
    <div className="dark:bg-gray-900 py-14 relative">
      <div className="absolute -top-10" id="values"></div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8" >
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2" >
          <div className="lg:pr-8 lg:pt-4" >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600" >yo como persona...</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">¿Qué considero importante?</p>
              <p className="mt-6 text-lg leading-8 text-white">
               A la hora de programar, las habilidades en cualquier lenguaje van llevadas de la mano con los valores de trabajo.
               <br/>Mejor persona... mejor software 😃.
              </p>
              <br/>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
         <div className = "w-[48rem] max-w-full rounded-xl shadow-xl  sm:w-[57rem] md:-ml-4 lg:-ml-0 sticky">
         
  {/* Slider */}
  <div
    data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
    className="relative sticky top-20"
  >
    <div className="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
      <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
        <div className="hs-carousel-slide">
          <div className="flex justify-center h-full bg-gray-100 p-6">
            <span className="self-center text-4xl transition duration-700">
              First slide
            </span>
          </div>
        </div>
        <div className="hs-carousel-slide">
          <div className="flex justify-center h-full bg-gray-200 p-6">
            <span className="self-center text-4xl transition duration-700">
              Second slide
            </span>
          </div>
        </div>
        <div className="hs-carousel-slide">
          <div className="flex justify-center h-full bg-gray-300 p-6">
            <span className="self-center text-4xl transition duration-700">
              Third slide
            </span>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
    >
      <span className="text-2xl" aria-hidden="true">
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </span>
      <span className="sr-only">Previous</span>
    </button>
    <button
      type="button"
      className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
    >
      <span className="sr-only">Next</span>
      <span className="text-2xl" aria-hidden="true">
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </span>
    </button>
  
  </div>
  {/* End Slider */}


         </div>
        </div>
      </div>
    </div>
  )
}
