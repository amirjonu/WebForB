import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">ABOUT</h2>
      <div className="about-text">
        <p className="background">
          The Background <br />
          Small Business Started in Brooklyn <br />
          Services Available Now Only in the Following Neighborhoods
          </p>
          <pre>      -Sunset Park <br />      -Park Slope <br />      -Borough Park <br />
          </pre>
          <br />
          <p>
          Here is the problem I observed for homeowners: the rat problem. I want to offer a solution through a trash takeout and sweeping service that will keep the property clean. I want to put high schoolers in Brooklyn Tech and local high schools to work. A lot of high schoolers look for work. I want to provide that opportunity for them and keep neighborhoods clean!</p><br />
          <p>A cheap and affordable service is something I believe is necessary for this solution to be implemented. If we are able to get 10 clients on your block I will be able to provide the following pricings for everyone on the block!
        </p><br />
        <p className="tier-1">
          <u>Tier 1: Base Tier</u> ($10.60 for each visit, for a total of 8 visits monthly: $85 a month) <br />
          • All supplies provided (Black and transparent trash bags, Broom, etc) - $20 of Value (Effectively making the Service Price $65 monthly; or $8 a visit) <br />
          Trash Takeout • Sorting of Recycling Materials
        </p>
        <p className="tier-2">
          <u>Tier 2: Deluxe Tier</u> ($12.50 for each visit, for a total of 8 visits monthly: $100 a month) <br />
          . Everything in the Base Tier <br />
          • Sweeping of the General Front of the Property (Sidewalk, Staircase, and Front Yard)
        </p>
        <p className="tier-3">
          <u>Tier 3: Ultimate Tier</u> ($13.75 for each visit, for a total of 8 visits monthly: $110 a month) <br />
          • Everything in All Previous Tiers <br />
          • All Large Furniture Items in the Trash Area will be put onto the Sidewalk (Excluding Mattresses and Refrigerators; $6 and $9 individual charges for those respectively)
        </p>
        <p className="advertisement">
          Please share with any Facebook groups you may have! I want to be able to provide this service! Please advertise this service during any neighborhood-related gatherings. 
          </p><p>If you would still like to have our service. Which I appreciate deeply. I can provide the following pricing:
        </p>
        <br />
        <p className="tier-1-advertisement">
          <u>Tier 1: Base Tier</u> ($15.60 each visit: $125 a month)
        </p>
        <p className="tier-2-advertisement">
          <u>Tier 2: Deluxe Tier</u> ($17.50 each visit: $140 a month)
        </p>
        <p className="tier-3-advertisement">
          <u>Tier 3: Ultimate Tier</u> ($18.10 each visit: $145 a month)
        </p>
      </div>
    </div>
  );
};

export default About;