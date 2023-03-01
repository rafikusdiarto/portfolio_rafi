import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <>
    <section id="portfolio" class="portfolio section-bg my-5 p-5">
      <div class="container">
        <div class="section-title">
          <h2>Project</h2>
          <p>i tried to make some projects obtained from individual learning and the association's work program from MBKM, and some of them at below</p>
        </div>

        <div class="row">
          <div class="col-12 d-flex justify-content-center ">
            <ul id="portfolio-flters">
              <li data-filter=".filter-web" class="p-1">Web</li>
            </ul>
          </div>
        </div>

        <div id="carouselExampleInterval" class="carousel slide mb-5" data-bs-ride="carousel">
          <div class="carousel-inner row w-100 text-center ">
            <div class="carousel-item active col "  data-bs-interval="">
                <div class="row row-cols-1 row-cols-md-3 g-4 bg-transparent list1">
                  <div class="col">
                    <div class="card h-100">
                      <img src="assets/img/portfolio/home.png" class="card-img-top" alt="..."/>
                      <div class="card-body  w-100" >
                        <h4>BeraniMelawan.CO</h4>
                        <p>website peduli tentang mental health untuk para siswa dan juga guru serta peduli terhadap bullying</p>
                      </div>
                    </div>
                  </div>
                  <div class="col h-100">
                    <div class="card ">
                      <img src="assets/img/portfolio/portfolio-2.png" class="card-img-top" alt="..."/>
                      <div class="card-body  w-100" >
                        <h4>Inventory</h4>
                        <p>pendataan dan penyimpanan barang via online dengan database</p>
                      </div>
                    </div>
                  </div>
                  <div class="col h-100">
                    <div class="card ">
                      <img src="assets/img/portfolio/konten.png" class="card-img-top" alt="..."/>
                      <div class="card-body  w-100" >
                        <h4>BeraniMelawan.CO</h4>
                        <p>website peduli tentang mental health untuk para siswa dan juga guru serta peduli terhadap bullying</p>
                      </div>
                    </div>
                  </div>
              </div>
              
            </div>

            {/* carousel 2 */}
            <div class="carousel-item"  data-bs-interval="">
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card h-100">
                    <img src="assets/img/portfolio/todo.png" class="card-img-top" alt="..."/>
                    <div class="card-body  w-100" >
                      <h4>To-do List</h4>
                      <p>web to-do list untuk menyimpan daftar tugas-tugas atau kegiatan yang harus kamu lakukan pada suatu rentang waktu</p>
                    </div>
                  </div>
                </div>
                <div class="col h-100">
                  <div class="card ">
                    <img src="assets/img/portfolio/korban.png" class="card-img-top" alt="..."/>
                    <div class="card-body  w-100" >
                      <h4>BeraniMelawan.CO</h4>
                      <p>website peduli tentang mental health untuk para siswa dan juga guru serta peduli terhadap bullying</p>
                    </div>
                  </div>
                </div>
                <div class="col h-100">
                  <div class="card ">
                    <img src="assets/img/portfolio/portfolio-4.png" class="card-img-top" alt="..."/>
                    <div class="card-body  w-100" >
                      <h4>Simple CRUD Data Mahasiswa</h4>
                      <p>pendataan untuk data mahasiswa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* carousek 3 */}
            <div class="carousel-item"  data-bs-interval="">
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card h-100">
                    <img src="assets/img/portfolio/cari partner.png" class="card-img-top" alt="..."/>
                    <div class="card-body  w-100" >
                    <h4>BeraniMelawan.CO</h4>
                      <p>website peduli tentang mental health untuk para siswa dan juga guru serta peduli terhadap bullying</p>
                    </div>
                  </div>
                </div>
                <div class="col h-100">
                  <div class="card ">
                    <img src="assets/img/portfolio/education.png" class="card-img-top" alt="..."/>
                    <div class="card-body  w-100" >
                      <h4>BeraniMelawan.CO</h4>
                      <p>website peduli tentang mental health untuk para siswa dan juga guru serta peduli terhadap bullying</p>
                    </div>
                  </div>
                </div>
                <div class="col h-100">
                  <div class="card ">
                    <img src="assets/img/portfolio/quiz.png" class="card-img-top" alt="..."/>
                    <div class="card-body  w-100" >
                    <h4>BeraniMelawan.CO</h4>
                      <p>website peduli tentang mental health untuk para siswa dan juga guru serta peduli terhadap bullying</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-secondary" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-secondary" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </section>  
    </>
  )
}

export default Portfolio