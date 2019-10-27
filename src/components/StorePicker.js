import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  storePickerInput = React.createRef();

  goToStore = e => {
    // 1. Stop form from submitting
    e.preventDefault();

    // 2. Get text from input
    const storeName = this.storePickerInput.current.value;

    // 3. Change page to /store/entered-value
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.storePickerInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store </button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
