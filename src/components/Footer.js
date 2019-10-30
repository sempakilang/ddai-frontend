import React from "react";
import Section from "./Section";
import { Link } from "./../util/router.js";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="FooterComponent__container container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <Link className="brand" to="/">
              <div className="brand-icon">
                <img
                  className="FooterComponent__logo"
                  src={props.logo}
                  alt="Logo"
                />
              </div>
            </Link>

            {props.description && (
              <p className="FooterComponent__description">
                {props.description}
              </p>
            )}

            {props.copyright && (
              <p className="FooterComponent__copywrite">{props.copyright}</p>
            )}
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Products</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="https://www.dexwallet.io/">Dexwallet</Link>
                    </li>
                    <li>
                      <Link to="https://defitracker.io/">DeFi Tracker</Link>
                    </li>
                    <li>
                      <Link to="https://dexpay.me/">Dexay</Link>
                    </li>
                    <li>
                      <Link to="https://ddai.netlify.com/">dDAI Advanced</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Company</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="https://hackmd.io/@8O08261_SpWdZUBJKxeF5Q/rk7VotSpE?type=view">About</Link>
                    </li>
                    <li>
                      <Link to="founders@dexlab.io">Contact</Link>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://medium.com/dexlab-io"
                        rel="noopener noreferrer"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Social</p>
                  <ul className="menu-list">
                    <li>
                      <a
                        href="https://discord.gg/DxttPVm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="../images/discord.svg"
                          alt="Discord"
                        />
                        Discord
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://t.me/joindexlab"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="../images/telegram.svg"
                          alt="Telegram"
                        />
                        Telegram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/Dexwallet"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://uploads.divjoy.com/icon-twitter.svg"
                          alt="Twitter"
                        />
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Footer;