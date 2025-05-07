import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    gender: "",
    accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.gender
    ) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Şifreler uyuşmuyor");
      return;
    }
    if (!formData.accepted) {
      alert("Lütfen koşulları kabul ediniz");
      return;
    }
    alert(
      `Ad: ${formData.username}\nE-posta: ${formData.email}\nŞifre: ${formData.password} \nCinsiyet: ${formData.gender}`
    );
  };

  return (
    <div className="App">
      <h2>Mini Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Şifre Tekrar"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={formData.email}
          onChange={handleChange}
        />

        <label>
          <input
            type="radio"
            name="gender"
            value="erkek"
            checked={formData.gender === "erkek"}
            onChange={handleChange}
          />
          Erkek
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="kadın"
            checked={formData.gender === "kadın"}
            onChange={handleChange}
          />
          Kadın
        </label>

        <label>
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
          />
          Koşulları kabul ediyorum
        </label>

        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default App;
