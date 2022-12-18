import classes from "./Header.module.css";
import RulesSummary from "./RulesSummary";
import reactIcon from "../../assets/react.png";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Bao Loc Puzzle Mathématique </h1>
        <img src={reactIcon} alt="React App" />
      </header>
      <RulesSummary />
    </>
  );
};
export default Header;
