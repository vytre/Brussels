import * as React from "react";

import "../stylesheets/frontpage.css";
function sayHello() {
	alert("You clicked me!");
}

function Button_Start() {
	return (
		<button onClick={sayHello} className="button_Start">
			Start
		</button>
	);
}

function Button_ANCEP() {
	return (
		<button onClick={sayHello} className="button_ANCEP">
			ANCEP
		</button>
	);
}

function Button_Arkivet() {
	return (
		<button onClick={sayHello} className="button_Arkivet">
			Arkivet
		</button>
	);
}

export function Frontpage() {
	return(
		<div className="main_column">
			<div className="starside_topp">
				<div className="containerHeader">
					<div className="header">
						<div className="logo"></div>
						<h1 className="hjem">Hjem</h1>
						<h1 className="dilemmaer">Dilemmaer</h1>
						<h1 className="arkiv">Arkiv</h1>
					</div>
				</div>
				<div className="infoBox">
					<h1 className="title">Etisk Spill</h1>
					<div className="infoTextBox">
						<p className="startGameText">Her kan du teste din oppfatning av diverse dilemmaer. Man blir
							stilt spørsmål, og deretter
							velger man selv hva som er riktig å gjøre i en gitt situasjon. Det er ingen svar som er
							riktig.</p>
					</div>
					<div className="startGame">
						<h1 className="startTitle">Start</h1>
					</div>
				</div>

			</div>
			<div className="box_yellow">
				<div className="row1_yellow">
					<div className="text_box">
						<div className="text_header_yellow">
							<h2>
								ANCEP skal bidra til at
								<br/> Arne Næss’ tanker blir
								<br/> gjort lett tilgjengelige for
								<br/> alle.
							</h2>
						</div>

						<p className="text_yellow">
							ANCEP er organiasjonen som
							<br/> bidrar til å tilgjengeligegjøre Arne
							<br/> Næss sine værk. De har et stort,
							<br/> og variert arkiv av Arne Næss sine
							<br/> tanker, og meninger. Med dette så
							<br/> kan alle dykke dypt inn i Arne
							<br/> Næss sin verden.
						</p>

						<div className="button_ANCEP"></div>
					</div>
				</div>

				<div className="row2_yellow">
					<div className="arne_klatrer"></div>
					<div className="colorbox_yellow"></div>
				</div>
			</div>

			<div className="box_blue">
				<div className="row1_blue">
					<div className="arne_fjellet"></div>
					<div className="colorbox_blue"></div>
				</div>

				<div className="row2_blue">
					<div className="text_box_blue">
						<div className="text_header_blue">
							<h2>
								ANCEP skal bidra til at
								<br/> Arne Næss’ tanker blir
								<br/> gjort lett tilgjengelige for
								<br/> alle.
							</h2>
						</div>

						<p className="text_blue">
							ANCEP er organiasjonen som
							<br/> bidrar til å tilgjengeligegjøre Arne
							<br/> Næss sine værk. De har et stort,
							<br/> og variert arkiv av Arne Næss sine
							<br/> tanker, og meninger. Med dette så
							<br/> kan alle dykke dypt inn i Arne
							<br/> Næss sin verden.
						</p>
					</div>
				</div>
			</div>

			<div className="box_green">
				<div className="row1_green">
					<div className="text_box_green">
						<div className="text_header_green">
							<h2>Hvem var Arne?</h2>
						</div>

						<p className="text_green">
							Arne var en norsk filosof, kjent for
							<br/> sin lidenskap til natur og
							<br/>
							mennesker. han blir sett på som
							<br/> mannen bak dypøkologien og var
							<br/> en veldig innflytningsrik filosof.
							<br/> Arne sine ideer om verden lever
							<br/> videre den dag idag.
						</p>

						<div className="button_arkivet"></div>
					</div>
				</div>
				<div className="row2_green">
					<div className="arne_glad"></div>
					<div className="colorbox_green"></div>
				</div>
			</div>
		</div>
	)
}