var darkMode = false;
var background = "light";
var root = document.querySelector(':root');

function startJS() {
	https://lukenielsen.nielsen1010041.repl.co
	root.style.setProperty('--color', 'black');
	$("#menu").html(`<div id="menuInner">
			<div>
				<div class="material-symbols-outlined" title="Home" onclick="window.location.href='../'">home</div>
				<!-- <b style="position: absolute; margin-top: 0.1em;">Home</b> -->
			</div>
			<div>
				<div class="material-symbols-outlined" title="Resume" onclick="window.location.href='../resume/'">badge</div>
				<!-- <b style="position: absolute; margin-top: 0.1em;">Resume</b> -->
			</div>
			<div>
				<div class="material-symbols-outlined" title="Blog" onclick="window.location.href='../blog/'">edit</div>
				<!-- <b style="position: absolute; margin-top: 0.1em;">Blog</b> -->
			</div>
			<div>
				<div class="material-symbols-outlined" title="Contact" onclick="window.location.href='../contact/'">mail</div>
				<!-- <b style="position: absolute; margin-top: 0.1em;">Contact</b> -->
			</div>
			<div>
				<div class="material-symbols-outlined" title="Light Mode" onclick="changeColor();" id='darkmode'>light_mode</div>
				<!-- <b style="position: absolute; margin-top: 0.1em;">Dark Mode</b> -->
			</div>
	</div>`);

	$("#menuIO").html(`
 		<div id="menuIOInner">
			<div onclick="window.location.href='../Assets/Others/Blenders/'" class="menuIOItem">
				<div class="material-symbols-outlined">download</div>
				<b class="uncolored">Car Render</b>
			</div>
			<div onclick="window.location.href='../Assets/Others/Blenders/'" class="menuIOItem">
				<div class="material-symbols-outlined">download</div>	
				<b class="uncolored">N4 studios Logo</b>
			</div>
			<div onclick="window.location.href='../Assets/Others/Blenders/'" class="menuIOItem">
				<div class="material-symbols-outlined">download</div>	
				<b class="uncolored">Best of PTV</b>
			</div>
			<div onclick="window.location.href='../Assets/Others/Blenders/" class="menuIOItem">
				<!-- <img onclick="window.location.href='https://github.com/darthluke04'" title="Github" src="../Assets/Icons/blender-logo-icon.png" width="30em;"/> -->
				<div class="material-symbols-outlined">download</div>
				<b class="uncolored">Blender Progress</b>
			</div>
		</div>
 	`);

	$("#menuI").html(`
		<div id="menuIInner">
			<div onclick="window.location.href='../creatorsAndAttributions.txt'" class="menuIItem">
				<div class="material-symbols-outlined">copyright</div>
				<b class="uncolored">Creators And Attributions</b>
			</div>
			<div onclick="window.location.href='../versions.txt'" class="menuIItem">
				<div class="material-symbols-outlined">history</div>	
				<b class="uncolored">Website Versions</b>
			</div>
			<div onclick="setInfoOptions(0, true); toggleInfoOptions(0);" class="menuIItem">
				<div class="material-symbols-outlined">deployed_code_update</div>	
				<b class="uncolored">3D Models</b>
			</div>
			<div onclick="setInfoOptions(1, true); toggleInfoOptions(1)" class="menuIItem">
				<div class="material-symbols-outlined">blender</div>
				<b class="uncolored">Blenders</b>
			</div>
			<div onclick="setInfoOptions(2, true); toggleInfoOptions(2)" class="menuIItem">
				<div class="material-symbols-outlined">stadia_controller</div>
				<b class="uncolored">Minecrtaft Java</b>
			</div>
			<div onclick="setInfoOptions(3, true); toggleInfoOptions(3)" class="menuIItem">
				<div class="material-symbols-outlined">stadia_controller</div>
				<b class="uncolored">Minecrtaft Bedrock</b>
			</div>
			<div onclick="setInfoOptions(4, false); toggleInfoOptions(4)" class="menuIItem">
				<div class="material-symbols-outlined">joystick</div>
				<b class="uncolored">My Games</b>
			</div>
	</div>`);

	$("#menuB").html(`
		<div id="menuBInner">
			<div>
				  <div id="infoBtn" class="material-symbols-outlined" title="Info" onclick="toggleInfo()">expand_Circle_up</div>
			</div>
			<div>
				  <div class="material-symbols-outlined" title="Youtube" onclick="window.location.href='https://www.youtube.com/channel/UCCoYaKF3SkulmLPdgmoy4KQ'">youtube_activity</div>
			</div>
			<div id="menuBIcon" onclick="window.location.href='../'" onmouseenter="document.getElementById('menuN4').src = '../Assets/N4Transparent.png'" onmouseleave="document.getElementById('menuN4').src = '../Assets/N4Transparent.png'">
				<img id="menuN4" src="../Assets/N4Transparent.png" title="N4 Studios" width="50em;"/>
			</div>
			<div>
				  <div class="material-symbols-outlined" title="Replit" onclick="window.location.href='https://replit.com/@nielsen1010041'">code</div>
			</div>
			<div id="menuBGithubLink">
				  <img onclick="window.location.href='https://github.com/darthluke04'" title="Github" src="../Assets/github-mark-white.png" width="30em;"/>
			</div>
	</div>`);

	$("#controls").html(`<div id="controlsInner">
			<div>
				<div class="material-symbols-outlined" title="Blog" onclick="window.location.href='../'">assignment_return</div>
				<!-- <b style="position: absolute; margin-top: 0.1em;">Blog</b> -->
			</div>
	 		<div>
				<div class="material-symbols-outlined" title="Comment" onclick="window.location.href=''">comment</div>
				<!-- <b style="position: absolute; margin-top: 0.1em;">Comment</b> -->
			</div>
			<div>
				<div class="material-symbols-outlined" title="Light Mode" onclick="changeColor();" id='darkmode'>light_mode</div>
				<!-- <b style="position: absolute; margin-top: 0.1em;">Dark Mode</b> -->
			</div>
	</div>`);

	if (window.innerWidth <= 700) {
		document.getElementById("menuI").style = "width: 100%;";
	} else {
		document.getElementById("menuI").style = "width: 25em;";
	}

}

