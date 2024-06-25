import { BeatLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Error from "./Error";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import useFetch from "../hooks/use-fetch";
import { login } from "../db/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const navigate = useNavigate()
  const [searchParam] = useSearchParams()

  const longLink = searchParam.get('createNew') 

  const handleInput = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { data, error, loading, fn: fnLogin } = useFetch(login, formData);

  useEffect(() => {
    console.log(data);
    if (error === null && data) {
      navigate('/dashboard')
    }
  }, [data, error]);

  const handleLogin = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid Email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be 6 characters")
          .required("Password is required"),
      });

      await schema.validate(formData, { abortEarly: false });

      await fnLogin();

      setErrors({ email: "", password: "", general: "" });
    } catch (e: any) {
      const newErrors: { [key: string]: string } = {};
      e.inner.forEach((err: any) => {
        newErrors[err.path] = err.message;
      });
      //@ts-ignore
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>to your account if you have one</CardDescription>
          {/* @ts-ignore */}
          {error && <Error message={error.message} />}
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleInput}
              value={formData.email}
            ></Input>
            {errors.email && <Error message={errors.email} />}
          </div>
          <div className="space-y-1">
            <Input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleInput}
              value={formData.password}
            ></Input>
            {errors.password && <Error message={errors.password} />}
          </div>
        </CardContent>
        <CardFooter>
          {loading ? (
            <BeatLoader color="white" size={10} />
          ) : (
            <Button onClick={handleLogin}>Login</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
