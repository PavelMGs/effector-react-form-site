export default `import React from 'react';
import {useForm} from 'effector-react-form-v1';

const mapSubmit = ({values, ...rest}) => {
  const mappedValues = {profile: values, someData: 'example data'};
  return {...rest, values: mappedValues}
}

const Input = ({controller, label}) => {
  const {input} = controller();
  return (
    <div className="input-wrap">
      <label>{label}</label>
      <input {...input} value={input.value || ''} className="input" />
    </div>
  );
};

const Form = () => {
  const {handleSubmit, controller} = useForm({
    onSubmit: ({values}) => {
      alert(JSON.stringify(values, null, '  '));
    },
    mapSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Username" controller={controller({name: 'username'})} />
      <Input label="First name" controller={controller({name: 'profile.firstName'})} />
      <Input label="Last name" controller={controller({name: 'profile.lastName'})} />
      <button type="submit">submit</button>
    </form>
  );
};`;
