/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";


export default function Index() {
  return (
    <>
      <IndexNavbar fixed />


      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100 ">
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

                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          <a href="#autre">Autre</a>

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
                  src="/img/la-rel-easter-KuCGlBXjH_o-unsplash.jpg"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="/img/lucas-alexander-sJuDgtkUyYs-unsplash.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/ecole-maternelle.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/gautam-arora-OVDtgUhUPBY-unsplash.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/bbc-creative-1w20Cysy1cg-unsplash.jpg"
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src="/img/john-doyle-RSgwLqIWH8w-unsplash.jpg"
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>


        </div>




      </section>

      <div className="container mx-auto px-4 pb-32 pt-48" id="langage">
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
                        <b>Langue orale :</b> communiquer, raconter, décrire. Communiquer en se faisant
                        comprendre. Reformuler le propos d’autrui. S’exprimer dans un oral syntaxiquement
                        correct et lexicalement précis en utilisant notamment, de manière appropriée le lexique
                        appris en classe.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        <b>Compréhension:</b> d’un texte lu par l’adulte. Être autonome dans la compréhension des
                        consignes.
                      </h4>
                    </div>
                  </div>
                </li>

                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        <b>Langue écrite:</b> comprendre ses usages. Comprendre les relations entre l’oral et l’écrit.
                        Encoder un mot. Connaître la correspondance entre les trois graphies. Produire des
                        écrits autonomes.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        <b>Phonologie et principe alphabétique:</b> discriminer des sons. Distinguer et manipuler
                        des syllabes Repérer et produire des rimes et assonances.
                        Connaître le nom des lettres, savoir que leur nom peut être différent du son qu’elles
                        transcrivent. Commencer à faire du lien avec le son que codent les lettres. Reconnaître
                        son prénom dans les trois graphies et identifier les lettres qui le composent.
                      </h4>
                    </div>
                  </div>
                </li>

                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        <b>Geste scriptural:</b> copier un mot en cursive ou une courte phrase dont le sens est connu.
                        Diversité linguistique : distinguer, comparer une langue autre au regard de celle
                        pratiquée, répéter certains éléments.
                      </h4>
                    </div>
                  </div>
                </li>

                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        <b>Mémorisation:</b> mémoriser. Restituer avec aisance
                      </h4>
                    </div>
                  </div>
                </li>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    oral
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    écrit
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    langage
                  </span>

                </div>
              </ul>

            </div>

            <a className="text-l font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 uppercase last:mr-0 mr-2 mt-2" href="/maternelle/langage">Details</a>
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


      <div className="container mx-auto px-4 pb-32 pt-48" id="activite_physique">
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
                        S’engager avec aisance et créativité dans les actions ou déplacements.

                      </h4>
                    </div>
                  </div>
                </li>


                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Coopérer. Interagir. Respecter les rôles de chacun
                      </h4>
                    </div>
                  </div>
                </li>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    activité
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    physique
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
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers
          l’activité physique

          Agir dans l’espace, dans la durée et sur les
          objets

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Agir dans l’espace, dans la
                durée et sur les objets.</td>
              <td> Courir, sauter, lancer de différentes façons, dans des espaces et avec des matériels
                variés, dans un but précis.
                Ajuster et enchaîner ses actions et ses déplacements en fonction d'obstacles à
                franchir ou de la trajectoire d'objets sur lesquels agir.</td>
            </tr>

          </table>



          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • s’engager dans l’activité dans la durée
          et explorer différents possibles, à partir
          d’objets manipulables ;
          • adapter son geste pour donner des
          trajectoires différentes à des projectiles
          variés et répondre aux consignes
          données ;
          • ajuster ses actions et ses déplacements
          en fonction de la trajectoire de l’objet qu’un
          autre lui envoie ;
          • trouver des manières de faire efficaces
          pour mieux atteindre les buts proposés
          et chercher à progresser en fonction des
          effets ou des scores obtenus .
          Jeux et situations-problèmes
          utilisant :
          • des balles, ballons, palets,
          anneaux, cerceaux, sacs de
          graines, balles-comètes, ballons
          de baudruche, foulards, voiles,
          bâtons, raquettes, crosses…
          Et permettant d’apprendre à :
          • lancer, faire rouler, conduire au
          pied ou à la main, faire glisser,
          pousser ou guider avec un objet,
          le réceptionner, le rattraper, le
          frapper, le renvoyer à la main ou
          avec un objet…
          Découverte par l’action des
          caractéristiques d’objets
          manipulables et de leurs
          modalités d’utilisation.
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers
          l’activité physique
          20
          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les
          apprentissages
          suivants…
          • investir un espace aménagé et explorer
          différents cheminements ou différentes
          actions ;
          • proposer différentes solutions ou
          reproduire celles d’un autre, sur un
          parcours orienté, pour s’adapter aux
          obstacles rencontrés ;
          • enchainer, dans la continuité, une
          succession d’actions différentes en
          respectant les contraintes de réalisation
          ou les critères de réussite proposés ;
          • anticiper et mettre en œuvre un projet
          d’action en fonction des effets ou des
          résultats obtenus afin d’atteindre le but
          recherché.
          Jeux et situations-problèmes
          organisés en :
          • parcours ou ateliers, constitués
          d’obstacles ou repères à
          contourner, à franchir, à traverser,
          comportant lattes, cerceaux,
          plots, haies, tracés au sol, cordes,
          élastiques…
          Et permettant d’apprendre à :
          • courir vite ou longtemps, sautiller,
          enjamber, franchir, sauter à un
          ou deux pieds, se réceptionner,
          rebondir…
          Mobilisation de son énergie
          pour parcourir un espace
          aménagé et appréhender ses
          possibilités d’action.
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers
          l’activité physique
          21
          Adapter ses équilibres et ses déplacements à
          des environnements et des contraintes variées

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Adapter ses équilibres et
                ses déplacements à des
                environnements et des
                contraintes variées.</td>
              <td>Ajuster et enchaîner ses actions et ses déplacements en fonction d’obstacles à
                franchir.
                Se déplacer avec aisance dans des environnements variés, naturels ou aménagés.</td>
            </tr>

          </table>





          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • s’engager dans l’activité et élaborer des
          itinéraires ou des actions en réponse à un
          aménagement donné ;
          • oser proposer, reproduire ou inventer
          des actions nouvelles, remettant en jeu les
          repères habituels ;
          • se risquer à des déséquilibres afin de
          réaliser des « acrobaties » et montrer
          à d’autres ses trouvailles, ses propres
          « exploits » ;
          • anticiper, réaliser, montrer à d’autres
          un projet de parcours, constitué de
          l’enchainement d’une courte séquence
          d’actions, se déroulant dans un espace
          orienté.
          Jeux et situations-problèmes
          organisés en :
          • parcours ou ateliers, intérieurs
          ou extérieurs, aménagés avec des
          bancs, tables, chaises, plinthes,
          caissettes, poutres, tapis, échelles,
          aménagements de cours…
          Et permettant d’apprendre à :
          • cheminer en équilibre, monter,
          descendre, se balancer, glisser,
          passer sous, tourner, rouler, se
          renverser, sauter, se réceptionner,
          sesuspendre, grimper,escalader…
          Prise de risques mesurés dans
          différents types d’espaces
          aménagés sécurisés.
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers
          l’activité physique
          22
          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • utiliser des engins inhabituels, en
          cherchant à réguler les déséquilibres que
          ceux-ci occasionnent ;
          • trouver des moyens efficaces d’actions
          et de propulsion pour se déplacer dans un
          espace aménagé ;
          • piloter des engins, en prenant des
          repères sur le milieu, afin de réaliser des
          itinéraires précis, des trajectoires prévues ;
          • prélever des indices dans un espace
          plus large ou inconnu, prendre en compte
          des moyens de guidage ou d’orientation
          pour anticiper et réaliser un projet d’action.
          Jeux et situations-problèmes utilisant
          :
          • des tricycles, draisiennes, vélos,
          trottinettes, patins, skis, échasses,
          en espaces extérieurs ou intérieurs
          vastes…
          Et permettant d’apprendre à :
          • glisser, rouler, se propulser,
          pédaler, patiner, se déplacer en
          équilibre…
          Utilisation de différents types
          d’engins roulant ou glissant,
          présentant un caractère
          d’instabilité.
          • entrer dans l’eau et participer aux jeux
          proposés ;
          • s’immerger totalement et ouvrir les yeux
          dans l’eau ;
          • abandonner les appuis plantaires pour
          se déplacer par appuis manuels ou se
          laisser flotter ;
          • se déplacer, tête dans l’eau, en s’aidant
          des bras et des jambes et explorer le
          volume aquatique.
          Jeux et situations-problèmes utilisant
          :
          • des objets flottants (frites,
          planches, ballons…), des objets
          immergés (anneaux, palets,
          cerceaux…), des objets permettant
          les reprises d’appuis manuels
          (perche, ligne d’eau, corde…)
          Et permettant d’apprendre à :
          • s’immerger, se laisser porter par
          l’eau, s’équilibrer, se propulser,
          retenir sa respiration, souffler dans
          l’eau…
          Exploration du milieu aquatique
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers
          l’activité physique

        </div>
      </div>

      <div className="container mx-auto px-4 pb-32 pt-48" id="activite_artistique">
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
                        S’engager dans les activités. Réaliser des productions personnelles : dessin,
                        compositions graphiques, compositions plastiques, voix, chant, pratiques rythmiques et
                        corporelles.

                      </h4>
                    </div>
                  </div>
                </li>



                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    art
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    musique
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


          Communiquer avec les autres au travers
          d’actions à visée expressive ou artistique


          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Communiquer avec les autres
                au travers d’actions à visée
                expressive ou artistique.</td>
              <td>Construire et conserver une séquence d’actions et de déplacements, en relation
                avec d’autres partenaires, avec ou sans support musical.
                Coordonner ses gestes et ses déplacements avec ceux des autres, lors de rondes
                et jeux chantés.</td>
            </tr>

          </table>




          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • explorer différents possibles à partir
          d’inducteurs variés, matériels ou
          imaginaires ;
          • transformer son mouvement par
          l’exploration de contrastes de vitesses,
          d’énergies, de niveaux, de dissociations ;
          • inventer, apprendre et reproduire une
          courte phrase dansée, constituée d’une
          séquence d’actions et de déplacements
          qu’il a pu globalement mémoriser ;
          • inscrire ses actions et ses déplacements
          en relation avec les autres, dans un espace
          scénique commun orienté, dans le cadre
          d’un projet présenté à des spectateurs.
          Jeux et situations-problèmes
          utilisant :
          • voiles, plumes, balles, tissus,
          rubans, ballons de baudruche,
          espaces imaginaires ou
          symboliques, avec ou sans support
          musical …
          Et permettant d’apprendre à :
          • courir, ramper, glisser, sauter,
          tourner, faire danser un objet,
          évoluer au sol, s’arrêter, créer une
          forme ou un contact, s’élancer, agir
          sur le corps d’un autre, le porter …
          Mise en jeu des dimensions
          créatives et expressives du
          mouvement.
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers
          l’activité physique
          2 24
          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • accorder ses gestes et ses déplacements
          avec ceux des autres pour évoluer
          collectivement selon une disposition
          spatiale simple ;
          • synchroniser sa voix, ses frappés, ses
          gestes ou ses déplacements avec la
          pulsation, avec le tempo ou en relation
          avec des évènements sonores facilement
          perceptibles ;
          • anticiper les changements d’orientation
          ou de mode de groupement en fonction
          du support musical, tout en respectant la
          disposition spatiale ;
          • repérer la chronologie des actions ou des
          rôles dans différentes danses collectives,
          montrées ou transmises à d’autres.
          Jeux et situations-problèmes
          organisés en :
          • rondes, files, chaînes, tunnels,
          évolutions à deux, mains tenues
          ou libres, sur des supports chantés
          ou des musiques enregistrées…
          Et permettant d’apprendre à :
          • sauter, sautiller, tourner, avancer
          ou reculer, frapper, taper au
          sol, rythmer avec ses mains ou
          avec ses pieds, évoluer avec un
          partenaire…
          Participation à une forme de
          danse collective relevant du
          patrimoine des rondes et jeux
          chantés.
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers
          l’activité physique
          25
          Collaborer, coopérer, s’opposer

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Collaborer, coopérer,
                s'opposer.</td>
              <td>Courir, sauter, lancer de différentes façons, dans des espaces et avec des
                matériels variés, dans un but précis.
                Coopérer, exercer des rôles différents complémentaires, s’opposer, élaborer des
                stratégies pour viser un but ou un effet commun.</td>
            </tr>

          </table>




          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • s’inscrire dans des règles collectives afin
          d’atteindre, par des actions en parallèle,
          un but ou un effet commun ;
          • reconnaître son appartenance à une
          équipe donnée et à y exercer différents
          rôles complémentaires ;
          • se repérer dans un espace orienté pour
          s’opposer au projet d’un adversaire ou
          d’une équipe tenant simultanément un rôle
          antagoniste ;
          • élaborer des stratégies individuelles ou
          collectives pour rechercher les manières de
          faire les plus efficaces.
          Jeux et situations-problèmes
          organisés en :
          • situations collectives de transport
          de petits objets, de poursuite et
          d’évitement, d’atteinte de cibles,
          dans ces espaces extérieurs
          ou intérieurs de dimension
          suffisante…
          Et permettant d’apprendre à :
          • courir, transporter, échanger,
          lancer, poursuivre, attraper, éviter,
          collaborer, coopérer, gêner,
          délivrer …
          Recherche collective d’un but
          commun, parfois opposé à celui
          d’un adversaire.
          • s’inscrire dans des formes de jeu
          collectives visant à déplacer, à faire
          glisser, à porter le corps d’un autre ou un
          objet lourd ou volumineux ;
          • entrer en contact avec le corps d’un
          partenaire pour explorer différentes formes
          d’actions simples et mesurer les effets
          produits ;
          • s’opposer à un adversaire, par la
          médiation d’un objet que celui-ci veut
          s’approprier ou défendre ;
          • organiser ses actions et ses saisies
          sur le corps de l’adversaire en fonction
          d’une intention précise ou d’une stratégie
          déterminée.
          Jeux et situations-problèmes
          organisés en :
          • situations collectives ou duelles de
          corps à corps, sur tapis ou sur sol
          adapté, avec ou sans médiation
          d’objets (foulards, ballons, épingles
          à linge…)…
          Et permettant d’apprendre à :
          • saisir, transporter, soulever,
          déplacer, tirer, pousser,
          immobiliser, amener au sol, se
          déplacer en quadrupédie,
          retourner, se libérer, s’échapper…
          Action sur le corps de partenaires
          ou d’adversaires pour atteindre
          un but donné.
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers les
          activités artistiques
          26
          Les productions plastiques et visuelles

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Développer du goût pour les
                pratiques artistiques.</td>
              <td>
                Vivre et exprimer des émotions,
                formuler des choix.
                Choisir différents outils, médiums, supports en fonction d’un projet ou d’une
                consigne et les utiliser en adaptant son geste.
                Pratiquer le dessin pour représenter ou illustrer, en étant fidèle au réel ou à un
                modèle, ou en inventant.
                Réaliser une composition personnelle en reproduisant des graphismes. Créer des
                graphismes nouveaux.
                Réaliser des compositions plastiques, seul ou en petit groupe, en choisissant et
                combinant des matériaux, en réinvestissant des techniques et des procédés.
                Décrire une image et exprimer son ressenti ou sa compréhension en utilisant un
                vocabulaire adapté.
                Proposer des solutions dans des situations de projet, de création, de résolution de
                problèmes.</td>
            </tr>

          </table>





          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • s’engager spontanément dans
          l’exploration libre, puis guidée, de différents
          outils et sur des supports variés ;
          • commencer à représenter ou à illustrer
          ce qu’il voit, ce dont il se souvient ou ce
          qu’il imagine ;
          • faire des choix d’outils et de procédés en
          fonction d’une intention donnée ;
          • s’exprimer sur sa production, sur celle
          d’un autre ou à propos d’une œuvre
          d’artiste ;
          • commencer à mettre en mots ce qu’il a
          voulu évoquer ou représenter ;
          • commenter les effets produits, et les
          situer par rapport à ses intentions initiales.
          Expérimentations et situations
          problèmes portant sur :
          • les dessins libres à l’aide de
          différents outils, du crayon à la
          palette graphique ;
          • la comparaison des effets
          produits, l’identification des
          réponses apportées par des
          artistes, des illustrateurs d’albums,
          à des problèmes qu’ils se sont
          posés ;
          • les échanges sur les différentes
          représentations d’un même objet ;
          • les reprises ou prolongements
          des ébauches ou des premiers
          dessins.
          Dessiner.
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers les
          activités artistiques
          2 27
          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • contrôler et varier l’amplitude du geste
          pour s’adapter au format du support,
          produire des tracés de plus en plus
          diversifiés et plus précis ;
          • reproduire, assembler, organiser,
          enchaîner des motifs graphiques puis en
          créer de nouveaux ;
          • s’exprimer sur ses propres tracés et
          nommer les éléments graphiques produits ;
          • repérer des motifs graphiques
          sur différents supports ou dans son
          environnement pour constituer un
          répertoire ;
          • commencer à mettre en mots ses
          procédures lors d’échanges entre pairs ;
          • commencer à décrire une organisation
          produite ou observée.
          • présentation de graphismes
          décoratifs issus de références
          culturelles variées ;
          • constitution de répertoires
          d’images, de motifs divers ;
          • reproduction, assemblage,
          organisation, enchaînement de
          motifs graphiques ;
          • transformation et invention de
          compositions.
          S’exercer au graphisme décoratif.
          • explorer et s’approprier différents
          médiums, outils et matériaux ;
          • faire des choix de médiums (craie, encre,
          peinture…), de matériaux, d’outils et de
          supports en fonction de son intention ;
          • s’exprimer sur sa production et / ou ses
          découvertes ;
          • mémoriser et réinvestir un lexique
          approprié pour décrire les actions et / ou les
          effets produits ;
          • mettre en mots la relation entre ce qu’il a
          fait et ce qu’il souhaitait faire.
          Expérimentations et situations
          problèmes portant sur :
          • la couleur : mélanger, nuancer,
          superposer, juxtaposer, utiliser des
          images et de moyens différents ;
          • les volumes à partir de matériaux
          très différents : transformer la
          représentation habituelle du
          matériau utilisé, rechercher
          l’équilibre et la verticalité.
          Réaliser des compositions
          plastiques, planes et en volume.
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers les
          activités artistiques
          3 28
          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • observer des images fixes et animées,
          dire ce qu’il voit, ce qu’il imagine ;
          • comparer pour commencer à
          classer en repérant les différences et les
          ressemblances entre des images fixes et
          animées selon des critères simples ;
          • commencer à établir et verbaliser des
          liens entre des images sélectionnées ;
          • entrer dans une lecture plus fine des
          images : lister les éléments narratifs et
          plastiques ;
          • classer des images en déterminant des
          critères simples ;
          • utiliser un lexique adapté pour décrire ce
          qu’il voit, dire son ressenti ou traduire sa
          compréhension ;
          • transformer des images en respectant
          une consigne.
          Expérimentations et situations
          problèmes portant sur :
          • le tri, le classement, la
          comparaison et la transformation
          d’images différentes, fixes ou
          animées ;
          • l’identification de leurs fonctions ;
          • l’observation d’œuvres,
          reproduites ou originales.
          Observer, comprendre et
          transformer des images.
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers les
          activités artistiques
          29
          Univers sonores


          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Développer du goût pour les
                pratiques artistiques.</td>
              <td>
                Découvrir différentes formes
                d’expression artistique.
                Vivre et exprimer des émotions,
                formuler des choix.
                Avoir mémorisé un répertoire varié de comptines et de chansons et les interpréter
                de manière expressive.
                Jouer avec sa voix pour explorer des variantes de timbre, d’intensité, de hauteur,
                de nuance.
                Repérer et reproduire, corporellement ou avec des instruments, des formules
                rythmiques simples.
                Proposer des solutions dans des situations de projet, de création, de résolution de
                problèmes, avec son corps, sa voix ou des objets sonores.
                Parler d’un extrait musical et exprimer son ressenti ou sa compréhension en
                utilisant un vocabulaire adapté.</td>
            </tr>

          </table>





          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • oser jouer avec sa voix seul ou en
          groupe pour reproduire un motif musical,
          une phrase (chanson, comptine) ;
          • mémoriser des comptines et des
          chansons pour chanter en chœur avec ses
          pairs ;
          • s’exprimer sur sa production et sur celles
          de ses pairs ;
          • enrichir son bagage lexical spécifique
          au travers des chants et le réinvestir dans
          d’autres contextes.
          Expérimentations et situations
          problèmes portant sur :
          • la découverte de la richesse de
          la voix, l’incitation à en dépasser les
          usages courants, l’engagement
          dans une exploration ludique, le
          plaisir de chanter en chœur avec
          des pairs ;
          • l’acquisition d’un répertoire
          de comptines et de chansons
          composés de phrases musicales
          courtes, à structure simple,
          adaptées aux possibilités vocales
          des enfants, puis de plus en plus
          complexe.
          Jouer avec sa voix et acquérir
          un répertoire de comptines et de
          chansons.
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers les
          activités artistiques
          2 30
          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • mobiliser son attention lors de moments
          d’écoute ;
          • faire des propositions musicales
          enrichies par les écoutes ;
          • développer un vocabulaire pour nommer
          les paramètres du son ;
          • réinvestir le vocabulaire acquis lors des
          diverses activités de production.
          Expérimentations et situations
          problèmes portant sur :
          • la découverte d’environnements
          sonores et d’extraits d’œuvres
          musicales appartenant à différents
          styles, cultures et époques ;
          • l’orientation de l’attention des
          enfants, à l’aide de consignes, vers
          une écoute de plus en plus fine.
          Affiner son écoute.
          • explorer différents instruments de
          musique, des objets sonores, les trier, les
          catégoriser (type de timbres et durée du
          son…) ;
          • explorer son corps au travers de
          percussions corporelles ;
          • faire le lien entre le geste et le son,
          le maîtriser en vue de produire un son
          attendu ;
          • s’exprimer sur sa production et sur celles
          de ses pairs ;
          • développer un vocabulaire musical des
          actions liées au geste producteur ou
          caractérisant les principes sonores.
          Expérimentations et situations
          problèmes portant sur :
          • La découverte de sources
          sonores variées et liées à
          l’évolution des possibilités
          gestuelles des enfants mettant
          en jeu des instruments et des
          sonorités du corps ;
          • L’exploration mobilisant des
          percussions corporelles, des
          objets divers parfois empruntés à la
          vie quotidienne, des instruments de
          percussion…
          • La maîtrise progressive de leurs
          gestes afin d’en contrôler les effets.
          Explorer des instruments, utiliser
          les sonorités du corps.
          Ressources maternelle
          Évaluation : Agir, s’exprimer, comprendre à travers les
          activités artistiques
          31
          Le spectacle vivant


          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>
                Développer du goût pour les
                pratiques artistiques.</td>
              <td>Découvrir différentes formes
                d’expression artistique.
                Vivre et exprimer des émotions,
                formuler des choix.
                Proposer des solutions dans des situations de projet, de création, de résolution de
                problèmes, avec son corps, sa voix ou des objets sonores.</td>
            </tr>

          </table>




          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • oser mettre en jeu son corps avec
          et face aux autres : en imitant ce que
          fait l’enseignant, un artiste ou un pair,
          en inventant ou en assemblant des
          propositions après avoir fait un choix ;
          • occuper un espace et y évoluer ;
          • transformer ses façons usuelles d’agir et
          de se déplacer ;
          • s’inscrire dans l’espace et le temps d’une
          production collective ;
          • devenir un spectateur actif et attentif ;
          • témoigner de sa sensibilité à la portée
          poétique et esthétique du mouvement ;
          • exprimer intentionnellement des
          émotions par le visage ou par le corps.
          Expérimentations et situations
          problèmes portant sur :
          • la mise en jeu du corps ;
          • l’appropriation d’un espace
          scénique ;
          • la sollicitation de son imaginaire
          pour transformer ses façons
          usuelles d’agir et de se déplacer ;
          • la mise en œuvre d’activités
          pour imiter, inventer, assembler
          des propositions personnelles ou
          partagées ;
          • la mise en jeu et en scène d’une
          expression poétique ;
          • la sensibilisation aux modes
          d’expression des autres et à leurs
          manières de traduire différemment
          leur ressenti.
          Pratiquer quelques activités des
          arts du spectacle.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          32
          Construire le nombre pour exprimer des
          quantités

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>
                Construire le nombre pour
                exprimer des quantités.</td>
              <td>Évaluer et comparer des collections d’objets avec des procédures non numériques.
                Mobiliser des symboles analogiques, verbaux pour communiquer des informations
                orales sur une quantité.
                Avoir compris que le cardinal (ici la quantité) ne change pas si on modifie la
                disposition spatiale ou la nature des éléments.</td>
            </tr>

          </table>




          L’enseignant observe que
          l’enfant commence à réussir
          ou réussit régulièrement à…
          Contexte, circonstances, dispositifs, activités… Pour les apprentissages
          suivants…
          • estimer des quantités de façon
          approximative
          Ex : beaucoup/pas beaucoup… ;
          • réaliser une correspondance
          terme à terme pour comparer.
          • produire une collection de
          même cardinal qu’une autre.
          • Comparer des collections
          organisées de manière différente
          dans l’espace pour trouver
          celles qui sont équipotentes
          (qui ont le même cardinal), pour
          déterminer celles qui ont plus
          ou moins d’éléments qu’une
          collection donnée.
          Dans des situations de jeux, ou de résolution de
          problèmes qui font sens, qui intègrent des variables
          telles que la taille des collections, la nature des
          objets et leur organisation spatiale et qui visent à la
          construction et à l’entraînement de procédures en
          s’appuyant sur les interactions langagières.
          Nombreuses situations de manipulation permettant à
          l’enfant de verbaliser ce qu’il a fait.
          Situations dans lesquelles on travaillera avec les
          mêmes variables que précédemment, plus une autre :
          caractère déplaçable ou non des objets constituant les
          collections.
          Mise en œuvre et identification de procédures
          possibles : correspondance terme à terme,
          construction de collections témoins (doigts, dés,
          objets…) sans utiliser le nombre.
          Comparer des collections afin de
          familiariser les élèves avec les
          quantités.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          33
          Stabiliser la connaissance des petits nombres

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>
                Stabiliser la connaissance des
                petits nombres.</td>
              <td>Réaliser une collection dont le cardinal est donné ;
                Utiliser le dénombrement pour constituer une collection d’une taille donnée ou pour
                réaliser une collection de quantité égale à la collection proposée ;
                Avoir compris que tout nombre s’obtient en ajoutant un au nombre précédent et
                que cela correspond à l’ajout d’une unité à la quantité précédente ;
                Quantifier des collections jusqu’à dix au moins ; les composer et les décomposer
                par manipulation effective puis mentale. Dire combien il faut ajouter ou enlever pour
                obtenir des quantités ne dépassant pas dix ;
                Parler des nombres à l’aide de leur décomposition.</td>
            </tr>

          </table>



          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • donner, montrer, prendre une quantité
          demandée d’éléments.
          Activités qui privilégient la
          perception spontanée des petites
          quantités jusqu’à trois.
          Activités de constitution et
          d’appariement de collections
          (inférieures ou égales à 10) avec
          des quantités énoncées de
          différentes façons par l’enseignant
          (ex : 7 ou « 5 et encore 2 », ou « 6
          et encore 1 » ou
          « 3 et encore 3 et encore 1 »).
          Constituer des collections.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          2 34
          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • constituer des groupements afin de
          réaliser des collections en réponse à une
          demande.
          • constituer une collection en utilisant le
          comptage.
          Évolution vers :
          • l’ajout successif d’unités (« un,
          et un, et encore un : trois » ou «
          deux et un, trois »), en augmentant
          progressivement la taille des
          collections ;
          • l’utilisation des groupements
          (exemple : «trois et deux» pour
          constituer une collection de cinq
          éléments) ;
          • l’utilisation du comptage.
          Collections jusqu’à cinq entre deux
          et quatre ans et jusqu’à dix après
          quatre ans.
          Constituer des collections avec
          comptage (avec les mots–
          nombres).
          Compléter une collection.
          • dire le mot nombre correspondant au
          cardinal d’une collection proposée ;
          • dire le mot-nombre correspondant au
          cardinal d’une collection (précédemment
          dénombrée) à laquelle, en présence de
          l’enfant, l’enseignant ajoute ou retire un ou
          plusieurs éléments.
          • verbaliser la décomposition du nombre :
          Ex : « 5 c’est 3 et 2 ».
          Activités favorisant la composition
          et la décomposition d’une collection
          avec deux collections distinctes.
          Composer, décomposer une
          quantité.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          35
          Utiliser le nombre pour désigner un rang, une
          position

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>
                Utiliser le nombre pour
                désigner un rang, une position.</td>
              <td>Utiliser le nombre pour exprimer la position d’un objet ou d’une personne dans un
                jeu, dans une situation organisée, sur un rang ou pour comparer des positions.</td>
            </tr>

          </table>




          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • construire une suite identique à une suite
          ordonnée proposée.
          Activités de reproduction de suites
          avec un modèle visuellement
          proche puis à distance, de
          comparaison de suites visuellement
          proche puis à distance.
          Garder en mémoire la position
          des objets.
          • placer un élément en connaissant
          sa position et en respectant le sens du
          parcours.
          Travail sur les variables didactiques
          :
          • nature des éléments dans la
          suite,
          • rang demandé par l’enseignant,
          • (« Montre le deuxième
          élément »),
          • désignation des rangs par
          • l’enseignant (« Montre le
          deuxième et le quatrième »)
          puis par l’enfant (« C’est le
          deuxième ») ;
          • distinction entre deux
          désignations différentes dans une
          même suite (ex : « le deuxième
          jeton » // « le deuxième jeton bleu »
          dans un série où alternent jetons
          bleus et jaunes ; « le deuxième jeton
          bleu est le quatrième jeton de la
          série »…)
          Repérer et utiliser le rang d’un
          élément dans une suite ordonnée.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          2 36
          • verbaliser le rang des éléments d’une
          suite ordonnée en respectant le sens de «
          lecture » : le premier, le deuxième…
          Entraînement à la verbalisation de
          positions (consignes à donner à des
          pairs pour faire produire une suite
          identique à une suite donnée ;
          devinettes ; repérage dans un cahier
          ou un document avec des pages
          non numérotées….)
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          37
          Construire des premiers savoirs et savoir-faire
          avec rigueur
          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Construire des premiers
                savoirs et savoir-faire avec
                rigueur.</td>
              <td>• Acquérir la suite orale des
                mots-nombres.
                • Écrire les nombres avec les
                chiffres.
                • Dénombrer.
                Quantifier des collections jusqu’à 10 au moins.
                Dire la suite des nombres jusqu’à trente.
                Lire les nombres écrits en chiffres jusqu’à dix.
                Mobiliser des symboles analogiques, verbaux ou écrits, conventionnels ou non
                conventionnels pour communiquer des informations orales et écrites sur une
                quantité.</td>
            </tr>

          </table>



          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • dire la suite orale des mots-nombres :
          » de un en un, à partir de un puis d’un
          autre nombre
          » en avançant de deux en deux
          » en reculant pour les dix
          premiers nombres…
          Comptines numériques.
          Travail systématique de la suite
          orale des nombres.
          Mise en évidence des régularités à
          partir de dix-sept.
          Avant quatre ans, travail sur la suite
          numérique jusqu’à cinq ou six et
          jusqu’à trente ensuite pour les plus
          grands.
          Acquérir la suite orale des motsnombres.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          2 38
          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances, dispositifs,
          activités…
          Pour les a p p r e n ti s s a g e s
          suivants…
          • associer le chiffre correspondant à un motnombre énoncé (jusqu’à10) ;
          • tracer chacun des chiffres ;
          • associer une représentation figurée à une
          quantité dénombrée (constellations de dés,
          configurations de doigts, cartes à points…) ;
          • associer le nombre écrit correspondant à
          une quantité dénombrée (jusqu’à 10).
          Des activités qui donnent du sens au
          nombre écrit en lien avec des
          situations concrètes de la vie de la
          classe :
          • montrer ou écrire un motnombre énoncé,
          • coder
          une
          quantit
          é.
          Écrire les nombres avec les
          chiffres.
          • utiliser la perception globale pour quantifier. Des activités visent à faire varier la
          taille des collections pour permettre
          à l’élève de quantifier un, deux, trois
          éléments puis de repérer un, deux,
          trois éléments dans une collection
          plus large.
          Les situations de dénombrement
          visent l’association d’une
          représentation à une quantité donnée
          au moins jusqu’à dix.
          Dénombrer
          • énumérer : prendre en compte chaque
          unité d’une même collection sans en oublier
          ni pointer deux fois la même ;
          • utiliser le dernier mot nombre cité pour
          exprimer la quantité de la collection (mémoire
          de la quantité).
          Des situations d’apprentissage
          permettant de s’appuyer sur une
          collection, un codage repérant les
          éléments déjà comptés par la
          construction d’un trajet graphique ou
          mental.
          • dénombrer les quantités jusqu’à dix ; Des situations d’apprentissage
          faisant varier la nature des
          collections et leur organisation
          spatiale.
          En prenant appui sur des
          dénombrements de collections :
          • d’objets déplaçables ;
          • d’objets fixes organisés
          spatialement ;
          • d’objets fixes éloignés ou non.
          • construire des collections. • Des situations pour construire une
          collection de même cardinal qu’une
          collection témoin à l’aide des doigts,
          d’objets, de points, des motsnombres énoncés.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          2 39
          Explorer des formes, des grandeurs, des suites
          organisées

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Construire des connaissances
                et des repères sur quelques
                formes et grandeurs et sur des
                suites organisées.</td>
              <td>Classer des objets en fonction de caractéristiques liées à leur forme. Savoir
                nommer quelques formes planes (carré, triangle, cercle ou disque, rectangle) et
                reconnaître quelques solides (cube, pyramide, boule, cylindre).
                Classer ou ranger des objets selon un critère de longueur ou de masse ou de
                contenance.
                Reproduire un assemblage à partir d’un modèle (puzzle, pavage, assemblage de
                solides).
                Reproduire, dessiner des formes planes.
                Identifier le principe d’organisation d’un algorithme et poursuivre son application.</td>
            </tr>

          </table>




          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • reconnaitre globalement des solides par
          la vue et par le toucher ;
          • reconnaitre globalement des formes
          planes par la vue ;
          • reconnaître, distinguer des solides puis
          des formes planes ;
          • appréhender les objets selon le critère
          d’une grandeur particulière (sa longueur, sa
          masse ou son volume) ;
          • comparer deux objets selon une
          seule de ces grandeurs (lorsque cela est
          possible) en ayant recours à un troisième
          objet de référence pour pouvoir faire cette
          comparaison :
          » ranger des tours de cubes empilés de
          la plus courte à la plus longue (domaine
          A l’occasion de situations de
          manipulation qui :
          • conduisent les enfants à mieux
          distinguer différents types de
          critères (forme, longueur, masse,
          contenance essentiellement).
          • permettent d’utiliser un
          vocabulaire précis (cube, boule,
          pyramide, cylindre, carré,
          rectangle, triangle, cercle ou
          disque).
          En prenant appui sur :
          • Des jeux de reconnaissance
          tactile, par exemple sortir d’un sac
          exactement le même objet que celui
          montré ou désigné, qui contribuent
          à l’appréhension des formes, à la
          construction d’images mentales et
          permettent à l’enseignant d’utiliser
          Explorer des formes, des
          grandeurs, des suites
          organisées….
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          40
          des longueurs) ;
          » trier des objets en plaçant les plus
          lourds sous une étagère et les plus légers
          sur cette étagère (domaine des masses)
          ;
          » trier des objets en plaçant les plus gros
          dans un grand carton et les plus petits
          dans une boîte (domaine des volumes) ;
          » construire des tours en empilant des
          disques de plus en plus petits (domaine
          des aires) ;
          » choisir des formes en vue de recouvrir
          une surface (domaine des aires).
          • appréhender la notion d’alignement ;
          un vocabulaire précis fondé au
          début sur des oppositions : lourd/
          léger, plein/vide, court/long…
          • Des jeux de Kim (retrouver un
          objet enlevé ou déplacé dans
          un lot d’objets) qui incitent à
          construire des images spatiales
          pour mémoriser.
          • Des jeux d’association d’un
          objet à une de ses représentations
          (photo, dessin).
          • organiser des suites d’objets en fonction
          de critères de formes et de couleurs à partir
          d’algorithmes simples.
          Et progressivement à :
          • reconnaître un rythme dans une suite
          organisée ;
          • continuer cette suite ;
          • inventer des « rythmes » de plus en plus
          compliqués ;
          • compléter des manques dans une suite
          organisée.
          A partir d’activités mises en œuvre
          dès la petite section.
          En prenant appui sur des activités
          au-delà de la petite section.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          41
          Se repérer dans le temps et l’espace
          Se repérer dans le temps

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Le temps.</td>
              <td>Stabiliser les premiers repères
                temporels.
                Introduire les repères sociaux.
                Consolider la notion de
                chronologie.
                Sensibiliser à la notion de
                durée.
                Situer des événements vécus les uns par rapport aux autres et en les repérant dans
                la journée, la semaine, le mois ou une saison.
                Ordonner une suite de photographies ou d’images, pour rendre compte d’une
                situation vécue ou d’un récit fictif entendu, en marquant de manière exacte
                succession et simultanéité.
                Utiliser des marqueurs temporels adaptés (puis, pendant, avant, après…) dans des
                récits, descriptions ou explications.</td>
            </tr>

          </table>




          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • associer les moments de la journée avec
          des activités régulières de la classe ;
          • dire ce qu’on a fait avant et après une
          activité ;
          • se repérer dans les premiers éléments
          chronologiques sur un temps court (la
          demi-journée) et utiliser correctement les
          mots « matin », « apres-midi », « soir » ;
          • utiliser correctement les mots « jour » et
          « mois » ;
          • connaitre la suite des noms des jours, de
          la semaine et savoir dire « celui qui
          précède » et « celui qui suit » un jour
          donné ;
          • A c t i v i t é s de classe régulières
          pour construire les premiers
          repères temporels
          • Rituels qui marquent les
          transitions d’une activité à l’autre.
          • Évocation et anticipation en
          s’appuyant sur des événements
          proches.
          Stabiliser les premiers repères
          temporels.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          42
          • utiliser des marques temporelles dans le
          langage, notamment pour situer ce dont on
          parle par rapport au moment où l’on parle
          (hier, aujourd’hui, demain, plus tard…),
          • utiliser les formes des verbes adaptées
          (présent, futur, passé) même si la
          conjugaison exacte fait encore défaut
          • utiliser le vocabulaire adapté pour traduire
          une relation entre deux faits, deux moments
          : avant, après, pendant, bien avant, bien
          après, en même temps, plus tôt que, plus
          tard, dans deux jours…
          • A partir des activités réalisées en
          classe (visite au musée, fête
          d’anniversaire, rencontre avec une
          autre classe…).ou des récits lus
          par l’enseignant :
          » représentation des séquences
          vécues ou de la trame des
          histoires entendues en utilisant
          des photographies, des étiquettes
          qui sont ordonnées pour
          reconstituer la chronologie ;
          » activités langagières autour de
          ces manipulations (voir
          Ressources LANGAGE) ;
          Introduire des repères sociaux.
          Consolider la notion de
          chronologie.
          • utiliser divers outils (comptage régulier,
          sablier, horloge…) pour comparer des
          durées.
          • Dans l’évocation des différents
          moments de la journée, amener les
          enfants à matérialiser le temps pour
          rendre compte de durées ;
          •Utilisation de sabliers,
          d’enregistrements d’une comptine
          ou d’une chanson pour permettre
          une première appréhension
          d’une durée stable donnée ou la
          comparaison avec une autre.
          Sensibiliser à la notion de durée.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          3 43
          Se repérer dans l’espace

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Faire l’expérience de l’espace
                Représenter l’espace.</td>
              <td>Découvrir différents milieux.
                Situer des objets par rapport à soi, entre eux, par rapport à des objets repères.
                Se situer par rapport à d’autres, par rapport à des objets repères.
                Dans un environnement bien connu, réaliser un trajet, un parcours à partir de sa
                représentation (dessin ou codage).
                Élaborer des premiers essais de représentation plane, communicables (construction
                d’un code commun).
                Orienter et utiliser correctement une feuille de papier, un livre ou autre support
                d’écrit, en fonction de consignes, d’un but ou d’un projet précis.
                Utiliser des marqueurs spatiaux adaptés (devant, derrière, droite, gauche, dessus,
                dessous…) dans des récits, des descriptions ou explications.</td>
            </tr>

          </table>




          L’enseignant observe que l’enfant commence à
          réussir ou réussit régulièrement à…
          Contexte, circonstances, dispositifs,
          activités…
          Pour les
          apprentissages
          suivants…
          • se repérer dans l’espace de la classe ;
          • identifier les espaces communs de l’école (salle
          de classe, salle de jeux, couloirs, dortoir, salle de
          restauration, cour…) et s’y déplacer en autonomie ;
          • se déplacer en respectant des règles ou consignes ;
          • utiliser des locutions spatiales en particulier celles
          fondées sur des oppositions : sur/sous,
          dedans/dehors, à côté de/loin de….
          • reconnaître et utiliser des représentations d’espaces
          connus ;
          • coder des déplacements, des emplacements sur un
          « plan » connu ou une photographie d’un espace
          vécu (salle de classe, salle de jeux, cour de
          récréation…) ;
          • repérer sa droite et sa gauche ;
          • décrire des positions dans l’espace : positions par
          rapport à soi ; positions relatives de deux objets ou
          deux personnes l’un(e) par rapport à l’autre ;
          • Activités d’exploration et de
          déplacements usuelles dans l’école
          accompagnées de commentaires de
          l’adulte qui précise les repères spatiaux ;
          • Jeux obligeant à des déplacements, à
          des parcours menés par l’adulte, par des
          enfants (Jacques a dit ; chasse au
          trésor ;…) ;
          • Activités favorisant l’utilisation, la
          production de représentations diverses
          (photos, maquettes, dessins, plans) ;
          • Dessins, textes, productions
          graphiques initiant à se repérer et à
          s’orienter dans un espace à deux
          dimensions.
          • Jeux du type Memory, jeu de Kim…
          • Production d’images (par exemple avec
          l’utilisation de l’appareil photo
          numérique) ;
          » activités langagières (voir
          Faire
          l’expérience de
          l’espace
          Représenter
          l’espace
          Découvrir
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          44
          • se repérer dans une page et utiliser le vocabulaire
          usuel (haut et bas notamment, gauche et droite) ;
          • parler d’espaces lointains (hors du vécu) en
          employant un vocabulaire adapté pour décrire des
          habitats, des monuments, des paysages (en fonction
          de ce qui a été travaillé en classe).
          Ressources LANGAGE) ;
          • Activités d’observation d’espaces
          moins familiers pour explorer des
          paysages différents du milieu de vie des
          enfants en lien avec des histoires, des
          évènements d’actualité utilisés en classe.
          différents milieux
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          45
          Découvrir le monde vivant

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Découvrir le monde vivant.</td>
              <td> Reconnaître les principales étapes du développement d’un animal ou d’un végétal,
                dans une situation d’observation du réel ou sur une image.
                Connaître les besoins essentiels de quelques animaux et végétaux.
                Situer et nommer les différentes parties du corps humain, sur soi ou sur une
                représentation.
                Connaître et mettre en œuvre quelques règles d’hygiène corporelle et d’une vie
                saine.</td>
            </tr>

          </table>




          L’enseignant observe que l’enfant commence à
          réussir ou réussit régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • situer et nommer quelques parties du corps sur
          lui-même ;
          • situer et nommer quelques parties du visage et
          du corps sur lui-même et sur une représentation ;
          • lister les parties du corps nécessaires à une
          première représentation d’un être humain (tête,
          corps, bras, jambes, pieds, mains) ;
          • situer et nommer les parties du visage, du
          corps et quelques articulations (cheville, genou,
          coude, hanche, épaule, nuque) sur lui-même ou
          sur une représentation ;
          • évoluer de traces éparses à un dessin plus
          représentatif du corps humain
          ex : bonhomme « têtard », « bonhomme patate » ;
          • dessiner un être humain complet(pieds, jambes,
          bassin, torse, bras, tête avec éventuellement
          quelques détails sur le visage) ;
          • dessiner un être humain complet avec des
          parties de son visage. Les membres commencent
          à prendre de l’épaisseur ;
          • se représenter avec un corps articulé en
          mouvement (en train de courir ou de sauter…).
          Observations menées :
          • lors d’activités physiques ;
          • lors d’activités plastiques et
          visuelles ;
          • lors de jeux (poupées...) ;
          • avec des ressources
          documentaires (livres, albums,
          posters, vidéos…)
          • …
          Pratique régulière du dessin à la
          suite d’observations.
          Mieux connaître son corps.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          46
          L’enseignant observe que l’enfant commence à
          réussir ou réussit régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • respecter les règles d’hygiène après invitation,
          avec l’aide de l’adulte ;
          • réaliser les premiers gestes qui garantissent son
          hygiène corporelle
          ex. : souffler dans un mouchoir ;
          • demander de l’aide pour répondre à ses
          besoins physiologiques ;
          • gérer ses besoins physiologiques de façon
          autonome ;
          • réguler et anticiper ses besoins physiologiques
          pour ne pas arrêter les activités prévues ;
          • énoncer les règles d’hygiène corporelle et de
          vie saine ;
          • établir des premiers liens entre ce qu’il
          consomme et les conséquences possibles sur sa
          santé (ex : sucre et caries).
          Dans le cadre de la vie
          quotidienne, activités de :
          • lavage des mains ;
          • mouchage de nez ;
          • passage aux toilettes
          et éventuellement brossage des
          dents ;
          • …
          S’approprier des règles
          d’hygiène corporelle et de vie
          saine.
          • reconnaître et nommer les animaux observés
          en classe et participer à l’entretien des élevages
          en fournissant la « nourriture » nécessaire, en
          assurant le nettoyage ;
          • savoir que les animaux ont besoin de se nourrir
          et de boire pour vivre ;
          • savoir que les animaux ont besoin de boire
          et d’une nourriture adaptée à leur régime
          alimentaire ;
          • savoir que les animaux ont besoin de respirer,
          de dormir ;
          • savoir que les animaux grandissent et se
          transforment ;
          • connaître les principales étapes du
          développement d’un animal (naissance,
          croissance, reproduction, vieillissement, mort) ;
          • observer et repérer les naissances dans les
          élevages ;
          • savoir qu’en général, la reproduction animale
          nécessite un mâle et une femelle ;
          • associer des modes de reproduction à des
          types d’animaux :
          » Le bébé se développe dans le ventre de la
          femelle
          ex. : souris, lapin, chat, chien, ours… les
          En prenant appui
          • sur les élevages mis en place
          au sein de la classe ;
          • sur des ressources
          documentaires (livres, albums,
          posters, vidéos…) ;
          • …
          Découvrir le cycle que
          constituent la naissance, la
          croissance, la reproduction,
          le vieillissement, la mort en
          assurant les soins
          nécessaires aux élevages
          et aux plantations dans la
          classe.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          47
          mammifères en général ;
          » Le bébé se développe dans un œuf, à
          l’extérieur de la femelle
          ex. : poules, pigeons et autres oiseaux, tortues,
          grenouilles…, poissons en général ;
          • savoir que chez certains animaux, les femelles
          peuvent avoir des bébés sans l’intervention d’un
          mâle ex. : phasmes.
          • reconnaître et nommer les plantes observées
          en classe et participer à l’entretien des plantations
          en fournissant l’arrosage et l’entretien nécessaires
          ;
          En prenant appui
          • sur les plantations mises en
          place au sein de la classe ;
          • sur des ressources
          documentaires (livres, albums,
          posters, vidéos…) ;
          • …
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          48
          Explorer la matière

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Explorer la matière Choisir, utiliser et savoir désigner des outils et des matériaux adaptés à une
                situation, à des actions techniques spécifiques (plier, couper, coller, assembler,
                actionner…).</td>
              <td></td>
            </tr>

          </table>



          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • découvrir et manipuler des matériaux
          existants ou fabriqués en classe (ex : pâte
          à sel, pâte à tarte…) ;
          • identifier quelques matériaux et les
          différencier en grandes familles (les
          papiers, les cartons, les tissus, les pâtes…)
          ;
          • trier, comparer des matériaux en
          fonction de caractéristiques physiques
          accessibles par les 5 sens (couleur, forme,
          taille, odeur, bruit, masse, texture, dureté)
          ou d’autres propriétés physiques (opaque,
          transparent, translucide ; attiré ou non par
          l’aimant ; perméable, imperméable…) ;
          • connaître d’autres propriétés physiques
          des matériaux (perméabilité, magnétisme,
          transparence…) ;
          • classer des objets selon le matériau
          qui les compose (manipulation) selon
          une propriété commune (formes, goût,
          texture…), selon leurs usages… ;
          • repérer des transformations de matériaux
          sous l’effet de la chaleur (sécher, durcir,
          fondre…), de l’eau (mouiller, dissoudre…),
          de l’air (déplacer, gonfler…), d’actions
          mécaniques avec des mains (froisser,
          plier…) et avec des outils (découper,
          percer…) ;
          • agir de manière raisonnée sur un
          matériau, choisir le bon matériau en
          fonction d’un besoin, d’un effet attendu,
          d’un projet.
          Situations d’exploration, de
          réinvestissement, d’entraînement
          à partir de matières (eau, air…) et
          matériaux naturels ou construits
          par l’homme.
          Projets sur les « familles » d’objets
          à une même époque ou à travers
          différentes époques. Par exemple,
          avec :
          • les outils et supports utilisés pour
          écrire ;
          • les outils utilisés pour coller ;
          • les outils utilisés pour découper ;
          • les ustensiles de cuisine.
          …
          Utilisation, découverte,
          exploration de matières et
          matériaux.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          49
          • modifier une procédure si nécessaire
          pour l’adapter au résultat attendu ;
          • prendre conscience du caractère
          réversible (ou non) de certaines actions
          ex. : lorsque la colle a séché, on ne peut
          plus séparer des feuilles sans risquer de les
          déchirer ; lorsqu’on met de l’encre dans de
          l’eau, on ne peut plus les séparer ; lorsque
          la pâte à sel est cuite, on ne peut plus la
          modeler ou la remettre en boule… ;
          • lister les actions et l’ordre de réalisation,
          les transformations accomplies et les outils
          nécessaires.
          Situations de projet de fabrication :
          • objets du vent (manche à air,
          moulinet…) ;
          • objets de l’eau (moulin à eau,
          bateaux, fontaines à eau…) ;
          • engins qui se déplacent (voitures,
          bateaux…) ;
          • jeux, jouets (puzzles,
          culbutos…) ;
          • livres, marionnettes, couronnes,
          masques… ;
          • réalisations culinaires (tartines
          décorées, pâte à tarte, sucettes
          glacées, compote de pommes…).
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          50
          Utiliser, fabriquer, manipuler des objets

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Utiliser, fabriquer, manipuler
                des objets.</td>
              <td>Réaliser des constructions ; construire des maquettes simples en fonction de plans
                ou d’instructions de montage.
                Prendre en compte les risques de l’environnement familier proche (objets et
                comportements dangereux, produits toxiques).</td>
            </tr>

          </table>




          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • réaliser des montages de plus en plus
          complexes
          » avec une intention repérable
          » avec une intention formulée ;
          • réaliser une construction, reconstituer
          un objet en disposant d’un modèle de
          référence qu’il peut manipuler ou observer ;
          • réaliser une construction, reconstituer
          un objet à partir d’un modèle représenté
          (photographie, dessin, schéma) ;
          • réaliser une construction, reconstituer un
          objet à partir d’illustrations des étapes de la
          construction, de représentations avec
          différentes vues (en éclaté, en perspective,
          de plusieurs points de vue…) ;
          • représenter par le dessin/schéma un
          montage qu’il a réalisé ;
          • réaliser des photographies
          caractéristiques des différentes étapes du
          montage..
          • jeux de construction, objets
          modulables en kit ;
          • réalisation de maquettes ;
          • fabrication d’objets ;
          • situations de réalisation de
          recettes (fabrication de jus de
          fruits…) ;
          • entretien du matériel scolaire
          (ex. : taille-crayon, perforatrice,
          agrafeuse…).
          Montages et démontages pour :
          • répondre à un besoin ;
          • utiliser, entretenir, réparer… ;
          • comprendre la structure, le
          fonctionnement ;
          • repérer les étapes d’une
          fabrication.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          2 51
          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • reconnaître les différents systèmes
          de fermeture des vêtements ou des
          chaussures (bouton, bouton-pression,
          fermeture éclair, lacets, bande autoagrippante…) ;
          • découvrir la fonction d’usage (boutonner,
          attacher, fermer, fixer…) et réaliser les
          gestes adaptés (utiliser efficacement
          une fermeture à glissière, un boutonpression, etc.) ;
          • reconnaître, identifier et nommer
          quelques objets parmi une famille d’objets ;
          • trier, comparer en fonction des usages ;
          • utiliser de manière raisonnée, choisir le
          bon outil en fonction d’un besoin, d’un effet
          attendu, d’un contexte d’utilisation.
          Activités d’habillage, déshabillage,
          sur son corps ou avec des
          poupées…
          Utilisation d’objets, d’outils,
          d’instruments dans et hors la classe
          :
          • systèmes de fermeture (boutonpression, fermeture à glissière,
          lacets, bande auto-agrippante,
          fermoirs divers…) ;
          • outils de bricolage (menuiserie,
          jardinage…) ;
          • ustensiles de cuisine ;
          • matériel scolaire (perforeuse,
          agrafeuse…),
          • instruments divers (loupes,
          balances, toise, mètre ruban…).
          Utilisation d’instruments, d’outils
          variés pour :
          • satisfaire des besoins
          quotidiens (s’habiller, manger…) ;
          • mettre en œuvre un projet de
          réalisation ;
          • effectuer des actions techniques
          (tenir un outil scripteur, utiliser un
          gabarit, des ciseaux… observer
          avec une loupe, mesurer avec une
          toise…).
          • identifier et nommer les risques liés à
          certaines activités ou à certains outils
          utilisés (chuter, se pincer, se couper,
          s’étouffer, s’électrocuter, se brûler…) ;
          • adapter et justifier son comportement en
          fonction des risques identifiés ;
          • reconnaître certains produits
          toxiques ou dangereux et le justifier
          grâce aux indications visuelles présentes ;
          • alerter un adulte en cas de danger pour
          lui-même ou pour un camarade.
          Vie ordinaire de l’enfant.
          Univers de la classe et de l’école.
          Prévention des accidents
          domestiques.
          Ressources maternelle
          Évaluation : Construire les premiers outils pour structurer
          sa pensée
          52
          Utiliser des outils numériques

          <table style={{ "border": "1px solid black" }}>
            <tr>
              <td>Objectif(s) visé(s) :</td>
              <td>Ce qui est attendu des enfants en fin d’école maternelle :</td>
            </tr>
            <tr>
              <td>Utiliser des outils numériques.</td>
              <td> Utiliser des objets numériques : appareil photo, tablette, ordinateur.</td>
            </tr>

          </table>




          L’enseignant observe que l’enfant
          commence à réussir ou réussit
          régulièrement à…
          Contexte, circonstances,
          dispositifs, activités…
          Pour les apprentissages
          suivants…
          • agir sur une tablette numérique (allumer,
          éteindre, choisir une application : l’ouvrir,
          l’utiliser et la fermer) ;
          • choisir l’outil numérique qui convient en
          fonction d’un besoin (photographier, filmer,
          enregistrer la voix, copier du texte…) ;
          • manipuler une souris d’ordinateur pour
          pointer un élément, cliquer sur un élément,
          déplacer un élément… ;
          • repérer des lettres sur un clavier
          (ordinateur ou tablette) ;
          • utiliser les touches de direction (haut,
          bas, gauche, droite) pour déplacer un
          personnage dans un jeu éducatif ;
          • copier, écrire à l’aide d’un clavier
          (ordinateur ou tablette) : son prénom, des
          mots, le titre d’un livre, des phrases, de
          courts textes….
          À l’occasion :
          • des activités quotidiennes
          (ex. : utilisation d’applications
          éducatives dans les différents
          domaines d’apprentissage) ;
          • de projets (ex. : communication
          avec les familles, avec d’autres
          élèves, avec un partenaire, garder
          une trace mémoire d’une activité
          vécue, réaliser un imagier
          numérique thématique, enregistrer
          une production orale, individuelle
          ou collective — chant, comptine…)
          …
          Pouvoir utiliser de façon
          autonome et adaptée les outils
          numériques présents dans la
          classe ou dans l’école.
        </div>
      </div>

      <div className="container mx-auto px-4 pb-32 pt-48" id="mathematiques">
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
                        <b>Principe cardinal:</b> dénombrer, exprimer une quantité, produire une collection d’un
                        cardinal donné.

                      </h4>
                    </div>
                  </div>
                </li>

                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">

                        <b>Compréhension et utilisation des nombres:</b> composer et décomposer. Comprendre
                        les relations entre les nombres. Utiliser les nombres pour garder en mémoire, évaluer,
                        comparer, exprimer une quantité.

                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">

                        <b>Comptine numérique:</b> connaître la comptine numérique jusqu’à 30.

                      </h4>
                    </div>
                  </div>
                </li>

                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">

                        <b>Rang et position:</b> utiliser le nombre pour exprimer le rang et la position des objets.
                        Commencer à positionner des nombres les uns par rapport aux autres.
                      </h4>
                    </div>
                  </div>
                </li>

                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">


                        <b>Les problèmes :</b> résoudre des problèmes simples.


                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">



                        <b>Les formes (solides et formes planes) :</b> reconnaître. Nommer. Classer. Ranger.
                        Reproduire.

                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">



                        <b>Les grandeurs :</b> classer ou ranger en fonction de la longueur ou la masse.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">



                        <b>Les suites organisées :</b> identifier. Continuer. Compléter un rythme
                      </h4>
                    </div>
                  </div>
                </li>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    nombre
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
                        Le temps : repérer. Situer. Ordonner. Représenter.


                      </h4>
                    </div>
                  </div>
                </li>

                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        <b>L’espace :</b> repérer. Situer. Orienter. Représenter

                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        <b>Le vivant :</b> identifier. Catégoriser. Adopter une attitude respectueuse des lieux et du
                        vivant.

                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        <b>La matière :</b> utiliser. Classer. Fabriquer

                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        <b>Les objets :</b> utiliser. Fabriquer. Construire.

                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        <b>Les règles de sécurité et d’hygiène :</b> comprendre et avoir conscience des risques liés
                        à l’usage des objets. Appliquer des règles d’hygiène.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        <b>Les outils numériques :</b> les utiliser de manière adaptée.
                      </h4>
                    </div>
                  </div>
                </li>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    explorer
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

      <div className="container mx-auto px-4 pb-32 pt-48" id="autre">
        <div className="items-center flex flex-wrap bg-gray-100">
          <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
            <div className="md:pr-12">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <a href="#menu">   <i className="fas fa-file-alt text-xl"></i></a>
              </div>
              <h3 className="text-3xl font-semibold">
                Apprendre ensemble et vivre ensemble
              </h3>

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
                        S’engager dans l’effort. Persévérer.


                      </h4>
                    </div>
                  </div>
                </li>


                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">

                        Prendre en compte les consignes collectives.


                      </h4>
                    </div>
                  </div>
                </li>

                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">

                        Participer aux activités, à la réalisation de projets communs. Coopérer. Prendre des
                        initiatives, des responsabilités au sein d’un groupe
                      </h4>
                    </div>
                  </div>
                </li>

                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">

                        Connaître et appliquer les principes premiers de la vie en société. S’appuyer sur ses
                        premières expériences morales.


                      </h4>
                    </div>
                  </div>
                </li>


                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                    apprendre
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
      <Footer />
    </>
  );
}
