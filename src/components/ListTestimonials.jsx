import React from "react";
import { useEffect, useState } from "react";
import API from "../services/authService";
import axios from "axios";

function ListTestimonials() {
  const [deleteId, setDeleteId] = useState(null);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [editingProject, setEditingProject] = useState(null);

  // Untuk reset form
  const resetForm = () => {
    setName("");
    setRole("");
    setQuote("");
    setEditingProject(null);
  };

  // EDIT DATA
  const handleEdit = (testimoni) => {
    setEditingProject(testimoni);

    // isi form dengan data lama
    setName(testimoni.name);
    setRole(testimoni.role);
    setQuote(testimoni.quote);

    document.getElementById("modal_tambah_testimoni").showModal();
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, role, quote }; // JSON

    try {
      let res;
      if (editingProject) {
        // EDIT MODE
        res = await API.put(`/testimonials/${editingProject.id}`, payload);
        setData((prev) =>
          prev.map((item) => (item.id === editingProject.id ? res.data : item))
        );
      } else {
        // ADD MODE
        res = await API.post("/testimonials", payload);
        setData((prev) => [...prev, res.data]);
      }

      document.getElementById("modal_tambah_testimoni").close();
      resetForm();
    } catch (error) {
      console.error("Error upload:", error);
      alert("Gagal upload testimoni");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/testimonials`
        );

        setData(res.data);
      } catch (error) {
        setErr(error.message);
      }
    };

    fetchData();
  }, []);

  // HANDLE DELETE
  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await API.delete(`/testimonials/${deleteId}`);

      // update data state (hapus data dari tabel tanpa refresh)
      setData((prev) => prev.filter((item) => item.id !== deleteId));

      // reset deleteId dan tutup modal
      setDeleteId(null);
      document.getElementById("modal_delete").close();
    } catch (err) {
      console.error("Gagal menghapus data:", err);
      alert("Gagal menghapus data");
    }
  };

  return (
    <div>
      <div>
        <div className="flex p-0 lg:p-6 justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">Testimonial</h2>
          <button
            className="btn btn-info"
            onClick={() => {
              document.getElementById("modal_tambah_testimoni").showModal();
            }}
          >
            Tambah
          </button>
        </div>

        <div className="overflow-x-auto px-0 lg:px-6">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Posisi</th>
                <th>Quote</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data.map((item, index) => (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.quote}</td>

                  {/* Button Update dan Delete */}
                  <td>
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleEdit(item)}
                        className="btn btn-square btn-success"
                      >
                        <svg
                          className="size-[22px]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          setDeleteId(item.id); // simpan id yang akan dihapus
                          document.getElementById("modal_delete").showModal();
                        }}
                        className="btn btn-square btn-error lg:ml-2 ml-1"
                      >
                        <svg
                          className="size-[20px]"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {/* MODAL DELETE ITEM */}
      <dialog id="modal_delete" className="modal">
        <div className="modal-box">
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal ">
              Apakah kamu yakin ingin menghapus data ini?
            </h3>
            <button
              onClick={handleDelete}
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Ya, Saya yakin
            </button>
            <button
              onClick={() => {
                setDeleteId(null);
                document.getElementById("modal_delete").close();
              }}
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Tidak
            </button>
          </div>
        </div>
      </dialog>

      {/* MODAL TAMBAH PROJEK */}
      <dialog id="modal_tambah_testimoni" className="modal">
        <div className="modal-box">
          <fieldset className="fieldset  rounded-box w-full p-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-4 border-b rounded-t  border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Tambahkan Testimoni Baru
              </h3>
            </div>

            {/* Form */}
            <form className="py-4 md:py-5">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                {/* Nama */}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Nama
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Tulis nama client"
                  />
                </div>

                {/* Posisi */}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Posisi
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Tulis posisi client"
                  />
                </div>

                {/* Quote */}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Quote
                  </label>
                  <textarea
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Tulis testimoni client"
                  ></textarea>
                </div>
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="mt-4 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {editingProject ? "Simpan Perubahan" : "Tambah proyek baru"}
              </button>
            </form>
          </fieldset>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* END MODAL */}
    </div>
  );
}

export default ListTestimonials;
