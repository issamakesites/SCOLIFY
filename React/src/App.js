import React from "react";
import LoginLeft from "./components/LoginLeft";
import LoginRight from "./components/LoginRight";
import { Routes, Route} from "react-router-dom";
import Login from "./Login.js"
import Error404 from "./Error404";
import MesEnants from "./MesEnfants";
import ParentDashboard from "./ParentDashboard";
import Eleve from "./components/Eleve";
import ModifierEleve from "./components/ModifierEleve";
import VoirEnseignants from "./VoirEnseignants";
import SelectEnfant from "./components/SelectEnfant";
import Cours from "./Cours";
import CoursPage from "./CoursPage";
import EmploiTemps from "./EmploiTemps";
import AbsencesEtRetards from "./AbsencesEtRetards";
import VoirPaiements from "./VoirPaiements";
import Notes from "./notes";
import ResultatsPage from "./ResultatsPage";
import CahierTexte from "./CahierTexte";
import ProfClasses from "./ProfClasses";
import ClassePage from "./ClassePage";
import MesClasses from "./MesClasses";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/eleve/dashboard/" element={<ParentDashboard />} />
        <Route path="/dashboard/" element={<ParentDashboard />} />
        <Route path="/dashboard/edit/:eleveid" element={<ModifierEleve />} />
        <Route path="/dashboard/enseignants" element={<VoirEnseignants />} />
        <Route path="/dashboard/cours" element={<Cours />} />
        <Route path="/dashboard/cours/:matiere" element={<CoursPage />} />
        <Route path="/dashboard/emploidutemps" element={<EmploiTemps />} />
        <Route path="/dashboard/absences-retards" element={<AbsencesEtRetards />} />
        <Route path="/dashboard/paiements" element={<VoirPaiements/>} />
        <Route path="/dashboard/cahier-textes" element={<CahierTexte/>} />
        <Route path="/dashboard/notes" element={<Notes/>} />
        <Route path="/dashboard/notes/:id" element={<Notes/>} />
        <Route path="/dashboard/resultats" element={<ResultatsPage />} />
        <Route path="/dashboard/mes-classes" element={<ProfClasses />} />
        <Route path="/dashboard/mes-eleves/" element={<MesClasses />} />
        <Route path="/dashboard/mes-classes/:classe" element={<ClassePage />} />
        <Route path="/selectenfant" element={<SelectEnfant />} />
        <Route path="/dashboard/*" element={<Error404 />} />
        <Route path="/*" element={<Error404 />} /> 
      </Routes>
  );
}
export default App;