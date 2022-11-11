import { HiChevronDoubleLeft } from "react-icons/hi";

const NavHeader = ({ onToggle, isMinimized }) => {
  return (
    <div className='hidden lg:flex items-center justify-between p-4 lg:h-20'>
      {!isMinimized && (
        <div className='flex-shrink-0 flex items-center mr-12'>
          <div className='flex items-center justify-center w-12 h-12 rounded-lg bg-gray-600 text-2xl'>
            J
          </div>
          <div className='flex flex-col p-2'>
            <h6 className='text-lg text-gray-200'>The Junto</h6>
            <p className='text-sm text-gray-300'>Tailwind Demo</p>
          </div>
        </div>
      )}
      <div
        className={`text-gray-400 text-3xl cursor-pointer hover:text-gray-300 transition-[transform] duration-200 ${
          isMinimized && "rotate-180"
        }`}
        onClick={() => onToggle()}
      >
        <HiChevronDoubleLeft />
      </div>
    </div>
  );
};

export default NavHeader;
