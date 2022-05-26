/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
       

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal" id="menu">
                Maternelle
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        <a href="#langage">Langage oral et écrit</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        <a href="#activite_physique">Activité physique</a>
                        
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        
                        <a href="#activite_artistique">Activité artistique</a>
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        
                        <a href="#mathematiques">Acquérir les premiers outils mathématiques</a>
                        </h4>
                      </div>
                    </div>
                  </li>

                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        <a href="#explorer_le_monde">Explorer le monde</a>
                       
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
            </p>
             
             
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/ecole-maternelle.jpg"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="/img/ecole-maternelle.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/ecole-maternelle.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/ecole-maternelle.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/ecole-maternelle.jpg"
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src="/img/ecole-maternelle.jpg"
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          
        </div>

       


      </section>

      <div className="container mx-auto px-4 pb-32 pt-48"  id="langage">
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
               <a href="#menu">   <i className="fas fa-file-alt text-xl"></i></a>
                </div>
                <h3 className="text-3xl font-semibold">
                Langage oral et écrit
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                L'école maternelle permet à l'enfant de mobiliser les 2 composantes du langage:
L'oral pour entrer en communication, comprendre, apprendre, échanger et s'éveiller à la diversité linguistique L'écrit pour en découvrir la fonction, s'y exercer et découvrir l'alphabet.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Oral
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                         Ecrit
                        </h4>
                      </div>
                    </div>
                  </li>
                  <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Buttons
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Inputs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Labels
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pagination
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Progressbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Typography
                </span>
              </div>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/ecole-maternelle.jpg"
              />
            </div>
          </div>
        </div>


        <div className="container mx-auto px-4 pb-32 pt-48"  id="activite_physique">
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <a href="#menu">   <i className="fas fa-file-alt text-xl"></i></a>
                </div>
                <h3 className="text-3xl font-semibold">
                Activité physique
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                L'activité physique est pratiquée pour le développement moteur, sensoriel, affectif, intellectuel et relationnel de votre enfant.
Les activités proposées permettent de renforcer la motricité et de développer les interactions avec les autres élèves.
Elles permettent aussi de mettre en pratique les connaissances acquises (par exemple, réaliser une action que l'on peut mesurer : courir, lancer).
                </p>
               
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/ecole-maternelle.jpg"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48"  id="activite_artistique">
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <a href="#menu">   <i className="fas fa-file-alt text-xl"></i></a>
                </div>
                <h3 className="text-3xl font-semibold">
                Activité artistique
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                L'objectif est d'éveiller la curiosité et de développer chez votre enfant le goût pour les activités artistiques et notamment les suivantes :
Arts visuels (peinture, dessin, etc.) Domaine du son (chanson, musique, etc.) Domaine du spectacle vivant (danse, théâtre, etc.)
                </p>
                
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/ecole-maternelle.jpg"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48"  id="mathematiques">
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <a href="#menu">   <i className="fas fa-file-alt text-xl"></i></a>
                </div>
                <h3 className="text-3xl font-semibold">
                Acquérir les premiers outils mathématiques
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                L'objectif est d'accompagner votre enfant dans la découverte des nombres, des formes et des grandeurs (longueur, contenance, masse, etc.).
                </p>
                
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/ecole-maternelle.jpg"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48" id="explorer_le_monde">
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <a href="#menu">   <i className="fas fa-file-alt text-xl"></i></a>
                </div>
                <h3 className="text-3xl font-semibold">
                Explorer le monde
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Il s'agit d'apprendre à votre enfant à se repérer dans le temps et dans l'espace, à découvrir le monde du vivant (animal et végétal) et à utiliser des objets, y compris des outils numériques.
                </p>
                
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/ecole-maternelle.jpg"
              />
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}
