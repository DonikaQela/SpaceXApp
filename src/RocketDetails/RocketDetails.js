import React from "react";
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const Get_Rocket_Info = gql`
query Get_Rocket_Info ($id: ID!)
{
  rocket(id: $id) {
    id
    name
    active
    company
    cost_per_launch
    description
    country
    type
    boosters
    success_rate_pct
    first_flight
    wikipedia
    diameter {
      meters
    }
    mass {
      kg
    }
    landing_legs {
      number
    }
    height {
      meters
    }
    engines {
      number
      type
      version
    }
  }
}

`;


const RocketDetails = () => {

  const {id} = useParams();
  console.log(id);

    const { data, loading, error } 
    = useQuery(Get_Rocket_Info, {
      variables: {id},
    });
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (
      <div className=" w-full text-white py-20 bg-gray-800 lg:h-screen xl:h-screen">



    <div className=" text-center  ">

        <h1 className=" md:text-6xl sm:text-2xl text-xl mb-4">{data.rocket.name}</h1>

        <hr className="W-1/4 mx-auto mb-10 shadow-4xl"/>
    </div>
    <div className="sm:flex content-center justify-center">
      <div className=" sm:w-2/4 w-3/4 mx-auto h-auto my-6 lg:mx-8 md:mx-4">
             
              <p className=" text-lg text-justify mx-4">
              Rocket  {data.rocket.name}  is build by company  {data.rocket.company}  and the first launch happend in {data.rocket.first_flight}. 
              This Rocket has a mass of {data.rocket.mass.kg.toLocaleString()}  kg and a height of  {data.rocket.height.meters.toLocaleString()}  m. 
              The diameter of {data.rocket.name} is  {data.rocket.diameter.meters.toLocaleString()} m. {data.rocket.name} had {data.rocket.engines.number} engines that belonged 
              to the type of {data.rocket.engines.type}. You can read more about {data.rocket.name} in Wikipedia page by 
              clicking <a href={data.rocket.wikipedia} target="_blank" className="underline cursor-pointer">here</a>.
              </p>
          </div>
      </div>
      <div className="sm:flex content-center justify-center">
        <div className=" sm:w-2/4 w-3/4 mx-auto h-auto my-6 lg:mx-8 md:mx-4">
            <p className=" text-lg text-justify mx-4">
              {data.rocket.description}
            
            </p>
        </div>
      </div>
    <div className="sm:flex content-center justify-center ">


        <div className="  mx-auto h-auto my-6 lg:mx-8 md:mx-4">
            <h3 className="text-center text-xl my-2">Type</h3>
            <p className="text-center text-xl my-2">{data.rocket.type}</p>
        </div>


        <div className="  mx-auto h-auto my-6 lg:mx-8 md:mx-4">
            <h3 className="text-center text-xl my-2">Boosters</h3>
            <p className=" text-center text-xl my-2">{data.rocket.boosters === 1 
              ? 
              <span className="inline-flex items-center justify-center px-2 py-1  font-bold leading-none text-indigo-100 bg-indigo-700 rounded capitalize">Yes</span> 
              :
              <span className="inline-flex items-center justify-center px-2 py-1 font-bold leading-none text-red-100 bg-red-700 rounded capitalize">No</span> 

               }</p>
        </div>

        <div className="  mx-auto h-auto my-6 lg:mx-8 md:mx-4">
            <h3 className="text-center text-xl my-2">Success rate pct</h3>
            <p className="text-center text-xl my-2">{data.rocket.success_rate_pct + ' %'}</p>
        </div>
        <div className="  mx-auto h-auto my-6 lg:mx-8 md:mx-4">
            <h3 className="text-center text-xl my-2">Active</h3>
            <p className="text-center text-xl my-2"> {
                  data.rocket.active ==  true 
                  ? 
                  <span className="inline-flex items-center justify-center px-2 py-1  font-bold leading-none text-indigo-100 bg-indigo-700 rounded capitalize">Yes</span> 
                  : 
                  <span className="inline-flex items-center justify-center px-2 py-1 font-bold leading-none text-red-100 bg-red-700 rounded capitalize">No</span> 

                }</p>
        </div>
        <div className="  mx-auto h-auto my-6 lg:mx-8 md:mx-4">
            <h3 className="text-center text-xl my-2">Cost Per lounch</h3>
            <p className=" text-center text-xl my-2">{data.rocket.cost_per_launch.toLocaleString() + ' €'}</p>
        </div>
      
    </div>

</div>
    )
}

export default RocketDetails;