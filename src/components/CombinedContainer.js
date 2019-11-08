import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";
import { buyIcecream } from "../redux/iceCreams/icecreamAction";

function CombinedContainer(props) {
  return (
    <div className="container">
      <div className="row">
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <h2>Number of ice creams - {props.numOfIcecreams}</h2>
      </div>
      <div className="row">
        <button onClick={props.buyCake}>Buy Cake</button>{" "}
        <button onClick={props.buyIcecream}>Buy Icecream</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes,
    numOfIcecreams: state.icecream.numOfIcecreams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIcecream: () => dispatch(buyIcecream())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CombinedContainer);
