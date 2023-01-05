import classes from "./RulesSummary.module.css";

const RulesSummary = () => {
  return (
    <section className={classes.summary}>
      <div className={classes.spacing}>
        <h2>Contexte</h2>
        <p>
          L'équation ci-dessous a été donné à des enfants de 8 ans au Bao-Loc
          {" ("}Vietnam{")"}. Des mathématiciens européens chevronnés n'ont pas
          été en mesure de la résoudre.
        </p>
      </div>
      <div>
        <h2>Objectif</h2>
        <p>
          Compléter les cases bleues de l'équation si dessous en utilisant des
          chiffres de 1 à 9 avec la contrainte de ne pas pouvoir utiliser deux
          fois le même chiffre.
        </p>
        {/* <p className={classes.equation}>Equation : <br /> <br/>
        a + (13 * b / c) + d + (12 * e) - f - 11 + (g * h / i) - 10 = 66</p> */}
      </div>
    </section>
  );
};

export default RulesSummary;
