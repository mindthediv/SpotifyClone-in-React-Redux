import { Link } from "react-router-dom";

const AlbumCard = ({ songInfo }) => {
  return (
    <div className="col text-center" id={songInfo.id}>
      <Link to={`/album-page/${songInfo.album.id}`}>
        <img className="img-fluid" src={songInfo.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Link
          to={`/album-page/${songInfo.album.id}`}
          className="text-decoration-none"
        >
          Album:
          {songInfo.album.title.length < 16
            ? `${songInfo.album.title}`
            : `${songInfo.album.title.substring(0, 16)}...`}
          <br />
        </Link>
        <Link
          to={`/artist-page/${songInfo.artist.id}`}
          className="text-decoration-none"
        >
          Artist: {songInfo.artist.name}
        </Link>
      </p>
    </div>
  );
};

export default AlbumCard;
