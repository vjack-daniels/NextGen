import React from 'react';
import './Result.css';

function Result({ result, onGoToFeedback }) {
  const risksIdentified = [
    "High wind vulnerability in your home's roofing structure",
    "Weak anchoring of main support beams",
    "High flood risk since your area is below sea level"
  ];

  const storePurchasableItems = [
    {
      img: "/tie.jpg",
      title: "Hurricane Tie",
      description: "This reinforces your home's Roofing and Structural Integrity. This should be able to handle any high wind vulnerability that your home may have.",
      link: "https://www.homedepot.com/pep/Simpson-Strong-Tie-H1-18-Gauge-ZMAX-Galvanized-Hurricane-Tie-H1Z/100374935?source=shoppingads&locale=en-US&pla&utm_source=google&utm_medium=vantage&utm_campaign=25496&utm_content=27300&mtc=SHOPPING-RM-RMP-GGL-D22-Multi-NA-SIMPSON_STRONG_TIE-NA-PMAX-NA-NA-INV006Do0000080rw1IAA-25496-NBR-2671-NA-VNT-FY24_Q1_Q4_SimpsonStrongTie_D22_RM_ES_AON&cm_mmc=SHOPPING-RM-RMP-GGL-D22-Multi-NA-SIMPSON_STRONG_TIE-NA-PMAX-NA-NA-INV006Do0000080rw1IAA-25496-NBR-2671-NA-VNT-FY24_Q1_Q4_SimpsonStrongTie_D22_RM_ES_AON-71700000118411063--&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnw0XHxgfo5rhxAa_vSgRbv87VtnUtnUxElJIyknOxFq1gAjK3fvrP4aAtckEALw_wcB&gclsrc=aw.ds"
    },
    {
      img: "/strap.jpg",
      title: "Hurricane Strap",
      description: "This acts as an anchor and further reinforces Structural Integrity. This should strengthen the weak anchoring in your home's main support beams.",
      link: "https://www.homedepot.com/pep/Simpson-Strong-Tie-H2-5A-18-Gauge-ZMAX-Galvanized-Hurricane-Tie-H2-5AZ/100275721?source=shoppingads&locale=en-US&pla&utm_source=google&utm_medium=vantage&utm_campaign=25496&utm_content=27300&mtc=SHOPPING-RM-RMP-GGL-D22-Multi-NA-SIMPSON_STRONG_TIE-NA-PMAX-NA-NA-INV006Do0000080rw1IAA-25496-NBR-2671-NA-VNT-FY24_Q1_Q4_SimpsonStrongTie_D22_RM_ES_AON&cm_mmc=SHOPPING-RM-RMP-GGL-D22-Multi-NA-SIMPSON_STRONG_TIE-NA-PMAX-NA-NA-INV006Do0000080rw1IAA-25496-NBR-2671-NA-VNT-FY24_Q1_Q4_SimpsonStrongTie_D22_RM_ES_AON-71700000118411063--&gad_source=1&gclid=Cj0KCQiA57G5BhDUARIsACgCYnxSpgmpTpucjrcqbclqL5AYdfDeMfEblLP2Jg2kmLMU0rKucWby--4aApDwEALw_wcB&gclsrc=aw.ds"
    }
  ];

  const custom3DPrintedItems = [
    {
      img: "/flood-barrier.jpg",
      title: "Flood Barrier",
      description: "This protects Against Flooding. This should significantly minimize any possible flooding damage associated with your home's high risk of flooding. 1 Unit of this item is estimated to cost $75.",
      link: "https://www.xometry.com/capabilities/3d-printing-service/" // Link for the "Order Now" button
    }
  ];

  return (
    <div className="result-container">
      <h2>Results</h2>
      <p className="result-text">{result}</p>
      
      <h3>Identified Risks:</h3>
      <ul className="risk-list">
        {risksIdentified.map((risk, index) => (
          <li key={index}>{risk}</li>
        ))}
      </ul>

      <h3>Recommended Solutions:</h3>
      
      <h4>Store-Purchasable Items</h4>
      <div className="example-structures">
        {storePurchasableItems.map((item, index) => (
          <div className="structure-card" key={index}>
            <img src={item.img} alt={item.title} className="structure-image" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="purchase-btn">Purchase Now</a>
          </div>
        ))}
      </div>

      <h4>Custom 3D-Printed Items</h4>
      <div className="example-structures">
        {custom3DPrintedItems.map((item, index) => (
          <div className="structure-card" key={index}>
            <img src={item.img} alt={item.title} className="structure-image" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="order-btn">Order Now</a> {/* New "Order Now" button */}
          </div>
        ))}
      </div>

      <button onClick={onGoToFeedback} className="feedback-btn">Submit Feedback</button>
    </div>
  );
}

export default Result;
