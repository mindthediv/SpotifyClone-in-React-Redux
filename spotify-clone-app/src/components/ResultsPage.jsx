import { useSelector } from "react-redux";
import BottomPlayer from "./BottomPlayer";
import MainNav from "./MainNav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Song from "./Song";

const ResultsPage = () => {
  const searchData = useSelector((state) => state.home.searchData.data);
  const selTrack = useSelector((state) => state.player.selectedTrack);
  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <MainNav />
      <Col md={8} className="p-5">
        <Row>
          {searchData && (
            <Col md={10} className="mb-5" id="trackList">
              {searchData.map((el) => (
                <Song key={el.id} track={el} />
              ))}
            </Col>
          )}
        </Row>
      </Col>
      {selTrack && <BottomPlayer />}
    </Col>
  );
};

export default ResultsPage;
