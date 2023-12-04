import { useEffect, useState } from "react";
import axios from "axios";
import "./Homepage.css";
import heroImage from "../assets/svg/hero-image.svg";
import literasiKita from "../assets/svg/LiterasiKita-image.svg";
import programImage1 from "../assets/svg/program-image1.svg";
import programImage2 from "../assets/svg/program-image2.svg";
import donasiImage from "../assets/svg/donasi-image.svg";
import user1 from "../assets/svg/user-1.svg";
import user2 from "../assets/svg/user-2.svg";
import user3 from "../assets/svg/user-3.svg";
import cardDonasi1 from "../assets/svg/cardDonasi1.svg";
import cardDonasi2 from "../assets/svg/cardDonasi2.svg";
import cardDonasi3 from "../assets/svg/cardDonasi3.svg";
import goldMedal from "../assets/svg/goldMedal.svg"

export default function Homepage() {
  const [totalDonasiUang, setTotalDonasiUang] = useState(0);

  const getTotalDonasiUang = async () => {
    try {
      const response = await axios.get(
        `https://charming-cloak-boa.cyclic.app/donasi/all-donasi-uang`
      );
      setTotalDonasiUang(response.data[0]?.total_nominal_donasi_uang || 0);
    } catch (error) {
      console.error("Error fetching total donasi uang:", error.message);
    }
  };

  useEffect(() => {
    getTotalDonasiUang();
  }, []);

  const formatToRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  return (
    <>
      <div className="homepage">
        <section id="hero" className="mb-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mt-5 mb-lg-5">
                <div className="mt-5 d-flex flex-column justify-content-end content-left">
                  <h1 className="text-center text-lg-start text-warna-third">
                    MENGEMBANGKAN <br />
                    <span className="text-warna">KECINTAAN MEMBACA</span>
                    <br />
                    UNTUK ANAK INDONESIA
                  </h1>
                  <p className="text-justify text-center text-lg-start text-warna-third">
                    Membuka jendela dunia bagi anak-anak, memperkuat fondasi
                    literasi sejak dini, dan menciptakan generasi pemikir yang
                    aktif dan siap menghadapi masa depan dengan cemerlang di era
                    digital.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mt-5 mb-lg-5">
                <img
                  src={heroImage}
                  width="100%"
                  className="img-fluid"
                  alt="hero-image"
                />
              </div>
            </div>
            <div className="scroll-btn">
              <a href="#LiterasiKita">
                <div className="circle">
                  <i className="icon">&#x279C;</i>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id="LiterasiKita" className="mt-lg-5 mb-lg-5">
          <div className="container about-content">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row">
              <div className="col-lg-9 align-content-end text-end mb-3">
                <h2 className="text-center text-lg-end fw-bold">
                  Apa Itu LiterasiKita ?
                </h2>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  src={literasiKita}
                  width="100%"
                  className="img-fluid"
                  alt="LiterasiKita-image"
                />
              </div>
              <div className="col-lg-6 mt-5">
                <div className="justify-content-end content-left">
                  <p className="text-paragraph fw-medium">
                    LiterasiKita adalah sebuah program yang dibuat dengan
                    memiliki tujuan untuk membuka jendela dunia bagi anak-anak
                    Indonesia dengan mengembangkan cinta membaca sejak dini.
                  </p>
                  <p className="text-paragraph fw-medium">
                    Kami berkomitmen untuk memperkuat fondasi literasi mereka
                    melalui program-program pendidikan yang menarik dan
                    edukatif.
                  </p>
                  <p className="text-paragraph fw-medium">
                    Dengan fokus pada membaca dan pemahaman dalam media, kami
                    bertujuan menciptakan generasi yang inovatif dan siap
                    menghadapi masa depan dengan cemerlang di era digital, serta
                    memungkinkan mereka untuk berpartisipasi aktif dalam
                    masyarakat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mt-5">
          <br />
          <br />
          <h2 className="text-center mt-5 fw-bold">Program Kami</h2>
          <div className="d-flex justify-content-center mt-5">
            <div
              className=" rounded-5 card "
              style={{ backgroundColor: " #1EA7D1" }}
            >
              <div className="row">
                <div className="col-md-9 ps-sm-5 mt-md-4 col-12">
                  <div className="card-body text-center text-md-start">
                    <h4 className="card-title text-white fw-bold text-center text-md-start">
                      BukuPedia
                    </h4>
                    <p className="card-text text-white text-center text-md-start">
                      Bukupedia adalah program dalam LiterasiKita yang memiliki
                      tujuan untuk meningkatkan minat membaca pada anak-anak dan
                      remaja.
                    </p>
                    <a
                      style={{ backgroundColor: " #29AB92" }}
                      className="btn  border-0 text-white rounded-pill shadow px-3 py-2"
                      href="halaman-buku"
                      role="button"
                    >
                      Selengkapnya &rarr;
                    </a>
                  </div>
                </div>
                <div className="col-md-3 py-md-5 py-lg-3 pe-md-5 py-5 col-12 text-center text-md-end">
                  <img
                    src={programImage1}
                    className="img-fluid rounded-end"
                    alt="program-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <div
              className="card  rounded-5"
              style={{ backgroundColor: " #1EA7D1" }}
            >
              <div className="row">
                <div className="col-md-9 ps-sm-5 mt-md-4 col-12">
                  <div className="card-body text-center text-md-start">
                    <h4 className="card-title text-white fw-bold text-center text-md-start">
                      NontonPintar
                    </h4>
                    <p className="card-text text-white text-center text-md-start">
                      NontonPintar adalah program dalam LiterasiKita yang fokus
                      pada pendekatan pembelajaran melalui media visual, seperti
                      film dan video pendidikan.
                    </p>
                    <a
                      style={{ backgroundColor: " #29AB92" }}
                      className="btn btn-light  border-0 text-white rounded-pill shadow  px-3 py-2"
                      href="halaman-video"
                      role="button"
                    >
                      Selengkapnya &rarr;
                    </a>
                  </div>
                </div>
                <div className="col-md-3 py-md-5 py-lg-3 pe-md-5 py-5 col-12 text-center text-md-end">
                  <img
                    src={programImage2}
                    className="img-fluid rounded-end"
                    alt="program-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="donasi" className="mt-5 mb-5">
          <div className="container">
            <div className="row mt-lg-5 mb-lg-0">
              <h3 className="fw-bold">
                LiterasiKita <br />
                Mendukung Masa Depan Literasi Indonesia
              </h3>
              <div className="row mt-lg-0">
                <div className="col-lg-7 mt-5">
                  <div className="flex-column justify-content-end content-left">
                    <p className="text-paragraph">
                      Pada tahun 2020, penutupan sekolah karena virus Covid-19
                      selama dua tahun di Indonesia berdampak pada keterbatasan
                      pendidikan dasar anak-anak, terutama kemampuan membaca
                      mereka. Hasil survei LiterasiKita bersama Kementerian
                      Pendidikan dan mitra-mitra menunjukkan kesulitan dalam
                      literasi di kelas 2 dan 3, terutama di daerah terpencil.
                    </p>
                    <p className="text-paragraph">
                      Bergabunglah dengan LiterasiKita untuk memberdayakan
                      anak-anak Indonesia dengan kemampuan membaca yang kuat,
                      menciptakan masa depan cerah bagi generasi penerus bangsa,
                      dan investasikan dalam pendidikan serta literasi untuk
                      keberhasilan di era modern.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 text-center mt-md-5">
                  <img
                    src={donasiImage}
                    className="img-fluid w-75 text-end"
                    alt="donasi-image"
                  />
                </div>
              </div>
              <div className="d-flex flex-column flex-lg-row mt-5">
                <div className="flex-lg-grow-1 order-last order-lg-first text-lg-start text-center mt-4 mt-lg-0">
                  <a
                    style={{ backgroundColor: " #29AB92" }}
                    className="btn  border-0 text-white rounded-pill shadow px-3 py-2"
                    href="halaman-donasi"
                    role="button"
                  >
                    Ayo donasi &rarr;
                  </a>
                </div>

                <div className="col-lg-3 col-10 text-center text-md-center text-lg-start">
                  <h6 className="text-warna">
                    Donasi Tersalurkan :{" "}
                    <span className="text-danger">Rp 150.000.000</span>
                  </h6>
                </div>
                <div className="col-lg-4 col-12 text-center text-lg-start">
                  <h6 className="text-warna">
                    Donasi Terkumpul :{" "}
                    <span className="text-danger">
                      {formatToRupiah(totalDonasiUang)}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <br />
          <div className="container mb-5">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="text-center">
                  {/* <h1 className="text-center mb-4">Tujuan Donasi</h1> */}
                  <h3 className="text-center fw-bold">Penyaluran Donasi</h3>
                  <p>
                    Donasimu bukan sekadar uang, tapi kunci untuk mengembangkan
                    potensi anak-anak.
                    <br />
                    Tujuannya sederhana: membentuk dunia yang lebih cerdas dan
                    penuh warna. Ayo, mari bersama-sama menciptakan peluang.
                  </p>
                </div>
              </div>
              {/* <img
            src={tujuanDonasi}
            alt=""
            className="img-fluid w-25 mb-3 rounded-4"
          /> */}
            </div>

            {/* <div className="row mb-5 text text-center">
          <div className="col-1"></div>
          <div className="col-5">
            <h5>
              Total Donasi <br />
              <span style="color: #1EA7D1">Rp. 100.000.000</span>
            </h5>
          </div>
          <div className="col-5">
            <h5>
              Total Tersalurkan <br />
              <span style="color: #1EA7D1">Rp. 80.000.000</span>
            </h5>
          </div>
          <div className="col-1"></div>
        </div> */}

            <br />

            <div className="row mb-5">
              {/* <h2 className="text-center mb-5">Penyaluran Donasi</h2> */}
              <div className="col-lg-4 col-12 mb-4">
                <div className="customCard d-flex">
                  <img src={cardDonasi1} className="customCardImage" />
                </div>
              </div>

              <div className="col-lg-4 col-12 mb-4">
                <div className="customCard d-flex">
                  <img src={cardDonasi2} className="customCardImage" />
                </div>
              </div>

              <div className="col-lg-4 col-12 mb-4">
                <div className="customCard d-flex">
                  <img src={cardDonasi3} className="customCardImage" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-5">
            <div className="row">
              {/* Leaderboard Donasi Buku */}
              <div className="col-12 col-lg-6 mt-5">
                <div className="card shadow">
                  <div className="row mt-3 mb-3 p-3 text-center">
                    <h3 style={{ color: "#13688D" }} className="fw-bold">Leaderboard Donasi Buku</h3>
                  </div>
                  <div className="w-100 position-relative">
                    <div id="boxBuku" className="w-100 position-absolute"></div>
                    <table className="w-100">
                      <tr className="text-white">
                        <td className="numberOne">1</td>
                        <td className="nameOne">Lee Taeyong</td>
                        <td className="donations">
                          25 Buku
                          <img
                            className="img-fluid w-25 ms-4"
                            src={goldMedal}
                            alt=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="number">2</td>
                        <td className="name">Mark Lee</td>
                        <td className="donations">20 Buku</td>
                      </tr>
                      <tr>
                        <td className="number">3</td>
                        <td className="name">Xiao Dejun</td>
                        <td className="donations">18 Buku</td>
                      </tr>
                      <tr>
                        <td className="number">4</td>
                        <td className="name">Qian Kun</td>
                        <td className="donations">17 Buku</td>
                      </tr>
                      <tr>
                        <td className="number">5</td>
                        <td className="name">Johnny Suh</td>
                        <td className="donations">15 Buku</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              {/* Leaderboard Donasi Video */}
              <div className="col-12 col-lg-6 mt-5">
                <div className="card shadow">
                  <div className="row mt-3 mb-3 p-3 text-center">
                    <h3 style={{ color: "#13688D" }} className="fw-bold">Leaderboard Donasi Video</h3>
                  </div>
                  <div className="w-100 position-relative">
                    <div id="boxVideo" className="w-100 position-absolute"></div>
                    <table className="w-100">
                      <tr className="text-white">
                        <td className="numberOne">1</td>
                        <td className="nameOne">Lee Taeyong</td>
                        <td className="donations">
                          25 Video
                          <img
                            className="img-fluid w-25 ms-4"
                            src={goldMedal}
                            alt=""
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="number">2</td>
                        <td className="name">Mark Lee</td>
                        <td className="donations">20 Video</td>
                      </tr>
                      <tr>
                        <td className="number">3</td>
                        <td className="name">Xiao Dejun</td>
                        <td className="donations">18 Video</td>
                      </tr>
                      <tr>
                        <td className="number">4</td>
                        <td className="name">Qian Kun</td>
                        <td className="donations">17 Video</td>
                      </tr>
                      <tr>
                        <td className="number">5</td>
                        <td className="name">Johnny Suh</td>
                        <td className="donations">15 Video</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-5 mb-5">
            <br />
            <br />
            <h2 className="text-center fw-bold">Testimoni</h2>
            <p className="text-center mb-4">
              Dikonfirmasi oleh beberapa pengalaman dari siswa
            </p>
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="card mb-3 bg-gradasi border">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-2 col-md-1 col-2">
                        <img src={user1} alt="User Image" />
                      </div>
                      <div className="flex-shrink-1 col-lg-7 mt-1 col-md-9 col-8">
                        <div>
                          <h6 className="mb-0 fw-bold font-general">
                            Muhamad Nur Syami
                          </h6>
                          <p className="mt-0 font-general">
                            <small>Tanjungpinang, Kepri</small>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-3 mt-2 col-2">
                        <div>
                          <p className="font-rating text-end">⭐ 4.5</p>
                        </div>
                      </div>
                    </div>
                    <div className="row p-2">
                      <p className="card-text font-general text-justify-testimoni">
                        “Wah… Saya sangat menikmati menggunakan website ini,
                        melebihi ekspektasi saya, saya sangat happy untuk
                        belajar disini dan sejauh ini tidak ada masalah.
                        LiterasiKita selalu yang terbaik.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="card mb-3 bg-gradasi border">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-2 col-md-1 col-2">
                        <img src={user2} alt="User Image" />
                      </div>
                      <div className="flex-shrink-1 col-lg-7 mt-1 col-md-9 col-8">
                        <div>
                          <h6 className="mb-0 fw-bold font-general">
                            Ade Pertiwi
                          </h6>
                          <p className="mt-0 font-general">
                            <small>Denpasar, Bali</small>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-3 mt-2 col-2">
                        <div>
                          <p className="font-rating text-end">⭐ 4.8</p>
                        </div>
                      </div>
                    </div>
                    <div className="row p-2">
                      <p className="card-text font-general text-justify-testimoni">
                        &quot;Sangat terkesan dengan beragam buku yang tersedia
                        di sini. LiterasiKita membantu dalam perkembangan
                        pribadi saya. Terima kasih telah memudahkan akses ke
                        pengetahuan! &quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="card mb-3 bg-gradasi border">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-2 col-md-1 col-2">
                        <img src={user3} alt="User Image" />
                      </div>
                      <div className="flex-shrink-1 col-lg-7 mt-1 col-md-9 col-8">
                        <div>
                          <h6 className="mb-0 fw-bold font-general">
                            Dedy Lumbantobing
                          </h6>
                          <p className="mt-0 font-general">
                            <small>Medan,Sumatera Utara</small>
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-3 mt-2 col-2">
                        <div>
                          <p className="font-rating text-end">⭐ 5.0</p>
                        </div>
                      </div>
                    </div>
                    <div className="row p-2">
                      <p className="card-text font-general text-justify-testimoni">
                        “LiterasiKita telah menjadi sahabat setia dalam
                        perjalanan literasi saya sehingga dapat membantu orang
                        banyak. Saya tidak pernah merasa lebih termotivasi untuk
                        membaca dan belajar.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
