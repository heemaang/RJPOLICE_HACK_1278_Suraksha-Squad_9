import React, { useEffect, useState } from "react";
import { doc, getDocs, collection, query } from 'firebase/firestore';
import Lawyerdashboard from './Lawyerdashboard';
import { db } from './firebase';

function Lawyerpage() {
    const [lawyerData, setlawyerData] = useState([]);

    // code to fetch all the data from the Lawyerform
      const getLawyerData = async () => {
      const templaywer = []
      const lawyerref = query(collection(db, "Lawyerdetails"));
      const lawyersnapshot = await getDocs(lawyerref);
  
      lawyersnapshot.forEach((lawyer) => {
        templaywer.push({...lawyer.data(), id: lawyer.id});
      })
      setlawyerData(templaywer);
    }
      useEffect(() => {
        getLawyerData();
      }, [])

  return (
    <div>
       {
      lawyerData.map((lawyer) => (
        <Lawyerdashboard lawyerData={lawyerData} key={lawyer.id} {...lawyer}/>
      ))
    }
    </div>
  )
}

export default Lawyerpage
