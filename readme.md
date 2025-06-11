<h1>Project: Mario Kart.JS</h1>

<table>
    <tr>
        <td>
            <img src="/docs/header.gif" alt="Mario Kart" width="200">
        </td>
        <td>
            <b>Objective:</b>
            <p>Mario Kart is a series of racing games developed and published by Nintendo. In this project, I developed the logic of a video game to simulate Mario Kart races, taking into account the rules and mechanics below.</p>
        </td>
    </tr>
</table>

<h2>Players</h2>
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
<tr>
<td style="border: 1px solid black; text-align: center;">
<p>Mario</p>
<img src="/docs/mario.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Speed: 4</p>
<p>Maneuverability: 3</p>
<p>Power: 3</p>
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Peach</p>
<img src="/docs/peach.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Speed: 3</p>
<p>Maneuverability: 4</p>
<p>Power: 2</p>
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Yoshi</p>
<img src="/docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Speed: 2</p>
<p>Maneuverability: 4</p>
<p>Power: 3</p>
</td>
</tr>
<tr>
<td style="border: 1px solid black; text-align: center;">
<p>Bowser</p>
<img src="/docs/bowser.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Speed: 5</p>
<p>Maneuverability: 2</p>
<p>Power: 5</p>
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Luigi</p>
<img src="/docs/luigi.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Speed: 3</p>
<p>Maneuverability: 4</p>
<p>Power: 4</p>
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Donkey Kong</p>
<img src="/docs/dk.gif" alt="Mario Kart" width="60" height="60">
</td>
<td style="border: 1px solid black; text-align: center;">
<p>Speed: 2</p>
<p>Maneuverability: 2</p>
<p>Power: 5</p>
</td>
</tr>
</table>

<h3>🕹️ Rules & Mechanics:</h3>

<b>Players:</b>

<input type="checkbox" id="players-item" />
<label for="players-item">The computer must receive two characters to compete in the race, each as an object</label>

<b>Tracks:</b>

<ul>
  <li><input type="checkbox" id="tracks-1-item" /> <label for="tracks-1-item">The characters will race on a randomly generated 5-round track</label></li>
  <li><input type="checkbox" id="tracks-2-item" /> <label for="tracks-2-item">At each round, a track block will be drawn and it can be a straight, a curve, or a duel</label>
    <ul>
      <li><input type="checkbox" id="tracks-2-1-item" /> <label for="tracks-2-1-item">If the track block is a STRAIGHT, the player rolls a 6-sided die and adds their SPEED attribute; whoever scores higher gets 1 point</label></li>
      <li><input type="checkbox" id="tracks-2-2-item" /> <label for="tracks-2-2-item">If the block is a CURVE, the player rolls a 6-sided die and adds their MANEUVERABILITY; highest score wins 1 point</label></li>
      <li><input type="checkbox" id="tracks-2-3-item" /> <label for="tracks-2-3-item">If the block is a DUEL, both roll a die and add their POWER; the one with the lower total loses 1 point</label></li>
      <li><input type="checkbox" id="tracks-2-4-item" /> <label for="tracks-2-4-item">No player can have a score below zero</label></li>
    </ul>
  </li>
</ul>

<b>Victory Condition:</b>

<input type="checkbox" id="victory-item" />
<label for="victory-item">At the end, the player with the most points wins</label>
