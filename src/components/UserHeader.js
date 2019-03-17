import React from "react";
import { connect } from "react-redux";
//vi importerar connect här med vår action för att kunna få den som en prop här

class UserHeader extends React.Component {
  render() {
    if (!this.props.user) {
      //detta är user som vi hämtar
      return null;
    }

    return <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  //vi har nu access till props från komponenten här. Vi sköter logiken här i så att den blir mer reuseable
  //vi har logik här för att hämta ut id varje id
  return {
    user: state.users.find(user => user.id === ownProps.userId)
    //vi vill inte skriva över users när vi gör detta, så vi returnerar en user istället
  };
};

export default connect(mapStateToProps)(UserHeader);
