import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

let companyInfo = {
  companyName: 'Закрытое акционерное общество "The Joy of Painting with Bob Ross"',
  telephone: "1-800-262-7677",
  website: {
    href: "https://www.bobross.com/",
    name: "www.bobross.com"
  },
  mail: "info@bobross.com",
  info: "https://www.bobross.com/terms.asp",
  requisites: "https://www.bobross.com/pindex.asp"
};

let avatar = require("./data/BobRoss/avatar.jpg");

let gallery = [
  {
    image: require("./data/BobRoss/gallery/blue moon.png"),
    name: "Blue Moon",
    price: "5 000 ₽"
  },
  {
    image: require("./data/BobRoss/gallery/forest down.png"),
    name: "Forest Down",
    price: "300 $"
  },
  {
    image: require("./data/BobRoss/gallery/golden glow.png"),
    name: "Golden Glow",
    price: "200 €"
  },
  {
    image: require("./data/BobRoss/gallery/mountain retreat.png"),
    name: "Mountain Retreat",
    price: "10 000 ₽"
  },
  {
    image: require("./data/BobRoss/gallery/winter sun.png"),
    name: "Winter Sun",
    price: "300 $"
  },
];

let text = (
    <div>
      <p>During his 20-year tenure with the U.S. Air Force, Ross developed a taste for painting after attending an art class at the Anchorage U.S.O. club. He found himself frequently at odds with many of his painting instructors, who were more interested in abstract painting. In Ross' own words: "They'd tell you what makes a tree, but they wouldn't tell you how to paint a tree."</p>
      <p>Ross was working as a part-time bartender when he discovered a TV show called The Magic of Oil Painting, hosted by German painter Bill Alexander. Alexander touted a 16th-century style of painting called "alla prima" (Italian for "first attempt"), better known as "wet-on-wet", that allowed him to finish a painting in a little under 30 minutes. Ross studied and became quite good at alla prima through Alexander's show, and began selling Alaskan landscapes painted on the inside of novelty gold pans. When Ross began making more money from selling the gold pans than his military job, he retired from the Air Force in 1981 after 20 years of service, having the rank of Master Sergeant.</p>
      <p>He first went to Florida and studied painting under Alexander, then joined the "Alexander Magic Art Supplies Company" and became a traveling salesman and tutor. Annette Kowalski, who had attended one of his sessions, became convinced that there was a great opportunity for Ross to succeed on his own, and persuaded him to do so. She invested her life savings in the company, as did Ross and his wife. The business struggled at first; his permed hairstyle came about as a cost-cutting measure, when his regular crewcut haircuts became too expensive. Ross grew increasingly uncomfortable with the style in his later years, but kept it throughout his career.</p>
      <p>The origins of the TV show, The Joy of Painting, are unclear. It was filmed at the studio of the PBS station WIPB in Muncie, Indiana.</p>
      <p>The show ran from January 11, 1983 to May 17, 1994, but reruns still continue to appear in many broadcast areas and countries, including the non-commercial digital subchannel network Create. During each half-hour segment, Ross would instruct viewers in oil painting using a quick-study technique from the imagination that used a limited palette of paints and broke down the process into simple steps. Art critic Mira Schor compared him to Fred Rogers, host of Mister Rogers' Neighborhood, noting that Ross' soft voice and the slow pace of his speech were similar.</p>
      <p>With help from Annette Kowalski, Ross built a $15 million business, Bob Ross Inc., selling his line of art supplies and how-to books, and marketing painting classes taught by instructors trained in the "Bob Ross method". All of his income, he said, was derived from those sources; the show was intended to be a vehicle to promote his classes and products. All of his paintings, including those created during his shows, were donated to PBS stations.</p>
      <p>Ross also filmed wildlife, squirrels in particular, usually in his garden, and he would often take in injured or abandoned squirrels and other animals. Small animals often appeared on his Joy of Painting canvasses.</p>
    </div>
);

ReactDOM.render(
    <App info={companyInfo} avatar={avatar} items={gallery} text={text}/>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
