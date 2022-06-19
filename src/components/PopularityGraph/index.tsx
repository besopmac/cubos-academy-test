import styles from './../PopularityGraph/PopularityGraph.module.scss';

type PopularityProps = {
  voteAverage: number;
};

export const PopularityGraph = ({ voteAverage }: PopularityProps) => {
  return (
    <>
      <small>{voteAverage}</small>
    </>
  );
};
