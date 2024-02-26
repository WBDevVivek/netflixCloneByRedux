import React from "react";

function FooterComponent() {
  return (
    <footer className="mainFooter" id=" footer">
      <div className="container footerContainer">
        <div className="widgets">
          <div className="firstWidget">
            <ul>
              <li className="listItems">Audio and Subtitles</li>
              <li className="listItems">Media Center</li>
              <li className="listItems">Privacy</li>
              <li className="listItems">Contact us</li>
            </ul>
          </div>
          <div className="secondWidget">
            <ul>
              <li className="listItems">Help Center</li>
              <li className="listItems">Cookie</li>
              <li className="listItems">Jobs</li>
            </ul>
          </div>
          <div className="thirdWidget">
            <ul>
              <li className="listItems">Audio Description</li>
              <li className="listItems">Investor Relations</li>
              <li className="listItems">Legal Notice</li>
            </ul>
          </div>
          <div className="forthWidget">
            <ul>
              <li className="listItems">Gift Card</li>
              <li className="listItems">Term Of Use</li>
              <li className="listItems">Corporate Information</li>
            </ul>
          </div>
        </div>
        <button className="button service">Service Code</button>
        <p className="copyright">@copyright 2020 Vanilacodes, Inc.</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
