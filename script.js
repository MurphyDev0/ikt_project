document.addEventListener('DOMContentLoaded', function() {
    // A loading screen 3 másodperc után eltűnik
    setTimeout(function() {
        const loadingScreen = document.querySelector('.fullscreen-loading');
        loadingScreen.style.display = 'none';
    }, 3500);
});

// Prímszám ellenőrzése
function checkPrime() {
    const input = document.getElementById('primeInput').value;
    const result = document.getElementById('primeResult');
    
    if (input === '') {
        result.textContent = 'Kérlek írj be egy számot!';
        return;
    }

    const num = parseInt(input);
    if (isNaN(num)) {
        result.textContent = 'Kérlek érvényes számot írj be!';
        return;
    }

    const isPrime = isPrimeNumber(num);
    result.textContent = isPrime ? 
        `${num} egy prímszám!` : 
        `${num} nem prímszám.`;
    
    result.style.color = isPrime ? '#198754' : '#dc3545';
}

// Bináris konverter
function convertToBinary() {
    const input = document.getElementById('binaryInput').value;
    const result = document.getElementById('binaryResult');
    
    if (input === '') {
        result.textContent = 'Kérlek írj be egy számot!';
        return;
    }

    const num = parseInt(input);
    if (isNaN(num)) {
        result.textContent = 'Kérlek érvényes számot írj be!';
        return;
    }

    const binary = num.toString(2);
    result.textContent = `${num} bináris formában: ${binary}`;
    result.style.color = '#0d6efd';
}

// Mirp szám ellenőrzése
function checkMirp() {
    const input = document.getElementById('mirpInput').value;
    const result = document.getElementById('mirpResult');
    
    if (input === '') {
        result.textContent = 'Kérlek írj be egy számot!';
        return;
    }

    const num = parseInt(input);
    if (isNaN(num)) {
        result.textContent = 'Kérlek érvényes számot írj be!';
        return;
    }

    const reversed = parseInt(num.toString().split('').reverse().join(''));
    const isMirp = isPrimeNumber(num) && isPrimeNumber(reversed);
    
    result.textContent = isMirp ? 
        `${num} egy mirp szám! (${num} és ${reversed} is prímszám)` : 
        `${num} nem mirp szám.`;
    
    result.style.color = isMirp ? '#198754' : '#dc3545';
}

// 73-as szorzótábla
function multiplyBy73() {
    const input = document.getElementById('multiplyInput').value;
    const result = document.getElementById('multiplyResult');
    
    if (input === '') {
        result.textContent = 'Kérlek írj be egy számot!';
        return;
    }

    const num = parseInt(input);
    if (isNaN(num)) {
        result.textContent = 'Kérlek érvényes számot írj be!';
        return;
    }

    const product = num * 73;
    result.textContent = `${num} × 73 = ${product}`;
    result.style.color = '#0d6efd';
}

// Segédfüggvény a prímszám ellenőrzéséhez
function isPrimeNumber(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Palindrom teszt
function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value;
    const result = document.getElementById('palindromeResult');
    
    if (input === '') {
        result.textContent = 'Kérlek írj be egy számot!';
        return;
    }

    const num = input.toString();
    const reversed = num.split('').reverse().join('');
    const isPalindrome = num === reversed;
    
    result.textContent = isPalindrome ? 
        `${num} egy palindrom szám!` : 
        `${num} nem palindrom szám.`;
    
    result.style.color = isPalindrome ? '#198754' : '#dc3545';
}

// Osztók keresése
function findDivisors() {
    const input = document.getElementById('divisorsInput').value;
    const result = document.getElementById('divisorsResult');
    
    if (input === '') {
        result.textContent = 'Kérlek írj be egy számot!';
        return;
    }

    const num = parseInt(input);
    if (isNaN(num)) {
        result.textContent = 'Kérlek érvényes számot írj be!';
        return;
    }

    if (num !== 73) {
        result.textContent = 'Csak a 73-as szám osztóit tudjuk megmutatni!';
        result.style.color = '#dc3545';
        return;
    }

    result.textContent = '73 osztói: 1, 73';
    result.style.color = '#198754';
}

// Hatvány számítás
function calculatePower() {
    const input = document.getElementById('powerInput').value;
    const result = document.getElementById('powerResult');
    
    if (input === '') {
        result.textContent = 'Kérlek írj be egy kitevőt!';
        return;
    }

    const exponent = parseInt(input);
    if (isNaN(exponent)) {
        result.textContent = 'Kérlek érvényes számot írj be!';
        return;
    }

    const power = Math.pow(73, exponent);
    result.textContent = `73^${exponent} = ${power}`;
    result.style.color = '#0d6efd';
}

// Számjegyek összege
function calculateDigitSum() {
    const input = document.getElementById('digitSumInput').value;
    const result = document.getElementById('digitSumResult');
    
    if (input === '') {
        result.textContent = 'Kérlek írj be egy számot!';
        return;
    }

    const num = input.toString();
    if (num !== '73') {
        result.textContent = 'Csak a 73-as szám számjegyeinek összegét tudjuk kiszámolni!';
        result.style.color = '#dc3545';
        return;
    }

    const digitSum = 7 + 3;
    result.textContent = '73 számjegyeinek összege: 10';
    result.style.color = '#198754';
} 