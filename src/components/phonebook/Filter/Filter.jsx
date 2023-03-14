import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, FilterContainer } from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <>
      <Label htmlFor="filter">
        <FilterContainer>Find contacts by name</FilterContainer>
        <Input id="filter" type="text" value={value} onChange={onChange} />
      </Label>
    </>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
