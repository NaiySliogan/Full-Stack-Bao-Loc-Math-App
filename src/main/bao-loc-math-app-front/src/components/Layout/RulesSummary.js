import classes from "./RulesSummary.module.css";

const RulesSummary = () => {
  return (
    <section className={classes.summary}>
      <div className={classes.spacing}>
        <h2>Contexte</h2>
        <p>
          Le tableau ci-dessous a été donné à des enfants de 8 ans au Bao-Loc 
          {" ("}Vietnam{")"}. Des mathématiciens européens chevronnés n'ont pas
          été en mesure de le résoudre.
        </p>
      </div>
      <div>
        <h2>Objectif</h2>
        <p>
          Écrire un algorithme qui est capable de compléter le tableau
          ci-dessous en utilisant des chiffres de 1 à 9 avec la contrainte de ne
          pas pouvoir utiliser deux fois le même chiffre.
        </p>
      </div>
    </section>
  );
};

export default RulesSummary;
