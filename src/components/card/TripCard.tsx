import { FaLocationDot } from "react-icons/fa6";
import { RxCalendar } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

type TripCardProps = {
  id: number;
  image: string;
  flag: string;
  country: string;
  address: string;
  rating: string;
  discount: string;
  price: string;
  avatar: string;
  desc: string;
};

export const TripCard = ({ item }: { item: TripCardProps }) => {
  return (
    <div className="box rounded-xl shadow-s3" key={item?.id}>
      <div className="h-56 rounded-t-xl overflow-hidden">
        <img
          src={item?.image}
          alt={item?.country}
          className="w-full h-full duration-700 transition-transform hover:scale-105 "
        />
      </div>
      <div className="details p-6">
        <div className="flexc justify-between">
          <h3 className="text-xl font-semibold">{item?.country}</h3>
          <img src={item.flag} alt={item?.country} />
        </div>
        <div className="flexc gap-2 my-4 text-gray-400">
          <FaLocationDot size={20} className=" text-gray-500" />
          <span className="text-sm">{item.address.slice(0, 43)}...</span>
        </div>
        <div className="flexc justify-between my-6 text-gray-400 border-t border-b border-gray-200 py-3">
          <div className="flexc gap-5">
            <div className="flexc gap-3">
              <RxCalendar size={20} className=" text-gray-500" />
              <span className="text-md">Day</span>
            </div>
            <div className="flexc gap-2">
              <FaStar size={20} className="text-yellow-500" />
              <span className="text-md">{item.rating}</span>
            </div>
          </div>
          <div className="flexc gap-2">
            <span className="text-md line-through">{item.discount}</span>
            <span className="text-md text-xl font-semibold text-black">
              {item.price}
            </span>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <img src={item.avatar} alt="" className="w-10 h-10 rounded-full" />
          <p className="text-sm">{item.desc}</p>
        </div>
        <NavLink
          to={`/details/${item.id}`}
          className="underline text-sm text-gray-400 duration-300 transition-colors hover:text-primary mt-6 block"
        >
          See Details
        </NavLink>
      </div>
    </div>
  );
};
