import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

type LoginInfo = {
  username: string;
  password: string;
};
const Login = () => {
  const { register, handleSubmit } = useForm<LoginInfo>();
  const navigate = useNavigate();

  function handleLogin(data: LoginInfo) {
    const { username, password } = data;
    if (username === "bahar" && password === "123") {
      navigate("/application");
    } else {
      navigate("/");
    }
  }
  return (
    <div className="flex w-full">
      <div className="grow bg-[#32a8a2] h-screen flex justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <h3 className="font-bold text-[40px] text-white">Welcome Back!</h3>
          <p className="text-white text-[18px] text-center">
            To keep connected with us please <br />
            login with your personal info
          </p>
        </div>
      </div>
      <div className="flex-grow-2 ">
        <div className="flex flex-col justify-center items-center pt-[86px] gap-5 pb-[44px]">
          <h3 className="font-bold text-[40px] text-[#32a8a2]">User Login</h3>
          <div className="flex gap-3 justify-center items-center">
            <a
              href="#"
              className="border border-[#ddd] p-3 rounded-full hover:bg-[#32a8a25e]"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="border border-[#ddd] p-3 rounded-full hover:bg-[#32a8a25e]"
            >
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a
              href="#"
              className="border border-[#ddd] p-3 rounded-full hover:bg-[#32a8a25e]"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center gap-5">
          <span className="text-gray-500">or use email for login:</span>
          <div className="flex flex-col gap-3 w-[400px] pb-[18px]">
            <div className="flex items-center gap-2 bg-[#dddddda1] rounded-sm h-10 p-3">
              <FontAwesomeIcon icon={faUser} className="text-[#828282]" />
              <input
                {...register("username")}
                placeholder="enter your username"
                className="border-none bg-transparent h-10 w-full outline-none"
                type="text"
              />
            </div>
            <div className="flex items-center gap-2 bg-[#dddddda1] rounded-sm h-10 p-3">
              <FontAwesomeIcon icon={faLock} className="text-[#828282]" />
              <input
                {...register("password")}
                placeholder="enter your password"
                className="border-none bg-transparent h-10 w-full outline-none"
                type="password"
              />
            </div>
          </div>
          <Link
            onClick={handleSubmit(handleLogin)}
            to="/application"
            className="bg-[#32a8a2] text-white text-[18px] px-12 py-4 rounded-2xl"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
