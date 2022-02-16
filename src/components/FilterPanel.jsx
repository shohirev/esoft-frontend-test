import React from 'react';
import FilterByStatus from './FilterByStatus.jsx';
import FilterByName from './FilterByName.jsx';
import FilterByExecutionDate from './FilterByExecutionDate.jsx';

const FilterPanel = () => (
  <div className='filter-panel'>
    <FilterByStatus />
    <FilterByName />
    <FilterByExecutionDate />
  </div>
);

export default FilterPanel;
