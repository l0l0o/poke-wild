// import React, { useState } from "react";
// import { Button, View } from "react-native";
// import { Audio } from "expo-av";

// export default function SoundExample(audioPath: string) {
//   const [sound, setSound] = useState();

//   // Charger et jouer le son
//   const playSound = async () => {
//     const { sound } = await Audio.Sound.createAsync(
//       require(audioPath) // Remplacez par le chemin vers votre fichier audio
//     );
//     setSound(sound);
//     await sound.playAsync(); // Jouer le son
//   };

//   // Libérer la ressource audio lorsque le composant est démonté
//   React.useEffect(() => {
//     return sound
//       ? () => {
//           sound.unloadAsync(); // Libère les ressources lorsque le composant est démonté
//         }
//       : undefined;
//   }, [sound]);
// }
