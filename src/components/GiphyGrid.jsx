import { GiphyItem } from "./GiphyItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GiphyGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading && <p>Cargando!</p>}
        {images.map((image) => {
          return <GiphyItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
