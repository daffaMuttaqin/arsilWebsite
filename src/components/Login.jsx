import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import arsilLogo from "../assets/images/logo/arsil.png";

function Login({ onSubmit, logoText = "Selamat Datang" }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          username,
          password,
        }
      );

      // Simpan token ke localStorage
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      navigate("/admin");
    } catch (err) {
      setMsg(err.response?.data?.message || "Login gagal");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-sm border border-slate-100 shadow-lg rounded-2xl p-8">
          <header className="text-center mb-6">
            {/* <div className="mx-auto w-16 h-16 ">
              <img src={arsilLogo} alt="Arsil Logo" />
            </div> */}
            <h1 className="mt-4 text-2xl font-semibold text-slate-900">
              {logoText}
            </h1>
            <p className="mt-1 text-sm text-slate-500">Masuk ke akun Anda</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Nama pengguna
              </label>
              <input
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                autoComplete="username"
                required
                placeholder="Masukkan nama pengguna"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Kata sandi
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="Masukkan kata sandi"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-slate-500 hover:text-slate-700"
                  aria-label={
                    showPassword
                      ? "Sembunyikan kata sandi"
                      : "Tampilkan kata sandi"
                  }
                >
                  {showPassword ? "Sembunyi" : "Tampil"}
                </button>
              </div>
            </div>

            {/* <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span>Ingat saya</span>
              </label>

              <button
                type="button"
                className="text-blue-600 hover:underline text-sm"
              >
                Lupa kata sandi?
              </button>
            </div> */}

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-60`}
              >
                {loading ? "Memproses..." : "Masuk"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-slate-500">
            Belum punya akun?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Daftar
            </a>
          </div>
        </div>

        <footer className="mt-6 text-center text-xs text-slate-400">
          © 2025 Arsil Group. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Login;
