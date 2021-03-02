import React, { Component } from 'react';
import styled from 'styled-components';

class QuantityValue extends Component {
  render() {
    const { adult, child, baby, idx, type, adultDefault, isAddOn } = this.props;
    return (
      <Value>
        {idx === 0 && <span>{!adult ? adultDefault : adult}</span>}
        {idx === 1 && <span>{child}</span>}
        {idx === 2 && <span>{baby}</span>}
      </Value>
    );
  }
}

export default QuantityValue;

const Value = styled.span``;
