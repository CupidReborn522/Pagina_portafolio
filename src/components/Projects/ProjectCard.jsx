/* eslint-disable react/prop-types */
import lupitaNavideña from '../../assets/lupitanavideña.jpg'

export default function ProjectCard({title = 'ejemplo',description = 'description',img = lupitaNavideña,link = '#'}){
    return(
        
        <div className="
         max-w-xs
         min-w-72
         sm:w-full
         sm:min-w-fit
         md:min-w-full
       bg-white
          mx-auto
         border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-gray-700 hover:shadow-lg transition ">
  <a href="#">
    <img className="rounded-t-lg mx-auto  w-fit max-h-60" src={img} alt="" />
  </a>
  <div className="p-5">
    <a href={link}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {description}
    </p>
    <a
      href={link}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      visit page
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>

        
    )

}