import { trackMount } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { addFavs, delFavs } from "../redux/actions";

const Song = ({ track }) => {
  const dispatch = useDispatch();

  const addFav = (e) => {
    // e.stopPropagation();  disabiliterebbe il MOUNT_TRACK (why?)
    dispatch(addFavs(track.id));
  };
  const delFav = (e) => {
    // e.stopPropagation();
    dispatch(delFavs(track.id));
  };

  const favs = useSelector((state) => state.player.favs);

  return (
    <div
      className="py-3 trackHover"
      onClick={() => dispatch(trackMount(track))}
    >
      <a
        href="#"
        className="card-title trackHover px-3"
        style={{ color: "white" }}
      >
        {track.title}
      </a>
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(
          parseInt(track.duration) / 60 // setting the duration minutes
        )}
        :
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
          : parseInt(track.duration) % 60}
        <span>
          {!favs.includes(track.id) ? (
            <i
              class="fa fa-heart-o ms-3 fs-5 "
              aria-hidden="true"
              onClick={addFav}
            ></i>
          ) : (
            <i
              class="fa fa-heart ms-3 fs-5 heartIcon"
              aria-hidden="true"
              onClick={delFav}
            ></i>
          )}
        </span>
      </small>
    </div>
  );
};

export default Song;
