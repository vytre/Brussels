import * as React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
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

const startside = (
	<div class="main_column">
		<div class="box_yellow">
			<div class="row1_yellow">
				<div class="text_box">
					<div class="text_header_yellow">
						<h2>
							ANCEP skal bidra til at
							<br /> Arne Næss’ tanker blir
							<br /> gjort lett tilgjengelige for
							<br /> alle.
						</h2>
					</div>

					<p class="text_yellow">
						ANCEP er organiasjonen som
						<br /> bidrar til å tilgjengeligegjøre Arne
						<br /> Næss sine værk. De har et stort,
						<br /> og variert arkiv av Arne Næss sine
						<br /> tanker, og meninger. Med dette så
						<br /> kan alle dykke dypt inn i Arne
						<br /> Næss sin verden.
					</p>

					<div class="button_ANCEP"></div>
				</div>
			</div>

			<div class="row2_yellow">
				<div class="arne_klatrer"></div>
				<div class="colorbox_yellow"></div>
			</div>
		</div>

		<div class="box_blue">
			<div class="row1_blue">
				<div class="arne_fjellet"></div>
				<div class="colorbox_blue"></div>
			</div>

			<div class="row2_blue">
				<div class="text_box_blue">
					<div class="text_header_blue">
						<h2>
							ANCEP skal bidra til at
							<br /> Arne Næss’ tanker blir
							<br /> gjort lett tilgjengelige for
							<br /> alle.
						</h2>
					</div>

					<p class="text_blue">
						       ANCEP er organiasjonen som
						<br /> bidrar til å tilgjengeligegjøre Arne
						<br /> Næss sine værk. De har et stort,
						<br /> og variert arkiv av Arne Næss sine
						<br /> tanker, og meninger. Med dette så
						<br /> kan alle dykke dypt inn i Arne
						<br /> Næss sin verden.
					</p>
				</div>
			</div>
		</div>

		<div class="box_green">
			<div class="row1_green">
				<div class="text_box_green">
					<div class="text_header_green">
						<h2>Hvem var Arne?</h2>
					</div>

					<p class="text_green">
						Arne var en norsk filosof, kjent for
						<br /> sin lidenskap til natur og
						<br />
						mennesker. han blir sett på som
						<br /> mannen bak dypøkologien og var
						<br /> en veldig innflytningsrik filosof.
						<br /> Arne sine ideer om verden lever
						<br /> videre den dag idag.
					</p>

					<div class="button_arkivet"></div>
				</div>
			</div>
			<div class="row2_green">
				<div class="arne_glad"></div>
				<div class="colorbox_green"></div>
			</div>
		</div>
	</div>
);
const element = document.getElementById("app");
const root = createRoot(element);
root.render(startside);
