/** @format */
const data = [
  {
    date: "12 oct, 2021",
    title: "Startup Incubation Success Story",
    logo: "🧑‍💻",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    date: "17 jan, 2022",
    title: "Rural Development Program",
    logo: "💸",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    date: "30 march, 2023",
    title: "Empowering Dreams:Success Saga",
    logo: "💻",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    date: "29 feb, 2024",
    title: "Inspiring: Sand Tank Triumph",
    logo: "📧",
    disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

function Timeline() {
  return (
    <div className='my-20'>
      <h1 className='sm:text-5xl text-4xl text-gray-800 underline text-center my-24 font-bold'>
        Our successfull journey
      </h1>
      <ol className='items-center sm:flex'>
        {data.map((el, i) => (
          <Time key={i} data={el} />
        ))}
      </ol>
    </div>
  );
}

function Time({ data }) {
  return (
    <li className='relative mb-6 sm:mb-0'>
      <div className='flex items-center'>
        <div className='z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0'>
          <span>{data.logo}</span>
        </div>
        <div className='hidden sm:flex w-full bg-gray-500 h-0.5 dark:bg-gray-700'></div>
      </div>
      <div className='mt-3 sm:pe-8'>
        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
          {data.title}
        </h3>
        <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          On {data.date}
        </time>
        <p className='text-base font-normal text-gray-500 dark:text-gray-400 line-clamp-3'>
          {data.disc}
        </p>
      </div>
    </li>
  );
}

export default Timeline;
