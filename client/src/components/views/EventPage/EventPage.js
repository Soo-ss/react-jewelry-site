import React from "react";
import eventBG from "../../../images/eventBG.jpg";
import newYear from "../../../images/2020.jpg";
import review from "../../../images/review.jpg";
import plusFriend from "../../../images/plusFriend.jpg";
import reviewBG from "../../../images/reviewBG.jpg";
import Banner from "../_partials/Banner/Banner";
import EventLeft from "./EventLeft";
import EventRight from "./EventRight";
// import { withRouter } from "react-router-dom";

function EventPage() {
  const descTmp =
    "Pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut\naliquam massa nisl quis neque. Pharetra, erat sed fermentum feugiat,\nvelit mauris egestas quam, ut aliquam massa nisl quis neque...";
  return (
    <main id="main">
      <Banner title="event" bg={eventBG} />
      {/* Blog Slider of the page*/}
      <section className="blog-slider">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <EventLeft title="1st anniversary" desc={descTmp} bg={newYear} />
              <EventRight title="review" desc={descTmp} bg={review} />
              <EventLeft
                title="kakao plus friend"
                desc={descTmp}
                bg={plusFriend}
              />
              <EventRight title="another event" desc={descTmp} bg={reviewBG} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EventPage;
