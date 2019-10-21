import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    // 1. Stop the form from submitting
    e.preventDefault();

    // 2. Make a fish object
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value), // money stored in cents
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };

    // 3. Add the fish to state
    this.props.addFish(fish);

    console.log(e.currentTarget);
    // 4. Refresh the form
    e.currentTarget.reset();
  };
  render() {
    return (
      <form action="" className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea>
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