function changeColor() {
	if (document.getElementById("backgroundBlur")) {
		if (background == "light") {
			// Dark Mode
			document.getElementById("body").style = "background-color: #171717;";
			document.getElementById("darkmode").innerHTML = "dark_mode";
			document.getElementById("backgroundBlur").className = "blur-hidden";
			document.getElementById("darkmode").title = "Dark Mode";
			root.style.setProperty('--color', 'white');
			background = "dark";
			darkMode = true;
		} else if (background == "dark") {
			// Blue Mode
			document.getElementById("body").style = "background-color: #00094d;";
			document.getElementById("darkmode").innerHTML = "palette";
			document.getElementById("backgroundBlur").className = "blur-hidden";
			document.getElementById("darkmode").title = "Blue Mode";
			root.style.setProperty('--color', 'white');
			background = "blue"
			darkMode = false;
		} else if (background == "blue") {
			// Stylized Mode
			document.getElementById("body").style = "background-image: url('../Assets/backgroundSlowLow.gif'); background-size: cover;";
			document.getElementById("darkmode").innerHTML = "wallpaper";
			document.getElementById("backgroundBlur").className = "blur-shown-more";
			document.getElementById("darkmode").title = "Stylized Mode";
			root.style.setProperty('--color', '#0CAADC');
			background = "stylized"
		} else if (background == "stylized") {
			// Stylized Mode
			document.getElementById("body").style = "background-image: url('../Assets/backgroundSlowLowFilled.gif'); background-size: cover;";
			document.getElementById("darkmode").innerHTML = "wallpaper_slideshow";
			document.getElementById("backgroundBlur").className = "blur-shown";
			document.getElementById("darkmode").title = "Stylized Mode";
			root.style.setProperty('--color', '#96b4e3');
			background = "stylizedFilled"
		} else if (background == "stylizedFilled") {
			// Light Mode
			document.getElementById("body").style = "background-color: white;";
			document.getElementById("darkmode").innerHTML = "light_mode";
			document.getElementById("backgroundBlur").className = "blur-hidden";
			document.getElementById("darkmode").title = "Light Mode";
			root.style.setProperty('--color', 'black');
			background = "light"
		}
	} else {
		if (background == "light") {
			// Dark Mode
			document.getElementById("body").style = "background-color: #171717;";
			document.getElementById("darkmode").innerHTML = "dark_mode";
			document.getElementById("darkmode").title = "Dark Mode";
			root.style.setProperty('--color', 'white');
			background = "dark";
			darkMode = true;
		} else if (background == "dark") {
			// Blue Mode
			document.getElementById("body").style = "background-color: #00094d;";
			document.getElementById("darkmode").innerHTML = "palette";
			document.getElementById("darkmode").title = "Blue Mode";
			root.style.setProperty('--color', 'white');
			background = "blue"
			darkMode = false;
		} else if (background == "blue") {
			// Light Mode
			document.getElementById("body").style = "background-color: white;";
			document.getElementById("darkmode").innerHTML = "light_mode";
			document.getElementById("darkmode").title = "Light Mode";
			root.style.setProperty('--color', 'black');
			background = "light"
		}
	}
}

