import {useForm} from "react-hook-form";
import {useState, useEffect} from "react";
import {getRobotsNames, joinMatch} from "../../services";
import {
  Form,
  InputContainer,
  Label,
  Input,
  Select,
  Option,
  Error,
  Button,
} from "./FormJoinMatch.styled";

const FormJoinMatch = ({match_id, has_password}) => {
  const [robots, setRobots] = useState([]);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: "all"});

  const callGetRobotsNames = async () => {
    try {
      const response = await getRobotsNames(localStorage.getItem(`user`));
      setRobots(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleJoin = async (data) => {
    try {
      const user = localStorage.getItem("user");
      await joinMatch(user, match_id, data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callGetRobotsNames();
  }, []);

  return (
    <Form onSubmit={handleSubmit(handleJoin)}>
      <InputContainer>
        <Label>Select avatar:</Label>
        <Select
          id='inputRaobot'
          data-testid='nameRobot'
          {...register("joining_robot", {
            required: {value: true, message: "Robot is required."},
          })}>
          {robots.map(({name}) => (
            <Option key={name} value={name}>
              {name}
            </Option>
          ))}
          <Option value=''>* Choose a robot *</Option>
        </Select>
        <Error>{errors["joining_robot"]?.message}</Error>
      </InputContainer>
      {has_password && (
        <InputContainer>
          <Label>Enter password:</Label>
          <Input
            type='password'
            data-testid='password'
            {...register("match_password", {
              maxLength: {
                value: 16,
                message: "The password must have at most 16 characters.",
              },
            })}
          />
          <Error>{errors["match_password"]?.message}</Error>
        </InputContainer>
      )}

      <Button type='submit' data-testid='joinButton'>
        Join
      </Button>
    </Form>
  );
};
export default FormJoinMatch;
