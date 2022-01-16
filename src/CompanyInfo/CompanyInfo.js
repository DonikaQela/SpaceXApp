
import React from "react";
import { useQuery, gql } from '@apollo/client';

const Get_Company_Info = gql`
  {
      company {
        name
       summary
      }
    }
  
`;

const CompanyInfo = () => {
    const { data, loading, error } 
    = useQuery(Get_Company_Info);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    let nameCompany = data.company.name;
    let summaryCompany = data.company.summary;
    return (
        <div>
            <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-white-800">{nameCompany}</h3>
            <h6 className="text-2xl font-normal leading-normal mt-0 mb-2 text-white-800">{summaryCompany}</h6>
        </div>
        )
}

export default CompanyInfo;