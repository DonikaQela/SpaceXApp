import './App.css';
import { Link } from 'react-router-dom';
import React from "react";
import CompanyInfo from './CompanyInfo/CompanyInfo';
import { useQuery, gql } from '@apollo/client';

const Get_LaunchesPast_Info = gql`
  {
    launchesPast(limit: 20, offset: 27) {
        mission_name
        launch_date_local
        links {
          flickr_images
        }
        rocket {
          rocket {
            id
          }
        }
        id
     }
    
    }
  
`;

 const App = () => {
    const { data, loading, error } 
    = useQuery(Get_LaunchesPast_Info);
    
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (
            <div className="w-full bg-gray-800">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="text-center pb-12">
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                      <CompanyInfo/>         
                    </h2>
                </div>
                <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                    {data.launchesPast.map((launch) => (
                        <Link to={"/rocketDetails/" + launch.rocket.rocket.id} key={launch.id}>
                        
                            <div  className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" 
                                    src={launch.links.flickr_images} alt="photo"/>
                                    
                                </div>

                                <div className="text-center">
                                    <p className="text-xl text-orange font-bold mb-2">{launch.name}</p>
                                    <p className="text-base text-orange-600 font-normal">{launch.mission_name} 
                                    <br/>
                                    {new Intl.DateTimeFormat('en-GB', { 
                                        month: 'long', 
                                        day: '2-digit',
                                        year: 'numeric', 
                                    }).format(new Date(launch.launch_date_local))}
                                    </p>
            
                                </div>
                            </div>
                        </Link>
                    ))}
                
                </div>
            </section>
        </div>
      );

}
export default App;
