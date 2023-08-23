import { ChangeEvent } from "react";
import { optionType } from "../types";

type Props = {
    term: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
}

function Search({
    term, 
    options, 
    onInputChange,
    onOptionSelect, 
    onSubmit}: Props):JSX.Element {

  return <div className="wrapper">
    <main className="main">
    <section className="searchField">
    <h1 className="title">weather <span className="forecast">forecast</span></h1>
    <p className="instruction">
      Enter below a place you want to know the weather of
      and select an option from the dropdown
    </p>
    <div className="inputContainer">
    <input type="text" value={term} className="input" onChange={onInputChange} />
    
    <ul className="cities">
    {options.map((option: optionType, index:number) => (
        <div className="conta">
      <li className="citiesOpt" key={option.name + '-' + index}>
        <button className="currentCity" onClick={() => onOptionSelect(option)}>
          {option.name}
        </button>
      </li>
        </div>
    ))}
    </ul>
    <button className="search" onClick={onSubmit}>search</button>
    </div>
    </section>
  </main>
  </div>
}
export default Search;