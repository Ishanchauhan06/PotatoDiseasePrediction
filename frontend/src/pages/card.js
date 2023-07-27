import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <h1>Late Blight (Phytophthora infestans)</h1>
          <p>
            ✔️Fungicides: If late blight is detected, use appropriate fungicides
            to control its spread. Copper-based fungicides and systemic
            fungicides can be effective, but follow the instructions carefully.
          </p>
          <p>
            ✔️Pruning and Disposal: Remove and destroy infected plant parts to
            limit the spread of the disease within the field.
          </p>
          <p>
            ✔️Timing of Irrigation: Late blight thrives in moist conditions, so
            proper irrigation management can help reduce its severity.
          </p>
        </div>
        <div className="card">
          <h1>Early Blight (Alternaria solani):</h1>
          <p>
            ✔️ Fungicides: Apply fungicides preventively when conditions are
            favorable for disease development. Copper-based fungicides and
            chlorothalonil are commonly used for early blight control.
          </p>
          <p>
            ✔️ Pruning and Disposal: Remove and destroy infected plant parts to
            limit the spread of the disease.
          </p>
          <p>
            ✔️ Regularly change the mulch to avoid providing a suitable
            environment for the pathogen to survive.
          </p>
        </div>
        <div className="prevention">
          <h1>Prevention is better than Cure</h1>
          <p>
            <b>Prevention:</b> Crop Rotation: Just like with late blight, practice crop
            rotation to reduce the buildup of early blight pathogens in the
            soil. </p>
          <p>  Resistant Varieties: Choose potato varieties that have some
            level of resistance to early blight.  </p>
          <p> Proper Plant Spacing: Plant potatoes at appropriate distances to promote good air circulation
            and reduce humidity around the plants. 
            </p> 
           <p> Mulching: Apply organic mulch around the base of the plants to prevent soil-borne spores
            from splashing onto the leaves. 
            </p>
           <p> Drip Irrigation: Use drip irrigation instead of overhead watering to keep the foliage dry and minimize
            disease spread.
          </p>
        </div>
      </>
    );
  }
}

export default Card;
