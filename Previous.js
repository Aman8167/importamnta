import { useHistory } from 'react-router-dom';

function PreviousPage() {
  const history = useHistory();

  const handleSubmit = (formData) => {
    history.push({
      pathname: '/current-page',
      state: { formData }
    });
  };

  return (
    <FormComponent onSubmit={handleSubmit} />
  );
}