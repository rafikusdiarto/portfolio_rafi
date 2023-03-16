import React from 'react'
import './resume.css'

const Resume = () => {
  return (
    <>
        <section id="resume" class="resume section-bg">
        <div class="container" data-aos="fade-up">

            <div class="section-title">
            <h2>Resume</h2>
            <h2>Summary & Experience</h2>
            </div>

            <div class="row">
            <div class="col-lg-6">
                <h3 class="resume-title">Summary</h3>
                <div class="resume-item">
                <h4>Muhammad Rafi Kusdiarto</h4>
                <p><em>Frontend web developer with more than 2 months of experience with HTML,CSS, JavascriptFrontend libraries like Bootstrap, and ReactJS.</em></p>
                <p>Sidoarjo, Jawa Timur, ID</p>
                <p>0878-0968-0106</p>
                <p>rafikusdiarto1707@gmail.com</p>
                </div>
                <div class="resume-item">
                <h4>Bachelor in Informatics</h4>
                <h5>2020 - 2024 (Expected)</h5>
                <p><em>University of Jember, Jember, ID</em></p>
                <p>Course: Algorithms; Web Development; Object-Oriented Programming; Software Analysis and Design</p>
                </div>
            </div>
            <div class="col-lg-6">
                <h3 class="resume-title">Experience</h3>
                <div class="resume-item">
                <h4>HMIF UNEJ - Divisi Penelitian dan Pengembangan</h4>
                <h5>2021 - Present</h5>
                <p><em>Jember, East Java </em></p>
                <p>
                <ul>
                    <li>Conduct research and development of Student Resources in the academic field that are Innovative and Reasoning.</li>
                    <li>Analyze organizational problems and evaluate the work program of the Informatics Student Association (HMIF)</li>
                </ul>
                </p>
                </div>
                <div class="resume-item">
                <h4>PT IMPACTBYTE TEKNOLOGI EDUKASI - SkilVul</h4>
                <h5>2022 Agustus - 2022 Desember</h5>
                <p><em>Jakarta, WFH </em></p>
                <p>
                <ul>
                    <li>Back-end Web Development</li>
                </ul>
                </p>
                </div>
                <div class="resume-item">
                <h4>PT BIGENMI GEMILANG INDONESIA</h4>
                <h5>2023 Februari - Present</h5>
                <p><em>Jember, East Java </em></p>
                <p>
                <ul>
                    <li>It Support</li>
                </ul>
                </p>
                </div>
            </div>
            </div>

        </div>
        </section>
    </>
  )
}

export default Resume