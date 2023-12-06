import React from "react";
import "./card.scss";
const NotificationCard = ({ bellSave, icon, desc, action, active }) => {
  const money = ["$100000", "$1000", "$10"];
  const days = ["> 30 days", "> 60 days", "> 90 days"];

  return (
    <div className={`card ${action ? "space" : ""} `}>
      <div className="header">
        <img src={icon} alt="bell" />
        {bellSave ? (
          <span>Save</span>
        ) : (
          <input type={"checkbox"} name="" value="" />
        )}
      </div>
      {bellSave ? (
        <div className="contentBell">
          <p className="bell">We’ll be sending notifications to you here</p>
          <input type="email" name="" id="" placeholder="hello@loch.one" />
        </div>
      ) : (
        <div className="contentBell">
          <p>{desc}</p>
          <select>
            {active
              ? days.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))
              : money.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
          </select>
          {active ?<p>{active}</p> :""} 
        </div>
      )}
    </div>
  );
};

export default NotificationCard;
