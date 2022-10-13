import React, { useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const ExperienceContext = React.createContext();

export function useExperience() {
  return useContext(ExperienceContext);
}

export const ExperienceProvider = ({ children }) => {
  const [experienceItems, setExperienceItems] = useLocalStorage(
    'experienceItems',
    [
      {
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        id: uuidV4(),
      },
    ]
  );

  function addExperienceItem({
    role,
    company,
    startDate,
    endDate,
    description,
  }) {
    setExperienceItems((prevExperienceItems) => {
      return [
        ...prevExperienceItems,
        { role, company, startDate, endDate, description, id: uuidV4() },
      ];
    });
  }

  function changeExperienceItem({
    role,
    company,
    startDate,
    endDate,
    description,
    id,
  }) {
    setExperienceItems(() => {
      return experienceItems.map((item) => {
        if (item.id === id) {
          return { role, company, startDate, endDate, description, id };
        } else {
          return { ...item };
        }
      });
    });
  }

  function deleteExperienceItem({ id }) {
    setExperienceItems((prevExperienceItems) => {
      return prevExperienceItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ExperienceContext.Provider
      value={{
        experienceItems,
        addExperienceItem,
        changeExperienceItem,
        deleteExperienceItem,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};
