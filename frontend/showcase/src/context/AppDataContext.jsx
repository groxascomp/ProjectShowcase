import { createContext, useContext, useEffect, useState } from "react";
import {
  getCert,
  getSkills,
  getLinks,
  getAbouts,
  getEducations,
  getExperience,
  getProjects,
} from "../services/api";
import ErrorComponents from "../components/ErrorComponents";
import LoadingComponents from "../components/LoadingComponents";

const AppDataContext = createContext(null);

export function AppDataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      getCert(),
      getSkills(),
      getLinks(),
      getAbouts(),
      getEducations(),
      getExperience(),
      getProjects(),
    ])
      .then(
        ([
          certs,
          skills,
          links,
          abouts,
          educations,
          experiences,
          projects,
        ]) => {
          setData({
            certs,
            skills,
            links,
            abouts,
            educations,
            experiences,
            projects,
          });
        }
      )
      .catch((err) => {
        setError(err.message || "Failed to load application data.");
      })
      .finally(() => {
      // delay hiding loader by 2 seconds
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
}, []);

  if (loading) {
    return <>
      <LoadingComponents/>
    
    </>
  }

  if (error) {
    return <>
      <div className="pt-55"></div>
      <ErrorComponents/>
    
    </>;
  }

  return (
    <AppDataContext.Provider value={data}>
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);

  if (!context) {
    throw new Error("useAppData must be used inside AppDataProvider");
  }

  return context;
}