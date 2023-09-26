import React, { Component } from "react";
import MarketStatCard from "./MarketStatCard";
import "../styles/MarketStatsSidebar.css";
import marketcapTotal from './market-cap-total.jpg'
import marketcapIcon from './marketcap-icon.jpg'
import marketcapVolume from './market-cap-volume.jpg'

class MarketStatsSidebar extends Component {
  render() {
    return (
      <div className="market-stats-sidebar">
        <h2>Market Statistics</h2>
        <MarketStatCard
          title="Total Market Cap"
          value={this.props.totalMarketCap || ""}
          iconSrc={marketcapTotal} 
        />
        <MarketStatCard
          title="Total 24h Volume"
          value={this.props.total24hVolume || ""}
          iconSrc={marketcapIcon} 
        />
        <MarketStatCard
          title="Market Volume"
          value={this.props.marketVolume || ""}
          iconSrc={marketcapVolume} 
        />
      </div>
    );
  }
}

export default MarketStatsSidebar;
