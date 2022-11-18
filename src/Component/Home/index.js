import React from "react";
import "./home.css";
import { SlDiamond } from "react-icons/sl";
import { FaRegGem } from "react-icons/fa";
import { TfiCamera } from "react-icons/tfi";
import { AiTwotoneSetting } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import girlImage from "../../assets/images/girlFace.jpg";
import girlHalf from "../../assets/images/girlHalfImage.jpg";
import boyImage from "../../assets/images/boyImage.jpg";
import firstImage from "../../assets/images/gallery/fulls/01.jpg";
import SecondImage from "../../assets/images/gallery/fulls/02.jpg";
import thirdImage from "../../assets/images/gallery/fulls/03.jpg";
import fourthImage from "../../assets/images/gallery/fulls/04.jpg";
import fifthImage from "../../assets/images/gallery/fulls/05.jpg";
import sixthImage from "../../assets/images/gallery/fulls/06.jpg";
import sevenImage from "../../assets/images/gallery/fulls/07.jpg";
import eightImage from "../../assets/images/gallery/fulls/08.jpg";
import nineImage from "../../assets/images/gallery/fulls/09.jpg";
import firstImage1 from "../../assets/images/gallery/thumbs/01.jpg";
import SecondImage2 from "../../assets/images/gallery/thumbs/02.jpg";
import thirdImage3 from "../../assets/images/gallery/thumbs/03.jpg";
import fourthImage4 from "../../assets/images/gallery/thumbs/04.jpg";
import fifthImage5 from "../../assets/images/gallery/thumbs/05.jpg";
import sixthImage6 from "../../assets/images/gallery/thumbs/06.jpg";
import sevenImage7 from "../../assets/images/gallery/thumbs/07.jpg";
import eightImage8 from "../../assets/images/gallery/thumbs/08.jpg";
import nineImage9 from "../../assets/images/gallery/thumbs/09.jpg";