function toggleDark() {
	if (darkMode == false) {
		document.getElementById("body").style = "background-color: #171717;";
		document.getElementById("darkmode").innerHTML = "light_mode";
		root.style.setProperty('--color', 'white');
		darkMode = true;
	} else if (darkMode == true) {
		document.getElementById("body").style = "background-color: white;";
		document.getElementById("darkmode").innerHTML = "dark_mode";
		root.style.setProperty('--color', 'black');
		darkMode = false;
	} else if (darkMode == "none") {

	}
}

var infoMenu = false;
var infoOptions = false;
var infoOptionsNum = null;
function toggleInfo() {
	if (infoMenu == false) {
		if (window.innerWidth <= 700) {
			document.getElementById("infoBtn").innerHTML = "expand_circle_down";
			document.getElementById("menuI").style = "bottom: calc(3.9em); width: 50%;"
			infoMenu = true;
		} else {
			document.getElementById("infoBtn").innerHTML = "expand_circle_down";
			document.getElementById("menuI").style = "bottom: calc(2.2em); width: 25em;";
			infoMenu = true;
		}
	} else {
		if (window.innerWidth <= 700) {
			document.getElementById("infoBtn").innerHTML = "expand_circle_up";
			document.getElementById("menuI").style = "bottom: calc(-20em); width: 50%;";
			infoMenu = false;
			closeInfoOptions();
		} else {
			document.getElementById("infoBtn").innerHTML = "expand_circle_up";
			document.getElementById("menuI").style = "bottom: calc(-20em); width: 25em;";
			infoMenu = false;
			closeInfoOptions();
		}
	}
}

var menuIOPrompt = "";

