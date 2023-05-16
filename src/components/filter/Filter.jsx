import style from "../filter/style.module.css"

function Filter({ value, handleChange }) {
  return (
    <div  className={style.filter}>
      <label >Filter contacts by name:</label>
      <input type="text" id="filter" value={value} onChange={handleChange} />
    </div>
  );
}

export default Filter;