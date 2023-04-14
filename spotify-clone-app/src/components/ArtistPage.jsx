import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { artistThunk } from "../redux/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

const ArtistPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const artistTracks = useSelector((state) => state.artist.artist.data.data);

  useEffect(() => {
    dispatch(artistThunk(id));
  }, []);
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

      <div className="row">
        <div className="col-12 col-md-10 col-lg-10 mt-5">
          <h2 className="titleMain">{artistTracks[0].artist.name}</h2>
          <div id="followers"></div>
          <div className="d-flex justify-content-center" id="button-container">
            <button
              className="btn btn-success mr-2 mainButton "
              id="playButton"
            >
              PLAY
            </button>
            <button
              className="btn btn-outline-light mainButton "
              id="followButton"
            >
              FOLLOW
            </button>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <div className="row" id="apiLoaded">
              {artistTracks &&
                artistTracks.map((el) => <AlbumCard songInfo={el} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArtistPage;
