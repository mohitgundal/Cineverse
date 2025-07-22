import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Card = ({ data, trending, index, media_type }) => {
  const imageURL = useSelector(state => state.movieoData.imageURL);
  const mediaType = data.media_type ?? media_type;

  const title = data?.title || data?.name || "Untitled";
  const releaseDate = data?.release_date || data?.first_air_date || null;
  const rating = data?.vote_average ? Number(data?.vote_average).toFixed(1) : "N/A";

  return (
    <Link
      to={`/${mediaType}/${data.id}`}
      className="bg-neutral-800 text-white rounded-md shadow-md overflow-hidden
                 transition-transform duration-300 hover:scale-105
                 flex flex-col w-full sm:w-[230px] h-[360px]"
    >
      {/* Image section */}
      <div className="w-full h-[270px] relative">
        {data?.poster_path ? (
          <img
            src={imageURL + data?.poster_path}
            alt={`${title} poster`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-neutral-700 text-gray-300 text-sm text-center px-2">
            No image found
          </div>
        )}

        {/* Trending badge */}
        {trending && (
          <div className="absolute top-2 left-0 bg-black/70 text-white px-3 py-1 text-xs rounded-r-full shadow">
            #{index} Trending
          </div>
        )}
      </div>

      {/* Info section */}
      <div className="bg-neutral-900 px-2 py-2 h-[90px] flex flex-col justify-between">
        <h2 className="text-sm font-semibold line-clamp-1">{title}</h2>
        <div className="flex justify-between items-center text-xs text-neutral-400">
          <span>
            {releaseDate ? moment(releaseDate).format("MMM D, YYYY") : "Date N/A"}
          </span>
          <span className="bg-neutral-700 text-white px-2 py-0.5 rounded-full">
            ⭐ {rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
