import { trips } from "../../assets/data";
import { Title, TripCard } from "../../utils/Route";

export const Trips = () => {
  return (
    <section className="trips-lists my-20" id="tours">
      <div className="containers">
        <Title title1="The Smiling" title2="Agent For Travel" text="A smiling agent for you" page={true} />

        <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {trips.map((item,index) => (
            <TripCard item={item} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};
