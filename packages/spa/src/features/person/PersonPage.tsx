import { lazy, Suspense, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import Tile from "core/Tile/Tiles";
import { CorePage } from "core/CorePage";
import { ActingMovieDetailed } from "./interfaces";
import { usePersonApiService } from "./personApiService";
import { ImagesConfigContext } from "services/ImagesConfigContext";
import { Loader } from "ui/atoms";
import { Wrapper } from "ui/atoms/wrapper";
const Section = lazy(() => import("ui/organisms/section"));

export const PersonPage = () => {
  const { id }: any = useParams();

  const { baseUrl, posterSizes, profileSizes } =
    useContext(ImagesConfigContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const posterSizesArray = [
    posterSizes[1],
    posterSizes[2],
    posterSizes[2],
    posterSizes[3],
    posterSizes[3],
  ];

  const profileSizesArray = [
    profileSizes[1],
    profileSizes[1],
    profileSizes[1],
    profileSizes[1],
    profileSizes[2],
  ];

  const personTileWidths = ["100%", "228px", "286px", "286px", "324px"];
  const tileWidths = ["100%", "100%", "100%", "100%", "100%"];

  const { status, error, isFetching, personDetails, personCast, personCrew } =
    usePersonApiService();

  return (
    <CorePage
      status={status}
      error={error}
      loadingMessage="Loading person details..."
      isDataPresent={!!personDetails}
      isFetching={isFetching}
    >
      {personDetails && (
        <Wrapper>
          {/* @ts-ignore */}
          <Tile
            oversize="true"
            oversizepersontile="true"
            key={id}
            sizes={posterSizesArray}
            imageWidth="312px"
            widths={tileWidths}
            detailsUrl={`/person/${id}`}
            imageBaseUrl={baseUrl}
            imagePath={personDetails.profile_path}
            title={personDetails.name}
            birthday={personDetails.birthday}
            birthPlace={personDetails.place_of_birth}
            overview={personDetails.biography}
          />
          <Suspense fallback={<Loader />}>
            {personCast && personCast.length > 0 && (
              <Section title={`Cast (${personCast.length})`}>
                {personCast &&
                  personCast.map((movie: ActingMovieDetailed) => (
                    // @ts-ignore
                    <Tile
                      key={`cast:${movie.credit_id}`}
                      detailsUrl={`/movie/${movie.id}`}
                      imageWidth="100%"
                      widths={personTileWidths}
                      imageBaseUrl={baseUrl}
                      imagePath={movie.poster_path}
                      sizes={profileSizesArray}
                      title={movie.title}
                      subtitle={`
                                    ${movie.character}
                                    ${
                                      movie.release_date &&
                                      "(" +
                                        new Date(Date.parse(movie.release_date))
                                          .getFullYear()
                                          .toString() +
                                        ")"
                                    }
                                `}
                      genreIds={movie.genre_ids}
                      rating={movie.vote_average}
                      votes={movie.vote_count}
                    />
                  ))}
              </Section>
            )}
            {personCrew && personCrew.length > 0 && (
              <Section title={`Crew (${personCrew.length})`}>
                {personCrew &&
                  personCrew.map((movie: ActingMovieDetailed) => (
                    // @ts-ignore
                    <Tile
                      key={`crew:${movie.credit_id}`}
                      detailsUrl={`/movie/${movie.id}`}
                      widths={personTileWidths}
                      imageBaseUrl={baseUrl}
                      imagePath={movie.poster_path}
                      sizes={profileSizesArray}
                      title={movie.title}
                      subtitle={`
                                    ${movie.job}
                                    ${
                                      movie.release_date &&
                                      "(" +
                                        new Date(Date.parse(movie.release_date))
                                          .getFullYear()
                                          .toString() +
                                        ")"
                                    }
                                `}
                      genreIds={movie.genre_ids}
                      rating={movie.vote_average}
                      votes={movie.vote_count}
                    />
                  ))}
              </Section>
            )}
          </Suspense>
        </Wrapper>
      )}
    </CorePage>
  );
};
