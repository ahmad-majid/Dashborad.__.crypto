import React, { Component } from "react";
import Header from "../Home/Header";
import CardSection from "../Home/CardSection";
import ChartSection from "../Home/ChartSection";
import HeroSection from "../Home/HeroSection";
import FeatureSection from "../Home/FeatureSection";
import Footer from "../Home/Footer";
import MarketStatsSidebar from "../Home/MarketStatsSidebar";
import HistoricalPriceChart from "../Home/HistoricalPriceChart";


class Home extends Component {
  constructor() {
    super();
    this.state = {
      Id: "bitcoin",
      Data: {},
      marketCap: 0,
      volume: 0,
      marketVolume: 0, // Renamed from bitcoinDominance to marketVolume
    };
  }

  fetchData = async () => {
    try {
      let data = await fetch(
        "https://api.coingecko.com/api/v3/coins/" + this.state.Id
      );
      let JsonData = await data.json();
      this.setState({ Id: this.state.Id, Data: JsonData });
      const marketCap = JsonData.market_data?.market_cap?.usd || 0;
      const volume = JsonData.market_data?.total_volume?.usd || 0;
      const marketVolume = JsonData.market_data?.total_volume?.usd || 0; // Use total_volume for market volume
      this.setState({
        Id: this.state.Id,
        Data: JsonData,
        marketCap: marketCap,
        volume: volume,
        marketVolume: marketVolume, // Set marketVolume
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  handleSubmit = async (event) => {
    console.log(event.target.value);
    await this.setState({ Id: event.target.value, Data: this.state.Data });
    this.fetchData();
  };

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(() => this.fetchData(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { user, logout } = this.props; // Receive user and logout as props

    return (
      <div>
        <Header user={user} logout={logout} handle_Submit={this.handleSubmit} />

        <main className="">
          <div className="row">
            <div className="col-12 col-lg-3">
              <MarketStatsSidebar
                totalMarketCap={this.state.marketCap}
                total24hVolume={this.state.volume}
                marketVolume={this.state.marketVolume}
              />
            </div>
            <div className="col-12 col-lg-9">
              <div className="row"></div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="hero-content">
                    <HeroSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <FeatureSection />
        <CardSection
          coinName={this.state.Data.name}
          currentPrice={
            this.state.Data.market_data
              ? this.state.Data.market_data.current_price["usd"]
              : ""
          }
          mCap24={
            this.state.Data.market_data
              ? this.state.Data.market_data.market_cap_change_percentage_24h
              : ""
          }
          ath={
            this.state.Data.market_data
              ? this.state.Data.market_data.ath.usd
              : ""
          }
          atl={
            this.state.Data.market_data
              ? this.state.Data.market_data.ath.usd
              : ""
          }
          sentiment={this.state.Data.sentiment_votes_up_percentage}
          high24={
            this.state.Data.market_data
              ? this.state.Data.market_data.high_24h["usd"]
              : ""
          }
          low24={
            this.state.Data.market_data
              ? this.state.Data.market_data.low_24h["usd"]
              : ""
          }
        />
        <ChartSection
          Id={this.state.Id}
          priceChange24={
            this.state.Data.market_data
              ? this.state.Data.market_data.price_change_24h_in_currency.usd
              : ""
          }
          MarketCap={
            this.state.Data.market_data
              ? this.state.Data.market_data.market_cap.usd
              : ""
          }
          TotVol={
            this.state.Data.market_data
              ? this.state.Data.market_data.total_volume.usd
              : ""
          }
          Circulating={
            this.state.Data.market_data
              ? this.state.Data.market_data["circulating_supply"]
              : ""
          }
          twitterF={
            this.state.Data.community_data
              ? this.state.Data.community_data.twitter_followers
              : ""
          }
        />
        <HistoricalPriceChart
          Id={this.state.Id}
          priceChange24={
            this.state.Data.market_data
              ? this.state.Data.market_data.price_change_24h_in_currency.usd
              : ""
          }
          MarketCap={
            this.state.Data.market_data
              ? this.state.Data.market_data.market_cap.usd
              : ""
          }
          TotVol={
            this.state.Data.market_data
              ? this.state.Data.market_data.total_volume.usd
              : ""
          }
          Circulating={
            this.state.Data.market_data
              ? this.state.Data.market_data["circulating_supply"]
              : ""
          }
          twitterF={
            this.state.Data.community_data
              ? this.state.Data.community_data.twitter_followers
              : ""
          }
        />
        <Footer />
      </div>
    );
  }
}
export default Home;
