# 🩺 **Menstrual Cycle Calculator**

Welcome to your personal menstrual cycle calculator! Enter your details, and let this tool help you track your menstrual cycle with ease. It will predict the next period, ovulation day, and your fertile window.

---

## 📝 **Enter Details**

### **Date of Last Period:**
📅 (Select a date)

### **Average Cycle Length (in days):**
🔢 (Enter a number between **21** and **35**)

---

### [**Calculate**](#) *(Button to trigger the calculation)*

---

## 📊 **Results**

After entering the details and clicking the "Calculate" button, your results will be displayed here:

- **Next Period**  
- **Ovulation Day**  
- **Fertile Window (5 days before ovulation)**

---

## 🔧 **JavaScript Functionality**

```javascript
function calculateCycle() {
    const lastPeriod = new Date(document.getElementById('lastPeriod').value);
    const cycleLength = parseInt(document.getElementById('cycleLength').value);

    if (!lastPeriod || !cycleLength) {
        alert('Please fill out all fields.');
        return;
    }

    // Calculate the next period
    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(lastPeriod.getDate() + cycleLength);

    // Calculate ovulation day (usually around day 14 for a 28-day cycle)
    const ovulation = new Date(lastPeriod);
    ovulation.setDate(lastPeriod.getDate() + (cycleLength - 14));

    // Fertile window (5 days before ovulation and the day of ovulation)
    const fertileStart = new Date(ovulation);
    fertileStart.setDate(ovulation.getDate() - 5);
    const fertileEnd = new Date(ovulation);

    // Date formatting in French
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    // Display the results
    document.getElementById('result').innerHTML = `
        <h3>Results</h3>
        <p><strong>Next Period:</strong> ${nextPeriod.toLocaleDateString('fr-FR', options)}</p>
        <p><strong>Ovulation Day:</strong> ${ovulation.toLocaleDateString('fr-FR', options)}</p>
        <p><strong>Fertile Window:</strong> from ${fertileStart.toLocaleDateString('fr-FR', options)} to ${fertileEnd.toLocaleDateString('fr-FR', options)}</p>
    `;
}
