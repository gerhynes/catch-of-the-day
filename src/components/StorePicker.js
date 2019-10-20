import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  storePickerInput = React.createRef();

  goToStore = event => {
    // 1. Stop form from submitting
    event.preventDefault();

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
