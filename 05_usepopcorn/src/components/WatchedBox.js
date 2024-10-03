import React from "react";
import WatchedMovieList from "./WatchedMovieList";
import WatchedSummary from "./WatchedSummary";

function WatchedBox() {
  // const [watched, setWatched] = React.useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = React.useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          {/* <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} /> */}
        </>
      )}
    </div>
  );
}

export default WatchedBox;
