/** @format */
function Teams() {
  const team = [
    {
      post: "manager",
      name: "adarsh",
      photo: "https://assets.leetcode.com/users/avatars/avatar_1697790075.png",
    },
    {
      post: "designer",
      name: "test",
      photo: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      post: "designer",
      name: "test",
      photo: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      post: "designer",
      name: "test",
      photo: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    {
      post: "designer",
      name: "test",
      photo: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      post: "designer",
      name: "test",
      photo: "https://randomuser.me/api/portraits/women/17.jpg",
    },
    {
      post: "designer",
      name: "test",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      post: "designer",
      name: "test",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      post: "designer",
      name: "test",
      photo: "https://randomuser.me/api/portraits/women/56.jpg",
    },
  ];
  return (
    <div className='md:px-10 py-20'>
      <h1 className='uppercas mb-16 text-center text-2xl md:text-4xl text-gray-800 underline font-bold uppercase'>
        meet our team
      </h1>
      <div className='scrollbar-hide mx-auto w-[90%] overflow-y-auto'>
        <div className='flex flex-row gap-16'>
          {team.map((el, key) => (
            <div
              className='min-w-20 max-w-20 md:min-w-32 md:max-w-32 text-gray-700'
              key={key}>
              <img
                className='rounded-full mb-3 h-20 md:h-32'
                src={el.photo}
                alt=''
              />
              <p className='text-center font-semibold uppercase'>{el.post}</p>
              <p className='text-center  capitalize whitespace-nowrap'>
                {el.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
