import { FormImptuLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormImptuLabel shrink={otherProps.value.length}>
          {label}
        </FormImptuLabel>
      )}
    </Group>
  );
};

export default FormInput;
