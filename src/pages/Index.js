import React from "react";
import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const movie = useLoaderData();
  console.log(movie)
  return (
    <div class="sticky-footer-css">
      <div class="row expanded flex-dir-column">
        <div class="columns shrink header text-center">
         
          <ul class="menu align-center">
            <li><a href="https://github.com/nmorgan24">Github</a></li>
            <li><a href="https://get.foundation/index.html">Foundation</a></li>
            <li><a href="https://generalassemb.ly/?topic=&mkt_account_id=1056949875&mkt_campaign_id=968359094&mkt_ad_group_id=50685436960&mkt_device_type=c&mkt_keyword=general%20assembly&mkt_matchtype=e&mkt_placement=&mkt_ad_id=663321068398&mkt_network=g&mkt_target_id=kwd-300765785657&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:DAL:BR:GeneralAssembly&utm_content=campus-lead-lander&utm_term=general%20assembly&gclid=Cj0KCQjwhL6pBhDjARIsAGx8D5-p0ngNvKh4ZxNwlfCYD8IKEZqG3J3gPkqZmUnHotdGV9wrpM_CEf8aAkQtEALw_wcB&gclsrc=aw.ds">General Assembly</a></li>
          </ul>
        </div>
        <div class="columns sticky-footer-css-body text-center">
          <h2>Create a Movie</h2>
          <Form action="/create" method="post">
            <input type="text" name="name" placeholder="person's name" />
            <input type="text" name="title" placeholder="person's title" />
            <input type="text" name="image" placeholder="person's image" />
            <input type="submit" value="Create Person" />
          </Form>
          {movie.map((movies, index) => (
            <div key={movies._id} className="movies">
              <Link to={`/${movies._id}`}>
                <h1>{movies.name}</h1>
              </Link>
              <img src={movies.image} alt={movies.name} />
              <h3>{movies.title}</h3>
            </div>
          ))}
        </div>
        <div class="columns shrink footer text-center">
          
          <ul class="menu align-center">
          <li><a href="https://github.com/nmorgan24">Github</a></li>
            <li><a href="https://get.foundation/index.html">Foundation</a></li>
            <li><a href="https://generalassemb.ly/?topic=&mkt_account_id=1056949875&mkt_campaign_id=968359094&mkt_ad_group_id=50685436960&mkt_device_type=c&mkt_keyword=general%20assembly&mkt_matchtype=e&mkt_placement=&mkt_ad_id=663321068398&mkt_network=g&mkt_target_id=kwd-300765785657&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:DAL:BR:GeneralAssembly&utm_content=campus-lead-lander&utm_term=general%20assembly&gclid=Cj0KCQjwhL6pBhDjARIsAGx8D5-p0ngNvKh4ZxNwlfCYD8IKEZqG3J3gPkqZmUnHotdGV9wrpM_CEf8aAkQtEALw_wcB&gclsrc=aw.ds">General Assembly</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;
