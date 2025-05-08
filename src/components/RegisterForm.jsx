
import { useState } from "react";

function RegisterForm({ onSwitch }) {
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
            [name]: type == "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

         const { username, email, password, confirmPassword, gender, accepted } =
      formData;

    if (!username || !email || !password || !gender) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Şifreler uyuşmuyor");
      return;
    }
      if (password.length <=6) {
        alert("Şifre en az altı haneli olmalı");
        return;
      }

    if (!accepted) {
      alert("Lütfen koşulları kabul ediniz");
      return;
    }

    const user = { username, email, password, gender };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Kayıt başarılı! Artık giriş yapabilirsiniz.");
    onSwitch(); // giriş formuna geç
  };

  return (
    <div>
      <h2>Kayıt Ol</h2>
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
        <button type="submit">Kayıt Ol</button>
      </form>
      <p>
        Zaten hesabınız var mı?{" "}
        <button onClick={onSwitch}>Giriş Yap</button>
      </p>
    </div>
  );
}
export default RegisterForm;
    
