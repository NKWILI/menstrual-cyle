function calculateCycle() {
    const lastPeriod = new Date(document.getElementById('lastPeriod').value);
    const cycleLength = parseInt(document.getElementById('cycleLength').value);

    if (!lastPeriod || !cycleLength) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Calcul de la prochaine période
    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(lastPeriod.getDate() + cycleLength);

    // Calcul de l'ovulation (généralement autour du jour 14 pour un cycle de 28 jours)
    const ovulation = new Date(lastPeriod);
    ovulation.setDate(lastPeriod.getDate() + (cycleLength - 14));

    // Fenêtre fertile (5 jours avant l'ovulation et le jour de l'ovulation)
    const fertileStart = new Date(ovulation);
    fertileStart.setDate(ovulation.getDate() - 5);
    const fertileEnd = new Date(ovulation);

    // Format de date en français
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // Affichage des résultats
    document.getElementById('result').innerHTML = `
        <h3>Résultats</h3>
        <p><strong>Prochaine période :</strong> ${nextPeriod.toLocaleDateString('fr-FR', options)}</p>
        <p><strong>Jour d'ovulation :</strong> ${ovulation.toLocaleDateString('fr-FR', options)}</p>
        <p><strong>Fenêtre fertile :</strong> du ${fertileStart.toLocaleDateString('fr-FR', options)} au ${fertileEnd.toLocaleDateString('fr-FR', options)}</p>
    `;
}
