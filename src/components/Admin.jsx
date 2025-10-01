import { useEffect, useState } from "react";
import React from "react";
import API from "../services/authService";
import axios from "axios";

function Admin() {
  const [deleteId, setDeleteId] = useState(null);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState(null);

  // state untuk banyak foto
  const [images, setImages] = useState([[]]);

  // tambah input foto baru
  const handleAddImageInput = () => {
    setImages([...images, { file: null, preview: null }]);
  };

  // handle perubahan tiap file
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const newImages = [...images];
    if (newImages[index]?.preview) {
      URL.revokeObjectURL(newImages[index].preview);
    }

    newImages[index] = { file, preview: URL.createObjectURL(file) };
    setImages(newImages);
  };

  // handle cover change
  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setCover({ file, preview });
    }
  };

  const removeCover = () => {
    if (cover?.preview) URL.revokeObjectURL(cover.preview);
    setCover(null);
  };

  const removeImage = (index) => {
    setImages((prev) => {
      const copy = [...prev];
      if (copy[index]?.preview) URL.revokeObjectURL(copy[index].preview);
      copy.splice(index, 1);
      return copy;
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("location", location);
    formData.append("category", category);
    formData.append("description", description);

    if (cover?.file) {
      formData.append("cover", cover.file);
    }

    images.forEach((img) => {
      if (img?.file) {
        formData.append("images", img.file);
      }
    });

    try {
      const res = await API.post("/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Tutup modal
      document.getElementById("modal_tambah_projek").close();

      // Reset form
      setTitle("");
      setLocation("");
      setCategory("");
      setDescription("");
      setCover(null);
      setImages([]);

      // Update tabel
      setData((prev) => [...prev, res.data]);

      console.log("Proyek berhasil ditambahkan:", res.data);
    } catch (error) {
      console.error("Error upload:", error);
      alert("Gagal upload proyek");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/projects`
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
      await API.delete(`/projects/${deleteId}`);

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
          <h2 className="text-2xl font-bold mb-4">Proyek</h2>
          <button
            className="btn btn-info"
            onClick={() => {
              document.getElementById("modal_tambah_projek").showModal();
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
                <th>Judul</th>
                <th>Lokasi</th>
                <th>Kategori</th>
                <th>Deskripsi</th>
                <th>Cover</th>
                <th className="text-center">Foto</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data.map((item, index) => (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.location}</td>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  {/* COVER */}
                  <td>
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        className="w-12 h-12"
                        src={item.cover}
                        alt="Cover Projects"
                      />
                    </div>
                  </td>
                  {/* FOTO */}
                  <td className="grid lg:grid-cols-3 grid-cols-2 gap-2">
                    {item.images &&
                      item.images.map((img, idx) => (
                        <div key={idx} className="mask mask-squircle h-12 w-12">
                          <img
                            className="w-12 h-12"
                            src={img}
                            alt={`Foto ${idx + 1} - ${item.title}`}
                          />
                        </div>
                      ))}
                  </td>

                  {/* Button Update dan Delete */}
                  <td>
                    <div className="flex justify-center">
                      <button
                        // onClick={() => handleEdit(item)}
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
      <dialog id="modal_tambah_projek" className="modal">
        <div className="modal-box">
          <fieldset className="fieldset  rounded-box w-full p-4">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-4 border-b rounded-t  border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Tambahkan Proyek Baru
              </h3>
            </div>

            {/* Form */}
            <form className="py-4 md:py-5">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                {/* Judul */}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Judul
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Tulis judul proyek"
                  />
                </div>

                {/* Lokasi */}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Lokasi
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Tulis lokasi proyek"
                  />
                </div>

                {/* Kategori */}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Kategori
                  </label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Tulis kategori proyek"
                  />
                </div>

                {/* Deskripsi */}
                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Deskripsi
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                    placeholder="Tulis deskripsi proyek"
                  ></textarea>
                </div>

                {/* Cover */}
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Cover
                  </label>
                  <div className="flex items-center justify-center w-20">
                    {/* Kondisi jika ada cover maka input field akan berubah menjadi gambar */}
                    {cover ? (
                      <div className="relative w-20 h-20">
                        <img
                          src={cover.preview}
                          alt="Cover Preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={removeCover}
                          className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 text-xs"
                        >
                          ✕
                        </button>
                      </div>
                    ) : (
                      <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center">
                          <svg
                            className="w-8 h-8 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleCoverChange}
                        />
                      </label>
                    )}
                  </div>
                </div>

                {/* Foto */}
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Foto
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {images.map((imgObj, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center w-20"
                      >
                        {imgObj?.preview ? (
                          <div className="relative w-20 h-20">
                            <img
                              src={imgObj.preview}
                              alt={`Foto ${index + 1}`}
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 text-xs"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center">
                              <svg
                                className="w-8 h-8 text-gray-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                              </svg>
                            </div>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleImageChange(e, index)}
                            />
                          </label>
                        )}
                      </div>
                    ))}

                    {/* Tombol + */}
                    <div className="flex items-center justify-center w-20">
                      <button
                        type="button"
                        onClick={handleAddImageInput}
                        className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100"
                      >
                        <svg
                          className="w-8 h-8"
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
                      </button>
                    </div>
                  </div>
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
                Tambah proyek baru
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

export default Admin;
