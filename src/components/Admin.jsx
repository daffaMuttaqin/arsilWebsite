import { useEffect, useState } from "react";
import React from "react";
import API from "../services/authService";
import axios from "axios";

function Admin() {
  const [deleteId, setDeleteId] = useState(null);
  const [data, setData] = useState({});
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/projects`
        );

        setData(res.data);
        console.log(res.data);
      } catch (error) {
        setErr(error.message);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      await API.delete(`/projects/${deleteId}`);
      dispatch(deleteIncome(deleteId));
      document.getElementById("modal_delete").close();
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data");
    }
  };
  return (
    <div>
      <div>
        <div className="p-0 lg:p-6">
          <h2 className="text-2xl font-bold mb-4">Proyek</h2>
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
                <th>sadasd</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Villa Berastagi</td>
                <td>Medan, Sumatera Utara</td>
                <td>Hunian/Villa</td>
                <td>
                  Villa Berastagi pegunungan, material lokal, dan bukaan lebar
                  untuk menyatu dengan lanskap.
                </td>
                {/* COVER */}
                <td>
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                {/* FOTO */}
                <td className="grid lg:grid-cols-3 grid-cols-1">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>

                {/* Button Update dan Delete */}
                <td>
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
                      // setDeleteId(item.id); // simpan id yang akan dihapus
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
                </td>
              </tr>
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
    </div>
  );
}

export default Admin;
