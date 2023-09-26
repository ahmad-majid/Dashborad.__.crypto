import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Header({ handle_Submit }) {
  const { isAuthenticated, username, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#fcdf03" }}
      >
        <div className="container-fluid">
          <select
            className="form-select form-select-lg"
            aria-label=".form-select-lg example"
            name="selectCoin"
            style={{ width: "fit-content" }}
            onChange={handle_Submit}
          >
            <option value="bitcoin">Select Coin</option>
            <option value="avalanche-2">Avalanche (AVAX)</option>
            <option value="binancecoin">Binance (BNB)</option>
            <option value="bitcoin">Bitcoin (BTC) </option>
            <option value="cardano">Cardano (ADA)</option>
            <option value="decentraland">Decentraland (MANA)</option>
            <option value="dogecoin">Dogecoin (DOGE)</option>
            <option value="ethereum">Ethereum (ETH)</option>
            <option value="ripple">Ripple (XRP)</option>
            <option value="solana">Solana (SOL)</option>
            <option value="tether">Tether (USDT)</option>
          </select>

          <a
            className="navbar-brand d-flex ml-auto display-2 text-dark fs-2 fw-bold text-uppercase "
            style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
            href="/"
          >
            Crypto Dashboard
          </a>
          <div
            className="buttons"
            style={{ display: "flex", alignItems: "center" }}
          >
            {!isAuthenticated && (
              <Link to="/register" className="btn btn-register">
                Register
              </Link>
            )}
            {isAuthenticated ? (
              <>
                <span className="welcome-message">Welcome, {username}</span>
                <button onClick={handleLogout} className="btn btn-logout">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-login">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
