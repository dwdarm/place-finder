import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const JumboTron = props => {
  return(
    <section className="hero is-link">
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title is-4">Where do you want to go?</p>
          <div className="field has-addons has-addons-centered">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Seach places"
                list="input-data-list"
                autoComplete="off"
                onChange={props.onTextChange}
              />
              <datalist id="input-data-list">
                {props.dataListItems.map((item, index) => (
                <option
                  key={index}
                  value={item.title}>
                  {item.title}, {item.vicinity}
                </option>
                ))}
              </datalist>
            </div>
            <div className="control">
              <button className="button is-primary" onClick={props.onSubmit}>
                <span className="icon"><FontAwesomeIcon icon={faSearch}/></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JumboTron;
