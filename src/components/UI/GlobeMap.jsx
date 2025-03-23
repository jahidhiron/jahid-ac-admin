import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import { scaleLinear } from "d3-scale";
import { FaGlobeAmericas } from "react-icons/fa";

const studentData = [
  { country: "United States", students: 120 },
  { country: "India", students: 20 },
  { country: "United Kingdom", students: 80 },
  { country: "Canada", students: 50 },
  { country: "Germany", students: 70 },
  { country: "Australia", students: 40 },
  { country: "France", students: 65 },
  { country: "Japan", students: 30 },
  { country: "Brazil", students: 100 },
  { country: "Bangladesh", students: 200 },
];

const colorScale = scaleLinear()
  .domain([0, 2200])
  .range(["##FCA5A5", "#DC2626"]);

const WorldMapWithStudents = () => {
  const [geoUrl, setGeoUrl] = useState(null);

  useEffect(() => {
    setGeoUrl("/world-countries.json");
  }, []);

  if (!geoUrl)
    return <p className='text-center text-gray-500'>Loading map...</p>;

  return (
    <div className='relative w-full mt-18 max-w-5xl mx-auto  bg-white  rounded-lg  border-gray-200'>
      {/* Header */}
      <div className=' gap-2 mb-[-70px]'>
        {/* <FaGlobeAmericas className='text-3xl text-[#DC2626]' /> */}
        <h2 className='text-xl font-semibold text-gray-800'>Your Reach</h2>
        <p>See your students locations</p>
      </div>

      {/* World Map */}
      <div className='overflow-hidden rounded-lg'>
        <ComposableMap
          projectionConfig={{ scale: 160 }}
          className='w-full h-auto'
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name;

                const studentInfo = studentData.find(
                  (s) => s.country === countryName
                );

                const studentCount = studentInfo ? studentInfo.students : 0;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      studentCount > 0 ? colorScale(studentCount) : "#D1D5DB"
                    }
                    stroke='#FFF'
                    className='cursor-default'
                    data-tooltip-id='country-tooltip'
                    data-tooltip-content={`${countryName}: ${studentCount} students`}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
      <Tooltip
        id='country-tooltip'
        place='top'
        className='bg-gray-900 text-white px-3 py-1 rounded-md text-sm '
      />
    </div>
  );
};

export default WorldMapWithStudents;
