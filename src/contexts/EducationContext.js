import React, { useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const EducationContext = React.createContext();

export function useEducation() {
  return useContext(EducationContext);
}

export const EducationProvider = ({ children }) => {
  const [eduItems, setEduItems] = useLocalStorage('eduItems', [
    {
      degree: '',
      uni: '',
      startDate: '',
      endDate: '',
      description: '',
      id: uuidV4(),
    },
  ]);

  function addEduItem({ degree, uni, startDate, endDate, description }) {
    setEduItems((prevEduItems) => {
      return [
        ...prevEduItems,
        { degree, uni, startDate, endDate, description, id: uuidV4() },
      ];
    });
  }

  function changeEduItem({ degree, uni, startDate, endDate, description, id }) {
    setEduItems(() => {
      return eduItems.map((item) => {
        if (item.id === id) {
          return { degree, uni, startDate, endDate, description, id };
        } else {
          return { ...item };
        }
      });
    });
  }

  function deleteEduItem({ id }) {
    setEduItems((prevEduItems) => {
      return prevEduItems.filter((item) => item.id !== id);
    });
  }

  return (
    <EducationContext.Provider
      value={{ eduItems, addEduItem, changeEduItem, deleteEduItem }}
    >
      {children}
    </EducationContext.Provider>
  );
};