function setInfoOptions(num, isConfidential) {
	var content = "";
	var menuIOPass = "teambatmen";
	if (infoOptionsNum == num || infoOptionsNum == null || true) {
		if (num == 0) {
			content = (`
				<div id="menuIOInner">
					<div onclick="window.location.href='../Assets/Others/Models/register.fbx'" class="menuIOItem">
						<div class="material-symbols-outlined">download</div>
						<b class="uncolored">Register (fbx)</b>
					</div>
					<div onclick="window.location.href='../Assets/Others/Models/register.stl'" class="menuIOItem">
						<div class="material-symbols-outlined">download</div>	
						<b class="uncolored">Register (stl)</b>
					</div>
					<div onclick="window.location.href='../Assets/Others/Models/registerRamp.stl'" class="menuIOItem">
						<div class="material-symbols-outlined">download</div>	
						<b class="uncolored">Register Ramp (stl)</b>
					</div>
					<div onclick="window.location.href='../Assets/Others/Models/SpectronAndN4.stl'" class="menuIOItem">
						<div class="material-symbols-outlined">download</div>	
						<b class="uncolored">Spectron and N4 (stl)</b>
					</div>
				</div>`
			);
			infoOptionsNum = 0;
		} else if (num == 1) {
			content = (`
				<div id="menuIOInner">
					<div onclick="window.location.href='https://drive.google.com/drive/folders/1WfXUqr1BYHfsQwQU4RYAOMoPVNpGns9e?usp=sharing'" class="menuIOItem">
						<div class="material-symbols-outlined">inventory_2</div>
						<b class="uncolored">Car Render</b>
					</div>
					<div onclick="window.location.href='https://drive.google.com/drive/folders/1Sd3SFLsYxaJ9ERK8dHa2ryGnwl-zpFpd?usp=sharing'" class="menuIOItem">
						<div class="material-symbols-outlined">inventory_2</div>	
						<b class="uncolored">N4 studios Logo</b>
					</div>
					<div onclick="window.location.href='https://drive.google.com/drive/folders/0Bxzmxvk1tRuffm5YSC1VUlBNN3JiLTEtWlBFSURrWldnbEtoM2xHaDdlUllhc196YWRUWk0?resourcekey=0-CkM2P73zz2ur8Gw-Ll9CgA&usp=sharing'" class="menuIOItem">
						<div class="material-symbols-outlined">inventory_2</div>	
						<b class="uncolored">Best of PTV</b>
					</div>
					<div onclick="window.location.href='https://drive.google.com/drive/folders/1Emd-uta-MujI2telSgHn8HKW2BUNE_4y?usp=sharing'" class="menuIOItem">
						<div class="material-symbols-outlined">inventory_2</div>
						<b class="uncolored">Blender Progress</b>
					</div>
					<div onclick="window.location.href='../Assets/Others/Blenders/" class="menuIOItem">
						<!-- <img onclick="window.location.href='https://github.com/darthluke04'" title="Github" src="../Assets/Icons/blender-logo-icon.png" width="30em;"/> -->
						<div class="material-symbols-outlined">inventory_2</div>
						<b class="uncolored">Public Blender Files</b>
					</div>
					<div onclick="window.location.href='../Assets/Others/Blenders/N4Intro.blend" class="menuIOItem">
						<div class="material-symbols-outlined">inventory_2</div>
						<b class="uncolored">Blender intro</b>
					</div>
				</div>`
			);
			infoOptionsNum = 1;
		} else if (num == 2) {
			content = (`
				<div id="menuIOInner">
					<div onclick="window.location.href='https://aternos.org/:en/'" class="menuIOItem">
						<div class="material-symbols-outlined">public</div>
						<b class="uncolored">Aternos Hosting</b>
					</div>
					<div onclick="window.location.href='../Assets/Others/Minecraft/Java/GravityShift/worldDownload.zip'" class="menuIOItem">
						<div class="material-symbols-outlined">folder_zip</div>
						<b class="uncolored">Gravity Shift</b>
					</div>
		 		</div>`
			);
			infoOptionsNum = 2;
		} else if (num == 3) {
			content = (`
				<div id="menuIOInner">
					<div onclick="window.location.href='https://aternos.org/:en/'" class="menuIOItem">
						<div class="material-symbols-outlined">public</div>
						<b class="uncolored">Aternos Hosting</b>
					</div>
					<div onclick="window.location.href='../Assets/Others/Minecraft/Bedrock/GravityShift/(OG)GRAVITYSHIFT.mcworld'" class="menuIOItem">
						<div class="material-symbols-outlined">folder_zip</div>
						<b class="uncolored">(OG) Gravity Shift</b>
					</div>
		 			<div onclick="window.location.href='../Assets/Others/Minecraft/Bedrock/GravityShift/(Better)GRAVITYSHIFT.mcworld'" class="menuIOItem">
						<div class="material-symbols-outlined">folder_zip</div>
						<b class="uncolored">(Better) Gravity Shift</b>
					</div>
		 		</div>`
			);
			infoOptionsNum = 3;
		} else if (num == 4) {
			content = (`
				<div id="menuIOInner">
					<div onclick="window.location.href='https://studio.code.org/projects/gamelab/JLdzbBfr0IJ_upCM1JpGNjWKq2dgfsBMf8rImhlldQA'" class="menuIOItem">
						<div class="material-symbols-outlined">play_arrow</div>
						<b class="uncolored">Moc Pac</b>
					</div>
		 			<div onclick="window.location.href='https://semag-website.nielsen101004.repl.co/'" class="menuIOItem">
						<div class="material-symbols-outlined">play_arrow</div>
						<b class="uncolored">Semag Website</b>
					</div>
		 			<div onclick="window.location.href='https://scratch.mit.edu/projects/422580632/'" class="menuIOItem">
						<div class="material-symbols-outlined">play_arrow</div>
						<b class="uncolored">Color Land 4</b>
					</div>
		 			<div onclick="window.location.href='ColorLand5/'" class="menuIOItem">
						<div class="material-symbols-outlined">play_arrow</div>
						<b class="uncolored">Color Land 5</b>
					</div>
					<div onclick="window.location.href='BeginnersStart/'" class="menuIOItem">
						<div class="material-symbols-outlined">play_arrow</div>
						<b class="uncolored">Beginners Start</b>
					</div>
				</div>`
			);
			infoOptionsNum = 4;
		}

		if (isConfidential == true) {
			if (infoOptions == false && menuIOPrompt != menuIOPass) {
				menuIOPrompt = prompt("Please enter the password to access the menu.");
			}

			// console.log(infoOptions);
			// console.log(menuIOPrompt);

			if (menuIOPrompt == menuIOPass) {
				$("#menuIO").html(content);
			} else {
				toggleInfo();
				infoOptions = true;
			}
		} else if (isConfidential == false) {
			$("#menuIO").html(content);
		} else {
			$("#menuIO").html("");
			toggleInfo();
			infoOptions = true;
		}
	}
}

