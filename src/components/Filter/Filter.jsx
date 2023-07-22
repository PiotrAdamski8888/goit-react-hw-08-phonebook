import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel}>Find :</label>
      <input
        className={css.filterName}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
