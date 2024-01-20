// hero page, the front part of the portfolio

export default function Section_v1() {
    return (
        <>
         <section id="start" className="py-14 bg-white dark:bg-gray-900">
  <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Eros Hervilla
      </h2>
      {/* <h1 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900  dark:text-white">Web-developer</h1> */}
      <h1 className="mb-4 text-5xl tracking-tight font-extrabold dark:text-indigo-600">Web-developer</h1>
      <p className="mb-4">
      Gran variedad de proyectos y trayectoria en el mundo de la programación ¡te invito a conocerme aqui!
      </p>
      <p>
        encuentra el gato: 🐱
      </p>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-8">
      <img
        className="w-full rounded-lg"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
        alt="office content 1"
      />
      <img
        className="mt-4 w-full lg:mt-10 rounded-lg"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
        alt="office content 2"
      />
    </div>
  </div>
</section>


        </>
    )
}