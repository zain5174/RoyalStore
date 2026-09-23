import { icons } from "../assets/assets.js";
const Search = ({setSearchSection}) => {
  return (
    <div>
      <div>
        <div className="bg-secondary h-13 flex items-center justify-between p-5">
          <h1 className="text- font-extrabold">Royal Store</h1>
          <icons.IoMdClose
            onClick={() => setSearchSection(false)}
            className="text-white text-2xl"
          />
        </div>

        <div className="flex flex-col gap-3 p-5">
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;