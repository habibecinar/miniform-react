import { useState } from "react";

function LoginForm({ onSwitch }) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      !storedUser ||
      storedUser.username !== loginData.username ||
      storedUser.password !== loginData.password
    ) {
      alert("Kullanıcı adı veya şifre hatalı.");
      return;
    }

    alert(`Hoş geldin, ${storedUser.username}!`);
  };

  return (
    <div>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={loginData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          value={loginData.password}
          onChange={handleChange}
        />
        <button type="submit">Giriş Yap</button>
      </form>
      <p>
        Hesabınız yok mu? <button onClick={onSwitch}>Kayıt Ol</button>
      </p>
    </div>
  );
}

export default LoginForm;


