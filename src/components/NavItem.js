const NavItem = ({ text = "Default", icon = "", isMinimized }) => {
  return (
    <div className='group flex-grow lg:flex-grow-0 flex flex-col lg:flex-row items-center p-4 cursor-pointer rounded-lg hover:bg-gray-600'>
      <div className='flex justify-center items-center text-4xl text-gray-400 group-hover:text-gray-100'>
        {icon}
      </div>
      <p
        className={`text-sm lg:text-lg lg:ml-4 text-gray-200 ${
          isMinimized && "lg:hidden"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
export default NavItem;
