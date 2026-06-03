let email="Email: test@example.com";
let match=email.match(/example.com/).toString();
let include=email.includes("@")
console.log(`match domain → ${match}, includes "@" → ${include}`)