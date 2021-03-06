import React from "react";

export class LongTxt extends React.Component {
  state = {
    description: "",
    isLongTxtShown: false,
  };

  toggleIsLongTxtShown = () => {
    const { isLongTxtShown } = this.state;
    this.setState({ isLongTxtShown: !isLongTxtShown }, () => {});
  };

  render() {
    const { description } = this.props;
    const { isLongTxtShown } = this.state;
    let text = description;
    return (
      <p className="long-txt">
        {isLongTxtShown ? text : text.substring(0, 60) + "..."}
        <button className="long-txt-btn" onClick={this.toggleIsLongTxtShown}>
          {isLongTxtShown ? "-" : "+"}
        </button>
      </p>
    );
  }
}
