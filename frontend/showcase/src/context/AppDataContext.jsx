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
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-400">{error}</div>;
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