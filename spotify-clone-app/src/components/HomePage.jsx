import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rockThunk, popThunk, hiphopThunk } from "../redux/actions";
import AlbumCard from "./AlbumCard";

const HomePage = () => {
  const [rockRandomArtists, setRockRandomArtists] = useState([]);
  const [popRandomArtists, setPopRandomArtists] = useState([]);
  const [hiphopRandomArtists, setHiphopRandomArtists] = useState([]);

  const dispatch = useDispatch();
  const rockArtists = useSelector((state) => state.home.selections.rockArtists);
  const popArtists = useSelector((state) => state.home.selections.popArtists);
  const hiphopArtists = useSelector(
    (state) => state.home.selections.hiphopArtists
  );
  const rockData = useSelector((state) => state.home.selectionsData.rockData);
  const popData = useSelector((state) => state.home.selectionsData.popData);
  const hiphopData = useSelector(
    (state) => state.home.selectionsData.hiphopData
  );

  useEffect(() => {
    while (rockRandomArtists.length < 4) {
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
      if (!rockRandomArtists.includes(artist)) {
        rockRandomArtists.push(artist);
      }
    }

    console.log(rockRandomArtists, hiphopRandomArtists, popRandomArtists);
    rockRandomArtists.forEach((el) => dispatch(rockThunk(el)));
  }, []);
  useEffect(() => {
    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    popRandomArtists.forEach((el) => dispatch(popThunk(el)));
  }, []);
  useEffect(() => {
    while (hiphopRandomArtists.length < 4) {
      let artist =
        hiphopArtists[Math.floor(Math.random() * hiphopArtists.length)];
      if (!hiphopRandomArtists.includes(artist)) {
        hiphopRandomArtists.push(artist);
      }
    }
    hiphopRandomArtists.forEach((el) => dispatch(hiphopThunk(el)));
  }, []);

  const rockPick = rockData[0];
  const popPick = popData[0];
  const hiphopPick = hiphopData[0];
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11}>
          <div className="mainLinks d-none d-md-flex">
            <a className="text-decoration-none" href="#">
              TRENDING
            </a>
            <a className="text-decoration-none" href="#">
              PODCAST
            </a>
            <a className="text-decoration-none" href="#">
              MOODS AND GENRES
            </a>
            <a className="text-decoration-none" href="#">
              NEW RELEASES
            </a>
            <a className="text-decoration-none" href="#">
              DISCOVER
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              {rockData.length > 1 && <AlbumCard songInfo={rockPick[0]} />}
              {rockData.length > 1 && <AlbumCard songInfo={rockPick[1]} />}
              {rockData.length > 1 && <AlbumCard songInfo={rockPick[2]} />}
              {rockData.length > 1 && <AlbumCard songInfo={rockPick[3]} />}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              {popData.length > 1 && <AlbumCard songInfo={popPick[0]} />}
              {popData.length > 1 && <AlbumCard songInfo={popPick[1]} />}
              {popData.length > 1 && <AlbumCard songInfo={popPick[2]} />}
              {popData.length > 1 && <AlbumCard songInfo={popPick[3]} />}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              {hiphopData.length > 1 && <AlbumCard songInfo={hiphopPick[0]} />}
              {hiphopData.length > 1 && <AlbumCard songInfo={hiphopPick[1]} />}
              {hiphopData.length > 1 && <AlbumCard songInfo={hiphopPick[2]} />}
              {hiphopData.length > 1 && <AlbumCard songInfo={hiphopPick[3]} />}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default HomePage;
