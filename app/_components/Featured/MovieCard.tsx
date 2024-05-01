// Mantine.
import { Paper, Title } from "@mantine/core";

// Interfaces.
import { IFeaturedMovie } from "@/interfaces/movies";

// Styles.
import styles from "./FeaturedCard.module.scss";

export default function Card({ movie }: { movie: IFeaturedMovie }) {
  return (
    <Paper
      style={{ backgroundImage: `url(${movie.imgURL})` }}
      className={`${styles.card} flex h-[100%] aspect-[1.5/1] rounded`}
    >
      <div className={`${styles.overlay} rounded`} />

      <div className="flex items-center justify-between gap-2 w-[100%] text-text-secondary absolute bottom-0 p-7 rounded-b">
        <div>
          <Title order={3} className={styles.title}>
            {movie.title}
          </Title>
          <Title className={styles.category} size="xs">
            {movie.genre}
          </Title>
        </div>
      </div>
    </Paper>
  );
}
