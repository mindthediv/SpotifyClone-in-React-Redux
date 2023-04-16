import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { artistThunk } from "../redux/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";
import MainNav from "./MainNav";
import BottomPlayer from "./BottomPlayer";

const ArtistPage = () => {
  const selTrack = useSelector((state) => state.player.selectedTrack);
  const dispatch = useDispatch();
  const { id } = useParams();
  const artistTracks = useSelector((state) => state.artist.artist.data.data);

  useEffect(() => {
    dispatch(artistThunk(id));
  }, []);
  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <MainNav />

      <Row>
        <Col xs={12} md={10} className="mt-5">
          {artistTracks && (
            <h2 className="titleMain">{artistTracks[0].artist.name}</h2>
          )}
          <div id="followers">{}</div>
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
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={10} className="offset-1 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <div className="row" id="apiLoaded">
              {artistTracks &&
                artistTracks.map((el) => <AlbumCard songInfo={el} />)}
            </div>
          </div>
        </Col>
      </Row>
      {selTrack && <BottomPlayer />}
    </Col>
  );
};
export default ArtistPage;
