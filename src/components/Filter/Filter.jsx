import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/сontactSlice';
import { getFilter } from 'redux/contacts/selectors';


export const Filter = () => {

   const filter = useSelector( getFilter);
   const dispatch = useDispatch();

    function filterName(event) {
    dispatch(filterContacts(event.currentTarget.value));
  }

  return (
    <Label>
      Find contacts by name
      
      <Input
        type="text"
        value={filter}
        onChange={filterName}
      />
    </Label>
  );
};