const Home = () => {
  return (
    <>
      {/* // <!-- Page Wrapper --> */}
      <div id="page-wrapper">
        {/* <!-- Wrapper --> */}
        <div id="wrapper">
          {/* <!-- Panel (Banner) --> */}
          <section className="panel banner right">
            <div className="content color0 span-3-75">
              <h1 className="major">
                Hello, my name
                <br />
                is Ethereal
              </h1>
              <p>
                This is <strong>Ethereal</strong>, a free site template by AJ
                for <a href="https://html5up.net">HTML5 UP</a>. It’s fully
                responsive, built on HTML5 and CSS3, and released entirely for
                free under the Creative Commons license. Hope you dig it :)
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="#first"
                    className="button primary color1 circle icon solid fa-angle-right"
                  >
                    <FaAngleRight color="#726193" />
                    Next
                  </a>
                </li>
              </ul>
            </div>
            <div className="image filtered span-1-75" data-position="25% 25%">
              <img src={girlImage} alt="" />
            </div>
          </section>

          {/* <!-- Panel (Spotlight) --> */}
          <section className="panel spotlight medium right" id="first">
            <div className="content span-7">
              <h2 className="major">Sed etiam aenean</h2>
              <p>
                Mauris et ligula arcu. Proin dapibus convallis accumsan. Lorem
                maximus hendrerit orci, sit amet elementum massa hendrerit sed.
                Donec et ullamcorper ligula. Suspendisse amet potenti. Ut
                pretium libero eleifend euismod sed tristique. Quisque dictum
                magna risus, id ultricies justo sagittis vitae. Sed id odio
                tempor, porttitor elit amet, gravida hendrerit fringilla lorem
                ipsum dolor.
              </p>
            </div>
            <div className="image filtered tinted" data-position="top left">
              <img src={boyImage} alt="" />
            </div>
          </section>

          {/* <!-- Panel --> */}
          <section className="panel color1">
            <div className="intro joined">
              <h2 className="major">Amet lorem</h2>
              <p>
                Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis
                congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum
                amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat
                magna etiam.
              </p>
            </div>
            <div className="inner">
              <ul className="grid-icons three connected">
                <li>
                  <span className="icon fa-gem">
                    <FaRegGem className="diamondIcon" />
                    <span className="label">Lorem</span>
                  </span>
                </li>
                <li>
                  <span className="icon solid fa-camera-retro">
                    <TfiCamera className="cameraIcon" />
                    <span className="label">Ipsum</span>
                  </span>
                </li>
                <li>
                  <span className="icon solid fa-cog">
                    <AiTwotoneSetting className="settingIcon" />
                    <span className="label">Dolor</span>
                  </span>
                </li>
                <li>
                  <span className="icon solid fa-paper-plane">
                    <FaPaperPlane className="messageIcon" />
                    <span className="label">Sit</span>
                  </span>
                </li>
                <li>
                  <span className="icon solid fa-chart-bar">
                    <FaChartBar className="graphIcon" />
                    <span className="label">Amet</span>
                  </span>
                </li>
                <li>
                  <span className="icon solid fa-code">
                    <FaCode className="codeIcon" />
                    <span className="label">Nullam</span>
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* <!-- Panel (Spotlight) --> */}
          <section className="panel spotlight large left">
            <div className="content span-5">
              <h2 className="major">Magna amet tempus</h2>
              <p>
                Mauris a cursus velit. Nunc lacinia sollicitudin egestas
                bibendum, magna dui bibendum ex, sagittis commodo enim risus sed
                magna nulla. Vestibulum ut consequat velit. Curabitur vitae
                libero lorem. Quisque iaculis porttitor blandit. Nullam quis
                sagittis maximus. Sed vel nibh libero. Mauris et lorem pharetra
                massa lorem turpis congue pulvinar.
              </p>
            </div>
            <div className="image filtered tinted" data-position="top right">
              <img src={girlHalf} alt="" />
            </div>
          </section>

          {/* <!-- Panel --> */}
          <section className="panel">
            <div className="intro color2">
              <h2 className="major">Elit integer</h2>
              <p>
                Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis
                congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum
                amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat
                magna etiam.
              </p>
            </div>
            <div className="gallery">
              <div className="group span-3">
                <a
                  href={firstImage}
                  className="image filtered span-3"
                  data-position="bottom"
                >
                  <img src={firstImage1} alt="" />
                </a>
                <a
                  href={SecondImage}
                  className="image filtered span-1-5"
                  data-position="center"
                >
                  <img src={SecondImage2} alt="" />
                </a>
                <a
                  href={thirdImage}
                  className="image filtered span-1-5"
                  data-position="bottom"
                >
                  <img src={thirdImage3} alt="" />
                </a>
              </div>
              <a
                href={fourthImage}
                className="image filtered span-2-5"
                data-position="top"
              >
                <img src={fourthImage4} alt="" />
              </a>
              <div className="group span-4-5">
                <a
                  href={fifthImage}
                  className="image filtered span-3"
                  data-position="top"
                >
                  <img src={fifthImage5} alt="" />
                </a>
                <a
                  href={sixthImage}
                  className="image filtered span-1-5"
                  data-position="center"
                >
                  <img src={sixthImage6} alt="" />
                </a>
                <a
                  href={sevenImage}
                  className="image filtered span-1-5"
                  data-position="bottom"
                >
                  <img src={sevenImage7} alt="" />
                </a>
                <a
                  href={eightImage}
                  className="image filtered span-3"
                  data-position="top"
                >
                  <img src={eightImage8} alt="" />
                </a>
              </div>
              <a
                href={nineImage}
                className="image filtered span-2-5"
                data-position="right"
              >
                <img src={nineImage9} alt="" />
              </a>
            </div>
          </section>

          {/* <!-- Panel --> */}
          <section className="panel color4-alt">
            <div className="intro color4">
              <h2 className="major">Contact</h2>
              <p>
                Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis
                congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum
                amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat
                magna etiam.
              </p>
            </div>
            <div className="inner columns divided">
              <div className="span-3-25">
                <form method="post" action="#">
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        onChange={() => console.log("")}
                        value="Send Message"
                        className="button primary"
                      />
                    </li>
                  </ul>
                </form>
              </div>
              <div className="span-1-5">
                <ul className="contact-icons color1">
                  <li className="icon brands fa-twitter">
                    <a href="#">@untitled-tld</a>
                  </li>
                  <li className="icon brands fa-facebook-f">
                    <a href="#">facebook.com/untitled</a>
                  </li>
                  <li className="icon brands fa-snapchat-ghost">
                    <a href="#">@untitled-tld</a>
                  </li>
                  <li className="icon brands fa-instagram">
                    <a href="#">@untitled-tld</a>
                  </li>
                  <li className="icon brands fa-medium-m">
                    <a href="#">medium.com/untitled</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* <!-- Panel --> */}
          <section className="panel color2-alt">
            <div className="intro color2">
              <h2 className="major">Elements</h2>
              <p>
                Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis
                congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum
                amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat
                magna etiam.{" "}
              </p>
            </div>
            <div className="inner columns aligned">
              <div className="span-2-75">
                <h3 className="major">Text</h3>
                <p>
                  This is <b>bold</b> and this is <strong>strong</strong>. This
                  is <i>italic</i> and this is
                  <em>emphasized</em>. This is <sup>superscript</sup> text and
                  this is <sub>subscript</sub> text. This is <u>underlined</u>{" "}
                  and this is code: <code>for (;;) ... </code>. Finally,{" "}
                  <a href="#">this is a link</a>.
                </p>

                <h1>Heading Level 1</h1>
                <h2>Heading Level 2</h2>
                <h3>Heading Level 3</h3>
                <h4>Heading Level 4</h4>
                <h5>Heading Level 5</h5>
                <h6>Heading Level 6</h6>
              </div>
              <div className="span-3">
                <h4>Blockquote</h4>
                <blockquote>
                  Lorem ipsum dolor sit amet. Felis sagittis eget tempus
                  euismod. Vestibulum ante ipsum primis in vestibulum. Blandit
                  adipiscing eu iaculis volutpat ac adipiscing volutpat ac
                  adipiscing faucibus.
                </blockquote>

                <h4>Preformatted</h4>
                <pre>
                  {
                    //  <script>
                    //                              i = 0;
                    //  while (!deck.isInOrder()) {
                    //     print 'Iteration ' + (i++);
                    //     deck.shuffle();
                    // }
                    // {/* print 'It took ' + i + ' iterations to sort the deck.'; */}
                    // </script>
                  }
                </pre>
              </div>
              <div className="span-1-25">
                <h3 className="major">Lists</h3>

                <h4>Unordered</h4>
                <ul>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Dolor pulvinar etiam.</li>
                  <li>Etiam vel felis viverra.</li>
                </ul>

                <h4>Alternate</h4>
                <ul className="alt">
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Dolor pulvinar etiam.</li>
                  <li>Etiam vel felis viverra.</li>
                  <li>Felis enim feugiat.</li>
                </ul>
              </div>
              <div className="span-1-5">
                <h4>Ordered</h4>
                <ol>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Dolor pulvinar etiam.</li>
                  <li>Etiam vel felis viverra.</li>
                  <li>Felis enim feugiat.</li>
                  <li>Etiam vel felis lorem.</li>
                </ol>

                <h4>Actions</h4>
                <ul className="actions">
                  <li>
                    <a href="#" className="button primary color2">
                      Default
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button">
                      Default
                    </a>
                  </li>
                </ul>
                <ul className="actions stacked">
                  <li>
                    <a href="#" className="button primary color2">
                      Default
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button">
                      Default
                    </a>
                  </li>
                </ul>
              </div>
              <div className="span-1-25">
                <h4>Icons</h4>
                <ul className="icons">
                  <li>
                    <a href="#" className="icon brands fa-twitter">
                      <span className="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-facebook-f">
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-instagram">
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-github">
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-medium-m">
                      <span className="label">Medium</span>
                    </a>
                  </li>
                </ul>

                <h4>Contact Icons</h4>
                <ul className="contact-icons color2">
                  <li className="icon brands fa-twitter">
                    <a href="#">Twitter</a>
                  </li>
                  <li className="icon brands fa-facebook-f">
                    <a href="#">Facebook</a>
                  </li>
                  <li className="icon brands fa-instagram">
                    <a href="#">Instagram</a>
                  </li>
                  <li className="icon brands fa-github">
                    <a href="#">GitHub</a>
                  </li>
                  <li className="icon brands fa-medium-m">
                    <a href="#">Medium</a>
                  </li>
                </ul>
              </div>
              <div className="span-3">
                <h3 className="major">Table</h3>
                <h4>Default</h4>
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Item One</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Two</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item Three</td>
                        <td> Morbi faucibus arcu accumsan lorem.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Four</td>
                        <td>Vitae integer tempus condimentum.</td>
                        <td>19.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="2"></td>
                        <td>100.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="span-3">
                <h4>Alternate</h4>
                <div className="table-wrapper">
                  <table className="alt">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Item One</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Two</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item Three</td>
                        <td> Morbi faucibus arcu accumsan lorem.</td>
                        <td>29.99</td>
                      </tr>
                      <tr>
                        <td>Item Four</td>
                        <td>Vitae integer tempus condimentum.</td>
                        <td>19.99</td>
                      </tr>
                      <tr>
                        <td>Item Five</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>29.99</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="2"></td>
                        <td>100.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="span-2-25">
                <h3 className="major">Buttons</h3>
                <ul className="actions">
                  <li>
                    <a href="#" className="button primary color2">
                      Primary
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button">
                      Default
                    </a>
                  </li>
                </ul>
                <ul className="actions">
                  <li>
                    <a href="#" className="button">
                      Default
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button large">
                      Large
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button small">
                      Small
                    </a>
                  </li>
                </ul>
                <ul className="actions">
                  <li>
                    <a
                      href="#"
                      className="button primary color2 icon solid fa-cog"
                    >
                      <AiTwotoneSetting />
                      Icon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button icon fa-gem">
                      <FaRegGem /> Icon
                    </a>
                  </li>
                </ul>
                <ul className="actions">
                  <li>
                    <span className="button primary color2 disabled">
                      Disabled
                    </span>
                  </li>
                  <li>
                    <span className="button disabled">Disabled</span>
                  </li>
                </ul>
                <ul className="actions">
                  <li>
                    <a
                      href="#"
                      className="button primary color2 circle icon solid fa-cog"
                    >
                      <AiTwotoneSetting />
                      Icon
                    </a>
                  </li>
                  <li>
                    <a href="#" className="button circle icon fa-gem">
                      <FaRegGem /> Icon
                    </a>
                  </li>
                </ul>
              </div>
              <div className="span-4-5">
                <h3 className="major">Form</h3>
                <form method="post" action="#">
                  <div className="fields">
                    <div className="field third">
                      <label htmlFor="demo-name">Name</label>
                      <input
                        type="text"
                        name="demo-name"
                        id="demo-name"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="field third">
                      <label htmlFor="demo-email">Email</label>
                      <input
                        type="email"
                        name="demo-email"
                        id="demo-email"
                        placeholder="jane@untitled.tld"
                      />
                    </div>
                    <div className="field third">
                      <label htmlFor="demo-category">Category</label>
                      <div className="select-wrapper">
                        <select name="demo-category" id="demo-category">
                          <option value="">-</option>
                          <option value="1">Manufacturing</option>
                          <option value="1">Shipping</option>
                          <option value="1">Administration</option>
                          <option value="1">Human Resources</option>
                        </select>
                      </div>
                    </div>
                    <div className="field quarter">
                      <input
                        type="radio"
                        id="demo-priority-low"
                        onChange={() => console.log("")}
                        name="demo-priority"
                        className="color2"
                        checked
                      />
                      <label htmlFor="demo-priority-low">Low Priority</label>
                    </div>
                    <div className="field quarter">
                      <input
                        type="radio"
                        id="demo-priority-high"
                        name="demo-priority"
                        className="color2"
                      />
                      <label htmlFor="demo-priority-high">High Priority</label>
                    </div>
                    <div className="field quarter">
                      <input
                        type="checkbox"
                        id="demo-copy"
                        name="demo-copy"
                        className="color2"
                      />
                      <label htmlFor="demo-copy">Email a copy</label>
                    </div>
                    <div className="field quarter">
                      <input
                        type="checkbox"
                        id="demo-human"
                        name="demo-human"
                        onChange={() => console.log("")}
                        className="color2"
                        checked
                      />
                      <label htmlFor="demo-human">Not a robot</label>
                    </div>
                    <div className="field">
                      <label htmlFor="demo-message">Message</label>
                      <textarea
                        name="demo-message"
                        id="demo-message"
                        placeholder="Enter your message"
                        rows="2"
                      ></textarea>
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        onChange={() => console.log("")}
                        value="Send Message"
                        className="primary color2"
                      />
                    </li>
                    <li>
                      <input
                        type="reset"
                        value="Reset"
                        onChange={() => console.log("")}
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </section>

          {/* <!-- Copyright --> */}
          <div className="copyright">
            &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
