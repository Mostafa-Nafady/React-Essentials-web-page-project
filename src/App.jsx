import { useCallback, useEffect, useRef, useState } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [modalISOpen, setModalISOpen] = useState(false);

  // useEffect(() => {
  const handleStartRemovePlace = useCallback((id) => {
    modal.current.open();
    setModalISOpen(true);
    selectedPlace.current = id;
  }, []);
  const handleStopRemovePlace = useCallback(() => {
    modal.current.close();
    // setModalISOpen(false);
  }, []);
  const handleSelectPlace = useCallback((id) => {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
  }, []);

  const handleRemovePlace = useCallback(() => {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();
    setModalISOpen(false);
    const storedId = JSON.parse(localStorage.getItem(`selectedPlaces`)) || [];
    localStorage.getItem(
      `selectedPlaces`,
      JSON.stringify(storedId.filter((id) => id !== selectedPlace.current))
    );
  }, []);
  // }, []);

  return (
    <>
      {/* {modalISOpen && ( */}
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
          modalISOpen={modalISOpen}
        />
      </Modal>
      {/* )} */}

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={AVAILABLE_PLACES}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
