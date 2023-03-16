import React from 'react'
import './portfolioDetail.css'
import Navbar from '../navbar/Navbar'

const PortfolioDetail = () => {
  return (
    <>
    <Navbar/>
      <section id="portfolio">
        <div class="jumbotronPortfolio">
          <div class="row">
            <div class="col">
              <div class="row ">
                <div class="col mt-5 p-3 ">
                  <h1>Welcome To My Galeries</h1>
                  <h3><b>Enjoy It!!!</b></h3>
                </div>
                <div class="col">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/jAYviJQYcAo" title="YouTube video player" frameBorder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                
                </div>
              </div>
            </div>
          </div>

          <div class="container my-5 text-center">
            <div class="row row-cols-1 row-cols-md-3 g-4 flex justify-content-center">
              <div class="col">
                <div class="card h-100 shadow-lg">
                  <img src="assets/img/portfolio/portfolio-2.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Simple CRUD Inventory </h5>
                    <p>pendataan dan penyimpanan barang via online dengan database</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow-lg">
                  <img src="assets/img/portfolio/portfolio-4.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Simple CRUD Data Mahasiswa </h5>
                    <p class="card-text">pendataan untuk data mahasiswa</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow-lg">
                  <img src="assets/img/portfolio/home.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">BeraniMelawan.CO</h5>
                    <p class="card-text">website peduli tentang mental health untuk para siswa dan juga guru serta peduli terhadap bullying</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow-lg">
                  <img src="assets/img/portfolio/todo.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">To-do List</h5>
                    <p class="card-text">web to-do list untuk menyimpan daftar tugas-tugas atau kegiatan yang harus kamu lakukan pada suatu rentang waktu</p>
                  </div>
                </div>
              </div>
              {/* <div class="col">
                <div class="card h-100 shadow-lg">
                  <img src="assets/img/portfolio/portfolio-2.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Simple CRUD Data Mahasiswa </h5>
                    <p class="card-text">this project based on collage assignment about web programming</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100 shadow-lg">
                  <img src="assets/img/portfolio/portfolio-2.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Simple CRUD Inventory </h5>
                    <p class="card-text">this project based on collage assignment about web programming</p>
                  </div>
                </div>
              </div> */}
              
            </div>
          </div>
          {/* <div class="container my-5">
            <div class="row row-cols-1 row-cols-md-3 g-4 flex">
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a short card.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4 flex">
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a short card.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="..." class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default PortfolioDetail