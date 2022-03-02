import React, { useEffect, useState } from 'react';
import './App.css';
import { Door } from 'src/@app/models';
import { DataStore } from 'aws-amplify';

const getDoorsFromServer = async (): Promise<Door[]> => {
  // const doors = await API.graphql(AdminDoorListPage_DoorList);
  // return doors;
  try {
    const doors = await DataStore.query(Door);
    console.log(
      'Posts retrieved successfully!',
      JSON.stringify(doors, null, 2),
    );
    return doors;
  } catch (error) {
    console.log('Error retrieving posts', error);
  }
  return [];
};
function App() {
  const [doors, setDoors] = useState<Door[]>([]);
  useEffect(() => {
    getDoorsFromServer()
      .then((doorsFromServer) => {
        setDoors(doorsFromServer);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  console.log("door list from datastore", doors)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
