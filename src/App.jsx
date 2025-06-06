import { episodeList } from "./data";
import { useState } from "react";

export default function App() {
  // TODO
  const [episodesArray, setEpisodesArray] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState('');

  const listOfEpisodes = () => {
    return(
      <section>
        <h2>Episodes</h2>
      </section>
    )
  }
  
  return(
    <>
      <h1>Dark Echoes</h1>
      <main>
        <listOfEpisodes />
      </main>
    </>
  )
}
