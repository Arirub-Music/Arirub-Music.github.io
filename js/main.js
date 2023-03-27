
const btnSwitch = document.querySelector('#darazul');


btnSwitch.addEventListener('click', () => {
	if (localStorage.getItem('rojo-mode') === 'true') {
		document.body.classList.remove('rojo');
		btnrojo.classList.remove('active');
		localStorage.setItem('rojo-mode', 'false');
	}
	if (localStorage.getItem('verde-mode') === 'true') {
		document.body.classList.remove('verde');
		btnverde.classList.remove('active');
		localStorage.setItem('verde-mode', 'false');
	}
	if (localStorage.getItem('dark-verde') === 'true') {
		document.body.classList.remove('darverde');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-verde', 'false');
	}
	if (localStorage.getItem('dark-rojo') === 'true') {
		document.body.classList.remove('darrojo');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-rojo', 'false');
	}
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	if (document.body.classList.contains('dark')) {
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

if (localStorage.getItem('dark-mode') === 'true') {
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}

// Dark Rojo

const btnobsro = document.querySelector('#darrojo');


btnobsro.addEventListener('click', () => {
	if (localStorage.getItem('dark-mode') === 'true') {
		document.body.classList.remove('dark');
		btnobsro.classList.remove('active');
		localStorage.setItem('dark-mode', 'false');
	}
	if (localStorage.getItem('rojo-mode') === 'true') {
		document.body.classList.remove('rojo');
		btnrojo.classList.remove('active');
		localStorage.setItem('rojo-mode', 'false');
	}
	if (localStorage.getItem('verde-mode') === 'true') {
		document.body.classList.remove('verde');
		btnverde.classList.remove('active');
		localStorage.setItem('verde-mode', 'false');
	}
	if (localStorage.getItem('dark-verde') === 'true') {
		document.body.classList.remove('darverde');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-verde', 'false');
	}
	document.body.classList.toggle('darrojo');
	btnobsro.classList.toggle('active');

	if (document.body.classList.contains('darrojo')) {
		localStorage.setItem('dark-rojo', 'true');
	} else {
		localStorage.setItem('dark-rojo', 'false');
	}
});

if (localStorage.getItem('dark-rojo') === 'true') {
	document.body.classList.add('darrojo');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('darrojo');
	btnSwitch.classList.remove('active');
}

// Dark Verde

const btnobsve = document.querySelector('#darverde');


btnobsve.addEventListener('click', () => {
	if (localStorage.getItem('dark-mode') === 'true') {
		document.body.classList.remove('dark');
		btnobsve.classList.remove('active');
		localStorage.setItem('dark-mode', 'false');
	}
	if (localStorage.getItem('rojo-mode') === 'true') {
		document.body.classList.remove('rojo');
		btnrojo.classList.remove('active');
		localStorage.setItem('rojo-mode', 'false');
	}
	if (localStorage.getItem('verde-mode') === 'true') {
		document.body.classList.remove('verde');
		btnverde.classList.remove('active');
		localStorage.setItem('verde-mode', 'false');
	}
	if (localStorage.getItem('dark-rojo') === 'true') {
		document.body.classList.remove('darrojo');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-rojo', 'false');
	}
	document.body.classList.toggle('darverde');
	btnobsve.classList.toggle('active');

	if (document.body.classList.contains('darverde')) {
		localStorage.setItem('dark-verde', 'true');
	} else {
		localStorage.setItem('dark-verde', 'false');
	}
});

if (localStorage.getItem('dark-verde') === 'true') {
	document.body.classList.add('darverde');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('darverde');
	btnSwitch.classList.remove('active');
}

/* Azul */

const btnazul = document.querySelector('#azul');


btnazul.addEventListener('click', () => {
	if (localStorage.getItem('dark-mode') === 'true') {
		document.body.classList.remove('dark');
		btnSwitch.classList.remove('active');
		localStorage.setItem('dark-mode', 'false');
	}
	if (localStorage.getItem('rojo-mode') === 'true') {
		document.body.classList.remove('rojo');
		btnrojo.classList.remove('active');
		localStorage.setItem('rojo-mode', 'false');
	}
	if (localStorage.getItem('verde-mode') === 'true') {
		document.body.classList.remove('verde');
		btnverde.classList.remove('active');
		localStorage.setItem('verde-mode', 'false');
	}
	if (localStorage.getItem('dark-verde') === 'true') {
		document.body.classList.remove('darverde');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-verde', 'false');
	}
	if (localStorage.getItem('dark-rojo') === 'true') {
		document.body.classList.remove('darrojo');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-rojo', 'false');
	}
});

if (localStorage.getItem('azul-mode') === 'true') {
	document.body.classList.add('azul');
	btnazul.classList.add('active');
} else {
	document.body.classList.remove('azul');
	btnazul.classList.remove('active');
}

/* Rojo */

const btnrojo = document.querySelector('#rojo');


btnrojo.addEventListener('click', () => {
	if (localStorage.getItem('dark-mode') === 'true') {
		document.body.classList.remove('dark');
		btnSwitch.classList.remove('active');
		localStorage.setItem('dark-mode', 'false');
	}
	if (localStorage.getItem('verde-mode') === 'true') {
		document.body.classList.remove('verde');
		btnverde.classList.remove('active');
		localStorage.setItem('verde-mode', 'false');
	}
	if (localStorage.getItem('dark-verde') === 'true') {
		document.body.classList.remove('darverde');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-verde', 'false');
	}
	if (localStorage.getItem('dark-rojo') === 'true') {
		document.body.classList.remove('darrojo');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-rojo', 'false');
	}
	document.body.classList.toggle('rojo');
	btnrojo.classList.toggle('active');

	if (document.body.classList.contains('rojo')) {
		localStorage.setItem('rojo-mode', 'true');
	} else {
		localStorage.setItem('rojo-mode', 'false');
	}
});

if (localStorage.getItem('rojo-mode') === 'true') {
	document.body.classList.add('rojo');
	btnrojo.classList.add('active');
} else {
	document.body.classList.remove('rojo');
	btnrojo.classList.remove('active');
}

/* Verde */

const btnverde = document.querySelector('#verde');


btnverde.addEventListener('click', () => {
	if (localStorage.getItem('dark-mode') === 'true') {
		document.body.classList.remove('dark');
		btnSwitch.classList.remove('active');
		localStorage.setItem('dark-mode', 'false');
	}
	if (localStorage.getItem('rojo-mode') === 'true') {
		document.body.classList.remove('rojo');
		btnrojo.classList.remove('active');
		localStorage.setItem('rojo-mode', 'false');
	}
	if (localStorage.getItem('dark-verde') === 'true') {
		document.body.classList.remove('darverde');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-verde', 'false');
	}
	if (localStorage.getItem('dark-rojo') === 'true') {
		document.body.classList.remove('darrojo');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-rojo', 'false');
	}
	document.body.classList.toggle('verde');
	btnverde.classList.toggle('active');

	if (document.body.classList.contains('verde')) {
		localStorage.setItem('verde-mode', 'true');
	} else {
		localStorage.setItem('verde-mode', 'false');
	}
});

if (localStorage.getItem('verde-mode') === 'true') {
	document.body.classList.add('verde');
	btnverde.classList.add('active');
} else {
	document.body.classList.remove('verde');
	btnverde.classList.remove('active');
}


/* morado */

const btnmorado = document.querySelector('#morado');


btnmorado.addEventListener('click', () => {
	if (localStorage.getItem('dark-mode') === 'true') {
		document.body.classList.remove('dark');
		btnSwitch.classList.remove('active');
		localStorage.setItem('dark-mode', 'false');
	}
	if (localStorage.getItem('rojo-mode') === 'true') {
		document.body.classList.remove('rojo');
		btnrojo.classList.remove('active');
		localStorage.setItem('rojo-mode', 'false');
	}
	if (localStorage.getItem('dark-verde') === 'true') {
		document.body.classList.remove('darverde');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-verde', 'false');
	}
	if (localStorage.getItem('dark-rojo') === 'true') {
		document.body.classList.remove('darrojo');
		btnverde.classList.remove('active');
		localStorage.setItem('dark-rojo', 'false');
	}
	if (localStorage.getItem('verde') === 'true') {
		document.body.classList.remove('verde');
		btnverde.classList.remove('active');
		localStorage.setItem('verde', 'false');
	}
	document.body.classList.toggle('morado');
	btnverde.classList.toggle('active');

	if (document.body.classList.contains('morado')) {
		localStorage.setItem('morado-mode', 'true');
	} else {
		localStorage.setItem('morado-mode', 'false');
	}
});

if (localStorage.getItem('morado-mode') === 'true') {
	document.body.classList.add('morado');
	btnverde.classList.add('active');
} else {
	document.body.classList.remove('morado');
	btnverde.classList.remove('active');
}
