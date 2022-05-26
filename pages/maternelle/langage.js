/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />


      <section className="mt-48 md:mt-40 pb-20 relative bg-blueGray-100">
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
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-24">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal" id="menu">
                <a href="/maternelle">Maternelle</a> - Language
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              </p>
            </div>
          </div>
        </div>




      </section>


      <section >
        <div className="container mx-auto px-4 pb-8 pt-8">
          <div className="items-center flex flex-wrap bg-gray-100">

            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">

                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  border border-solid px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4 text-left">
                      Oser entrer en communication.
                    </th>
                    <td className="border-t-1 border border-solid  border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Communiquer avec les adultes et les autres enfants en se faisant comprendre.
                    </td>

                  </tr>

                </tbody>
              </table>
            </div>


            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      L’enseignant observe que l’enfant commence à réussir ou réussit
                      régulièrement à…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Contexte, circonstances,
                      dispositifs, activités…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Pour les
                      apprentissages
                      suivants…
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • participer en répétant seulement (comptines…) ;<br />
                      • participer à la tâche langagière en répétant les paroles d’un
                      pair ;<br />
                      • prendre la parole pour répondre à une question ;<br />
                      • quitter le regard de l’enseignant pour regarder son (ses)<br />
                      interlocuteur(s) ; parler pour être entendu (force et articulation) ;<br />
                      • endosser des postures de locuteur/interlocuteur : accepter les<br />
                      tours de parole, attendre pour prendre la parole ; écouter ses<br />
                      pairs ;<br />
                      • prendre en compte son (ses) interlocuteur (s) dans le système<br />
                      d’énonciation (je, tu, il/elle, vous, nous …) ;<br />
                      • répéter, insister, transformer, adapter, reformuler son propos<br />
                      pour être entendu et compris ;<br />
                      • participer à la régulation de l’avancée du propos du groupe par<br />
                      des formules comme « 0n l’a déjà dit … » ;<br />
                      • coopérer en complétant, en ajoutant des éléments, en<br />
                      s’opposant aux propos de ses pairs ;<br />
                      • faire usage de son statut de locuteur/interlocuteur à l’intérieur<br />
                      du groupe par des régulations verbales des prises de paroles<br />
                      accordées<br />
                      ex « Tu ne m’as pas laissé terminer ! ». Il marque verbalement la<br />
                      fin de sa prise de parole: « J’ai fini » « c’est à toi …» ;<br />
                      • récapituler ce qui vient d’être dit à la demande de l’enseignant ;<br />
                      • se distancier en comprenant et commençant à faire de l’humour<br />
                      ex dans le coin dinette : « Tu as vu le bébé sourit (c’est une<br />
                      poupée)… Non, je rigole ! ».
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      • Conversation<br />
                      • Compte-rendu<br />
                      • Nouvelle<br />
                      • Récit<br />
                      • Commentaire<br />
                      • Discussion, débat<br />
                      • Consigne d’action<br />
                      • Synthèse et bilan<br />
                      • …<br />
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Développer le statut de<br />
                      locuteur et<br />
                      d’interlocuteur<br />
                      Participer à la<br />
                      c o m m u n a u t é
                      langagière<br />
                      Variables importantes à<br />
                      préciser<br />
                      Taille du groupe :<br />
                      relation duelle/ petit<br />
                      groupe /collectif.<br />
                      Qualité des<br />
                      interlocuteurs : adultes<br />
                      /enfants de la classe /<br />
                      de l’école/ inconnus<br />
                      avec ou sans aide de<br />
                      l’enseignant.<br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 pb-8 pt-8">
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">

                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4 text-left">
                      Comprendre et apprendre.
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Pratiquer divers usages du langage oral : raconter, décrire, évoquer, expliquer,
                      questionner, proposer des solutions, discuter un point de vue. Observer le langage oral dans les trois
                      conduites langagières fondamentales
                    </td>

                  </tr>

                </tbody>
              </table>
            </div>




            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      L’enseignant observe que l’enfant commence à réussir ou réussit
                      régulièrement à…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Contexte, circonstances,
                      dispositifs, activités…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Pour les
                      apprentissages
                      suivants…
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • expliquer comment il opère en situation<br />
                      de réalisation :<br />
                      » en énonçant quelques mots clés<br />
                      décrivant son action et/ou les manières ;<br />
                      » en décrivant chacune des actions.<br />
                      • expliquer comment réaliser quelque<br />
                      chose après l’avoir effectué en s’appuyant<br />
                      sur des traces de l’activité (productions,<br />
                      maquette, photos, dessins…) :<br />
                      » en listant des actions et/ou des<br />
                      manières de faire ;<br />
                      » en enchaînant le déroulement des<br />
                      actions ;<br />
                      • interpréter son activité au vu du résultat<br />
                      produit ;<br />
                      • interpréter une réussite/ un échec en<br />
                      expliquant les causes ou en expliquant<br />
                      les conséquences d’une activité, de<br />
                      l’utilisation d’un outil ;<br />
                      • anticiper le résultat d’une action, d’un<br />
                      geste, d’une procédure.<br />
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Situations d’oral sous la forme de<br />
                      règles du jeu, bilan, compte-rendu,<br />
                      processus de fabrication, débat,<br />
                      projet de réalisation, hypothèses<br />
                      …<br />
                      …pendant des activités physiques ;<br />
                      des activités numériques, formes<br />
                      et grandeurs ; des activités<br />
                      artistiques ; des activités<br />
                      d’exploration du monde.<br />
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Utiliser le langage oral pour se
                      construire les outils visant à
                      expliquer
                    </td>
                  </tr>

                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • décrire en faisant la liste d’éléments<br />
                      constitutifs ; matériaux, matériels,<br />
                      propriétés, qualités… ;<br />
                      • relater une succession d’événements organisés<br />
                      ex : « on a pris le bus puis on a vu » ;<br />
                      • relater une succession d’actions pour<br />
                      décrire un parcours, une procédure, une<br />
                      technique… ;<br />
                      • relater une succession de lieux pour<br />
                      décrire un itinéraire, un déplacement ;<br />
                      • rapprocher par les points communs ou<br />
                      contraster par les points de différences … ;<br />
                      • situer les uns par rapport aux autres<br />
                      les éléments composant une image,<br />
                      un motif, un objet pour donner à voir<br />
                      (construction d’une image mentale) en<br />
                      s’appuyant sur des photos, des dessins,<br />
                      des schématisations ;<br />
                      • décrire pour anticiper une installation, une<br />
                      organisation…<br />
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      • Situations d’oral sous la<br />
                      forme de devinette, itinéraire,<br />
                      liste, comparaison, procédure,<br />
                      compte-rendu, consigne, projet de   réalisation...<br />
                      • …pendant des activités<br />
                      physiques ; des activités<br />
                      numériques, formes et grandeurs<br />
                      ; des activités artistiques ; des<br />
                      activités d’exploration du monde ;<br />
                      • …à propos d’une situation, d’un<br />
                      événement vécus par l’enfant.<br />
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Utiliser le langage oral pour se<br />
                      construire les outils visant à relater<br />
                      ou décrire.
                    </td>
                  </tr>

                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • raconter des actions vécues par le<br />
                      personnage central en manipulant le<br />
                      matériel à disposition : marottes + décor<br />
                      ou en tournant les pages de l’album ;<br />
                      • raconter en faisant parler les<br />
                      personnages en utilisant des marottes ;<br />
                      • alterner récit et dialogues en introduisant<br />
                      correctement les dialogues et nommant la<br />
                      personne/personnage qu’il fait parler ;<br />
                      • enchainer les actions et les émotions des<br />
                      personnages pour retracer tout le scénario<br />
                      et l’intrigue de l’histoire ;<br />
                      • utiliser le système des temps approprié :<br />
                      imparfait, passé simple (il prendit, il prenda<br />
                      …) dans le récit.<br />
                      • enchaîner judicieusement les phrases<br />
                      avec des connecteurs adaptés et variés<br />
                      (les noter) ;<br />
                      • raconter une histoire en randonnée en<br />
                      inventant un nouvel épisode crédible à<br />
                      partir d’un nouveau personnage, ou d’un<br />
                      nouvel élément ;<br />
                      • inventer une histoire à partir de quelques<br />
                      éléments (images/ objets…) ou à partir<br />
                      des illustrations d’un album non connu.<br />
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Situations d’oral à partir d’histoires<br />
                      connues :<br />
                      • Histoires où l’enchaînement des<br />
                      actions correspond à des scripts<br />
                      de la vie quotidienne. (le bain, le<br />
                      coucher, soigner un rhume…).<br />
                      • Histoires où l’enchaînement<br />
                      des actions est organisé vers une<br />
                      chute (récits à structure répétitive,<br />
                      contes de randonnée).<br />
                      • Histoires où l’enchaînement<br />
                      des actions est lié au destin d’un<br />
                      personnage central qui évolue et<br />
                      dont la transformation est<br />
                      perceptible entre l’état initial et l’état<br />
                      final du récit.<br />
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Utiliser le langage oral pour se<br />
                      construire les outils nécessaires<br />
                      pour raconter.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 pb-8 pt-8" >
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">

                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4 text-left">
                      Une autre manière d’observer le langage oral
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      dans les domaines d’apprentissage
                    </td>

                  </tr>

                </tbody>
              </table>
            </div>





            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      L’enseignant observe que l’enfant commence à réussir ou réussit
                      régulièrement à…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Contexte, circonstances,<br />
                      dispositifs, activités…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Pour les apprentissages suivants…
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • nommer :<br />
                      • des objets, du matériel, des matériaux,<br />
                      des personnes, des rôles ;<br />
                      • des actions, des gestes ;<br />
                      • des propriétés, des qualités, des effets<br />
                      produits ;<br />
                      • des relations spatiales, temporelles et<br />
                      logiques.<br />
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Parler pour reconnaître, nommer,<br />
                      désigner dans :<br />
                      • les activités physiques ;<br />
                      • les activités numériques, les<br />
                      formes, les grandeurs ;
                      • les activités artistiques ;<br />
                      • les activités d’exploration du<br />
                      monde.
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Utilisation de :<br />
                      • lexique précis
                    </td>
                  </tr>




                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • lister, énumérer les éléments<br />
                      caractéristiques de formes, d’objets… ;<br />
                      • situer les uns par rapport aux autres les<br />
                      éléments composant une image, un objet<br />
                      ... pour donner à voir (construction d’une<br />
                      image mentale) ;<br />
                      • situer dans l’espace personnes, objets et<br />
                      actions ;<br />
                      • situer dans le temps les actions, les<br />
                      évolutions ;<br />
                      • orienter un trajet dans l’espace.<br />
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Parler pour décrire,<br />
                      décomposer dans :<br />
                      • les activités physiques ;<br />
                      • les activités numériques, les<br />
                      formes, les grandeurs ;<br />
                      • les activités artistiques ;<br />
                      • les activités d’exploration du<br />
                      monde.
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Utilisation de :<br />
                      • adverbes : à droite…<br />
                      • prépositions dans, sous…<br />
                      • adjectifs, compléments du nom,<br />
                      propositions relatives
                    </td>
                  </tr>



                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • rapprocher par les points communs<br />
                      (éléments ou caractéristiques) ;<br />
                      • contraster par les points de différences<br />
                      (éléments ou caractéristiques) ;<br />
                      • apprécier des écarts (plus/moins /le<br />
                      meilleur /le pire ...) ;<br />
                      • classer, catégoriser en utilisant des<br />
                      termes génériques (fruits, légumes,<br />
                      véhicules …) ;<br />
                      • opposer des caractéristiques par<br />
                      l’utilisation de mots contraires.
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Parler pour comparer, contraster,<br />
                      rapprocher dans :<br />
                      • les activités physiques ;<br />
                      • les activités numériques, les<br />
                      formes, les grandeurs ;<br />
                      • les activités artistiques ;<br />
                      • les activités d’exploration du<br />
                      monde.
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Utilisation de :<br />
                      • comme<br />
                      • plus/moins/aussi<br />
                      • superlatifs : le meilleur …<br />
                      • contraires…
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container mx-auto px-4 pb-8 pt-8">
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">

                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4 text-left">
                      Mobiliser le langage dans toutes ses dimensions
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">

                    </td>

                  </tr>

                </tbody>
              </table>
            </div>





            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      L’enseignant observe que l’enfant commence à réussir ou réussit<br />
                      régulièrement à…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Contexte, circonstances,<br />
                      dispositifs, activités…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Pour les<br />
                      apprentissages<br />
                      suivants…
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • justifier un choix, une décision, une<br />
                      action, un comportement … ;<br />
                      • expliquer un déroulement ;<br />
                      • dire les manières de… ;<br />
                      • expliquer les causes, les conséquences,<br />
                      la condition ;<br />
                      • dire les procédures pour faire, pour jouer.<br />
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Parler pour expliquer dans :<br />
                      • les activités physiques ;<br />
                      • les activités numériques, les<br />
                      formes, les grandeurs ;<br />
                      • les activités artistiques ;<br />
                      • les activités d’exploration du<br />
                      monde.
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Utilisation de :<br />
                      • compléments circonstanciels<br />
                      de manière<br />
                      • connecteurs (parce que/à<br />
                      cause de) conditions<br />
                    </td>
                  </tr>


                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • prévoir une installation, une organisation ;<br />
                      • prévoir une succession d’actions,<br />
                      d’activités ;<br />
                      • prévoir des résultats, des effets, des<br />
                      évènements, des actions, des réactions ;<br />
                      • prévoir une procédure de réalisation.<br />
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Parler pour anticiper, se<br />
                      projeter dans :<br />
                      • les activités physiques,<br />
                      artistiques ;<br />
                      • les activités numériques, les<br />
                      formes, les grandeurs ;<br />
                      • les activités d’exploration du<br />
                      monde.
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Utilisation de :<br />
                      • conditionnel /Futur simple,<br />
                      proche, antérieur<br />
                      • adverbe peut-être<br />
                    </td>
                  </tr>

                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      A partir de sa propre expérience ou savoir :<br />
                      • évoquer une émotion, un fait, une<br />
                      sensation, une action à partir d’œuvres<br />
                      musicales ou visuelles, de danses, de jeu<br />
                      de mimes … ;<br />
                      • justifier la reconnaissance d’une<br />
                      émotion/sensation dans un mouvement,<br />
                      une mélodie, une représentation ;<br />
                      • modifier légèrement une règle, une<br />
                      histoire, un rôle … ;<br />
                      • imaginer les raisons de…
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Parler pour interpréter dans :<br />
                      • les activités physiques ;<br />
                      • les activités numériques, les<br />
                      formes, les grandeurs ;<br />
                      • les activités artistiques ;<br />
                      • les activités d’exploration du<br />
                      monde.
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Utilisation de :<br />
                      • expression de l’incertitude (il<br />
                      me semble…)<br />
                      • lexique sensations<br />
                      • jeux de rôles<br />
                      • comparaison : on dirait<br />
                      • comparatifs.
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 pb-8 pt-8">
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">

                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4 text-left">
                      Échanger et réfléchir avec les
                      autres.
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      S’exprimer et se faire comprendre dans un langage syntaxiquement correct et
                      précis.
                    </td>

                  </tr>

                </tbody>
              </table>
            </div>


            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      L’enseignant observe que l’enfant commence à réussir ou réussit
                      régulièrement à…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Contexte, circonstances,
                      dispositifs, activités…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Pour les
                      apprentissages
                      suivants…
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • utiliser des « mots phrases »<br />
                      ex : « couper ! » pour : il faut couper l’orange avec le couteau ;<br />
                      • juxtaposer deux mots pour se faire comprendre<br />
                      ex : « Ezio tombé » pour : je suis tombé ;<br />
                      • élaborer des phrases avec un groupe nominal simple (i pour<br />
                      il) et un groupe verbal simple ou dans des structures simples :<br />
                      il faut, c’est …<br />
                      ex : i faut piquer…. … i met son pantalon … ;<br />
                      • élaborer des phrases déclaratives simples autour d’un<br />
                      groupe nominal et d’un groupe verbal<br />
                      ex : le chapeau s’envole, l’écharpe s’envole (enfant<br />
                      racontant « le vent m’a pris …» de Rascal) ;<br />
                      • élaborer des phrases plus longues :<br />
                      » avec expansion du groupe verbal : COD / COI<br />
                      » avec expansion du groupe nominal : adjectif / relative/<br />
                      complément du nom<br />
                      » avec GN + GV + complément de phrases : compléments<br />
                      circonstanciels (temps, lieu, cause…) ;<br />
                      • élaborer des phrases complexes avec propositions<br />
                      subordonnées ;<br />
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Conversation<br />
                      Compte-rendu<br />
                      Nouvelle<br />
                      Récit<br />
                      Commentaire<br />
                      Discussion, débat<br />
                      Consigne d’action<br />
                      Synthèse et bilan<br />
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Progression syntaxique<br />
                      des propositions dans les<br />
                      différentes conduites<br />
                      orales..
                    </td>
                  </tr>

                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • s’appuyer beaucoup sur des verbes très fréquents (dire, faire,<br />
                      mettre, aller, prendre, avoir, être…) et des pronoms pour<br />
                      s’exprimer<br />
                      ex : il l’a pris … vas-y met le !... ;<br />
                      • s’emparer du vocabulaire donné en classe et l’utiliser à bon<br />
                      escient dans les tâches langagières ;<br />
                      • corriger, reprendre son propos pour remplacer un mot par un<br />
                      autre plus précis, plus expert<br />
                      ex : renverser /verser ;<br />
                      • employer un vocabulaire de base (vie quotidienne à l’école)<br />

                      suffisamment développé pour être précis dans ses prises de<br />
                      parole et dans les activités ordinaires de la classe ;<br />
                      • réutiliser dans un autre contexte les mots appris dans un<br />
                      certains contexte, en classe ;<br />
                      ex : le verbe « se faufiler » appris dans l’histoire de la moufle<br />
                      est utilisé pour raconter l’histoire du renard voleur de poules<br />
                      … ;<br />
                      • utiliser régulièrement des adjectifs et des adverbes pour<br />
                      spécifier son propos ;<br />
                      • utiliser des connecteurs logiques, temporels<br />
                      ex : parce que, alors, tout à coup, ensuite, enfin, d’abord, après,<br />
                      pendant…
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Conversation<br />
                      Compte-rendu<br />
                      Nouvelle<br />
                      Récit<br />
                      Commentaire<br />
                      Discussion, débat<br />
                      Consigne d’action<br />
                      Synthèse et bilan<br />
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Progression lexicale des<br />
                      propositions dans les<br />
                      différentes conduites<br />
                      orales.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>


      <section>
        <div className="container mx-auto px-4 pb-8 pt-8" >
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">

                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4 text-left">
                      Commencer à réfléchir sur<br />
                      la langue et acquérir une<br />
                      conscience phonologique.<br />
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Repérer les régularités dans la langue à l’oral en français. Manipuler des syllabes.<br />
                      Discriminer des sons (syllabes, sons voyelles ; quelques sons –consonnes hors<br />
                      des consonnes occlusives).
                    </td>

                  </tr>

                </tbody>
              </table>
            </div>

            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      L’enseignant observe que l’enfant commence à réussir ou réussit<br />
                      régulièrement à…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Contexte, circonstances,<br />
                      dispositifs, activités…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Pour les<br />
                      apprentissages<br />
                      suivants…
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • synchroniser le débit de la comptine ou jeu de doigts récité<br />
                      avec la gestuelle associée ;<br />
                      • réciter comptines et vire-langues en prêtant attention aux<br />
                      assonances, aux allitérations et à l’articulation en jeu ;<br />
                      • scander et dénombrer les syllabes phoniques d’un mot<br />
                      en respectant les variations régionales<br />
                      ex : « e » final prononcé dans le sud de la France ;<br />
                      • reconnaître et discriminer une syllabe dans une liste de<br />
                      mots, dans un texte ;<br />
                      • trouver les mots pour produire de nouvelles rimes et<br />
                      assonances ;<br />
                      • pratiquer des opérations sur les syllabes de mots : enlever,<br />
                      ajouter, inverser, localiser, substituer (avec augmentation<br />
                      progressive de la longueur des mots à transformer) ;<br />
                      • produire des pseudo-mots par combinaison de syllabes ;<br />
                      • isoler et discriminer un phonème dont l’articulation peut<br />
                      être maintenue (voyelle, /s/, /f/, /z/ etc.) ;
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      • localiser et coder la place d’un phonème dans le mot<br />
                      (première, deuxième… syllabe/ début, milieu ou fin de<br />
                      mot) ;<br />
                      • distinguer des sons proches (f/v, s/ch, s/z, ch/f etc…)..<br />
                      Avec les supports<br />
                      suivants<br />
                      • comptines<br />
                      • jeux de doigts<br />
                      • vire-langue<br />
                      • jeux de langage : mots<br />
                      tordus etc.<br />
                      • listes de mots<br />
                      • boites à mots<br />
                      • images<br />
                      • texte<br />
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Réfléchir sur les unités<br />
                      sonores de la langue en<br />
                      se détachant du sens des<br />
                      mots.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container mx-auto px-4 pb-8 pt-8" >
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">

                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4 text-left">
                      Ecouter de l’écrit et comprendre
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Manifester de la curiosité par rapport à l’écrit. Comprendre des textes écrits sans autre aide que le langage entendu.
                    </td>

                  </tr>

                </tbody>
              </table>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      L’enseignant observe que l’enfant commence à réussir ou réussit
                      régulièrement à…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Contexte, circonstances,<br />
                      dispositifs, activités…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Pour les<br />
                      apprentissages<br />
                      suivants…
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • montrer du plaisir à écouter des<br />
                      histoires ;<br />
                      • fréquenter spontanément et<br />
                      régulièrement l’espace lecture ;<br />
                      • solliciter l’adulte pour qu’il lui lise ou<br />
                      relise un livre ;<br />
                      • s’insérer dans l’histoire au fil de la lecture<br />
                      par l’adulte : répéter, mimer, commenter,<br />
                      questionner ;<br />
                      • pointer sur l’image (illustration/photo)<br />
                      des éléments en lien avec le texte ;<br />
                      • identifier les éléments clés de l’histoire :<br />
                      personnage principal, personnages<br />
                      secondaires, actions, lieu… ;<br />
                      • identifier des informations susceptibles de<br />
                      répondre à un questionnement ;<br />
                      • replacer quelques scènes clés<br />
                      de l’histoire lue dans son scénario<br />
                      partiellement recomposé avec des<br />
                      images ;<br />
                      • trouver l’image qui illustre le début<br />
                      (nœud) et la fin (dénouement) de<br />
                      l’histoire et justifier son choix ;<br />
                      • identifier les émotions des personnages<br />
                      en prenant appui sur les mots du texte ;<br />
                      • prêter des intentions à des personnages<br />
                      archétypaux et en déduire des actions à<br />
                      venir dans l’histoire lue ;<br />
                      • en cours de lecture, anticiper un<br />
                      déroulement d’actions dans des scénarios<br />
                      connus (la ruse, la colère, la peur du noir…)<br />
                      ;
                      • établir des liens entre des histoires lues<br />
                      (personnages, scénario) ;<br />
                      • reformuler l’histoire avec ses propres<br />
                      mots (avec ou sans outils/supports) ;<br />
                      • imaginer un autre épisode (avec autre<br />
                      personnage), une autre fin (si…) ;<br />
                      • dire ce qu’il aurait fait à la place de tel<br />
                      personnage à un moment clé de l’histoire.<br />
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Supports de lecture<br />
                      Histoires où l’enchaînement des<br />
                      actions correspond à des scripts<br />
                      de la vie quotidienne de l’enfant (Le<br />
                      bain, le coucher, soigner un<br />
                      rhume).<br />
                      • Histoires où l’enchaînement<br />
                      des actions est organisé vers une<br />
                      chute (récits à structure répétitive,<br />
                      contes de randonnée).<br />
                      • Histoires où l’enchaînement<br />
                      des actions est lié au destin d’un<br />
                      personnage central qui évolue<br />
                      et dont la transformation est<br />
                      perceptible entre l’état initial et l’état<br />
                      final du récit.<br />
                      • Documentaires en lien avec un<br />
                      projet de classe.
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Réception de langage écrit<br />
                      pour en comprendre le contenu :<br />
                      choix de textes de plus en plus<br />
                      longs et éloignés de l’oral ;<br />
                      (littérature de jeunesse : textes de<br />
                      fiction et documentaire).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div></div>
      </section>

      <section>
        <div className="container mx-auto px-4 pb-8 pt-8" >
          <div className="items-center flex flex-wrap bg-gray-100">
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">

                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4 text-left">
                      Découvrir la fonction de l’écrit.
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Manifester de la curiosité par rapport à l’écrit.
                    </td>

                  </tr>

                </tbody>
              </table>
            </div>



            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      L’enseignant observe que l’enfant commence à réussir ou réussit<br />
                      régulièrement à…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Contexte, circonstances,<br />
                      dispositifs, activités…
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                      Pour les<br />
                      apprentissages<br />
                      suivants…
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                      • s’intéresser : regarder, feuilleter les écrits<br />
                      présents dans la classe (prénoms, imagiers,<br />
                      cahier de vie…) ;<br />
                      • chercher des repères dans les caractéristiques<br />
                      du support ;<br />
                      • émettre des hypothèses sur les écrits affichés<br />
                      dans la classe (prénoms, date…) ;<br />
                      • reconnaître des écrits utilisés fréquemment<br />
                      dans le quotidien de la classe ;<br />
                      • se référer spontanément aux écrits présents<br />
                      dans la classe (mots, répertoires de comptines,<br />
                      textes, cahiers de vie, de littérature, de<br />
                      sciences…) en vue d’une utilisation particulière ;<br />
                      • expliquer la fonction et les usages des écrits<br />
                      utilisés les plus fréquemment en classe ;<br />
                      • reconnaître des écrits utilisés moins<br />
                      fréquemment ou liés à un environnement élargi<br />
                      (l’école, la famille, le quartier) ;<br />
                      • différencier et catégoriser différents types de<br />
                      livres selon des critères de fonction (expliquer,<br />
                      raconter…), d’auteurs ;<br />
                      • différencier des types d’écrits et associer un<br />
                      écrit à un projet d’écriture ou de communication ;<br />
                      • proposer spontanément de recourir à l’écrit<br />
                      pour trouver ou transmettre une information.<br />
                    </th>
                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      • Situations nécessitant<br />
                      l’utilisation de livres<br />
                      variés, affiches, lettres,<br />
                      messages électroniques ou<br />
                      téléphoniques, étiquettes,<br />
                      etc.
                    </td>


                    <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                      Utiliser divers supports en<br />
                      relation avec des situations ou des
                      projets.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div></div>
      </section>


      <section>
        <div className="container mx-auto px-4 pb-8 pt-8">
          <div className="items-center flex flex-wrap bg-gray-100">
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">

              <tbody>
                <tr>
                  <th className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4 text-left">
                    Commencer à produire des<br />
                    écrits et en découvrir le<br />
                    fonctionnement.
                  </th>
                  <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                    Participer verbalement à la production d’un écrit.<br />
                    Savoir que l’on n’écrit pas comme on parle.
                  </td>

                </tr>

              </tbody>
            </table>
          </div>



          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                    L’enseignant observe que l’enfant commence à réussir ou réussit
                    régulièrement à…
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                    Contexte, circonstances,<br />
                    dispositifs, activités…
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                    Pour les<br />
                    apprentissages<br />
                    suivants…
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                    Pour les apprentissages<br />
                    suivants…<br />
                    faire des propositions de …<br />
                    • fragment de l’information<br />
                    Ex : « On va parler des papillons » ;<br />
                    • d’organisation du texte<br />
                    Ex : « D’abord, on va dire comment ils<br />
                    sont les papillons et après on va dire<br />
                    comment ils font des bébés » ;<br />
                    • évoquant le destinataire : ce qu’il sait,<br />
                    pense, croit, se demande ; .<br />
                    • répéter à l’identique l’énoncé à écrire ;<br />
                    • utiliser des formats syntaxiques simples<br />
                    pour produire un énoncé qui peut s’écrire<br />
                    Ex : c’est …, il y a …, etc.<br />
                    • ralentir son débit pour s’adapter au<br />
                    rythme de l’écriture en s’approchant du<br />
                    découpage de la chaîne parlée en mots ;<br />
                    • formuler ou reformuler son propos pour<br />
                    respecter les règles de l’écrit : négation<br />
                    (ne…pas), suppression de reprise<br />
                    pronominale (le loup, il…) etc. ;<br />
                    • parler de ce qu’on « ne peut pas dire<br />
                    quand on écrit »<br />
                    Ex : « On n’écrit pas i sait… » ;<br />
                    • choisir le lexique de spécialité utilisé<br />
                    dans la classe et complexifier l’organisation<br />
                    syntaxique de son énoncé (compléments,<br />
                    relatives, conjonctives...) ;<br />
                    • prendre en compte des phénomènes<br />
                    textuels de cohérence/cohésion dans le<br />
                    suivi du propos ;<br />
                    • demander des relectures ;<br />
                    • faire des propositions de corrections pour<br />
                    se rapprocher de la forme écrite (syntaxe,<br />
                    vocabulaire, concordance des temps) ;<br />
                    • participer à l’écriture de certains mots.<br />
                    Ex : demander comment s’écrit le mot<br />
                    Noël ; faire utiliser les outils de la classe<br />
                    (affichages, répertoires de mots, textes<br />
                    de référence…) pour dicter lettre à lettre<br />
                    quelques mots du texte.<br />
                    • participer à la gestion de marques<br />
                    typographiques<br />
                    Ex : retour à la ligne, retrait, marques de<br />
                    ponctuation etc.<br />
                    • utiliser des termes métalinguistiques<br />
                    (début, fin, phrase, mots, lignes, lettres)<br />
                    pour participer à la gestion de l’écriture.
                  </th>
                  <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                    Détermination du contenu et<br />
                    construction du canevas : se mettre<br />
                    d’accord sur ce qu’on veut dire<br />
                    avec cet écrit.<br />
                    Situations de production d’écrits :<br />
                    • Fonctionnels :<br />
                    correspondances ; écrits de<br />
                    mémoire de la classe (ex : compterendu, récit de visite) ; écrits<br />
                    intermédiaires (ex : listes, pensebête, inventaires) ; règles de jeux,<br />
                    fiches techniques, recettes…<br />
                    • Fictionnels :<br />
                    à partir d’albums ou de contes :<br />
                    écrire un nouvel épisode de<br />
                    l’histoire en randonnée, une autre<br />
                    fin « si… » ; une suite possible,<br />
                    réécrire l’histoire à sa façon ;<br />
                    écrire une nouvelle histoire en<br />
                    s’appuyant sur une structure –<br />
                    matrice- repérée….<br />
                    Élaboration/ négociation du texte à<br />
                    écrire et à dicter<br />
                    • verbaliser le contenu du<br />
                    message.<br />
                    • dicter pour le faire écrire ;<br />
                    • relire pour continuer, enchaîner<br />
                    • relire pour valider<br />
                  </td>


                  <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                    • Poésie :<br />
                    écrire une suite ; écrire un poème<br />
                    à la manière de…<br />
                    Comprendre progressivement ce<br />
                    qu’est l’écrit :<br />
                    • ce qui se dit peut s’écrire ;<br />
                    • on n’écrit pas comme on parle ;<br />
                    • l’écrit permet toutes les reprises<br />
                    nécessaires ;<br />
                    • quand on écrit, on fait attention<br />
                    à ce que l’on dit et à la façon de<br />
                    le dire ;<br />
                    • il ne suffit pas de parler pour<br />
                    dicter.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </section>

      <section>
      <div className="container mx-auto px-4 pb-8 pt-8">
        <div className="items-center flex flex-wrap bg-gray-100">
        <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">

              <tbody>
                <tr>
                  <th className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4 text-left">
                    Découvrir le principe<br />
                    alphabétique.
                  </th>
                  <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                    Manifester de la curiosité par rapport à l’écrit. Pouvoir redire les mots d’une phrase<br />
                    écrite après sa lecture par l’adulte, les mots du titre connu d’un livre ou d’un texte<br />
                    Reconnaître les lettres de l’alphabet et connaître les correspondances entre les<br />
                    trois manières de les écrire : cursive, script, capitales d’imprimerie.<br />
                    Copier à l’aide d’un clavier
                  </td>

                </tr>

              </tbody>
            </table>
          </div>



          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                    L’enseignant observe que l’enfant commence à réussir ou réussit<br />
                    régulièrement à…
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                    Contexte, circonstances,<br />
                    dispositifs, activités…
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                    Pour les<br />
                    apprentissages<br />
                    suivants…
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                    • différencier dessins, écritures, graphismes,<br />
                    pictogrammes, symbole et signes ;<br />
                    • identifier son prénom en prenant des repères visuels<br />
                    (forme de majuscule, longueur, point sur un I, accent,<br />
                    graphie particulière comme le X ou le H, dernière lettre,<br />
                    trait d’union…)<br />
                    • identifier des mots, en prenant appui par exemple sur :<br />
                    » la longueur en sachant qu’elle correspond à la longueur<br />
                    de l’énoncé oral ;<br />
                    » les lettres et leur ordre puis, en fonction de la lettre, en<br />
                    grande section, sa valeur sonore.<br />
                    • faire correspondre les trois écritures en tracé manuscrit<br />
                    et sur traitement de texte. Passer d’une écriture à une<br />
                    autre : capitale d’imprimerie, script et cursive<br />
                    • reconnaître et nommer la majorité des lettres de<br />
                    l’alphabet<br />
                    • marquer l’espace entre chaque mot pour écrire un titre,<br />
                    une phrase… ;<br />
                    • utiliser le lexique qui permet de nommer les unités de<br />
                    la langue : mot, lettre, syllabe, son, phrase, texte, ligne,<br />
                    majuscule ;<br />
                    • décomposer le mot en syllabes, en isolant la syllabe qu’il<br />
                    écrit, en énonçant le nom de la lettre et sa valeur sonore.<br />
                  </th>
                  <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                    Dans une situation de<br />
                    - de projet d’écriture<br />
                    - de repérage dans un écrit<br />
                    - de jeux<br />
                    Kim visuels<br />
                    Kim visuels des lettres<br />
                    Loto des lettres<br />
                    Mémory des lettres<br />
                    Mistigri des lettres<br />
                    Découverte du prénom caché<br />
                    Jeu de l’oie des lettres<br />
                    Lecture et production<br />
                    d’abécédaires.<br />
                  </td>


                  <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                    Comprendre les<br />
                    relations entre lettres et<br />
                    sons et commencer à<br />
                    mettre en œuvre le<br />
                    principe alphabétique<br />
                    pour rendre possibles<br />
                    les premières écritures<br />
                    autonomes en fin<br />
                    d’école maternelle
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          </div>
      </section>
    
    <section>
      <div className="container mx-auto px-4 pb-8 pt-8" id="langage">
        <div className="items-center flex flex-wrap bg-gray-100">














       







          <br />
          <br />


          
          <br /><br />
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">

              <tbody>
                <tr>
                  <th className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4 text-left">
                    Commencer à écrire tout seul.
                  </th>
                  <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                    Reconnaître les lettres de l’alphabet et connaître les correspondances entre les<br />
                    trois manières de les écrire.<br />
                    Ecrire son prénom en écriture cursive sans modèle.<br />
                    Copier à l’aide d’un clavier.<br />
                    Ecrire seul un mot en utilisant des lettres ou groupes de lettres empruntés aux<br />
                    mots connus.
                  </td>

                </tr>

              </tbody>
            </table>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                    L’enseignant observe que l’enfant commence à réussir ou réussit<br />
                    régulièrement à…
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                    Contexte, circonstances,<br />
                    dispositifs, activités…
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-1 border-r-1whitespace-nowrap font-semibold text-left">
                    Pour les<br />
                    apprentissages<br />
                    suivants…
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border-t-1 border border-solid  px-6 align-left border-l-1 border-r-1text-xs p-4 text-left">
                    • produire un tracé avec une intention ;<br />
                    • prendre des repères dans l’espace<br />
                    feuille ;<br />
                    • gérerl’espace graphique (aller de gauche<br />
                    à droite et maintenir un alignement) ;<br />
                    • adopter une posture confortable ;<br />
                    • tenir de façon adaptée l’instrument<br />
                    d’écriture ;<br />
                    • tracer chaque lettre ;<br />
                    • enchaîner plusieurs lettres ;<br />
                    • enchaîner plusieurs lettres en ne levant<br />
                    qu’à bon escient l’instrument d’écriture ;<br />
                    • s’exercer à des transcriptions de mots,<br />
                    phrases, courts textes connus, à leur saisie<br />
                    sur ordinateur.<br />
                    • produire des suites de lettres : pseudos<br />
                    lettres ou (et) des lettres sans valeur<br />
                    sonore ;<br />
                    • utiliser le nom des lettres pour encoder<br />
                    un mot : par exemple KKO pour cacao ;<br />
                    • utiliser des mots connus mémorisés<br />
                    ou retrouvés dans les outils de la classe<br />
                    (affichages, répertoires de mots, textes de<br />
                    référence…) ;<br />
                    • utiliser un morceau de mot connu ;<br />
                    • utiliser un code quel qu’il soit : un<br />
                    phonogramme « j’ai dessiné une dent<br />
                    pour faire le son [an] » ; une lettre (o pour<br />
                    écrire « mo ») qui a la valeur symbolique<br />
                    d’unité entendue dans la prononciation du<br />
                    mot ;<br />
                    • encoder un mot en prenant appui sur la<br />
                    syllabe : par exemple AAE pour malade ;<br />
                    • encoder un mot en prenant appui sur<br />
                    la syllabe et le phonème : FOTO pour<br />
                    écrire « photo » ; LIVER pour l’hiver.<br />
                  </th>
                  <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                    Ecriture :
                    • du prénom, du nom de famille<br />
                    • d’un mot collectif simple, court,<br />
                    se référant à un vécu commun<br />
                    (marionnette, héros d’une histoire)<br />
                    • de la légende de dessins ou de<br />
                    photos…<br />
                    • d’un mot choisi par l’enfant<br />
                    • d’autres mots qui permettent un<br />
                    travail approfondi sur certaines<br />
                    lettres, notamment celles qui ont<br />
                    posé des difficultés.<br />
                    Copie :<br />
                    • de mots attrayants (nom d’un<br />
                    camarade, d’un héros d’album,<br />
                    d’une fête scolaire, etc.)<br />
                    • de plusieurs mots ou courtes<br />
                    phrases (légende, expressions,<br />
                    locution.) Travail sur des interlignes<br />
                    de plus en plus réduits (sans aller<br />
                    en-deçà de 0,5 cm) ; travail des<br />
                    liaisons (ou ligatures) entre les<br />
                    lettres.<br />
                    Traduction graphique :<br />
                    • de quelques sonorités d’un<br />
                    mot pour lequel ils éprouvent de<br />
                    l’intérêt alors qu’ils n’ont pas le<br />
                    modèle sous les yeux (écritures<br />
                    spontanées).
                  </td>


                  <td className="border-t-1 border border-solid  px-6 align-middle border-l-1 border-r-1text-xs whitespace-nowrap p-4">
                    Contrôler, guider et maîtriser les<br />
                    gestes moteurs mobilisés dans le<br />
                    dessin et l’écriture<br />
                    S’entraîner avant de pratiquer<br />
                    l’écriture cursive : des exercices<br />
                    graphiques.<br />
                    <br />
                    Découvrir le principe alphabétique<br />
                    tout en s’initiant à la maîtrise<br />
                    motrice du tracé de mots et de<br />
                    lettres<br />
                    S’essayer à l’écriture de mots.<br />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>















        </div>

      </div>

      </section>

      <Footer />
    </>
  );
}
