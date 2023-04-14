import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AlbumArt from "./AlbumArt";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { albumThunk } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Song from "./Song";

const AlbumPage = () => {
  const albumData = useSelector((state) => state.album.album.data);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(albumThunk(id));
  }, []);

  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
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
        <Col md={3} className="pt-5 text-center" id="img-container">
          {albumData && <AlbumArt album={albumData} />}
        </Col>

        <Col md={8} className="p-5">
          <Row>
            <Col md={10} className="mb-5" id="trackList">
              {albumData &&
                albumData.tracks.data.map((el) => <Song track={el} />)}
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
export default AlbumPage;
