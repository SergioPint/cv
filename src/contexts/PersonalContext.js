import React, { useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const PersonalContext = React.createContext();

export function usePersonal() {
  return useContext(PersonalContext);
}

export const PersonalProvider = ({ children }) => {
  const [personalItems, setPersonalItems] = useLocalStorage('personaltems', [
    {
      firstName: '',
      lastName: '',
      street: '',
      location: '',
      phone: '',
      mail: '',
      birthdate: '',
      nationality: '',
      summary: '',
      id: uuidV4(),
    },
  ]);

  function changePersonalItem({
    firstName,
    lastName,
    street,
    location,
    phone,
    mail,
    birthdate,
    nationality,
    summary,
    id,
  }) {
    setPersonalItems(() => {
      return personalItems.map((item) => {
        if (item.id === id) {
          return {
            firstName,
            lastName,
            street,
            location,
            phone,
            mail,
            birthdate,
            nationality,
            summary,
            id,
          };
        } else {
          return { ...item };
        }
      });
    });
  }

  return (
    <PersonalContext.Provider
      value={{
        personalItems,
        changePersonalItem,
      }}
    >
      {children}
    </PersonalContext.Provider>
  );
};
