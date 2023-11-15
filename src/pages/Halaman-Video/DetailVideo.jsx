import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./video.css";
import CardVideo from "../../components/CardVideo";
export default function DetailVideo() {
  const { id } = useParams();
  const [dataById, setDataById] = useState([]);
  const [dataRandom, setDataRandom] = useState([]);
  const getDataApiById = async () => {
    const response = await axios(
      `https://652d3ffcf9afa8ef4b271ed7.mockapi.io/Video/${id}`
    );
    const data = response.data;

    setDataById(data);
  };

  // ngambil data dari api
  const getDataApi = async () => {
    const response = await axios(
      `https://652d3ffcf9afa8ef4b271ed7.mockapi.io/Video`
    );
    // hasil response
    const data = response.data;
    // Video Rekomendasi
    const randomData = randomVideos(data, 6);
    // Memasukan data diatas kedalam state
    // duplikat dulu datanya pakai ...data
    // kemudian masukan datanya disesuaikan
    setDataRandom(randomData);
  };

  //Logic Video Rekomendasi
  const randomVideos = (data, numItem) => {
    // sorting secara random
    const dataRandom = data.sort(() => 0.5 - Math.random());
    // mengambil 6 data dari depan
    return dataRandom.slice(0, numItem);
  };
  useEffect(() => {
    getDataApiById();
  }, []);

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="card mb-3" id="card-detail-video">
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 col-12">
                <img
                  src={dataById.url_thumbnail}
                  className="card-img-top p-2 rounded-4 mt-2"
                  alt="detail-video"
                />
                <div className="d-flex justify-content-end me-2">
                  <a href="#" className="mx-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.060.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-bookmark"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-md-8 col-12">
                <h5 className="fw-semibold mt-md-0 mt-3">{dataById.title}</h5>
                <p>{dataById.author}</p>
                <div className="d-flex">{dataById.rating}</div>
                <p className="mt-3 fw-medium">Deskripsi Video :</p>
                <p className="mt-0">{dataById.description}</p>
                <div className="d-flex justify-content-center justify-content-md-start">
                  <Link
                    to={`/halaman-video/detail-video/tonton-video/${id}`}
                    className="me-3"
                  >
                    <button
                      type="button"
                      className="btn text-white rounded-5 px-3 py-2 shadow-sm fw-semibold"
                      id="button-tonton"
                    >
                      Tonton Video
                    </button>
                  </Link>

                  <a href={dataById.url_unduh} target="_blank" rel="noreferrer">
                    <button
                      type="button"
                      className="btn rounded-5 px-3 py-2 shadow-sm fw-semibold"
                      id="button-unduh"
                    >
                      Unduh Video
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5 buku-baru">
        <div className="row mt-3 kategori">
          <div className="col-md-6 col-12">
            <h5 className="text-center text-md-start">
              Direkomendasikan untuk mu
            </h5>
          </div>
          <div className="col-md-6 text-md-end text-end col-12">
            <p>Selengkapnya</p>
          </div>
          <div
            className="scroll-video row row-cols-1 row-cols-lg-4 row-cols-md-3 g-lg-4 overflow-x-auto d-flex flex-nowrap mt-2 mt-lg-0 mb-5"
            id="direkomendasikan-video"
          >
            {dataRandom.map((item) => (
              <CardVideo key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