function toggleInfoOptions(num) {
	// console.log("num: " + num);
	// console.log("infoOptionsNum: " + infoOptionsNum)
	if (infoOptions == false) {
		if (window.innerWidth <= 700) {
			document.getElementById("menuIO").style = "bottom: calc(3.9em); margin-left: 50%; width: 50%;";
			document.getElementById("menuI").style = "border-radius: 0.75em 0 0 0; bottom: calc(3.9em); width: 50%;";
			infoOptions = true;
		} else {
			document.getElementById("menuIO").style = "bottom: calc(2.2em); margin-left: 25em; width: 25em;";
			document.getElementById("menuI").style = "border-radius: 0.75em 0 0 0; bottom: calc(2.2em); width: 25em;";
			infoOptions = true;
		}
	} else if (num == infoOptionsNum) {
		if (window.innerWidth <= 700) {
			document.getElementById("menuIO").style = "bottom: calc(3.9em); margin-left: calc(-50%); width: 50%;";
			document.getElementById("menuI").style.borderRadius = "0.75em 0.75em 0 0";
			infoOptions = false;
			infoOptionsNum = null;
		} else {
			document.getElementById("menuIO").style = "bottom: calc(2.2em); margin-left: calc(-25em); width: 25em;";
			document.getElementById("menuI").style.borderRadius = "0.75em 0.75em 0 0";
			infoOptions = false;
			infoOptionsNum = null;
		}
	}
}

function closeInfoOptions() {
	if (window.innerWidth <= 700) {
		document.getElementById("menuIO").style = "bottom: calc(3.9em); margin-left: calc(-50%); width: 50%;";
		document.getElementById("menuI").style = "border-radius: 0.75em 0.75em 0 0; bottom: calc(-20em); width: 50%;";
		infoOptions = false;
		infoOptionsNum = null;
	} else {
		document.getElementById("menuIO").style = "bottom: calc(2.2em); margin-left: calc(-25em); width: 25em;";
		document.getElementById("menuI").style = "border-radius: 0.75em 0.75em 0 0; bottom: calc(-20em); width: 25em;";
		infoOptions = false;
		infoOptionsNum - null;
	}
}