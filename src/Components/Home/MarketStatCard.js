import React, { Component } from "react";
import "../styles/MarketStatsCard.css";

class MarketStatCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  toggleExpand = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const { title, value, iconSrc, details } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className={`market-stat-card ${isExpanded ? "expanded" : ""}`}>
        <div className="header" onClick={this.toggleExpand}>
          <img src={iconSrc} alt={title} />
          <h3>{title}</h3>
          <span className={`icon ${isExpanded ? "icon-minus" : "icon-plus"}`}>
            &#9654;
          </span>
        </div>
        {isExpanded && (
          <div className="details">
            <p className="value">{value}</p>
            <ul>
              {details.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}: </strong>
                  {item.value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

MarketStatCard.defaultProps = {
  details: [],
};

export default MarketStatCard;
